import routes from "./routes/routes"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        duration={5000}
        expand={true}
      />
      <RouterProvider router={routes} />
    </>
  )
}

export default App