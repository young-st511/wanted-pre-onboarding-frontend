import { Todo } from "../api/todoApi.type";
import { useTodo } from "../hooks/useTodo";
import TodoCard from "./TodoCard";
import TodoCreater from "./TodoCreater";
import * as S from "./TodoList.style";

export interface TodoMethods {
  createNewTodo: (todoContent: string) => Promise<void>;
  editTodo: (todo: Todo, content: string) => Promise<void>;
  completeTodo: (todo: Todo) => Promise<void>;
  incompleteTodo: (todo: Todo) => Promise<void>;
  getRidTodo: (todo: Todo) => void;
}

function TodoList() {
  const { todoList, ...methods } = useTodo();
  //! TEST
  console.log(todoList);
  return (
    <>
      <S.ListBox>
        <TodoCreater createNewTodo={methods.createNewTodo} />
        <S.List>
          {todoList.map((elem) => (
            <li key={elem.id}>
              <TodoCard todo={elem} {...methods} />
            </li>
          ))}
        </S.List>
      </S.ListBox>
    </>
  );
}

export default TodoList;
