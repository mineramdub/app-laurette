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
import Chapitre7 from './pages/svt/Chapitre7';
import Chapitre8 from './pages/svt/Chapitre8';
import Chapitre9 from './pages/svt/Chapitre9';
import Chapitre10 from './pages/svt/Chapitre10';
import Chapitre11 from './pages/svt/Chapitre11';
import Chapitre12 from './pages/svt/Chapitre12';
import Chapitre13 from './pages/svt/Chapitre13';
import Chapitre14 from './pages/svt/Chapitre14';
import Chapitre15 from './pages/svt/Chapitre15';
import Chapitre16 from './pages/svt/Chapitre16';
import Chapitre17 from './pages/svt/Chapitre17';
import HLPIndex from './pages/hlp/HLPIndex';
import HLPChapitre1 from './pages/hlp/HLPChapitre1';
import HLPChapitre2 from './pages/hlp/HLPChapitre2';
import HLPChapitre3 from './pages/hlp/HLPChapitre3';
import HLPChapitre4 from './pages/hlp/HLPChapitre4';
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
            <Route path="/svt/ch7" element={<Chapitre7 />} />
            <Route path="/svt/ch8" element={<Chapitre8 />} />
            <Route path="/svt/ch9" element={<Chapitre9 />} />
            <Route path="/svt/ch10" element={<Chapitre10 />} />
            <Route path="/svt/ch11" element={<Chapitre11 />} />
            <Route path="/svt/ch12" element={<Chapitre12 />} />
            <Route path="/svt/ch13" element={<Chapitre13 />} />
            <Route path="/svt/ch14" element={<Chapitre14 />} />
            <Route path="/svt/ch15" element={<Chapitre15 />} />
            <Route path="/svt/ch16" element={<Chapitre16 />} />
            <Route path="/svt/ch17" element={<Chapitre17 />} />
            <Route path="/hlp" element={<HLPIndex />} />
            <Route path="/hlp/ch1" element={<HLPChapitre1 />} />
            <Route path="/hlp/ch2" element={<HLPChapitre2 />} />
            <Route path="/hlp/ch3" element={<HLPChapitre3 />} />
            <Route path="/hlp/ch4" element={<HLPChapitre4 />} />
            <Route path="/grand-oral" element={<GrandOralPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
