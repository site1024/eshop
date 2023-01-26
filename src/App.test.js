import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from "./Input"

describe("<Input />", () => {

  test('render email input', () => {
    render(<Input type="email" />);

    const inputEl = screen.getByTestId("input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "email");
  });

  test('render input and props', () => {
    render(<Input required/>);

    const inputEl = screen.getByTestId("input");
    userEvent.type(inputEl, "Alex");

    expect(inputEl).toHaveValue("Alex");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("required");
  });

});