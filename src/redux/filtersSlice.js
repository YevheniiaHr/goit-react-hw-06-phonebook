const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter(state, { payload }) {
      return payload;
    },
  },
});
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
