import React from "react";

export const LetrasEquivocadas = ({letrasIncorrectas}) => {
  return (
    <>
      <div className="wrong-letters-container">
        <div>
          {letrasIncorrectas.length > 0 && <p>Letras incorrectas</p>}
          {letrasIncorrectas
            .map((letra, i) => <span key={i}>{letra}</span>)
            .reduce((anterior,actual)=> anterior=== null? [actual] : [anterior, ', ', actual],null)  
          }
        </div>
      </div>
    </>
  );
};
