// Imports all the view components for its usage in navigation/routes.js

import { lazy } from "react";

export const Home = lazy(() => import("@features/Home/views/Home.view"));

export const Logout = lazy(() => import("@features/Auth/views/Logout.view"));

export const Playground = lazy(() =>
  import("@features/Playground/views/Playground.view")
);
