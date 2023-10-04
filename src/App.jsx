import { Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/layout';
import HomePage from './pages/home-page';
import CharacterPage from './pages/characters-page';
import ComicsPage from './pages/comics-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="comics" element={<ComicsPage />} />
        <Route path="characters" element={<CharacterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
