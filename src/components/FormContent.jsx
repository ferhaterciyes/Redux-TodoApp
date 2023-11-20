import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../redux/actions/todoActions";
import axios from "axios";
import { useState } from "react";
const FormContent = () => {
  const distpatch = useDispatch();
  const [inputValue , setInputvalue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      create_at: new Date(),
      theme:""
    };
     axios.post("/todos",newTodo)
     .then(distpatch(addTodo(newTodo))
     )
     setInputvalue("")
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border rounded-[20px] p-2">
        <input type="text" 
        value={inputValue}
        onChange={(e)=> setInputvalue(e.target.value)}
        className="bg-transparent outline-none text-[16px]" />
        <button className="border-l p-1 mx-1">Ekle</button>
      </form>
    </div>
  );
};

export default FormContent;
