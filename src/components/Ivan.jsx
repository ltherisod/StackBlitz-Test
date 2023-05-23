import React, { useState } from 'react';
export const Practica3 = () => {
  const [tiempo, setTiempo] = useState(0);
  const [stopRun, setStopRun] = useState(false);

  function funcionar() {
    setStopRun(!stopRun);
  }
  setTimeout(() => {
    if (stopRun) {
      setTiempo(tiempo + 1);
    }
  }, 10);

  function limpiar() {
    if (stopRun) {
      setStopRun(!stopRun);
    }
    setTiempo(0);
  }
  return (
    <div>
      <p>{tiempo}</p>
      <button onClick={funcionar}>{stopRun ? 'stop' : 'start'}</button>
      <button onClick={limpiar}>clear</button>
    </div>
  );
};
