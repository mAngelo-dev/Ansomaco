import { useAuthContext } from "@asgardeo/auth-react";
import { useState, useEffect } from "react";

export default function Profile() {
  const { state, getBasicUserInfo, getDecodedIDToken, getIDToken, getAccessToken } = useAuthContext();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      try {
        const basicUserInfo = await getBasicUserInfo();
        const decodedIdToken = await getDecodedIDToken();
        const idToken = await getIDToken();
        const accessToken = await getAccessToken();

        const payload = {
          basicUserInfo,
          decodedIdToken,
          idToken,
          accessToken,
        };

        console.log("User Info:", payload);
        return payload;
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }

    fetchUserInfo().then(r => setUserInfo(r));
  }, [getAccessToken, getBasicUserInfo, getDecodedIDToken, getIDToken]);

  return (
    <>
      <h1>Profile</h1>
      <p>Username: {state.username}</p>
      <p>Displayname: {state.displayName}</p>
      <p>Email: {userInfo?.basicUserInfo?.email}</p>
    </>
  );
}