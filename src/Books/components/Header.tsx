export default function BookHeader() {
    return (
        <header className="flex items-center p-5 md:p-8 pb-2 border-x-0 border-t-0 border-b dark:border-b-stone-300">
            <img src="/javier_logo.jpeg" className="w-20 rounded-md mr-2" loading="lazy"></img>
            <h1 className="text-2xl font-bold md:text-4xl">
                Biblioteca de libros
            </h1>
        </header>
    )
}