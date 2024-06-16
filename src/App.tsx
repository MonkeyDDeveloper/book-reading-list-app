import { useToast } from "@chakra-ui/react"
import Books from "./Books/Books"
import { useEffect } from "react"
import AddBookToast from "./utils/components/AddBookToast"
import RemoveBookToast from "./utils/components/RemoveBookToast"


export default function App() {

  const toast = useToast()

  const notifyToastAdd = () => {
    toast({
      duration: 1500,
      isClosable: true,
      render: () => <AddBookToast />
    })
  }

  const notifyToastRemove = () => {
    toast({
      duration: 1500,
      render: () => <RemoveBookToast />
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