import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Installation from './pages/faq/Installation';
import AjouterPlaylist from './pages/faq/AjouterPlaylist';
import SynchroniserPlaylist from './pages/faq/SynchroniserPlaylist';
import TelechargerPlaylist from './pages/faq/TelechargerPlaylist';
import SupprimerPlaylist from './pages/faq/SupprimerPlaylist';
import RetrouverPlaylist from './pages/faq/RetrouverPlaylist';
import MettreAJour from './pages/faq/MettreAJour';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/faq/installation" element={<Installation />} />
      <Route path="/faq/ajouter-playlist" element={<AjouterPlaylist />} />
      <Route path="/faq/synchroniser-playlist" element={<SynchroniserPlaylist />} />
      <Route path="/faq/telecharger-playlist" element={<TelechargerPlaylist />} />
      <Route path="/faq/supprimer-playlist" element={<SupprimerPlaylist />} />
      <Route path="/faq/retrouver-playlist" element={<RetrouverPlaylist />} />
      <Route path="/faq/mettre-a-jour" element={<MettreAJour />} />
    </Routes>
  );
}

export default App;