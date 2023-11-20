import { actionTypes } from "../actionTypes/actionTypes";
const initialState = {
  todos: [],
  category: [],
  isEmpty: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      return { ...state, todos: tempTodos };

    case actionTypes.EDIT_TODO:
      const updatesTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      return { ...state, todos: updatesTodos };

    case actionTypes.DELETE_TODO:
      const filteredTodo = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );

      return { ...state, todos: filteredTodo };

   case actionTypes.SET_TODO:
      
   return {...state , todos:action.payload}

    default:
      return state;
  }
};

export default todoReducer;
