import {useState} from 'react';
import ToDoList from './components/TodoList'
import './App.css';
import todos from './components/STORE'
import TodoForm from './components/TodoForm'
import Footer from "./components/Footer";
import {v4 as uuid} from "uuid"



function App() {
  const [todosSet, todoChange] = useState(todos)
  const todoComplete = (selTask, taskID) =>{
      const newList = [...todosSet]
      const altTask = newList.findIndex(r => r.id === taskID)
      
      if (selTask.isCompleted === false){
        selTask.isCompleted = true
      }  
      else if(selTask.isCompleted === true){
        selTask.isCompleted = false
      }

      newList.splice(altTask, 1, selTask)
      todoChange(newList)
  }

  const deletedTodos = (taskID) => {
      const newList = [...todosSet]
      const altTask = newList.findIndex(r => r.id === taskID)
      newList.splice(altTask, 1)
      todoChange(newList)
  }
  const addTodo = text => {
    const copyList = [...todosSet];
    const newEntry = {text: `${text}`, id: uuid(), isCompleted: false};
    copyList.push(newEntry);
    todoChange(copyList);
  }
   

  return (
   <div> 
      <h1>Todo App</h1>
       <h2>Add new todos via the input field:</h2>
      <TodoForm addTodo = {addTodo}/>
      <ul>
     
        <ToDoList 
          text = {todosSet}
          todoComplete = {todoComplete}
          deletedTodos = {deletedTodos}  
        />
      </ul>
      <Footer  />
      
    </div>
  );
}


 

export default App;