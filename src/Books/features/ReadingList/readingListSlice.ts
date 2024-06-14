import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface readingListState {
    books: string[]
}

const readingListInitialState: readingListState = {
    books: []
}

export const readingListSlice = createSlice({
    name: 'readingList',
    initialState: readingListInitialState,
    reducers: {
        addBookToReadingList: (state, action: PayloadAction<string>) => {
            state.books = [...new Set([...state.books, action.payload])]
        },
        removeBookFromReadingList: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter(book => book !== action.payload)
        }
    }
})

export const { addBookToReadingList, removeBookFromReadingList } = readingListSlice.actions

export default readingListSlice.reducer


