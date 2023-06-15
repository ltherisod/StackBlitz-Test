import React from 'react';
import './style.css';
import cat from './img/neko2.png'
export default function App() {
  return (
    <div>
      <h1>Imagenes en react!</h1>
        <p>Imagen desde SRC: la importamos</p>
        <img src={cat} alt='catsrc'/>
        <p>Imagen desde PUBLIC : ponemos la direccion como string, no se menciona la carpeta public</p>
        <img src='../img/caterror.png' alt='catpublic'/>
    </div>
  );
}
