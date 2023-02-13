import { FormEventHandler, useState } from "react";
import * as S from "./TodoList.style";

interface Props {
  createNewTodo: (todo: string) => Promise<void>;
}

function TodoCreater({ createNewTodo }: Props) {
  const [todoContent, setTodoContent] = useState("");
  const handlesubmit: FormEventHandler = (e) => {
    e.preventDefault();
    createNewTodo(todoContent);
  };
  return (
    <S.CardBox>
      <S.HeaderBox>
        <form onSubmit={handlesubmit}>
          <S.Title>
            <input
              value={todoContent}
              data-testid="new-todo-input"
              onChange={({ currentTarget }) =>
                setTodoContent(currentTarget.value)
              }
            />
          </S.Title>
          <S.ButtonBox>
            <S.RightBox>
              <S.EditButton type="submit" data-testid="new-todo-add-button">
                추가
              </S.EditButton>
              <S.EditButton onClick={() => setTodoContent("")}>
                초기화
              </S.EditButton>
            </S.RightBox>
          </S.ButtonBox>
        </form>
      </S.HeaderBox>
    </S.CardBox>
  );
}

export default TodoCreater;
