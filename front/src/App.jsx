import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './Layout';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import AccountComponent from './components/AccountComponent';
// import BookingsComponent from './components/accountcomponents/BookingsComponent';
// import PlacesComponent from './components/AccountComponents/PlacesComponent';


// conect to backend
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/account/:subpage?" element={<AccountComponent />} />
          {/* <Route path='/account/bookings' element={<BookingsComponent />} />
          <Route path='/account/places' element={<PlacesComponent />} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App
