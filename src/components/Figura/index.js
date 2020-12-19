import React from "react";
import * as S from "./styles";

export const Figura = ({letrasIncorrectas}) => {
  const errores = letrasIncorrectas.length;
  return (
    <>
      <svg height="250" width="200" className="figure-container">
        {/* <!-- Cuerda --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* <!-- Cabeza --> */}
        {errores > 0 && <circle cx="140" cy="70" r="20"/>}
        {/* <!-- Cuerpo --> */}
        {errores > 1 &&<line x1="140" y1="90" x2="140" y2="150"/>}
        {/* <!-- Brazos --> */}
        {errores > 2 &&<line x1="140" y1="120" x2="120" y2="100"/>}
        {errores > 3 &&<line x1="140" y1="120" x2="160" y2="100"/>}
        {/* <!-- Piernas --> */}
        {errores > 4 &&<line x1="140" y1="150" x2="120" y2="180"/>}
        {errores > 5 &&<line x1="140" y1="150" x2="160" y2="180"/>}
      </svg>
    </>
  );
};
