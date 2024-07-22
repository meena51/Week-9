//AddTodo.jsx
import { useState } from "react"

const AddTodo = ({ todos, addTodo }) => {
    const [todo, setTodo] = useState('') // state for input value bind to  input field
    let newTodo = {
        id: todos.length + 1,
        text: todo,
        completed: false
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodo)
        setTodo('')
    }

    return (
        <div className="add-todo__container">
            <input data-testid="add-todo"  type="text" className="add-todo__input" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button data-testid="add-todo-btn" className="add-todo__button" onClick={handleSubmit}>Add Todo</button>
        </div>
    )
}

export default AddTodo;