import { AxiosError } from "axios";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../../../api/requests";
import { showAxiosError } from "../../../utils/axios/showAxiosError";
import {
  CreateTodoRequest,
  CreateTodoResponse,
  GetTodoListResponse,
  TodoApiUrl,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from "./todoApi.type";

/**
 * `POST`: Post Todo
 * - Authorization: `Bearer {access_token}`
 * - Status: `201 Created`
 */
async function createTodo(data: CreateTodoRequest) {
  try {
    const res = await postRequest<CreateTodoResponse, CreateTodoRequest>(
      TodoApiUrl.CREATE_TODO,
      data
    );

    if (res.status != 201) {
      throw new Error("Status Error: " + res.status);
    }

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(error);
    }
  }
}

/**
 * `GET`: Get Todos List
 * - Authorization: `Bearer {access_token}`
 * - Status: `200 OK`
 */
async function getTodoList() {
  try {
    const res = await getRequest<GetTodoListResponse>(TodoApiUrl.GET_TODO_LIST);

    if (res.status != 200) {
      throw new Error("Status Error: " + res.status);
    }

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(error);
    }
  }
}

/**
 * `PUT`: Update a Todo
 * - Authorization: `Bearer {access_token}`
 * - Status: `200 OK`
 */
async function updateTodoById(id: number, data: UpdateTodoRequest) {
  try {
    const res = await putRequest<UpdateTodoResponse, UpdateTodoRequest>(
      TodoApiUrl.updateTodo(id),
      data
    );

    if (res.status != 200) {
      throw new Error("Status Error: " + res.status);
    }

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(error);
    }
  }
}

/**
 * `DELETE`: Delete a Todo
 * - Authorization: `Bearer {access_token}`
 * - Status: `204 No Content`
 */
async function deleteTodoById(id: number) {
  try {
    const res = await deleteRequest(TodoApiUrl.deleteTodo(id));

    if (res.status != 204) {
      throw new Error("Status Error: " + res.status);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      showAxiosError(error);
    } else {
      console.error(error);
    }
  }
}

export { createTodo, getTodoList, deleteTodoById, updateTodoById };
