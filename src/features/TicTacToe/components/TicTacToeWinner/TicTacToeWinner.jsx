import translator from "@infra/Translator";
import React from "react";

const TicTacToeWinner = ({ winner }) => {
  const { t } = translator();

  return !winner ? null : <div>{`${t("tictactoe.winner")} ${winner}`}</div>;
};

export default TicTacToeWinner;
