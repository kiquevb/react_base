import { Icons } from "@infra/_exports";
import paths from "./paths";

// Elements of the navigation menu

const menu = [
  {
    label: paths.names.home,
    path: paths.home,
    icon: Icons.icon_home,
  },
  {
    label: paths.names.playground,
    path: paths.playground,
    icon: Icons.icon_game,
  },
];

export default menu;
