import { configureStore } from "@reduxjs/toolkit";

import layout_reducer from "@layout/layout.store";

const Store = configureStore({
  reducer: { layout: layout_reducer },
});

export default Store;
