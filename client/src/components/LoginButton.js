import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const {isLoading} = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
  !isAuthenticated && (
  <button className='button1' onClick={() => loginWithRedirect()}>Log In</button>
  )
)
};

export default LoginButton;