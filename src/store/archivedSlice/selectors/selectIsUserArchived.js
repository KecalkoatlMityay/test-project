import { createSelector } from "@reduxjs/toolkit";
import { selectArchived } from "./selectArchived";

export const selectIsUserArchived = (id) => {
  return createSelector(selectArchived, (archivedIds) => {
    return archivedIds.includes(+id);
  });
};
