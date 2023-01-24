import React, { useState } from "react";

import {
  TicTacToeTile,
  TicTacToeWinner,
  TicTacToeModule,
} from "@/features/TicTacToe/TicTacToe.exports";

const TicTacToeBoard = () => {
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

  return (
    <div>
      <TicTacToeWinner winner={winner} />
      {[...Array(9)].map((i, key) => {
        const disabled = !!gameState[key];
        return (
          <span key={key} onClick={() => (disabled ? null : onTileClick(key))}>
            <TicTacToeTile />
          </span>
        );
      })}
    </div>
  );
};

export default TicTacToeBoard;
