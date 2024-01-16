import { createSlice } from "@reduxjs/toolkit";

export interface QuizState {
	shoesKind: string[],
	shoesSize: string,
	message: string,
	userNameEmail: { name: string, email: string }
}

const initialState: QuizState = {
	shoesKind: [''],
	shoesSize: '',
	message: '',
	userNameEmail: { name: '', email: '' }
}

export const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setShoesKind: (state, action) => {
			state.shoesKind = action.payload
		},
		setShoesSize: (state, action) => {
			state.shoesSize = action.payload
		},
		setUserMessage: (state, action) => {
			state.message = action.payload
		},
		setNameEmail: (state, action) => {
			state.userNameEmail = action.payload
		},
		resetStateQuizState: () => initialState
	}
})

export const {
	setShoesKind,
	setShoesSize,
	setUserMessage,
	setNameEmail,
	resetStateQuizState
} = quizSlice.actions

export default quizSlice.reducer