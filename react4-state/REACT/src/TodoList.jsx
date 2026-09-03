import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, SetTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        SetTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        })
        setNewTodo("");
    }

    let upadateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        SetTodos(todos.filter((todo) => todo.id !== id));
    };

    let upperCaseAll = () => {
        SetTodos((prevTodos) => (
            prevTodos.map((todos) => {
                return {
                    ...todos,
                    task: todos.task.toUpperCase(),
                };
            })
        ));
    };

    let upperCaseOne = (id) => {
        SetTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    return (
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={upadateTodoValue} className="add-task" /> <br /><br />
            <button onClick={addNewTask} className="add-btn" >Add task</button>
            <br /><br />


            <hr />
            <h4>Tasks Todo</h4> <br /><br />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)} className="add-btn" style={{backgroundColor:"aquamarine"}}>delete</button>
                        <button onClick={() => upperCaseOne(todo.id)} className="add-btn" style={{backgroundColor:"azure"}}>
                            Uppercase
                        </button>
                    </li>
                ))}
            </ul>
            <br /><br />

            <button onClick={upperCaseAll} className="add-btn" style={{backgroundColor:"beige"}}> UpperCase All </button>
        </div>
    );
}