import { actionTypes } from "../actionTypes/actionTypes";

export const addTodo = (payload) => ({
  type: actionTypes.ADD_TODO,
  payload,
});
export const deleteTodo = (payload) => ({
  type: actionTypes.DELETE_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: actionTypes.EDIT_TODO,
  payload,
});
export const setTodo = (payload) => ({
  type: actionTypes.SET_TODO,
  payload,
});

export const setTheme = (payload) => ({
  type: actionTypes.SET_THEME,
  payload,
});
