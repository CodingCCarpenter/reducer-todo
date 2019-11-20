import React from "react";
import styled from "styled-components";

const Todo = ({ item, id, completed, dispatch }) => (
  <div>
      {/* apply 'COMPLETE?' case at onClick*/}
    <H2
      onClick={() => dispatch({ type: "COMPLETE?", payload: id })}
      completed={completed}
    >
      {item}
    </H2>
  </div>
);

//Change color and text-decoration of items based on weather completed is true or false
const H2 = styled.h2`
  color: ${(props) => (props.completed ? "#d1d1d1" : "black")};
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export default Todo;