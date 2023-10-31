import { archivedAndHiddenSlice } from "../archivedAndHiddenSlice";

export const selectArchivedAndHiddenState = (state) => {
	return state[archivedAndHiddenSlice.name];
};
