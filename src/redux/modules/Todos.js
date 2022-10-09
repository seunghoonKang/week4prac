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

//Initial State
const initialState = [
  {
    id: 1,
    title: "연습중..",
  },
];

//Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODOS:
      //console.log("state :", state, "action :", action.payload);
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
        },
      ];
    default:
      return state;
  }
};

//export defalut reducer
export default todos;
