import { useSelector } from "react-redux"
import type { RootState } from '../../app/store'
import BookCard from "./BookCard"
import { motion } from "framer-motion"
import type { IBook } from "../interfaces"

export default function ReadingList({ books, readingList }: { books: IBook[], readingList: string[]}) {

    const readingListGrid = <section className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {
            books.filter(book => readingList.includes(book.ISBN)).map(book => {
                return <motion.div key={book.ISBN} className="w-full p-2 flex justify-center"><BookCard bookInfo={book} removeButton={true} /></motion.div>
            })
        }
    </section>

    const renderReadingList = () => {
        if (books.length === 0) {
            return <p className="text-md font-bold p-2">No hay libros en tu lista de lectura...</p>
        }
        return readingListGrid
    }

    return (
        <>
            <h2 className="p-2 text-2xl font-bold">Tu lista de lectura</h2>
            {
                renderReadingList()
            }
        </>
    )
}