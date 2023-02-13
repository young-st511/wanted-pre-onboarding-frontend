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
    <form onSubmit={handlesubmit}>
      <S.CardBox>
        <S.TitleBox>
          <input
            value={todoContent}
            data-testid="new-todo-input"
            onChange={({ currentTarget }) =>
              setTodoContent(currentTarget.value)
            }
          />
        </S.TitleBox>
        <S.ButtonBox>
          <S.EditButton type="submit" data-testid="new-todo-add-button">
            추가
          </S.EditButton>
          <S.EditButton onClick={() => setTodoContent("")}>초기화</S.EditButton>
        </S.ButtonBox>
      </S.CardBox>
    </form>
  );
}

export default TodoCreater;
