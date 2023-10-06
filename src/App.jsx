import { Route, Routes } from 'react-router-dom';
import { Layout } from './layouts/layout';

import HomePage from './pages/home-page';
import CharacterPage from './pages/characters-page';
import ComicsPage from './pages/comics-page';
import SingleComicPage from './pages/single-comic-page';
import SingleCharacterPage from './pages/single-character-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="comics" element={<ComicsPage />} />
        <Route path="comics/:id" element={<SingleComicPage />} />
        <Route path="characters" element={<CharacterPage />} />
        <Route path="characters/:id" element={<SingleCharacterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
