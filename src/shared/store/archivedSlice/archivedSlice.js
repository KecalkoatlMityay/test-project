import { createSlice } from "@reduxjs/toolkit";

export const archivedSlice = createSlice({
  name: "archivedSlice",
  initialState: {
    archivedIds: [],
  },
  reducers: {
    setIsArchived: (state, action) => {
      const isArchived = state.archivedIds.includes(action.payload);
      if (isArchived) {
        state.archivedIds = state.archivedIds.filter(
          (archivedId) => archivedId !== action.payload
        );
      } else {
        state.archivedIds = [...state.archivedIds, action.payload];
      }
    },
  },
});

export const { setIsArchived } = archivedSlice.actions;
