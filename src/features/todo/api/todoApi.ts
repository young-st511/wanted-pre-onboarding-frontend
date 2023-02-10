import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../../api/requests";
import {
  CreateTodoRequest,
  CreateTodoResponse,
  GetTodoListResponse,
  TodoApiUrl,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from "./todoApi.type";

/**
 * `POST`: Create Todo
 * - Authorization: `Bearer {access_token}`
 * - Status: `201 Created`
 */
async function createTodo(data: CreateTodoRequest) {
  const res = await postRequest<CreateTodoResponse, CreateTodoRequest>(
    TodoApiUrl.CREATE_TODO,
    data
  );

  return res.data;
}

/**
 * `GET`: Get Todos List
 * - Authorization: `Bearer {access_token}`
 * - Status: `200 OK`
 */
async function getTodoList() {
  const res = await getRequest<GetTodoListResponse>(TodoApiUrl.GET_TODO_LIST);

  return res.data;
}

/**
 * `PUT`: Update a Todo
 * - Authorization: `Bearer {access_token}`
 * - Status: `200 OK`
 */
async function updateTodoById(id: number, data: UpdateTodoRequest) {
  const res = await putRequest<UpdateTodoResponse, UpdateTodoRequest>(
    TodoApiUrl.updateTodo(id),
    data
  );

  return res.data;
}

/**
 * `DELETE`: Delete a Todo
 * - Authorization: `Bearer {access_token}`
 * - Status: `204 No Content`
 */
async function deleteTodoById(id: number) {
  await deleteRequest(TodoApiUrl.deleteTodo(id));
}

export { createTodo, getTodoList, deleteTodoById, updateTodoById };
