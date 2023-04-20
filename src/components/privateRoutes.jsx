import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useLocation } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
    const { logged } = useContext(UserContext);

    const { pathname, search } = useLocation();
    //localStorage.setItem('lastPath', `${pathname}${search}`);

    return logged ? children : 
    <> 
    <h1>Error 401</h1>
    <h2>Acceso no autorizado</h2>
    <img src="https://http.cat/401" alt="" />
    </>
}