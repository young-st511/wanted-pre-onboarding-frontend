import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root, SignIn, SignUp, Todo } from "./pages";
import ErrorPage from "./pages/ErrorPage";
import { rootLoader } from "./pages/Root";
import { signInLoader } from "./pages/SignIn";
import { signUpLoader } from "./pages/SignUp";
import { todoLoader } from "./pages/Todo";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      loader: rootLoader,
      errorElement: <ErrorPage />,
      children: [
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
        {
          path: "todo",
          element: <Todo />,
          loader: todoLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
