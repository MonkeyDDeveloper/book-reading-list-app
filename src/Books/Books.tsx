import { useQuery } from "@tanstack/react-query"
import { getBooks } from "./actions"
import BookBody from "./components/BookBody"
import BookFooter from "./components/Footer"
import BookHeader from "./components/Header"
import { addBooks } from "./features/AllBooks/allBooksSlice"
import { useDispatch } from "react-redux"

function addPreloadTags(bookCoverUrl: string) {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = bookCoverUrl;
    document.head.appendChild(link);
}

export default function Books() {
    
    const dispatch = useDispatch()

    const query = useQuery({
        queryKey: ['books'],
        queryFn: getBooks
    })

    if(!query.isLoading && query.isSuccess) {
        const books = query.data.default.library.map(({book}) => {
            
            addPreloadTags(book.cover)

            return book
        })
        dispatch(addBooks(books))
    }

    return (
        <section>
            <BookHeader />
            <BookBody isError={query.isError} isLoading={query.isLoading} />
            <BookFooter />
        </section>
    )
}