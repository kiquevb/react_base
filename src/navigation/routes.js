import { HomeView, TicTacToeView, PlaygroundView } from "@navigation/imports";
import { paths } from "@/navigation/navigation.exports";

// Routes and the component they render

const routes = [
  {
    path: paths.home,
    component: HomeView,
  },
  {
    path: paths.tictactoe,
    component: TicTacToeView,
  },
  {
    path: "/test",
    component: PlaygroundView,
  },
];

export default routes;
