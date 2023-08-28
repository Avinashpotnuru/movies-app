//redux imports

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import rootReducer from "./slice/rootReducer";

import restApi from "./api/restApis";

const middleware = [restApi.middleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
setupListeners(store.dispatch);

export { store };
