// src/App.test.js
// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import App from './App';
// import { fetchUser } from './scripts';  // Make sure this path is correct

// Mock the fetchUser function
// jest.mock('./scripts', () => ({
//   fetchUser: jest.fn(),
// }));

describe('App Component', () => {
	test('dummy test', async () => {});
	// beforeEach(() => {
	//   // Clear all instances and calls to constructor and all methods:
	//   jest.clearAllMocks();
	// });
	// test('fetches and displays user data on mount and on search', async () => {
	//   // Mock implementation of fetchUser
	//   fetchUser.mockResolvedValue([
	//     { User_id: 1, Email: 'jane@example.com', Username: 'Jane Smith' }
	//   ]);
	//   // Render the component
	//   render(<App />);
	//   // Assert that the user data is fetched and displayed on mount
	//   expect(await screen.findByText(/ID: 1/i)).toBeInTheDocument();
	//   expect(screen.getByText(/Email: jane@example.com/i)).toBeInTheDocument();
	//   expect(screen.getByText(/Name: Jane Smith/i)).toBeInTheDocument();
	//   // Simulate a search form submission
	//   fireEvent.change(screen.getByPlaceholderText(/search user.../i), { target: { value: 'john_doe' } });
	//   fireEvent.click(screen.getByText(/Search/i));
	//   // Assert that fetchUser was called with the correct arguments
	//   await waitFor(() => {
	//     expect(fetchUser).toHaveBeenCalledWith('john_doe');
	//   });
	//   // Mock a different user result after search
	//   fetchUser.mockResolvedValue([
	//     { User_id: 2, Email: 'john@example.com', Username: 'John Doe' }
	//   ]);
	//   // Re-render the component after the search
	//   render(<App />);
	//   // Assert that the new user data is fetched and displayed
	//   expect(await screen.findByText(/ID: 2/i)).toBeInTheDocument();
	//   expect(screen.getByText(/Email: john@example.com/i)).toBeInTheDocument();
	//   expect(screen.getByText(/Name: John Doe/i)).toBeInTheDocument();
	// });
});
