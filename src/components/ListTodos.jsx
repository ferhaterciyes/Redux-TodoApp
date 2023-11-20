import { useSelector } from "react-redux/es/hooks/useSelector"
import TodoCart from "./TodoCart"
const ListTodos = () => {

  const state =  useSelector((store)=>store.todoReducer)

  return (
    <div className="mt-5">
        {state.todos.length === 0 ? (
            <p>Herhangi bir görev giriniz...</p> 
        ): (
            state.todos.map((todo)=>(
           <TodoCart key={todo.id} todo={todo}/>
            ))
        )
        
        }
  
    </div>
  )
}

export default ListTodos