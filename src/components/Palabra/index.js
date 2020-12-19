import React from "react";
import * as S from "./styles";
export const Palabra = ({ palabraSeleccionada, letrasCorrectas }) => {
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
    </>
  );
};
