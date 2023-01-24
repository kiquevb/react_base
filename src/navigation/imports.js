import { lazy } from "react";

export const HomeView = lazy(() => import("@features/Home/views/Home.view"));

export const TicTacToeView = lazy(() =>
  import("@features/TicTacToe/views/TicTacToe.view")
);
