import {createSelector} from "@reduxjs/toolkit";
import {selectArchivedAndHiddenState} from "./selectArchivedAndHiddenState";

export const selectArchived = createSelector(
    selectArchivedAndHiddenState, (archivedAndHiddenState) => archivedAndHiddenState.archivedIds
);
