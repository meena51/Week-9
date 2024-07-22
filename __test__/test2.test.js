//The second test should Test adding and displaying a single todo
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTodo from '../AddTodo';
import Todos from '../Todos'; // Assuming this is the component that displays all todos

test('adding and displaying a single todo', () => {
  // Mock function to handle adding a todo
  const addTodoMock = jest.fn();

  // Render the AddTodo component
  render(<AddTodo todos={[]} addTodo={addTodoMock} />);

  // Get the input field and the add button
  const inputElement = screen.getByTestId('add-todo');
  const addButton = screen.getByTestId('add-todo-btn');

  // Simulate typing a todo and adding it
  fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
  fireEvent.click(addButton);

  // Ensure addTodo function was called with the correct parameters
  expect(addTodoMock).toHaveBeenCalledWith({
    id: 1,
    text: 'Buy groceries',
    completed: false
  });

  // Render the Todos component
  render(<Todos todos={[{ id: 1, text: 'Buy groceries', completed: false }]} />);

  // Ensure the added todo is displayed
  const todoElement = screen.getByText('Buy groceries');
  expect(todoElement).toBeInTheDocument();
});
