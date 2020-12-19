import React from "react";
export const Palabra = ({ palabraSeleccionada, letrasCorrectas,tipo='fuego' }) => {
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };
  
  return (
    <>
      <div className="word">
        {palabraSeleccionada.split("").map((letra, i) => {
            return (
                <span className="letter" key={i}>
                    {letrasCorrectas.includes(letra) ? letra : ""}
                </span>
            );
          })}
      </div>
      <div className='tipo'>
          <p>Tipo: <span style={{backgroundColor:colors[tipo]}}>{tipo}</span></p>
      </div>
    </>
  );
};
