import { useState } from "react";
import {
  createTodo,
  deleteTodoById,
  getTodoList,
  updateTodoById,
} from "../api/todoApi";
import { Todo } from "../api/todoApi.type";

export async function useTodo() {
  const [todoList, setTodoList] = useState((await getTodoList()) ?? []);

  const fetchTodo = async () => setTodoList((await getTodoList()) ?? []);

  const createNewTodo = async (todo: string) => {
    const newTodo = await createTodo({ todo });
    if (!newTodo) {
      return;
    }
    setTodoList([...todoList, newTodo]);
  };

  const editTodo = async ({ id, isCompleted }: Todo, content: string) => {
    const updatedTodo = await updateTodoById(id, {
      todo: content,
      isCompleted: isCompleted,
    });
    if (!updatedTodo) {
      return;
    }

    await fetchTodo();
  };

  const completeTodo = async ({ id, todo }: Todo) => {
    const updatedTodo = await updateTodoById(id, {
      todo,
      isCompleted: true,
    });

    if (!updatedTodo) {
      return;
    }
    fetchTodo();
  };

  const incompleteTodo = async ({ id, todo }: Todo) => {
    const updatedTodo = await updateTodoById(id, {
      todo,
      isCompleted: false,
    });

    if (!updatedTodo) {
      return;
    }
    fetchTodo();
  };

  const getRidTodo = ({ id }: Todo) => deleteTodoById(id);

  return {
    todoList,
    createNewTodo,
    editTodo,
    completeTodo,
    incompleteTodo,
    getRidTodo,
  };
}
