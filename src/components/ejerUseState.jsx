import { useState } from "react"

export default function EjerUseState(){
    const [selected, setSelected] = useState(false)
    const cambiarEstado = () => {
        setSelected(!selected)
    }
    return(
        <div>
            <h1>Ejercicio useState</h1>
            {
                selected? <h2>Hola</h2> : <h2>Adios</h2>
            }
            <button onClick={cambiarEstado}>Cambiar Estado</button>
        </div>
    )
}