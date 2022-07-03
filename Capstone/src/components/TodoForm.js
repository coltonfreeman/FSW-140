import {useState} from 'react';

export default function TodoForm(props){

    const [userInput, storeInput] = useState("")
    const changeInput = () => {storeInput(document.querySelector("#inputValue").value)} 


    return(
        <div id = "inputOptions">
            <input type = "text"  id = "inputValue" onChange = {() => changeInput()}></input>
       
            <button onClick = {() =>{
                if(document.querySelector("#inputValue").value !== ""){
                    props.addTodo(userInput)
                } 

                 else if(document.querySelector("#inputValue").value === ""){
                    const removeError = () =>{
                        document.querySelector("#errorReported").remove()
                    }
                    const errorReported = document.createElement("h2") 
                    errorReported.textContent = "input field is empty"
                    errorReported.style = "color: red"
                    errorReported.setAttribute("id", "errorReported")
                    document.querySelector("#inputOptions").appendChild(errorReported)
                    setTimeout(removeError, 3500)

                    
                }

               
                
          }}>Add todo</button>
        </div>
    )
}