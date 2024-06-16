import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"
import BookList from "./BookList"
import ReadingList from "./ReadingList"
import Form from "./Form"

export default function BookBody({ isLoading, isError }: { isLoading: boolean, isError: boolean }) {

    const allBooks = useSelector((state: RootState) => state.allBooks)
    const readingList = useSelector((state: RootState) => state.readingList)
    const filter = useSelector((state: RootState) => state.filter)

    const loadingMessage = <p className="text-2xl p-8 font-bold">Cargando libros...</p> 
    const errorMessage = <p className="text-lg p-2 text-red-400 font-bold">Ha ocurrido un error cargando los libros</p>

    const renderBody = () => {
        const bookListGrid = <BookList books={allBooks.books} filter={filter} readingList={readingList.books}/> 
        const readingListGrid = <ReadingList books={allBooks.books} readingList={readingList.books}/>

        const bookListContent = isError ? errorMessage : isLoading ? loadingMessage : bookListGrid
        const readingListContent = !isLoading && !isError ? readingListGrid : null

        return (
            <>
                <p className="p-2 text-xs text-gray-400 font-bold">Esta aplicación es un demo donde tienes una lista de libros definida, puedes filtrarlos con el formulario de busqueda, y agregar/quitar libros de tu lista de lectura para verlos en la sección de "Tu lista de lectura", así que, siente libre de testear la aplicación!</p>
                <main className="grid grid-cols-1 md:grid-cols-[20%_80%]">
                    <Form />
                    {bookListContent}
                    <section id="readingList" className="bg-gradient-to-b md:bg-gradient-to-br from-gray-900 to-90% to-gray-800 md:col-span-2">
                        {readingListContent}
                    </section>
                </main>
            </>
        )
    }

    return (
        <>
            {renderBody()}
        </>
    )
}