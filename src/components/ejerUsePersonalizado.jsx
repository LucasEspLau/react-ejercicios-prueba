import { useState } from 'react';

export default function EjerUsePersonalizado(){
    const { count, increment, decrement } = useCounter();

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };


const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    return { count, increment, decrement };
};