import { React, useReducer } from "react";
import {
  CounterWrapper,
  CounterContainer,
  ButtonEl,
  CounterValue,
} from "../../StyledComponent/Count.style";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { Count: state.Count + 1 };
    case "DECREMENT_COUNT":
      return { Count: state.Count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { Count: 0 });
  return (
    <CounterWrapper>
      <h1>useReducer Example</h1>
      <CounterContainer>
        <CounterValue>{state.Count}</CounterValue>
        <ButtonEl
          backGroundValue=" #661aff"
          onClick={() => dispatch({ type: "INCREMENT_COUNT" })}
        >
          Increment
        </ButtonEl>
        <ButtonEl
          backGroundValue=" #0059b3"
          onClick={() => dispatch({ type: "DECREMENT_COUNT" })}
        >
          Decrement
        </ButtonEl>
      </CounterContainer>
    </CounterWrapper>
  );
}
