//Test deleting a todo
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from '../Todo';

test('deleting a todo item', () => {
  const deleteTodoMock = jest.fn();
  render(<Todo todo={{ id: 1, text: 'Buy groceries', completed: false }} deleteTodo={deleteTodoMock} />);

  const deleteButton = screen.getByTestId('delete-todo');

  fireEvent.click(deleteButton);

  expect(deleteTodoMock).toHaveBeenCalledWith(1);
});