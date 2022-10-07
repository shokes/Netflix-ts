import { createSlice, current } from '@reduxjs/toolkit';
import { StateTypes } from '../../interfaces/listSliceTypes';

const initialState: StateTypes = {
  list: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.push(action.payload);
    },

    removeFromList: (state, action) => {
      const { id } = action.payload;

      state.list = state.list.filter((item: any) => item.id !== id);
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;

export default listSlice.reducer;
