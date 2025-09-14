import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Home from './Home.jsx';
import About, { Song, Movie, Other } from './About.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="song" element={<Song />} />
          <Route path="movie" element={<Movie />} />
          <Route path=":keyword" element={<Other />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
