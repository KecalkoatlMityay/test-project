import {createSelector} from "@reduxjs/toolkit";
import {selectHidden} from "./selectHidden";

export const selectIsUserHidden = (id) => {
	return createSelector(selectHidden, (hiddenIds) => {
		return hiddenIds.includes(+id);
	});
}
