import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonComponent from '../components/ButtonComponent';

test("MyButton has onPress function", () => {
  let x = 0;
  const { getByText } = render(<ButtonComponent onPress={() => x++}>Button</ButtonComponent>);

  const button = getByText('Button');
  expect(button).toBeDefined();
  fireEvent.click(button);
  expect(x).toBe(1);
});
