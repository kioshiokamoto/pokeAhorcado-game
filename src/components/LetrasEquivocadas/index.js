import React from "react";
import * as S from "./styles";

export const LetrasEquivocadas = ({letrasIncorrectas}) => {
  return (
    <>
      <div className="wrong-letters-container">
        <div>
          {letrasIncorrectas.length > 0 && <p>Wrong</p>}
          {letrasIncorrectas
            .map((letra, i) => <span key={i}>{letra}</span>)
            .reduce((anterior,actual)=> anterior=== null? [actual] : [anterior, ', ', actual],null)  
          }
        </div>
      </div>
    </>
  );
};
