import { useReducer } from 'react';

function reducer(state, action) {
    if (action.type === 'incremented_age') {
      return {
        age: state.age + 1
      };
    }
    throw Error('Unknown action.');
  }

export default function EjerUseReducer(){
    const [state, dispatch] = useReducer(reducer, { age: 42 });

    return (
      <>
        <button onClick={() => {
          dispatch({ type: 'incremented_age' })
        }}>
          Incrementar edad
        </button>
        <p>¡Hola! Tú tienes {state.age}.</p>
      </>
    );
  }