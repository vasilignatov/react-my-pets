import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as authService from './services/authService.js';

import Header from './components/Header/Header.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login.js';
import Details from './components/Details/Details.js';
import Create from './components/Create/Create.js';
import Edit from './components/Edit/Edit.js';
import MyPets from './components/MyPets/MyPets.js';


function App() {

  const [userInfo, setUserInfo] = useState({ isAuth: false, username: '' });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuth: Boolean(user),
      user
    });

  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuth: true,
      user: username,
    });
  }

  return (
    <>
      <Header {...userInfo} />

      <main id="site-content">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login onLogin={onLogin} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/details' element={<Details />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/my-pets' element={<MyPets />} />
        </Routes>
      </main>

      <footer id="site-footer">
        <p>@ReactMyPet</p>
      </footer>
    </>
  );
}

export default App;
