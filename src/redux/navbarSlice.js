import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	title: 'Pick a date'
};

export const navbarSlice = createSlice({
	name: 'navbar',
	initialState,
	reducers: {
		updateTitle: (state, action) => {
			state.title = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { updateTitle } = navbarSlice.actions;

export default navbarSlice.reducer;
