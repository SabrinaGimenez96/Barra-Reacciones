import React from 'react';
import '../estilos/Reacciones.css';

function Reacciones(props) {
  return (
    <div className='contenedor-reacciones'>
      <div>
        <img
          className='emoji-reaccion'
          src={require(`../imagenes/${props.imagen}.png`)}
          alt={props.alt} />
        <p className='nombre-reaccion'>
          <strong> {props.nombre} </strong>
        </p>
      </div>
    </div>
  );
}

export default Reacciones;
