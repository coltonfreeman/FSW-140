import './App.css';
import ToDoList from '../components/ToDoList'
//import {listOfJokes} from './JOKES.js';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")



  useEffect(() => {
    axios.get("http://localhost:9000/allTodos")
    .then((todos) => {
      setTodos(todos.data)
      console.log(todos.data)
    })
  }, []);


  const completeTodo = (id, boolean) => {
    axios.get(`http://localhost:9000/completeTodo/${id}/${boolean}`)
    .then(res => {
      const tempTodos = [...todos];
      const updatedTodos = [tempTodos, res.data]
      setTodos(updatedTodos);
    })
    .catch(err => console.log(err))
  }

 

  

  const editTodo = (obj, updates) => {
    const tempTodos = [...todos];
    const todoItem = tempTodos.find(todo => todo.id === obj.id);
    todoItem.text = updates;
    setTodos(tempTodos);
  }
  

  return (
      <>
        <h1>List of Todos</h1>
    
        <TodoForm />
        <ToDoList
        todos ={todos} completeTodo ={completeTodo} editTodo ={editTodo}/>
      </>
  );
}

export default App;