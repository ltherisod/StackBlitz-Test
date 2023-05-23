import React, { useState, useEffect } from 'react';

function Cronometro() {
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [enEjecucion, setEnEjecucion] = useState(false);

  //El useEffect esta a la escucha del estado cuando se inicia
  useEffect(() => {
    let intervalo;
    if (enEjecucion) {
      //por cada intervalo sumo 1, cada un segundo
      intervalo = setInterval(() => {
        setTiempoTranscurrido((tiempoTranscurrido) => tiempoTranscurrido + 1);
      }, 1000);
    }
    //Los intervalos se sueleven limpiar para no acumularlos.
    //Se limpian en el return del useEffect
    return () => clearInterval(intervalo);
  }, [enEjecucion]);

  const iniciarCronometro = () => {
    setEnEjecucion(true);
  };

  const pausarCronometro = () => {
    setEnEjecucion(false);
  };

  const reiniciarCronometro = () => {
    setTiempoTranscurrido(0);
    setEnEjecucion(false);
  };

  return (
    <div>
      <h1>Cronómetro</h1>
      <p>Tiempo transcurrido: {tiempoTranscurrido} segundos</p>
      <button onClick={iniciarCronometro}>Iniciar</button>
      <button onClick={pausarCronometro}>Pausar</button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  );
}

export default Cronometro;
