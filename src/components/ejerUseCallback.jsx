import{ useState, useCallback } from 'react';

export default function EjerUseCallback(){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
  
    const increment = useCallback(() => {
      setCount(prevCount => prevCount + step);
    }, [step]);
  
    return (
      <div>
        <h1>Contador: {count}</h1>
        <input
          type="number"
          value={step}
          onChange={e => setStep(Number(e.target.value))}
        />
        <button onClick={increment}>Incrementar</button>
      </div>
    );
  }