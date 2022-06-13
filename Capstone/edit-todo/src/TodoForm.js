import {useState} from 'react';
import axios from 'axios';

function TodoForm() {

    const [userInput, setUserInput] = useState("");
    const [text, setText] = useState("")
    
    const addTodo = () => {
        axios.post('http://localhost:9000/addTodo',{
        text: text,
    }).then(()=> {
      setUserInput([...userInput, {text: text}])
        });
    };
    // const validateForm = (e) => {
    //     e.preventDefault();
    //     if (userInput !== "") {
    //         addTodo(userInput);
    //     } 
    //     document.querySelector('#todoText').value = "";   
    // }

  
    return (
        <form >
            <label>Add a Todo Here: </label>
            <input type="text" id="text" name="text" placeholder="todo item..." required onChange={(e)=> {setText(e.target.value)}}></input>
            <button onClick={addTodo}>Add Me!</button>
        </form>
    );
}

export default TodoForm;