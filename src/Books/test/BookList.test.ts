import React from 'react'; 
import {cleanup, fireEvent, render} from '@testing-library/react';
import { IBook } from '../interfaces';
import { filterState } from '../features/Filters/filterSlice';
import BookList from '../components/BookList';

afterEach(cleanup);

it("BookList Component with different filters", () => {

    const books: IBook[] = [
        {
            author: {
                name: "author name",
                otherBooks: [""]
            },
            cover: "cover",
            title: "book one",
            pages: 400,
            genre: "genre",
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
            genre: "genre",
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
            genre: "genre",
            ISBN: "3",
            synopsis: "synopsis",
            year: 2020
        }
    ]
    const filter: filterState = {}
    const readingList: string[] = []

    it("Should render all books", () => {
        const component = render(<BookList books={books} filter={filter} readingList={readingList} />);
    })
})