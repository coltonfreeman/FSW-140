import Todo from './Todo'

export default function ToDoList(props){
    let count = 0
    return(
       props.text.map((r) => {
        count++    
        return(
                <Todo
                    key = {r.id}
                    text = {r}
                    todoComplete = {props.todoComplete}
                    deletedTodos = {props.deletedTodos}
                    count = {count} 
                />
            )
       })
    );
}