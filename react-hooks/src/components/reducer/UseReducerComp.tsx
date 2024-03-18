import React, { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}
interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum reached" : null,
      };
    }
    default:
      return state;
  }
}

export default function UseReducerComp() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div className="container mx-auto my-5 p-3 border-y-2">
      <h2 className="font-semibold">useReducer</h2>
      <p className="text-xs mb-3">
        useReducer is a hook in React that is used for managing complex state
        logic in functional components. It is an alternative to useState for
        managing state, especially when state transitions are more complex and
        involve multiple sub-values or when the next state depends on the
        previous state.
      </p>
      <div>Count: {state.count}</div>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <button
        className="bg-red-400 rounded-md p-2 mr-2 text-white"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="mb-2 bg-blue-400 rounded-md p-2 text-white"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
    </div>
  );
}
