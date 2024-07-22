//Todo.jsx
import { MdRadioButtonChecked } from 'react-icons/md';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div data-testid="todo-section" className="todo__container ">
            <div className="todo__checkbox" onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? <MdRadioButtonChecked className='icon checked' /> : <MdRadioButtonUnchecked className='icon' />}
            </div>
            <div className={todo.completed ? 'todo__text complete' : 'todo__text'}>
                <p>{todo.text}</p>
            </div>
            <div data-testid="delete-todo"  className="todo__delete" onClick={() => deleteTodo(todo.id)}>
                <AiOutlineDelete className='icon' />
            </div>
        </div>
    )
}

export default Todo;