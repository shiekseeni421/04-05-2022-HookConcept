import { React, useRef, useState } from "react";
import {
  TodoWrapper,
  TodoListContainer,
  InputFiled,
  ButtonEl,
  SubmitBtnContainer,
} from "../../StyledComponent/TodoList.style";

function TodoListPage() {
  const [ListValue, setListValue] = useState([]);
  const inputValue = useRef(null);

  let EnterValue = () => {
    inputValue.current.focus();
  };

  let SubmitClick = () => {
    let Value = inputValue.current.value;
    if (Value === "") {
      alert("Please Enter Value");
    } else {
      ListValue.push(Value);
      setListValue(ListValue);
      inputValue.current.value = "";
      alert(`Add Tod Element: ${inputValue.current.value}`);
      console.log(ListValue);
    }
  };

  return (
    <TodoWrapper>
      <h1>useRef Example</h1>
      <TodoListContainer>
        <InputFiled placeholder="EX...." type="text" ref={inputValue} />
        <ButtonEl backGroundValue=" #661aff" onClick={EnterValue}>
          Enter Value
        </ButtonEl>
        <SubmitBtnContainer>
          <ButtonEl backGroundValue=" #0059b3" onClick={SubmitClick}>
            Submit
          </ButtonEl>
        </SubmitBtnContainer>
      </TodoListContainer>
    </TodoWrapper>
  );
}

export default TodoListPage;
