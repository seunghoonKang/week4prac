//Action Value
const CREATE_TODOS = "CREATE_TODOS";

//Action Creator
export const createTodos = (payload) => {
  //console.log(payload);
  return {
    type: CREATE_TODOS,
    payload,
  };
};

//Initial State 처음 작성한 형태
// const initialState = [
//   {
//     id: 1,
//     title: "연습중..",
//   },
// ];

//Initial State 개선, 보통 이런 형태로 쓰인다고 한다.
//왜냐하면 initialState에 나중에는 todos 말고 loading, user (예시임) 등 다른 친구들도 들어올 수 있기 때문이다.
const initialState = {
  todos: [
    {
      id: 1,
      title: "연습중..",
    },
  ],
};

//Reducer
//initialState 의 형태가 변함에 따라 리듀서의 return도 수정되야 한다.
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case CREATE_TODOS:
//       return [
//         ...state,
//         {
//           id: action.payload.id,
//           title: action.payload.title,
//         },
//       ];
//     default:
//       return state;
//   }
// };

//return 부분 개선한 Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODOS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

//export defalut reducer
export default todos;
