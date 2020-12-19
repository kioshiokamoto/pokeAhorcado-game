import React, {useEffect} from "react";
import * as S from "./styles";
import {verificarVictoria} from '../../helpers/helpers';
export const Popup = ({
  letrasCorrectas,
  letrasIncorrectas,
  palabraSeleccionada,
  setJugable,
  jugarNuevamente
}) => {
  let mensajeFinal = '';
  let RevelarPalabraMensajeFinal = '';
  let jugable = true;

  if( verificarVictoria(letrasCorrectas,letrasIncorrectas,palabraSeleccionada)=== 'gano'){
    mensajeFinal = `Felicitaciones! Ganaste! 🎊`
    jugable = false;
  }else if(verificarVictoria(letrasCorrectas,letrasIncorrectas,palabraSeleccionada) ==='perdio'){
    mensajeFinal = `Pedirste 🐢`
    RevelarPalabraMensajeFinal = `La palabra era: ${palabraSeleccionada}`
    jugable = false;
  }

  
  useEffect(() => {
    setJugable(jugable);
  })
  return (
    <>
      <div className="popup-container" style={mensajeFinal !== '' ? {display:'flex'} : {}}>
        <div className="popup">
          <h2>{mensajeFinal}</h2>
          <h3>{RevelarPalabraMensajeFinal}</h3>
          <button onClick={jugarNuevamente}>Play Again</button>
        </div>
      </div>
    </>
  );
};
