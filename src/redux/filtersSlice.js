const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
