import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AccommodationsList from './components/AccommodationsList';
import Favorites from './components/Favorites';
import NavBar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  function ShowHeader() {
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' && <Header />}
        </>
    )
}

  return (
    <Router>
      <div className='App'>
        <NavBar />
        <ShowHeader />
        <Routes> {/* Routes and not Switches */}
          <Route path="/" element={<AccommodationsList />} /> {/* Routes to main page */}
          <Route path="/favorites" element={<Favorites />} /> {/* Routes to favorite page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
