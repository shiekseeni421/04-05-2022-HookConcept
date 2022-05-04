import styled from "styled-components";

export const TodoWrapper = styled.div`
  box-sizing: border-box;
  background-color: #b800e6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TodoListContainer = styled.div`
  background-color: wheat;
  padding: 20px;
  border-radius: 10px;
`;
export const InputFiled = styled.input`
  width: 150px;
  height: 35px;
`;

export const ButtonEl = styled.button`
  width: 100px;
  padding: 5px;
  color: wheat;
  border: 0px;
  border-radius: 10px;
  background-color: ${(props) => props.backGroundValue};
  margin-left: 5px;
  width: 100px;
  height: 35px;
`;

export const SubmitBtnContainer = styled.div`
  padding-top: 25px;
  text-align: center;
`;
