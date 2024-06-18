import BookCard from "./BookCard"
import { motion } from "framer-motion"
import { IBook } from "../interfaces"
import type { filterState } from "../features/Filters/filterSlice"

export default function BookList({ books, readingList, filter }: { books: IBook[], readingList: string[], filter: filterState }) {

    const booksToShow = books.filter((book) => {
        for (const key in filter) {
            if (key === "title") {
                const testTitle = new RegExp(filter[key]).test(book.title)
                if (!testTitle) return false
                continue
            }
            if (key === "author") {
                const testAuthor = new RegExp(filter[key]).test(book.author.name)
                if (!testAuthor) return false
                continue
            }
            if (key === "genre") {
                const testGenre = book[key] === filter[key]
                if (!testGenre) return false
                continue
            }
        }
        return true
    })

    const noBooksMessage = <h2 className="p-3 text-xl font-bold">No hay libros que mostrar...</h2>
    const readingListGrid = () => {
        return <>
            <h2 className="p-2 text-xl text-[#F6AA1C] font-bold md:text-2xl">Libros disponibles</h2>
            <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {
                    booksToShow.map((book, i) => {
                        const loadLazy = window.innerWidth <= 768 && i > 1
                        return (
                            <motion.div
                                className="w-full p-2 flex justify-center"
                                key={book.ISBN}
                                initial={{ x: -150, rotate: -10 }}
                                whileInView={{ x: 0, rotate: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <BookCard bookInfo={book} addedToList={readingList.includes(book.ISBN)} imgLoadLazy={true}/>
                            </motion.div>
                        )
                    })
                }
            </section>
        </>
    }
    const renderReadingList = () => {
        if (booksToShow.length === 0) {
            return noBooksMessage
        }
        return readingListGrid()
    }

    return (
        <section className="md:mt-5">
            {
                renderReadingList()
            }
        </section>
    )
}