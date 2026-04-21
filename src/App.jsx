import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar, MobileNav } from './components/Sidebar';
import Home from './pages/Home';
import SVTIndex from './pages/svt/SVTIndex';
import Chapitre1 from './pages/svt/Chapitre1';
import Chapitre2 from './pages/svt/Chapitre2';
import Chapitre3 from './pages/svt/Chapitre3';
import Chapitre4 from './pages/svt/Chapitre4';
import Chapitre5 from './pages/svt/Chapitre5';
import Chapitre6 from './pages/svt/Chapitre6';
import HLPIndex from './pages/hlp/HLPIndex';
import HLPChapitre1 from './pages/hlp/HLPChapitre1';
import HLPChapitre2 from './pages/hlp/HLPChapitre2';
import HLPChapitre3 from './pages/hlp/HLPChapitre3';
import GrandOralPage from './pages/grandoral/GrandOralPage';
import GamesPage from './pages/games/GamesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <MobileNav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jeux" element={<GamesPage />} />
            <Route path="/svt" element={<SVTIndex />} />
            <Route path="/svt/ch1" element={<Chapitre1 />} />
            <Route path="/svt/ch2" element={<Chapitre2 />} />
            <Route path="/svt/ch3" element={<Chapitre3 />} />
            <Route path="/svt/ch4" element={<Chapitre4 />} />
            <Route path="/svt/ch5" element={<Chapitre5 />} />
            <Route path="/svt/ch6" element={<Chapitre6 />} />
            <Route path="/hlp" element={<HLPIndex />} />
            <Route path="/hlp/ch1" element={<HLPChapitre1 />} />
            <Route path="/hlp/ch2" element={<HLPChapitre2 />} />
            <Route path="/hlp/ch3" element={<HLPChapitre3 />} />
            <Route path="/grand-oral" element={<GrandOralPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
