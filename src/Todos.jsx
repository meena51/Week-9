//Todos.jsx
import Todo from "./Todo"

const Todos = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div  className="all-todos__container" data-testid="all-todos-container">
            <h2 data-testid="todos-heading">{todos.length} {todos.length > 1 ? 'Todos' : 'Todo'}</h2>
            {todos.map((todo) => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}
        </div>
    )
}

export default Todos;