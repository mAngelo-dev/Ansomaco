import {useAuthContext} from "@asgardeo/auth-react";

export default function Dashboard() {
  const {state} = useAuthContext();

  function getSaudation() {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
      return 'Bom dia';
    }  else if (hour >= 12 && hour < 18) {
      return 'Boa tarde';
    } else {
      return 'Boa noite';
    }
  }

  return (
    <>
      <h1>{getSaudation() + ',\n' + state?.displayName.split(' ')[0]}</h1>
    </>
  )
}