import { createSlice } from "@reduxjs/toolkit";

export const archivedAndHiddenSlice = createSlice({
  name: "archivedAndHidden",
  initialState: {
    archivedIds: [],
    hiddenIds: [],
  },
  reducers: {
    toggleIsArchived: (state, action) => {
      const isArchived = state.archivedIds.includes(action.payload);
      if (isArchived) {
        state.archivedIds = state.archivedIds.filter(
          (archivedId) => archivedId !== action.payload
        );
      } else {
        state.archivedIds = [...state.archivedIds, action.payload];
      }
    },
    setIsHidden: (state, action) => {
      const isHidden = state.hiddenIds.includes(action.payload);
      if (isHidden) {
        state.hiddenIds = state.hiddenIds.filter(
          (hiddenId) => hiddenId !== action.payload
        );
      } else {
        state.hiddenIds = [...state.hiddenIds, action.payload];
      }
    }
  },
});

export const { toggleIsArchived, setIsHidden } = archivedAndHiddenSlice.actions;
