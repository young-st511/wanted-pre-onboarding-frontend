import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root, SignIn, SignUp, Todo } from "./pages";
import ErrorPage from "./pages/ErrorPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "todo",
          element: <Todo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
