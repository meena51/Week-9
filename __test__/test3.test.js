//Test adding and displaying multiple todos. Means you have to test whether adding multiple todos will work properly or not.
import { render, fireEvent } from '@testing-library/react';
import Todos from '../Todos';

test('adds and displays multiple todos', () => {
    const addTodoMock = jest.fn();
    const todos = [
      { id: 1, text: 'Buy Chocolate', completed: false },
      { id: 2, text: 'Do Assignment', completed: false },
    ];
  
    render(<Todos todos={todos} addTodo={addTodoMock} />);
  
    todos.forEach(todo => addTodoMock(todo));
  
    todos.forEach(todo => {
      expect(addTodoMock).toHaveBeenCalledWith(todo);
    });
  });
  