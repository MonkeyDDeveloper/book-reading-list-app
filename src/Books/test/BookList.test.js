/**
 * @jest-environment jsdom
*/
import React from 'react'; 
import {cleanup, fireEvent, render, screen } from '@testing-library/react';
import { filterState } from '../features/Filters/filterSlice.ts';
import BookList from '../components/BookList.tsx';
import { Provider } from 'react-redux'
import { store } from "../../app/store.ts"
import 'intersection-observer';

afterEach(cleanup);

describe("BookList Component with different filters", () => {

    const books = [
        {
            author: {
                name: "author name",
                otherBooks: [""]
            },
            cover: "cover",
            title: "book one",
            pages: 400,
            genre: "genreb",
            ISBN: "1",
            synopsis: "synopsis",
            year: 2020
        },
        {
            author: {
                name: "author name",
                otherBooks: [""]
            },
            cover: "cover",
            title: "book two",
            pages: 400,
            genre: "genreb",
            ISBN: "2",
            synopsis: "synopsis",
            year: 2020
        },
        {
            author: {
                name: "author name",
                otherBooks: [""]
            },
            cover: "cover",
            title: "book three",
            pages: 400,
            genre: "genrec",
            ISBN: "3",
            synopsis: "synopsis",
            year: 2020
        }
    ]
    const readingList = []

    it("Should render all books", () => {
        const filter = {}
        const bookList = () => <Provider store={store}><BookList books={books} filter={filter} readingList={readingList} /></Provider>
        const container = render(bookList());
        expect(container.getAllByRole("bookCard", { hidden: true }).length).toBe(3)
    })

    it("Should render filtered books", () => {
        const filter = { genre: "genreb" }
        const bookList = () => <Provider store={store}><BookList books={books} filter={filter} readingList={readingList} /></Provider>
        const container = render(bookList());
        expect(container.getAllByRole("bookCard", { hidden: true }).length).toBe(2)
    })

    it("Should render just one boook", () => {
        const filter = { title: "book three" }
        const bookList = () => <Provider store={store}><BookList books={books} filter={filter} readingList={readingList} /></Provider>
        const container = render(bookList());
        expect(container.getAllByRole("bookCard", { hidden: true }).length).toBe(1)
    })

})