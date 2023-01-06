import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Coins from './pages/Coins';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
