// useReducer

import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    // ??
  }
  throw Error('Unknown action: ' + action.type);
}

const init = // ??

export default function Form() {

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}







// useRef

import { useRef } from 'react';

export default function Counter() {

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}



