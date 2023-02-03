import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages";
import ErrorPage from "./pages/ErrorPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
