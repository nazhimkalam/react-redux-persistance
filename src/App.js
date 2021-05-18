import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';

// Performing REDUX with PERSISTANCE
function App() {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);
	const dispatch = useDispatch();
	const user = useSelector(selectUser);

	const handleLogin = () => {
		if (username !== null && password !== null) {
			dispatch(
				login({
					username: username,
					password: password,
				})
			);
		}
	};

	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<div className="app">
			<form>
				{user ? (
					<button onClick={handleLogout}>logout</button>
				) : (
					<>
						<label>
							<input
								type="text"
								placeholder="Username"
								name="username"
								required
								onChange={(e) => setUsername(e.target.value)}
							/>
						</label>
						<label>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</label>
						<button onClick={handleLogin}>login</button>
					</>
				)}
			</form>
		</div>
	);
}

export default App;
