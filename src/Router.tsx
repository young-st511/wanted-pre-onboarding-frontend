import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root, SignIn, SignUp, Todo } from "./pages";
import { rootLoader, signInLoader, signUpLoader, todoLoader } from "./pages";
import ErrorPage from "./pages/ErrorPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "todo",
          element: <Todo />,
          loader: todoLoader,
        },
      ],
    },
    {
      path: "signup",
      element: <SignUp />,
      loader: signUpLoader,
    },
    {
      path: "signin",
      element: <SignIn />,
      loader: signInLoader,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
