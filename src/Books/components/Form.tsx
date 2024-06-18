import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { setFilter } from "../features/Filters/filterSlice"

export default function Form() {

    const allBooks = useSelector((state: RootState) => state.allBooks)
    const dispatch = useDispatch()

    const allCategories = new Set(allBooks.books.map(book => {
        return book.genre
    }))
    const allAuthors = new Set(allBooks.books.map(book => {
        return book.author
    }))

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const updateFilterData = {
            name: e.target.name,
            value: e.target.value
        }
        dispatch(setFilter(updateFilterData))
    }

    return (
        <section className="w-full my-1 px-2 py-1 md:p-3 md:px-4 md:my-0 md:mt-5">
            <form>
                <article className="mb-2">
                    <input onChange={handleChange} type="text" id="title" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca por título" required />
                </article>
                <article className="mb-2">
                    <label htmlFor="genre" className="text-sm text-gray-300 font-bold dark:text-gray-300">Filtrar por Género</label>
                    <select onChange={handleChange} defaultValue="" id="category" name="genre" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Todas las categorías</option>
                        {
                            [...allCategories].map((category, index) => {
                                return <option key={index} value={category}>{category}</option>
                            })
                        }
                    </select>
                </article>
                <article className="mb-2">
                    <label htmlFor="author" className="text-sm text-gray-300 font-bold dark:text-gray-300">Filtrar por Autor</label>
                    <select onChange={handleChange} defaultValue="" id="author" name="author" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Todos los autores</option>
                        {
                            [...allAuthors].map((author, index) => {
                                return <option key={index} value={author.name}>{author.name}</option>
                            })
                        }
                    </select>
                </article>
            </form>
        </section>
    )
}