import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "../shared/api/rtkApi";
import { archivedAndHiddenSlice } from "./archivedSlice/archivedAndHiddenSlice";

const reducer = combineReducers({
  [rtkApi.reducerPath]: rtkApi.reducer,
  [archivedAndHiddenSlice.name]: archivedAndHiddenSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDifaultMiddleware) =>
    getDifaultMiddleware().concat([rtkApi.middleware]),
});
