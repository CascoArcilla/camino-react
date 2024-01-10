import { useState } from "react";
import { TURNOS } from "./constants.js";
import { isWinner, revisarTablero } from "./logic/board.js";

import confetti from "canvas-confetti";
import { Square } from "./components/Square.jsx";
import WinnerModal from "./components/WinnerModal.jsx";

export default function App() {
  const [board, setBoard] = useState(() => {
    const recoverBoard = window.localStorage.getItem("tablero");
    if (recoverBoard) return JSON.parse(recoverBoard);
    return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const recoverTurno = window.localStorage.getItem("turno");
    return recoverTurno ?? TURNOS.x;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    const newTurn = turn === TURNOS.x ? TURNOS.o : TURNOS.x;
    setBoard(newBoard);
    setTurn(newTurn);

    // Guardar partida
    window.localStorage.setItem("tablero", JSON.stringify(newBoard));
    window.localStorage.setItem("turno", newTurn);

    //Revisar ganador
    const newWinner = isWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (revisarTablero(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNOS.x);
    setWinner(null);

    window.localStorage.removeItem("tablero");
    window.localStorage.removeItem("turno");
  };

  return (
    <main className="board">
      <h1>El gato</h1>
      <button onClick={resetGame}>Reiniciar el juego</button>

      <section className="game">
        {board.map((item, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {item}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNOS.x}>{TURNOS.x}</Square>
        <Square isSelected={turn === TURNOS.o}>{TURNOS.o}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
