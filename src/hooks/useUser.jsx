import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const useUser = () => {
    const navigate = useNavigate();
	const { setUser, setLogged } = useContext(UserContext);
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const onLogin = (e) => {
		e.preventDefault();
		const localUser = {
			name: name,
			password: password,
		};
		setUser(localUser);

		localStorage.setItem('localUser', JSON.stringify(localUser));

		setLogged(true);

		const lastPath = localStorage.getItem('lastPath') || '/';
		navigate(lastPath, {
			replace: true,
		});
	};

	return { setUser, setLogged, handleName, handlePassword, onLogin };
};
