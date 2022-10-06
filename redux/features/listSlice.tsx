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
      const { name } = action.payload;

      state.list = state.list.filter((item: any) => item.name !== name);
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;

export default listSlice.reducer;
