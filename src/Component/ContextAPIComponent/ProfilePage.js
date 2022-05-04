import { React, useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

import { ProfileWrapper } from "../../StyledComponent/Profile.style";

function ProfilePage() {
  const { userName } = useContext(LoginContext);
  return (
    <ProfileWrapper>
      <h1>useContext</h1>
      <h1>Profile</h1>
      <p>Name:{userName}</p>
    </ProfileWrapper>
  );
}

export default ProfilePage;
