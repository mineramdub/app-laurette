import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  {
    section: 'Sciences',
    items: [
      { to: '/svt', label: 'SVT', icon: '🧬', sub: 'Sciences de la Vie' },
      { to: '/svt/ch1', label: 'Chapitre 1', icon: '·', sub: 'Expression génétique', indent: true },
      { to: '/svt/ch2', label: 'Chapitre 2', icon: '·', sub: 'Génétique & évolution', indent: true },
      { to: '/svt/ch3', label: 'Chapitre 3', icon: '·', sub: 'Système immunitaire', indent: true },
      { to: '/svt/ch4', label: 'Chapitre 4', icon: '·', sub: "De l'œil au cerveau", indent: true },
      { to: '/svt/ch5', label: 'Chapitre 5', icon: '·', sub: 'Écologie & enjeux', indent: true },
      { to: '/svt/ch6', label: 'Chapitre 6', icon: '·', sub: 'Procréation humaine', indent: true },
    ]
  },
  {
    section: 'Humanités',
    items: [
      { to: '/hlp', label: 'HLP', icon: '📖', sub: 'Humanités & Philo' },
      { to: '/hlp/ch1', label: 'Chapitre 1', icon: '·', sub: 'Les pouvoirs de la parole', indent: true },
      { to: '/hlp/ch2', label: 'Chapitre 2', icon: '·', sub: 'Représentations du monde', indent: true },
      { to: '/hlp/ch3', label: 'Chapitre 3', icon: '·', sub: 'Histoire et mémoire', indent: true },
    ]
  },
  {
    section: 'Jeux',
    items: [
      { to: '/jeux', label: 'Jeux', icon: '🎮', sub: 'Réviser en jouant' },
    ]
  },
  {
    section: 'Oral',
    items: [
      { to: '/grand-oral', label: 'Grand Oral', icon: '🎤', sub: 'Préparer son oral' },
    ]
  }
];

function NavItems({ onClose }) {
  const location = useLocation();

  return (
    <nav className="sidebar-nav">
      {navItems.map((group) => (
        <div key={group.section}>
          <div className="nav-section-label">{group.section}</div>
          {group.items.map((item) => {
            const isActive = location.pathname === item.to ||
              (item.to !== '/' && location.pathname.startsWith(item.to) && item.to.length > 5);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={`nav-link${item.indent ? ' nav-link-indent' : ''}${isActive ? ' active' : ''}`}
                onClick={onClose}
                style={item.indent ? { paddingLeft: '1.75rem', fontSize: '0.82rem' } : {}}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      ))}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>Révisions Bac</h1>
        <p>Terminale · 2025–2026</p>
      </div>
      <NavItems onClose={() => {}} />
    </aside>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mobile-nav">
        <h1>Révisions Bac</h1>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
      <div className={`mobile-sidebar${open ? ' open' : ''}`}>
        <NavItems onClose={() => setOpen(false)} />
      </div>
    </>
  );
}
