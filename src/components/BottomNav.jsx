import { Link, useLocation } from 'react-router-dom';

/* ── SVG icons (stroke-based, poids variable selon état actif) ── */
function IconHome({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke={active ? '#2b2420' : '#a59488'}
      strokeWidth={active ? 2.2 : 1.8}
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9z"/>
    </svg>
  );
}

function IconBook({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke={active ? '#2b2420' : '#a59488'}
      strokeWidth={active ? 2.2 : 1.8}
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
    </svg>
  );
}

function IconGame({ active }) {
  const c = active ? '#2b2420' : '#a59488';
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke={c}
      strokeWidth={active ? 2.2 : 1.8}
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="13" rx="4"/>
      <path d="M8 13.5h4m-2-2v4"/>
      <circle cx="16.5" cy="12.5" r=".9" fill={c} stroke="none"/>
      <circle cx="18.5" cy="14.5" r=".9" fill={c} stroke="none"/>
    </svg>
  );
}

function IconMic({ active }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke={active ? '#2b2420' : '#a59488'}
      strokeWidth={active ? 2.2 : 1.8}
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="11" rx="3"/>
      <path d="M19 10v2a7 7 0 01-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="22"/>
      <line x1="8"  y1="22" x2="16" y2="22"/>
    </svg>
  );
}

/* ── Tabs config ── */
const TABS = [
  {
    to: '/',
    label: 'Accueil',
    Icon: IconHome,
    match: p => p === '/',
  },
  {
    to: '/svt',
    label: 'Cours',
    Icon: IconBook,
    match: p => ['/svt', '/hlp', '/philo'].some(r => p === r || p.startsWith(r + '/')),
  },
  {
    to: '/jeux',
    label: 'Jeux',
    Icon: IconGame,
    match: p => p === '/jeux' || p.startsWith('/jeux/'),
  },
  {
    to: '/grand-oral',
    label: 'Oral',
    Icon: IconMic,
    match: p => p.startsWith('/grand-oral'),
  },
];

export function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="bottom-nav" aria-label="Navigation principale">
      {TABS.map(({ to, label, Icon, match }) => {
        const active = match(pathname);
        return (
          <Link
            key={to}
            to={to}
            className={`bottom-tab${active ? ' bottom-tab--active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <span className="bottom-tab-icon"><Icon active={active} /></span>
            <span className="bottom-tab-label">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
