import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import todoReducer from "./reducers/todoReducer";
import themeReducer from './reducers/themeReducer';


const rootReducer = combineReducers({
    userReducer,
    todoReducer,
    themeReducer
})


const store = createStore(rootReducer)

export default store ;