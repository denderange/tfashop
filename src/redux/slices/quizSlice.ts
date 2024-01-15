import { createSlice } from "@reduxjs/toolkit";

export interface QuizState {
	chosenVariants: string[],
	checkedSize: string,
	message: string
}

const initialState: QuizState = {
	chosenVariants: [],
	checkedSize: '',
	message: ''
}

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setStateChosenVariants: (state, action) => {
			state.chosenVariants = action.payload
		},
		setStateCheckedSize: (state, action) => {
			state.checkedSize = action.payload
		},
		setStateMessage: (state, action) => {
			state.message = action.payload
		},
		resetStateQuizState: () => initialState
	}
})

export const {
	setStateChosenVariants,
	setStateCheckedSize,
	setStateMessage,
	resetStateQuizState
} = quizSlice.actions

export default quizSlice.reducer