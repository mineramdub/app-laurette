import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import HLPChapitre5 from './pages/hlp/HLPChapitre5';
import HLPChapitre6 from './pages/hlp/HLPChapitre6';
import HLPChapitre7 from './pages/hlp/HLPChapitre7';
import HLPChapitre8 from './pages/hlp/HLPChapitre8';
import HLPChapitre9 from './pages/hlp/HLPChapitre9';
import HLPChapitre10 from './pages/hlp/HLPChapitre10';
import PhiloIndex from './pages/philo/PhiloIndex';
import PhiloChapitre from './pages/philo/PhiloChapitre';
import GrandOralPage from './pages/grandoral/GrandOralPage';
import GamesPage from './pages/games/GamesPage';

function InstallBanner() {
  const [show, setShow] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // Ne pas montrer si déjà installée (mode standalone)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      || window.navigator.standalone === true;
    if (isStandalone) return;

    // Ne pas montrer si l'utilisateur a déjà fermé ce mois-ci
    const dismissed = localStorage.getItem('laure_install_dismissed');
    if (dismissed && Date.now() - parseInt(dismissed) < 1000 * 60 * 60 * 24 * 30) return;

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    setIsIos(ios);

    if (ios) {
      // iOS: montrer le guide manuel après 3s
      setTimeout(() => setShow(true), 3000);
    } else {
      // Android/Chrome: attendre l'événement beforeinstallprompt
      const handler = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShow(true);
      };
      window.addEventListener('beforeinstallprompt', handler);
      return () => window.removeEventListener('beforeinstallprompt', handler);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem('laure_install_dismissed', Date.now().toString());
  };

  const install = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') setShow(false);
    setDeferredPrompt(null);
  };

  if (!show) return null;

  return (
    <div style={{
      position:'fixed', bottom:0, left:0, right:0, zIndex:9999,
      background:'#2b2420', color:'#fdf6e9',
      padding:'14px 18px 18px',
      display:'flex', alignItems:'flex-start', gap:12,
      boxShadow:'0 -4px 20px rgba(0,0,0,.18)',
      fontFamily:'Inter, sans-serif',
      animation:'la-slide-up .3s ease-out',
    }}>
      <span style={{ fontSize:26, lineHeight:1 }}>📲</span>
      <div style={{ flex:1 }}>
        <div style={{ fontWeight:700, fontSize:14, marginBottom:4 }}>Installe l'app !</div>
        {isIos ? (
          <div style={{ fontSize:12.5, opacity:.85, lineHeight:1.5 }}>
            Dans Safari : appuie sur <strong>Partager</strong> (□↑) puis{' '}
            <strong>« Sur l'écran d'accueil »</strong>
          </div>
        ) : (
          <div style={{ fontSize:12.5, opacity:.85 }}>
            Accède à tes révisions en un tap, même sans connexion.
          </div>
        )}
        {!isIos && (
          <button
            onClick={install}
            style={{
              marginTop:10, padding:'8px 18px',
              background:'#f9dee2', color:'#2b2420',
              border:'none', borderRadius:999, fontWeight:700, fontSize:13,
              cursor:'pointer',
            }}
          >Installer</button>
        )}
      </div>
      <button onClick={dismiss} style={{ background:'none', border:'none', color:'#fdf6e9', fontSize:20, cursor:'pointer', padding:'0 4px', opacity:.7, lineHeight:1 }}>×</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <MobileNav />
        <InstallBanner />
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
            <Route path="/hlp/ch5" element={<HLPChapitre5 />} />
            <Route path="/hlp/ch6" element={<HLPChapitre6 />} />
            <Route path="/hlp/ch7" element={<HLPChapitre7 />} />
            <Route path="/hlp/ch8" element={<HLPChapitre8 />} />
            <Route path="/hlp/ch9" element={<HLPChapitre9 />} />
            <Route path="/hlp/ch10" element={<HLPChapitre10 />} />
            <Route path="/philo" element={<PhiloIndex />} />
            <Route path="/philo/:id" element={<PhiloChapitre />} />
            <Route path="/grand-oral" element={<GrandOralPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
