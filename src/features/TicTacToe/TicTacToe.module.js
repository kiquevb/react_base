const TicTacToeModule = (function () {
  const winMap = [123, 456, 789, 147, 258, 369, 357, 159];

  const checkWinner = (board) => {
    const moves = board.reduce(
      (players, v, i) => {
        if (v) players[v - 1] += i + 1;
        return players;
      },
      ["", ""]
    );
    const winningMove = winMap.find((comb) =>
      moves.some((m) =>
        comb
          .toString()
          .split("")
          .every((c) => m.includes(c))
      )
    );
    return !!winningMove;
  };

  return {
    checkWinner,
  };
})();

export default TicTacToeModule;
