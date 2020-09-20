import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'

import { ToDoProvider } from './libs/ToDoContext'
import Home from './pages/home/Home'

// I was helped with the tests
test('Create new list', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <ToDoProvider>
        <Home />
      </ToDoProvider>
    </BrowserRouter>
  );

  const input = getByTestId('create-list-input')
  const button = getByTestId('create-list-button')

  const text = 'List 1'

  userEvent.type(input, text)

  expect(input.value).toBe(text)

  userEvent.click(button)

  const newList = getByTestId('new-list')

  expect(newList.textContent).toBe(text)
});


