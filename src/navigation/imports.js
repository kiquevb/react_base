// Imports all the view components for its usage in navigation/routes.js

import { lazy } from "react";

export const HomeView = lazy(() => import("@features/Home/views/Home.view"));

export const TicTacToeView = lazy(() =>
  import("@features/TicTacToe/views/TicTacToe.view")
);
