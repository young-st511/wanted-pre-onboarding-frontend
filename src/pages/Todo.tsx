import { redirect } from "react-router-dom"
import { getAccessToken } from "../utils/token/accessTokenUtils"

function Todo() {
  return (
    <div>Todo</div>
  )
}

export function TodoLoader() {
  if(!getAccessToken()) {
    redirect("/signin")
  }
}

export default Todo