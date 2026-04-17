import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Homepage from '../pages/Homepage';
import Movies from '../pages/Movies';
import TVSeries from '../pages/TVSeries';
import Bookmarked from '../pages/Bookmarked';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="tv-series" element={<TVSeries />} />
        <Route path="bookmarked" element={<Bookmarked />} />
      </Route>
    </Routes>
  );
}
