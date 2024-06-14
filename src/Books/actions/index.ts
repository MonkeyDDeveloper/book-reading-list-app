import axios from "axios";
import { ILibrary } from "../interfaces";

const booksApi = axios.create({
    baseURL: import.meta.env.VITE_BOOKS_API_URL
})

export const getBooks = async (): Promise<ILibrary> => {
    const response = await booksApi.get("/")
    return response.data as ILibrary
}