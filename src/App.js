import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './Components/Header';
import Home from './Components/pages/Home';
import Movies from './Components/pages/Movies';
import Tvs from './Components/pages/Tvs';
import TvDetail from './Components/pages/TvDetail';
import Celebrity from './Components/pages/Celebrity';
import MovieDetail from './Components/pages/MovieDetail';
import Login from './Components/pages/LoginPage';
import { useSelector } from 'react-redux';
import MyPage from './Components/pages/MyPage';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movie" element={<Movies />} />
          <Route path="/Movie/:title" element={<MovieDetail />} />
          <Route path="/Tv" element={<Tvs />} />
          <Route path="/Tv/:name" element={<TvDetail />} />
          <Route path="/Celebrity" element={<Celebrity />} />
          <Route
            path="/LoginPage"
            element={user.id !== '' ? <MyPage /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
