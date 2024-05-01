import { useEffect, useState } from "react";

export default function EjerUseEffect(){
    const [seconds, setSeconds] = useState(0);
    const [msj,setMsj] = useState();
    useEffect(() => {
      // Función para actualizar el temporizador cada segundo
      const intervalId = setInterval(() => {
        // Incrementamos el estado de los segundos transcurridos
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
  
      // Función de limpieza para detener el temporizador cuando el componente se desmonta
      return () => clearInterval(intervalId);
    }, []); // El array vacío indica que este efecto solo se ejecuta una vez, cuando el componente se monta
  
    useEffect(()=>{
        if(seconds %2===0){
            setMsj("Par")
        }else{
            setMsj("Impar")
        }

    },[seconds])
    return (
      <div>
        <h1>Timer</h1>
        <p>Seconds: {seconds}</p>
        <p>El numero {seconds} es {msj}</p>
      </div>
    );
}