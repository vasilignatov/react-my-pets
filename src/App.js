import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import * as authService from './services/authService.js';

import Header from './components/Header/Header.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Logout from './components/Logout/Logout.js';
import Details from './components/Details/Details.js';
import Create from './components/Create/Create.js';
import Edit from './components/Edit/Edit.js';
import MyPets from './components/MyPets/MyPets.js';


function App() {

  const [userInfo, setUserInfo] = useState({ isAuth: false, email: '' });

  useEffect(() => {
    let email = null;

    setUserInfo({
      isAuth: Boolean(email),
      email: email
    });

  }, []);

  const onLogin = (email) => {
    setUserInfo({
      isAuth: true,
      email: email,
    });
  }

  const onLogout = () => {
    setUserInfo({
      isAuth: false,
      email: null
    });
  }

  return (
    <>
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" replace={true} />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/login' element={<Login onLogin={onLogin} />} />
          <Route path='/logout' element={<Logout onLogout={onLogout} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/my-pets' element={<MyPets />} />
          <Route path='/details/:petId' element={<Details />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@ReactMyPet</p>
      </footer>
    </>
  );
}

export default App;
