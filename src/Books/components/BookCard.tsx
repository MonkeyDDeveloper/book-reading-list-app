import { IBook } from "../interfaces"
import { addBookToReadingList, removeBookFromReadingList } from "../features/ReadingList/readingListSlice"
import { useDispatch } from "react-redux"

export default function BookCard(props: { bookInfo: IBook, removeButton?: boolean, addedToList?: boolean }) {

    const bookInformation = props.bookInfo
    const dispatch = useDispatch()

    const addToReadingListHandler = (e: React.MouseEvent<HTMLElement>, bookISBN: string) => {
        e.preventDefault()
        dispatch(addBookToReadingList(bookISBN))
        window.dispatchEvent(new Event('bookAdded'))
    }

    const removeFromReadingListHandler = (e: React.MouseEvent<HTMLElement>, bookISBN: string) => {
        e.preventDefault()
        dispatch(removeBookFromReadingList(bookISBN))
        window.dispatchEvent(new Event('bookRemoved'))
    }

    const addButton = <a onClick={(e) => addToReadingListHandler(e, bookInformation.ISBN)} className="inline-flex w-full items-center  justify-center px-3 py-2 text-md md:text-sm font-medium text-center text-white dark:text-stone-800 bg-stone-800 rounded-lg hover:cursor-pointer hover:bg-stone-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-200 dark:hover:bg-gray-300">Añadir a la lista</a>

    const removeButton = <a onClick={(e) => removeFromReadingListHandler(e, bookInformation.ISBN)} className="inline-flex w-full items-center  justify-center px-3 py-2 text-md md:text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:cursor-pointer hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Quitar de la lista</a>

    const addedToListMessage = <p className="text-[#F6AA1C] md:text-xs font-bold">Añadido a la lista</p>
    const footerButton = props.removeButton ? removeButton : addButton

    return (
        <article role="bookCard" className="w-full m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:focus:shadow-slate-300 dark:hover:shadow-slate-300 dark:bg-gray-800 dark:border-gray-700">
            <a className="flex justify-center my-3">
                <img className="rounded-t-lg w-[80%]" src={bookInformation.cover} width="150" height="84" alt={bookInformation.title} loading="lazy" />
            </a>
            <header className="mb-1 px-3">
                <a>
                    <h2 className="mb-2 text-2xl md:text-sm font-bold tracking-tight text-gray-900 dark:text-white">{bookInformation.title}</h2>
                </a>
                <a>
                    <h3 className="mb-2 text-lg md:text-sm font-bold tracking-tight text-gray-300 dark:text-gray-300">{bookInformation.author.name}</h3>
                </a>
            </header>
            <p className="sm:hidden mb-3 px-3 font-normal text-gray-700 dark:text-gray-400">{bookInformation.synopsis}</p>
            <footer className="p-3">
                {props.addedToList ? addedToListMessage : null}
                {footerButton}
            </footer>
        </article>

    )
}