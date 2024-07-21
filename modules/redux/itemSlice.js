import { createSlice } from '@reduxjs/toolkit';

const initialData = [];

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    items: initialData,
    selectedItem: null,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    selectItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setItems, selectItem } = itemSlice.actions;
export default itemSlice.reducer;
