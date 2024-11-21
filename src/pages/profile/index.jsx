import {useAuthContext} from "@asgardeo/auth-react";
import {useEffect} from "react";

export default function Profile() {
  const { state, getBasicUserInfo, getDecodedIDToken, getIDToken, getAccessToken } = useAuthContext();

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
          state
        };

        console.log("User Info:", payload);
        return payload;
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    }

    fetchUserInfo().then(r => console.log(r));
  }, [getAccessToken, getBasicUserInfo, getDecodedIDToken, getIDToken, state]);
  
  return (
    <>
      <h1>Profile</h1>
      {state.isAuthenticated ? (
          <>
            <p>Username: {state?.username}</p>
            <p>Name: {state?.displayName}</p>
            <p>Email: {state?.email}</p>
          </>
      ) : null}
    </>
  );
}