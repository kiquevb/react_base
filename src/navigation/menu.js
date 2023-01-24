import Icons from "@/infrastructure/Icons";
import paths from "./paths";

// Elements of the navigation menu

const menu = [
  {
    label: paths.names.home,
    path: paths.home,
    icon: Icons.icon_home,
  },
  {
    label: paths.names.tictactoe,
    path: paths.tictactoe,
    icon: Icons.icon_game,
  },
];

export default menu;
