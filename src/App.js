import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import HomePage from './Component/HomePage';
// import Login from'./Component/login';
// import Register from './Component/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/"  element={ <HomePage />} />
          <Route path="/Home" element={<Home />} />
           {/* <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
