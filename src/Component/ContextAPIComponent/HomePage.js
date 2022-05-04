import { React, useState } from "react";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import { LoginContext } from "../../Context/LoginContext";

function HomePage() {
  const [toggle, setToggleState] = useState(false);
  const [userName, setUsername] = useState("");
  return (
    <div>
      <LoginContext.Provider
        value={{ userName, setUsername, toggle, setToggleState }}
      >
        {toggle ? <ProfilePage /> : <LoginPage />}
      </LoginContext.Provider>
    </div>
  );
}

export default HomePage;
