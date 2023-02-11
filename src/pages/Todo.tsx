import { redirect } from "react-router-dom";
import { getAuth } from "../utils/token/getAuth";

function Todo() {
  return <div>Todo</div>;
}

export function todoLoader() {
  const auth = getAuth();
  if (!auth) {
    return redirect("/signin");
  }
  return null;
}

export default Todo;
