import React from "react";

import {
  TicTacToeTile,
  TicTacToeWinner,
} from "@/features/TicTacToe/TicTacToe.exports";

import TicTacToeBoardLogic from "./TicTacToeBoard.logic";

const TicTacToeBoard = () => {
  const { winner, gameState, onTileClick } = TicTacToeBoardLogic();

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
