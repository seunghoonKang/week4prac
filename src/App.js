import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createTodos } from "./redux/modules/Todos";

function App() {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => {
    console.log(state);
    return state.todos;
  });

  const dispatch = useDispatch();
  const newId = useRef(2);

  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onClickHandler = () => {
    if (!title) return;

    dispatch(
      createTodos({
        id: (newId.current += 1),
        title,
      })
    );

    setTitle("");
  };

  return (
    <div>
      <FirstContainer>
        <Label htmlFor="todoTitle">Todos의 제목을 입력하세요</Label>
        <InputTitle
          type="text"
          value={title}
          id="todoTitle"
          onChange={onChangeHandler}
        ></InputTitle>
        <InputBtn onClick={onClickHandler}>추가하기</InputBtn>
      </FirstContainer>
      <ContainerDiv>
        {todos.map((todo) => (
          <TitleDiv key={todo.id}>{todo.title}</TitleDiv>
        ))}
      </ContainerDiv>
    </div>
  );
}

const FirstContainer = styled.div`
  margin: 20px;
`;

const Label = styled.label`
  margin-right: 30px;
`;

const InputTitle = styled.input`
  width: 200px;
  height: 20px;
  border: 1px solid lightgray;
  border-radius: 50px;
  margin-right: 30px;
`;

const InputBtn = styled.button`
  width: 100px;
  height: 25px;
  background-color: lightgray;
  border: none;
  border-radius: 50px;
`;

const ContainerDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const TitleDiv = styled.div`
  width: 400px;
  height: 100px;
  padding-left: 10px;

  border: 1px solid lightgray;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export default App;
