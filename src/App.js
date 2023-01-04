import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Coins from './pages/Coins';
import './App.css';
import { fetchCoins } from './redux/app/app';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Coins" element={<Coins />} />
      </Routes>
    </div>
  );
}

export default App;
