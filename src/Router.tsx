import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Root } from "./pages"

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />
    }
  ])
  
  return (
    <RouterProvider router={router} />
  )
}

export default Router