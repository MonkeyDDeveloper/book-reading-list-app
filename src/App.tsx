import { useToast } from "@chakra-ui/react"
import Books from "./Books/Books"
import { useEffect } from "react"


export default function App() {

  const toast = useToast()

  const notifyToastAdd = () => {
    toast({
      title: "Libro agregado a la lista de lectura",
      description: "Si miras hasta el final podrás revisar todos los libros que has añadido!",
      status: "success",
      duration: 2000,
      isClosable: true,
      icon: ""
    })
  }

  const notifyToastRemove = () => {
    toast({
      title: "Libro eliminado de la lista de lectura",
      status: "warning",
      duration: 2000,
      isClosable: true,
      icon: ""
    })
  }

  useEffect(() => {
    console.log("event added")
    window.addEventListener("bookAdded", notifyToastAdd)
    window.addEventListener("bookRemoved", notifyToastRemove)

    return () => {
      console.log("event removed")
      window.removeEventListener("bookAdded", notifyToastAdd)
      window.removeEventListener("bookRemoved", notifyToastRemove)    
    }
  
  }, [])

  return (
    <section className="dark:bg-gray-800 dark:text-neutral-200">
      <Books />
    </section>
  )
}