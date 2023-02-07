import { Home, Logout, Playground } from "@navigation/imports";

import { paths } from "@navigation/_exports";

// Routes and the component they render

const routes = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.logout,
    component: Logout,
  },
  {
    path: paths.playground,
    component: Playground,
  },
];

export default routes;
