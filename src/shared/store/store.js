import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "../api/rtkApi";
import { archivedSlice } from "./archivedSlice/archivedSlice";

const reducer = combineReducers({
  [rtkApi.reducerPath]: rtkApi.reducer,
  [archivedSlice.name]: archivedSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDifaultMiddleware) =>
    getDifaultMiddleware().concat([rtkApi.middleware]),
});
