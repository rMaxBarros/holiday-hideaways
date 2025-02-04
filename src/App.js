import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AccommodationsList from './components/AccommodationsList';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>
        <Routes> {/* Use Routes em vez de Switch */}
          <Route path="/" element={<AccommodationsList />} /> {/* Rota para a página principal */}
          <Route path="/favorites" element={<Favorites />} /> {/* Rota para a página de favoritos */}
        </Routes>
        {/* <AccommodationsList /> */}
      </div>
    </Router>
  )
}

export default App;
