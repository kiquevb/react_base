import React from "react";

import { Translator } from "@infra/_exports";

const TicTacToeWinner = ({ winner }) => {
  const { t } = Translator();

  return !winner ? null : <div>{`${t("tictactoe.winner")} ${winner}`}</div>;
};

export default TicTacToeWinner;
