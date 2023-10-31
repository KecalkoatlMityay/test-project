import {createSelector} from "@reduxjs/toolkit";
import {selectArchivedAndHiddenState} from "./selectArchivedAndHiddenState";

export const selectHidden = createSelector(
	selectArchivedAndHiddenState, (archivedAndHiddenState) => archivedAndHiddenState.hiddenIds
);
