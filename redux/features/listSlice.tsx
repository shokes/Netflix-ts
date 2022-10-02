import { createSlice, current } from '@reduxjs/toolkit';
import { StateTypes } from '../../interfaces/listSliceTypes';

const initialState: StateTypes = {
  list: [],
  tick: false,
};

// console.log(current(state.list));

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addToList: (state, action) => {
      //   console.log('working');
      state.list.push(action.payload);
    },

    removeFromList: (state, action) => {
      //  console.log(action.payload.name);
      const { name } = action.payload;

      state.list = state.list.filter((item: any) => item.name !== name);
    },
  },
});

export const { addToList, removeFromList } = listSlice.actions;

export default listSlice.reducer;
