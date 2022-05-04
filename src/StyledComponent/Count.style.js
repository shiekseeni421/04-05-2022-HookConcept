import styled from "styled-components";

export const CounterWrapper = styled.div`
  box-sizing: border-box;
  background-color: #ff0066;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CounterContainer = styled.div`
  background-color: wheat;
  padding: 20px;
  border-radius: 10px;
`;

export const ButtonEl = styled.button`
  background-color: ${(Prop) => Prop.backGroundValue};
  width: 100px;
  border-radius: 10px;
  border: 0px;
  color: white;
  padding: 10px;
  cursor: pointer;
  margin-left: 5px;
`;

export const CounterValue = styled.h3`
  text-align: center;
`;
