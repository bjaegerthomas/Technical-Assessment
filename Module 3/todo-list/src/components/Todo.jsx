import { useState } from 'react';

export default function Todo() {
    let [todoList, setTodoList] = useState([]);
    let [inputTodo, setInputTodo] = useState('');
    const [id, setId] = useState(0);

    const addTodo = () => {

        if (inputTodo.trim() === '') {
            alert('You didn\'t enter a todo');
            return;
        }
         
        const updatedTodo = {id: id, text: inputTodo, completed: false};
        setTodoList([...todoList, updatedTodo]);
        setId(id + 1);
        setInputTodo('');
    };

    const deleteTodo = (id) => {
        const updatedTodo = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodo);
    };

    const completedTodo = (id) => {
        const updatedTodo = todoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodoList(updatedTodo);
    };

    return(
        <div className="container">
            <h1>Todo List</h1>
            <input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todoList.map((todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        <button onClick={() => completedTodo(todo.id)}>Complete</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}