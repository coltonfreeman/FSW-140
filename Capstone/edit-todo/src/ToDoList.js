import Todo from './Todo.js';
import axios from 'axios';

const ToDoList = ({todos, completeTodo, editTodo}) => {

    const deleteTodo = (id) => {
        axios.delete(`http://localhost:9000/DeleteTodo/${id}`,{
          id: todos.id
        })
      }
    const todoList = todos.map((todo) => {
        return<Todo todo ={todo} key ={todo.id} completeTodo ={completeTodo} deleteTodo ={deleteTodo} editTodo ={editTodo}/>});
    return (
        <ul>
            <div className="divItems">
                {todoList}
            </div>
        </ul>
    );
}

export default ToDoList;