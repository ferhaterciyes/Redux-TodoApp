import './App.css';
import ListTodos from './components/ListTodos';
import FormContent from './components/FormContent';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodo } from './redux/actions/todoActions';
import ThemeButton from './components/ThemeButton';

axios.defaults.baseURL = "http://localhost:3000/";

function App() {
  const State = useSelector((store) => store.themeReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("todos")
      .then(res => dispatch(setTodo(res.data)))
      .catch(error => console.error("Todo fetch error:", error));
  }, []);

console.log(State.theme);

  return (
    <div className={`h-screen bg-[${State.theme}] text-[rgb(240,71,71)]  flex justify-center items-center flex-col`}>
      <ThemeButton />
      <h1 className='m-5 text-[40px]'>Redux</h1>
      <FormContent />
      <ListTodos />
    </div>
  );
}

export default App;
