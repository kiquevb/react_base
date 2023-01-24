import React from "react";

import { TicTacToeBoard } from "@/features/TicTacToe/TicTacToe.exports";
import { Button } from "@/components/components.exports";
import Alert from "@/infrastructure/Alerts";

const TicTacToeView = () => {
  return (
    <>
      <TicTacToeBoard />
      <Button onClick={() => Alert.success("holi")}>Click me</Button>
    </>
  );
};

export default TicTacToeView;
