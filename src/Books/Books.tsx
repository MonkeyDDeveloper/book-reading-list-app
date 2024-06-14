import { useQuery } from "@tanstack/react-query"
import { getBooks } from "./actions"
import BookList from "./components/BookList"
import ReadingList from "./components/ReadingList"
import { addBooks } from "./features/AllBooks/allBooksSlice"
import { useDispatch } from "react-redux"
import Form from "./components/Form"


export default function Books() {

    const dispatch = useDispatch()

    const query = useQuery({
        queryKey: ['books'],
        queryFn: getBooks
    })

    if(!query.isLoading && query.isSuccess) {
        dispatch(addBooks(query.data.default.library.map(({book}) => book)))
    }

    const errorMessage = <p className="text-lg p-2 text-red-400 font-bold">Ha ocurrido un error cargando los libros</p>

    return (
        <section>
            <header className="flex items-center p-5 md:p-8 pb-2 border-x-0 border-t-0 border-b dark:border-b-stone-300">
                <img src="/javier_logo.jpeg" className="w-20 rounded-md mr-2" loading="lazy"></img>
                <h1 className="text-2xl font-bold md:text-4xl">
                    Biblioteca de libros
                </h1>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-[20%_80%]">
                <section>
                    <Form />
                </section>
                <section>
                    { query.isLoading 
                        ? <p className="text-lg p-2 font-bold">Cargando libros...</p> 
                        : query.isError 
                            ? errorMessage 
                            : <BookList />
                    }
                </section>
                { query.isLoading || query.isError 
                    ? null 
                    : (
                        <section className="p-1 border-x-0 border-b-0 border-t dark:border-t-slate-400 md:col-span-2">
                            <ReadingList />
                        </section>
                    ) 
                }
            </main>
            <footer className="p-5 mt-20 border border-x-0 border-b-0 border-t-gray-500">
                <h3 className="text-md text-center font-bold">Desarrollado por <span className="text-orange-500">MonkeyDeveloper (Javier Fray)</span></h3>
            </footer>
        </section>
    )
}