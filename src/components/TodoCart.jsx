import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { deleteTodo, editTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCart = ({ todo }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const State = useSelector((store) => store.themeReducer);


  const handleUpdate = () => {
    const updated = { ...todo, is_done: !todo.is_done };
    axios.put(`/todos/${todo.id}`, updated).then(dispatch(editTodo(updated)));
  };

  const handleDelete = () => {
    axios.delete(`/todos/${todo.id}`).then(() => dispatch(deleteTodo(todo.id)));
  };

  return (
    <>
      <div
  className={`bg-${State.theme} text-white rounded-md my-5 overflow-hidden shadow-lg`}
  style={State.theme === "#000000" ? { boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)" } : {boxShadow:"0 10px 20px rgba(0, 0, 0, 0.2)", color:"#000000"}}
  
>
        <div className="p-6">
          <h5 className="text-2xl font-bold mb-2">{todo.text}</h5>

          <p
            className={`text-sm mb-4 ${
              todo.is_done ? "text-green-400" : "text-yellow-400"
            }`}
          >
            {todo.is_done ? "Tamamlandı" : "Devam Ediyor"}
          </p>

          <p className="text-gray-500 mb-2">
            {new Date(todo.create_at).toLocaleString()}
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-yellow-400 px-4 py-2 rounded-md hover:bg-yellow-500 text-black"
            >
              Düzenle
            </button>

            <button
              onClick={handleUpdate}
              className={`${
                todo.is_done ? "bg-red-500" : "bg-green-500"
              } px-4 py-2 rounded-md hover:bg-red-600 hover:text-white text-white`}
            >
              {todo.is_done ? "Geri Al" : "Tamamlandı"}
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 text-white"
              
            >
              Sil
            </button>
          </div>
        </div>
      </div>
      {/* modal */}
      {isOpen && (
        <Modal
          close={() => {
            setIsOpen(false);
          }}
          todo={todo}
        />
      )}
    </>
  );
};

export default TodoCart;
