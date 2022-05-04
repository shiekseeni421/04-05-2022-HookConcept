import React, { useContext } from "react";
import {
  LoginWrapper,
  LoginFieldContainer,
  InputFiled,
  ButtonEl,
} from "../../StyledComponent/Login.style";
import { LoginContext } from "../../Context/LoginContext";

function LoginPage() {
  const { setUsername, setToggleState, toggle } = useContext(LoginContext);

  function setName(e) {
    setUsername(e.target.value);
  }
  function Submit() {
    setToggleState(!toggle);
  }
  return (
    <LoginWrapper>
      <LoginFieldContainer>
        <InputFiled placeholder="Enter Name" type="text" onChange={setName} />
        <br />
        <InputFiled placeholder="Enter Password" type="password" />
        <br />
        <ButtonEl onClick={Submit}>Submit</ButtonEl>
      </LoginFieldContainer>
    </LoginWrapper>
  );
}

export default LoginPage;
