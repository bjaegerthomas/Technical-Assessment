import { useState } from 'react';

export default function Counter() {
    let [todoList, setTodoList] = useState('');
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

}