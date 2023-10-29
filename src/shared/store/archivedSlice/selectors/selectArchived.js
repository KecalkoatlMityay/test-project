import { archivedSlice } from "../archivedSlice";

export const selectArchived = (state) => {
  return state[archivedSlice.name].archivedIds;
};
