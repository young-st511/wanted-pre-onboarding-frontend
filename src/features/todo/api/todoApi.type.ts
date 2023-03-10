import { ApiDomains } from "../../../api/ApiConstants";

export const TodoApiUrl = {
  /**
   * `POST`: Create Todo
   * - Authorization: `Bearer {access_token}`
   * - Status: `201 Created`
   */
  CREATE_TODO: ApiDomains.TODO,

  /**
   * `GET`: Get Todos List
   * - Authorization: `Bearer {access_token}`
   * - Status: `200 OK`
   */
  GET_TODO_LIST: ApiDomains.TODO,

  /**
   * `PUT`: Update a Todo
   * - Authorization: `Bearer {access_token}`
   * - Status: `200 OK`
   */
  updateTodo: (id: number) => `${ApiDomains.TODO}/${id}`,

  /**
   * `DELETE`: Delete a Todo
   * - Authorization: `Bearer {access_token}`
   * - Status: `204 No Content`
   */
  deleteTodo: (id: number) => `${ApiDomains.TODO}/${id}`,
} as const;

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface CreateTodoRequest {
  todo: string;
}

export type CreateTodoResponse = Todo;

export type GetTodoListResponse = Todo[];

export interface UpdateTodoRequest {
  todo: string;
  isCompleted: boolean;
}
export type UpdateTodoResponse = Todo;
