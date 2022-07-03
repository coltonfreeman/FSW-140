import {useState} from "react"

export default function Todo(props) {
    const [editButton, setEdit] = useState()
    const [checkEdit, setCheckEdit] = useState(false)
    const [checkUpdate, setCheckUpdate] = useState(false)
    
    const toggleDisable = () => {
        setEdit((disabled) => !disabled)
    }
    const toggleEdit = () => {
        setCheckEdit ((change) => !change)
    }
    const toggleUpdate = () => {
        setCheckUpdate ((change) => !change)
    }

    if(checkEdit === false && checkUpdate === false){
        return(
            <li id={props.text.key} style={{textDecoration:props.text.isCompleted ? "line-through" : ""}}>
                <input type= "checkbox" onChange={() => {
                    props.todoComplete(props.text, props.text.id)
                    toggleDisable()    
                }}></input>
                <label>{props.text.text}</label>
                <button onClick={() => props.deletedTodos(props.text.id)}>X</button>
                <button onClick={() => toggleEdit()} disabled = {editButton}>Edit</button>
            </li>
        )
    }

    else if(checkEdit === true && checkUpdate === false){
        return(
            <li>
                <input type="text" id={`update${props.count}`} defaultValue={props.text.text} onChange={() => {
                     if (document.querySelector(`#update${props.count}`).value === "") {
                         document.querySelector(`#upBtn${props.count}`).disabled = true;
                     }
                     else if (document.querySelector(`#update${props.count}`).value !== "") {
                         document.querySelector(`#upBtn${props.count}`).disabled = false;
                     }
                }}></input>
                <button id={`upBtn${props.count}`} onClick={() => {
                    props.text.text = document.querySelector(`#update${props.count}`).value;
                    toggleUpdate()
                }}>Update</button>
                <button onClick={() => toggleEdit()}>Cancel</button>
            </li>
        )
    }
    
    else if (checkEdit === true && checkUpdate === true){
        toggleEdit();
        toggleUpdate();
        return(
            <li id={props.text.key} style={{textDecoration: props.text.isCompleted ? "line-through" : "" }}>
            <input type="checkbox" onChange={() => {
                props.completeToDo(props.text, props.text.id);
                toggleDisable();
            }}></input>
            <label>{props.text.text}</label>
            <button onClick={() => props.deleteToDo(props.text.id)}>X</button>
            <button onClick={() => toggleEdit()} disabled={editButton}>Edit</button>
        </li>
        )

    }
   
}