import { FormEventHandler, useState } from "react";
import { Todo } from "../api/todoApi.type";
import { TodoMethods } from "./TodoList";
import * as S from "./TodoList.style";

interface Props extends TodoMethods {
  todo: Todo;
}

function TodoCard({ todo, completeTodo, incompleteTodo, getRidTodo }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [todoContent, setTodoContent] = useState(todo.todo);
  const handlesubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };
  return (
    <S.CardBox>
      <S.HeaderBox>
        <form onSubmit={handlesubmit}>
          <S.Title>
            {isEdit ? (
              <input
                value={todoContent}
                onChange={({ currentTarget }) =>
                  setTodoContent(currentTarget.value)
                }
              />
            ) : (
              todo.todo
            )}
          </S.Title>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={({ currentTarget }) =>
              currentTarget.value === "true"
                ? incompleteTodo(todo)
                : completeTodo(todo)
            }
          />
          <S.ButtonBox>
            {isEdit ? (
              <S.RightBox>
                <S.EditButton type="submit">완료</S.EditButton>
                <S.EditButton onClick={() => setIsEdit(false)}>
                  취소
                </S.EditButton>
              </S.RightBox>
            ) : (
              <S.RightBox>
                <S.EditButton onClick={() => setIsEdit(true)}>
                  수정
                </S.EditButton>
                <S.DeleteButton onClick={() => getRidTodo(todo)}>
                  삭제
                </S.DeleteButton>
              </S.RightBox>
            )}
          </S.ButtonBox>
        </form>
      </S.HeaderBox>
    </S.CardBox>
  );
}

export default TodoCard;
