import { useState } from "react";
import TicTacToeModule from "../../TicTacToe.module";

const TicTacToeBoardLogic = () => {
  const [gameState, setGameState] = useState(new Array(9).fill(0));
  const [playerTurn, setPlayerTurn] = useState(1);
  const [winner, setWinner] = useState(null);

  // Update game state, check if there's a winner and change player
  const onTileClick = (index) => {
    const newState = [...gameState];
    newState[index] = playerTurn;

    setGameState(newState);
    setWinner(TicTacToeModule.checkWinner(newState) ? playerTurn : null);
    setPlayerTurn(playerTurn === 1 ? 2 : 1);
  };

  return { gameState, playerTurn, winner, onTileClick };
};

export default TicTacToeBoardLogic;
