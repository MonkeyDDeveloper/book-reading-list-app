import BookCard from "./BookCard"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import { motion } from "framer-motion"

export default function BookList() {

    const allBooks = useSelector((state: RootState) => state.allBooks)
    const readingList = useSelector((state: RootState) => state.readingList)
    const filter = useSelector((state: RootState) => state.filter)
    const booksToShow = allBooks.books.filter((book) => {
        for(const key in filter) {
            if(key === "title") {
                const testTitle = new RegExp(filter[key]).test(book.title)
                if(!testTitle) return false
                continue
            }
            if(key === "author") {
                const testAuthor = new RegExp(filter[key]).test(book.author.name)
                if(!testAuthor) return false
                continue
            }
            if(key === "genre") {
                const testGenre = book[key] === filter[key]
                if(!testGenre) return false
                continue
            }
        }
        return true
    })

    return (
        <section className="md:mt-5">
            {
                booksToShow.length === 0 
                    ? <h2 className="p-3 text-xl font-bold">No hay libros que mostrar...</h2>
                    : <>
                        <h2 className="p-2 text-xl font-bold md:text-2xl">Libros disponibles</h2>
                        <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                            {
                                booksToShow.map((book) => {
                                    return (
                                        <motion.div
                                            className="w-full p-2 flex justify-center"
                                            key={book.ISBN}
                                            initial={{ x: -150, rotate: -10 }}
                                            whileInView={{ x: 0, rotate: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <BookCard bookInfo={book} addedToList={readingList.books.includes(book.ISBN)}/>
                                        </motion.div>
                                    )
                                })
                            }
                        </section>
                    </>
            }
        </section>
    )
}