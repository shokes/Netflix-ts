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
      console.log(current(state.list));
    },

    removeFromList: (state, payload) => {
      // state.list.filter(())
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;

export default listSlice.reducer;
