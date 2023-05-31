import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import {PrivateRoutes} from './components/privateRoutes';
import { UserContextProvider } from './UserContext'
//import Suggestion from './components/Suggestion';

function App() {
  return (
    <Router>
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
    </Routes>
    </UserContextProvider>
    </Router>
  );
}

export default App;

