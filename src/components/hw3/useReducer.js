/* Написать форму, где состояние формы хранится в reducer-е
Юзер может вводить свое имя и возраст.
*/

import { useReducer } from 'react';

function formReducer(state, action) {
  switch (action.type) {
    case 'increment_age': {
      return {}; // something
    }
    // case: something
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'John', age: 69 };

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <input
        value={state.name}
      />
      <button onClick={() => console.log("on click do something")}>
        Increment age
      </button>
      <p>Hello, {state.name}. You are {state.age}.</p>
    </>
  );
}
