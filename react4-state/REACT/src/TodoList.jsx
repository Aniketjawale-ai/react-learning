import { useState } from "react";

export default function TodoList(){
    let [todos, SetTodos] = useState(["sample task!"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        SetTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let upadateTodoValue=(event) => {
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={upadateTodoValue}/> <br /><br />
            <button onClick={addNewTask}>Add task</button>
            <br /><br />
            <br /><br />
            <br /><br />
        <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))
                }
            </ul>
        </div>
    );
}