import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface filterState {
    [key: string]: string
}

const filterInitialState: filterState = {

}

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setFilter: (state, action: PayloadAction<filterState>) => {
            const { name, value } = action.payload;
            if(value === "") {
                console.log("delete")
                delete state[name]
                return
            }
            state[name] = value
        }
    }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer