import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { IBook } from "../../interfaces"

export interface allBooks {
    books: IBook[]
}

export const allBooksInitialState: allBooks = {
    books: []
}

const allBooksSlice = createSlice({
    name: 'allBooks',
    initialState: allBooksInitialState,
    reducers: {
        addBooks: (state, action: PayloadAction<IBook[]>) => {
            state.books = action.payload
        }
    }
})

export const { addBooks } = allBooksSlice.actions

export default allBooksSlice.reducer