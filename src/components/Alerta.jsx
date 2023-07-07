import React, { useEffect } from 'react'
import { useClima } from '../context/ClimaContext';

export const Alerta = ( ) => {

  const { setMostrar } = useClima();
    
    useEffect(() => {
      const mensajeAlerta = document.body.getElementsByClassName("alerta");
      const verEstado = setInterval(() => {
        setMostrar((current) => {
          if(current){
            mensajeAlerta[0].classList.add("mostrar");

              setTimeout(() => {
                  mensajeAlerta[0].classList.remove("mostrar");
              }, 5000);
          }
        })
      }, 1000);
    })

  return (
    <div className='alerta'>No se ha encontrado un país con el nombre ingresado...</div>
  )
}
