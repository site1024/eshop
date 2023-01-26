import { render, screen, fireEvent } from '@testing-library/react';
import Button from "./Button.js";

//Button test

test('Renders with expected className', () => {
  const {container} = render(<Button className="btn-okay">Click Me</Button>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(container.firstChild).toHaveClass('btn btn-default btn-okay') 
});
