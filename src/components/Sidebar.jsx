import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  {
    section: 'Sciences',
    items: [
      { to: '/svt', label: 'SVT', icon: '🧬', sub: 'Sciences de la Vie' },
      { to: '/svt/ch1', label: 'Ch. 1', icon: '·', sub: 'Expression génétique', indent: true },
      { to: '/svt/ch2', label: 'Ch. 2', icon: '·', sub: 'Génétique & évolution', indent: true },
      { to: '/svt/ch3', label: 'Ch. 3', icon: '·', sub: 'Système immunitaire', indent: true },
      { to: '/svt/ch4', label: 'Ch. 4', icon: '·', sub: "De l'œil au cerveau", indent: true },
      { to: '/svt/ch5', label: 'Ch. 5', icon: '·', sub: 'Écologie & enjeux', indent: true },
      { to: '/svt/ch6', label: 'Ch. 6', icon: '·', sub: 'Procréation humaine', indent: true },
      { to: '/svt/ch7', label: 'Ch. 7', icon: '·', sub: 'Régulation glycémie', indent: true },
      { to: '/svt/ch8', label: 'Ch. 8', icon: '·', sub: 'Plantes à fleurs', indent: true },
      { to: '/svt/ch9', label: 'Ch. 9', icon: '·', sub: 'Domestication plantes', indent: true },
      { to: '/svt/ch10', label: 'Ch. 10', icon: '·', sub: 'Variations climatiques', indent: true },
      { to: '/svt/ch11', label: 'Ch. 11', icon: '·', sub: 'Réchauffement', indent: true },
      { to: '/svt/ch12', label: 'Ch. 12', icon: '·', sub: 'Histoire géologique', indent: true },
      { to: '/svt/ch13', label: 'Ch. 13', icon: '·', sub: 'Contraction musculaire', indent: true },
      { to: '/svt/ch14', label: 'Ch. 14', icon: '·', sub: 'Énergie & dopage', indent: true },
      { to: '/svt/ch15', label: 'Ch. 15', icon: '·', sub: 'Stress aigu', indent: true },
      { to: '/svt/ch16', label: 'Ch. 16', icon: '·', sub: 'Stress chronique', indent: true },
      { to: '/svt/ch17', label: 'Ch. 17', icon: '·', sub: 'Cerveau fragile', indent: true },
    ]
  },
  {
    section: 'Humanités',
    items: [
      { to: '/hlp', label: 'HLP', icon: '📖', sub: 'Humanités & Littérature' },
      { to: '/hlp/ch1', label: 'Ch. 1', icon: '·', sub: 'Pouvoirs de la parole', indent: true },
      { to: '/hlp/ch2', label: 'Ch. 2', icon: '·', sub: 'Représentations du monde', indent: true },
      { to: '/hlp/ch3', label: 'Ch. 3', icon: '·', sub: 'Histoire et mémoire', indent: true },
      { to: '/hlp/ch4', label: 'Ch. 4', icon: '·', sub: 'La recherche de soi', indent: true },
      { to: '/hlp/ch5', label: 'Ch. 5', icon: '·', sub: 'Éducation & transmission', indent: true },
      { to: '/hlp/ch6', label: 'Ch. 6', icon: '·', sub: 'Expressions sensibilité', indent: true },
      { to: '/hlp/ch7', label: 'Ch. 7', icon: '·', sub: 'Métamorphoses du moi', indent: true },
      { to: '/hlp/ch8', label: 'Ch. 8', icon: '·', sub: "L'humanité en question", indent: true },
      { to: '/hlp/ch9', label: 'Ch. 9', icon: '·', sub: 'Histoire et violence', indent: true },
      { to: '/hlp/ch10', label: 'Ch. 10', icon: '·', sub: "L'humain & l'existence", indent: true },
    ]
  },
  {
    section: 'Philosophie',
    items: [
      { to: '/philo', label: 'Philo', icon: '🦉', sub: 'Notions du BAC' },
      { to: '/philo/conscience', label: 'Conscience', icon: '·', sub: 'Cogito, inconscient', indent: true },
      { to: '/philo/liberte', label: 'Liberté', icon: '·', sub: 'Libre arbitre, déterminisme', indent: true },
      { to: '/philo/verite', label: 'Vérité', icon: '·', sub: 'Science, post-vérité', indent: true },
      { to: '/philo/etat', label: 'L\'État', icon: '·', sub: 'Contrat social, démocratie', indent: true },
      { to: '/philo/bonheur', label: 'Bonheur', icon: '·', sub: 'Épicure, stoïcisme', indent: true },
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
