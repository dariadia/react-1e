import { useReducer } from 'react'

// useReducer: manages state (similar to useState)
// works similar to Redux
// useReducer: is a function which we perform on our state

// reducer: a function that specifies how the state gets updated. MUST be pure, takes the state and action as arguments, then return the next state. 
// initialArg: from which the initial state is calculated. Can be of any type.
// init?: a func that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state = init(initialArg).
const [state, dispatch] = useReducer(reducer, initialArg, init)

// NOTE: In Strict Mode (dev), React will call your reducer and initializer TWICE in order to help you find accidental impurities. 

// 🚩 DO NOT mutate an object in state! ALWAYS return a new object

function reducer(state, action) {
  if (action.type === 'increment') {
    return {
        count: state.count + 1
    }
  } else if (action.type === 'decrement') {
    return {
        count: state.count - 1
    }
  }
  throw Error('Unknown action.')
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 42 })

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'increment' })
      }}>
        Increment
      </button>
      <button onClick={() => {
        dispatch({ type: 'decrement' })
      }}>
        Decrement
      </button>
      <p>{state.count}</p>
    </>
  )
}






const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  CHANGE_COUNT: "change-count",
}

function reducer2(count, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1
    case ACTIONS.DECREMENT:
      return count - 1
    case ACTIONS.RESET:
      return 0
    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.amount
    default:
      return count
  }
}

function Counter2() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button
        onClick={() => {
          dispatch({
            type: ACTIONS.CHANGE_COUNT,
            payload: { amount: 5 },
          })
        }}
      >
        Add 5
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</button>
    </>
  )
}




// more complex example
// https://codesandbox.io/s/v4k6mq?file=%2FApp.js&utm_medium=sandpack
