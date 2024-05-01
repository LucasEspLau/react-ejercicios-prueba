import React, { useState, useMemo } from 'react';

export default function EjerUseMemo(){
    const [number, setNumber] = useState(0);

    const factorial = useMemo(() => {
      const calculateFactorial = n => {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
          result *= i;
        }
        return result;
      };
  
      return calculateFactorial(number);
    }, [number]);
  
    return (
      <div>
        <h1>Calculadora de Factorial</h1>
        <label>
          Ingrese un número:
          <input
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
          />
        </label>
        <p>
          El factorial de {number} es: {factorial}
        </p>
      </div>
    );
  }
  