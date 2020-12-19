import React, { useState, useEffect } from "react";
import "./App.css";
import { Figura } from "./components/Figura";
import { Header } from "./components/Header";
import { LetrasEquivocadas } from "./components/LetrasEquivocadas";
import { Palabra } from "./components/Palabra";
import { Popup } from "./components/Popup";
import { Notificacion } from "./components/Notificacion";

import { mostrarNotificacion as show } from "./helpers/helpers";


function App() {
  const [jugable, setJugable] = useState(true);
  const [letrasCorrectas, setLetrasCorrectas] = useState([]);
  const [letrasIncorrectas, setLetrasIncorrectas] = useState([]);
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  const [palabraSeleccionada, setPalabraSeleccionada] = useState("INICIO");
  const [tipo,setTipo]= useState('INICIO');
  const [urlPoke,setUrlPoke] = useState('INICIO');

  async function fetchPokemon() {
    const url = `https://pokeapi.co/api/v2/pokemon/${150 - Math.floor(Math.random() * 149)}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    const name = (pokemon.name[0].toUpperCase() + pokemon.name.slice(1)).toLowerCase();
    const tipoPoke =  (pokemon.types[0].type.name);
    const urlP = pokemon.sprites.front_default;
    setUrlPoke(urlP);
    setTipo(tipoPoke);
    setPalabraSeleccionada(name);
    
  }
  useEffect(() => {
    fetchPokemon();
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (jugable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (palabraSeleccionada.includes(letter)) {
          if (!letrasCorrectas.includes(letter)) {
            setLetrasCorrectas((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setMostrarNotificacion);
          }
        } else {
          if (!letrasIncorrectas.includes(letter)) {
            setLetrasIncorrectas((currentLetters) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            show(setMostrarNotificacion);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [letrasCorrectas, letrasIncorrectas, jugable, palabraSeleccionada,tipo,urlPoke]);

  const jugarNuevamente = () => {
    setJugable(true);

    //Limpiar arreglos
    setLetrasCorrectas([]);
    setLetrasIncorrectas([]);
    fetchPokemon();
  };
  return (
    <>
      <Header />
      <div className="game-container">
        <Figura letrasIncorrectas={letrasIncorrectas} />
        <LetrasEquivocadas letrasIncorrectas={letrasIncorrectas} />
        <Palabra
          palabraSeleccionada={palabraSeleccionada}
          letrasCorrectas={letrasCorrectas}
          tipo={tipo}
        />
      
      </div>
      <Popup
        letrasCorrectas={letrasCorrectas}
        letrasIncorrectas={letrasIncorrectas}
        palabraSeleccionada={palabraSeleccionada}
        setJugable={setJugable}
        jugarNuevamente={jugarNuevamente}
        urlPoke={urlPoke}
      />
      <Notificacion mostrarNotificacion={mostrarNotificacion} />
    </>
  );
}

export default App;
