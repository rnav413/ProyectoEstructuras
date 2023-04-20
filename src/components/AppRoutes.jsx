import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import Profile from './components/Profile';
import {PrivateRoutes} from './privateRoutes';
import {UserProvider} from '../context/UserProvider'

//import Suggestion from './components/Suggestion';

function App() {
  return (
    <Router>
      <UserProvider > 
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/main" element={
          <PrivateRoutes>
        <Main />
        </PrivateRoutes>
        } />
        <Route path="/perfil" element={
          <PrivateRoutes>
        <Profile />
          </PrivateRoutes>
        } />
        
      </Routes>
      </UserProvider>
    </Router>
  );
}