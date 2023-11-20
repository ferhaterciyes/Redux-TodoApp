// themeReducer.js
import { actionTypes } from "../actionTypes/actionTypes";
const initialState = {
  theme: "#000000",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_THEME:
    
      return {...state,theme: action.payload};

    default:
      return state;
  }
};

export default themeReducer;
