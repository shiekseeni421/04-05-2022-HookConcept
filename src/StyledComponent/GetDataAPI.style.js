import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: #b30000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: White;
`;

export const ButtonEl = styled.button`
  background-color: ${(Prop) => Prop.backGroundValue};
  width: 100px;
  border-radius: 10px;
  border: 0px;
  color: white;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: blue;
`;
