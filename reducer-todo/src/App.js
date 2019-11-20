//import useReducer
import React, { useReducer, useEffect } from "react";
//import our reducer and the initial state
import { initialState, reducer } from "./reducers/Reducer.js";
import "./App.css";

// Components
import Header from "./components/Header.js";
import TodoMap from "./components/TodoMap.js";
import Form from "./components/Form.js";

function App() {
  //useReducer hook- al alternative to useState. 
  // Takes a reducer function and the value for initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //console.log the state
    console.log(state);
  }, [state]);

  return (
    <div className="App">
      <Header />
      <TodoMap state={state} dispatch={dispatch} />
      <Form state={state} dispatch={dispatch} />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "CLEAR" });
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;
