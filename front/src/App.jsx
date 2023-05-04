import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './Layout';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
