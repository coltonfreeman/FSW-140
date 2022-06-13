import axios from 'axios';
import {useState} from 'react';

function EditTodoForm({todo}) {
    

    const [userInput, setUserInput] = useState("");
    
    
//     const validateForm = (e) => {
//         e.preventDefault();
//         if (userInput !== "") {
//             editTodo(todo, userInput);
//         } 

//     const cancel = cancelBtn;
//     cancel();
// }

const updateClick = (id) => {
    axios.put(`http://localhost:9000/UpdateTodo/:${id}`,{
        id: todo.id,
        text: userInput
    })
}
const changeState = (e) => {
    setUserInput(e.target.value);
}


    return (
        <form>
            <label>Edit Todo: </label>
            <input type='text' name="text" value ={userInput} onChange ={changeState}></input>
            <button type='submit' onClick={()=>{updateClick(todo.id)}}>Update</button> 
            
        </form>
    );
}


export default EditTodoForm;