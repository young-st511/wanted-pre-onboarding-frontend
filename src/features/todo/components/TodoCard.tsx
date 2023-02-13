import { FormEventHandler, useEffect, useState } from "react";
import { Todo } from "../api/todoApi.type";
import { TodoMethods } from "./TodoList";
import * as S from "./TodoList.style";

interface Props extends TodoMethods {
  todo: Todo;
}

function TodoCard({
  todo,
  editTodo,
  completeTodo,
  incompleteTodo,
  getRidTodo,
}: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [todoContent, setTodoContent] = useState(todo.todo);
  const handlesubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setIsEdit(false);
    editTodo(todo, todoContent);
  };

  useEffect(() => {
    if (!isEdit) {
      setTodoContent(todo.todo);
    }
  }, [isEdit, todo.todo]);

  return (
    <form onSubmit={handlesubmit}>
      <S.CardBox>
        <S.TitleBox>
          {isEdit ? (
            <input
              value={todoContent}
              data-testid="modify-input"
              onChange={({ currentTarget }) =>
                setTodoContent(currentTarget.value)
              }
            />
          ) : (
            <h3>{todo.todo}</h3>
          )}
        </S.TitleBox>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={({ currentTarget }) =>
            currentTarget.checked === true
              ? completeTodo(todo)
              : incompleteTodo(todo)
          }
        />
        <S.ButtonBox>
          {isEdit ? (
            <>
              <S.EditButton
                type="submit"
                data-testid="submit-button"
                disabled={todo.todo === todoContent}
              >
                완료
              </S.EditButton>
              <S.EditButton
                onClick={() => setIsEdit(false)}
                data-testid="cancel-button"
              >
                취소
              </S.EditButton>
            </>
          ) : (
            <>
              <S.EditButton
                onClick={() => setIsEdit(true)}
                type="button"
                data-testid="modify-button"
              >
                수정
              </S.EditButton>
              <S.DeleteButton
                onClick={() => getRidTodo(todo)}
                type="button"
                data-testid="delete-button"
              >
                삭제
              </S.DeleteButton>
            </>
          )}
        </S.ButtonBox>
      </S.CardBox>
    </form>
  );
}

export default TodoCard;
