import { useState } from 'react';
import EditTodoForm from './EditForm';

function Todo({todo, completeTodo, deleteTodo, editTodo}) {
    const [isChecked, setIsChecked] = useState(todo.isCompleted);
    const [isEdited, setIsEdited] = useState(false);
    
    const handleChange = (text) => {
        completeTodo(todo.id, !todo.isCompleted)
        todo.isCompleted = !isChecked;
        !isChecked ? document.getElementById(text).disabled = true : document.getElementById(text).disabled = false;
        setIsChecked(!isChecked);
    }

    const handleEdit = () => {
        setIsEdited(!isEdited);
    }

    return (
        isEdited ? <EditTodoForm todo ={todo} id ='editForm' cancelBtn ={handleEdit} editTodo ={editTodo}/> : 
        <li key ={todo.id} id={todo.id}>
            <input type="checkbox" checked ={isChecked} onChange ={() => handleChange(`editBtnFor ${todo.text}`)}/>
            <span style ={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</span>
            <button id ='deleteBtnFor' onClick ={() => deleteTodo(todo.id)}>X</button>
            <button id ='editBtnFor' onClick ={() => {handleEdit(todo.id)}}>Edit</button>
        </li>
    );
}

export default Todo;