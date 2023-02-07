// Imports all the view components for its usage in navigation/routes.js

import { lazy } from "react";

export const Home = lazy(() => import("@resources/Home/views/Home.view"));

export const Logout = lazy(() => import("@resources/Auth/views/Logout.view"));

export const Playground = lazy(() =>
  import("@resources/Playground/views/Playground.view")
);
