import { redirect } from "react-router-dom";
import TodoList from "../features/todo/components/TodoList";
import { getAuth } from "../utils/token/getAuth";

function Todo() {
  return <TodoList />;
}

export function todoLoader() {
  const auth = getAuth();
  if (!auth) {
    return redirect("/signin");
  }
  return null;
}

export default Todo;
