import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import Login from '../components/Login';
import App from '../App';


test('renders login form', () => {
    render(<Login />);
	const usernameInput = screen.getByPlaceholderText(/username/i);
	const passwordInput = screen.getByPlaceholderText(/Password/i);
	const submitButton = screen.getByRole('button', {name: /Log In/i})

	expect(usernameInput).toBeInTheDocument();
	expect(passwordInput).toBeInTheDocument();
	expect(submitButton).toBeInTheDocument();

	fireEvent.change(usernameInput, {target: {value: 'testuser'} });
	fireEvent.change(passwordInput, {target: {value: 'testpassword'} });
	fireEvent.click(submitButton);

	const header = screen.getByRole ('heading', {name: /Your Cart/i});
	expect (header).toBeInTheDocument();
})