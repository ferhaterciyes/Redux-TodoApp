import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dialog } from "@headlessui/react";
import { editTodo } from "../redux/actions/todoActions";
const Modal = ({ todo, close }) => {
  const [editedText, setEditedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    const updatedTodo = { ...todo, text: editedText };
    dispatch(editTodo(updatedTodo));
    close(); // Modal'ı kapat
  };

  return (
    <Dialog open={true} onClose={close} className="fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-md">
      <Dialog.Panel className="bg-gray-800 text-white rounded-md p-6">
        <Dialog.Title className="text-2xl font-bold mb-4">Todo Düzenle</Dialog.Title>
        
        <label htmlFor="editedText" className="block text-sm font-medium text-gray-500">
          Yeni İsim Belirle:
        </label>
        <input
          type="text"
          id="editedText"
          name="editedText"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          className="border rounded-md px-3 py-2 w-full mt-1 mb-4 focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white"
        />

        <div className="flex justify-end">
          <button
            onClick={close}
            className="mr-4 px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-600 text-white"
          >
            Çıkış
          </button>

          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
          >
            Kaydet
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
