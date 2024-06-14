import { configureStore } from "@reduxjs/toolkit";
import readingListSlice from "../Books/features/ReadingList/readingListSlice";
import allBooksSlice from "../Books/features/AllBooks/allBooksSlice";
import filter from "../Books/features/Filters/filterSlice"
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

const reducers = combineReducers({
    readingList: readingListSlice,
    allBooks: allBooksSlice,
    filter
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['allBooks', 'filter']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});
export const persitor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

