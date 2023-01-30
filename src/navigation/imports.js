// Imports all the view components for its usage in navigation/routes.js

import { lazy } from "react";

export const HomeView = lazy(() => import("@features/Home/views/Home.view"));

export const LogoutView = lazy(() =>
  import("@features/Auth/views/Logout.view")
);

export const TicTacToeView = lazy(() =>
  import("@features/TicTacToe/views/TicTacToe.view")
);

export const PlaygroundView = lazy(() =>
  import("@features/Playground/views/Playground.view")
);
