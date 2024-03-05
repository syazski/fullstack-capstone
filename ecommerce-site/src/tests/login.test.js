import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../components/Login';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe ('form', () => {
	const initialState = { 
	username: "", 
	password: "", };
	const mockStore = configureStore();
	let store;

	test('renders login form', () => {
		store = mockStore(initialState);
		render(
		<Provider store={store}>
		<BrowserRouter>
		<Login />
		</BrowserRouter>
		</Provider>
		);

		const usernameInput = screen.getAllByLabelText(/username/i);
		const passwordInput = screen.getAllByLabelText(/Password/i);
		const submitButton = screen.getAllByRole("button");

		expect(usernameInput[0]).toBeInTheDocument();
		expect(passwordInput[0]).toBeInTheDocument();
		expect(submitButton[0]).toBeInTheDocument();
	})
})

// describe ('error', () => {
// 	const initialState = { 
// 		username: "", 
// 		password: "", };
// 		const mockStore = configureStore();
// 		let store;

// 	test('login form display errors', () => {
// 		store = mockStore(initialState);
// 		render(
// 		<Provider store={store}>
// 		<BrowserRouter>
// 		<Login />
// 		</BrowserRouter>
// 		</Provider>
// 		);

// 		const usernameInput = screen.getAllByLabelText(/username/i);
// 		const passwordInput = screen.getAllByLabelText(/Password/i);
// 		const submitButton = screen.getAllByRole("button");

// 		fireEvent.change(usernameInput, {target: {value: 'testuser'} });
// 		fireEvent.change(passwordInput, {target: {value: 'testpassword'} });
// 		fireEvent.click(submitButton);

// 		const header = screen.getByText(/Error/i);
// 		expect (header).toBeInTheDocument();

// 	})
// })

