import React, { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {

	const [user, setUser] = useState({});
	const [logged, setLogged] = useState(false);

	return (
		<UserContext.Provider value={{ user, setUser, logged, setLogged }}>
			{children}
		</UserContext.Provider>
	);
};
