import { Provider } from "react-redux";

import Store from "@infra/Store";

const ReduxWrapper = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};

export default ReduxWrapper;
