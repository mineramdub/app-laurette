import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import { philoNotions } from '../../data/philoData';

const notionKeys = Object.fromEntries(
  philoNotions.map(n => [
    n.id,
    [`philo_${n.id}_cours`, `philo_${n.id}_flashcards`, `philo_${n.id}_trous`, `philo_${n.id}_quiz`]
  ])
);

export default function PhiloIndex() {
  const navigate = useNavigate();
  const { countDone } = useProgress();

  const allKeys = Object.values(notionKeys).flat();
  const totalDone = countDone(allKeys);
  const pct = Math.round((totalDone / allKeys.length) * 100);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', animation: 'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>

      {/* Purple header */}
      <div style={{
        background: '#c9b8e8', padding: '24px 28px 40px', position: 'relative',
        boxShadow: 'inset 0 -10px 0 #b09ad044', borderRadius: '0 0 28px 28px', marginBottom: 24,
      }}>
        <button onClick={() => navigate('/')} style={{
          width: 36, height: 36, borderRadius: 18, background: 'rgba(253,246,233,.7)',
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, cursor: 'pointer', marginBottom: 12,
        }}>←</button>
        <div style={{ fontSize: 11, color: '#3d2b5e', letterSpacing: .7, textTransform: 'uppercase', fontWeight: 500 }}>
          Philosophie · Tronc commun
        </div>
        <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 52, fontWeight: 600, letterSpacing: -2, lineHeight: 1, marginTop: 4 }}>
          Philo
        </div>
        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 11, color: '#3d2b5e', marginBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
            <span>progression globale</span><span>{pct}%</span>
          </div>
          <div style={{ height: 7, background: 'rgba(253,246,233,.6)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', background: '#2b2420', borderRadius: 4, width: `${pct}%`, transition: 'width .6s ease' }} />
          </div>
        </div>
      </div>

      {/* Notion list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {philoNotions.map((notion, i) => {
          const keys = notionKeys[notion.id];
          const done = countDone(keys);
          const nPct = Math.round((done / keys.length) * 100);
          return (
            <NotionRow
              key={notion.id}
              num={i + 1}
              title={notion.titre}
              desc={notion.description}
              cards={notion.flashcards?.length ?? 0}
              pct={nPct}
              accent="#b09ad0"
              onClick={() => navigate(`/philo/${notion.id}`)}
            />
          );
        })}
      </div>

      {/* Quick tiles */}
      <div style={{ marginTop: 28 }}>
        <SectionLabel>Accès rapide</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <QuickTile bg="#e8d8f8" icon="🎴" title="Flashcards" sub="auteurs & notions" onClick={() => navigate('/philo/conscience')} />
          <QuickTile bg="#fbe9a8" icon="🎤" title="Grand Oral" sub="sujets philo" onClick={() => navigate('/grand-oral')} />
          <QuickTile bg="#fdf6e9" icon="📄" title="Fiches" sub={`${philoNotions.length} notions`} border onClick={() => navigate('/philo/liberte')} />
          <QuickTile bg="#fdf6e9" icon="🧠" title="Quiz" sub="tester ses connaissances" border onClick={() => navigate('/philo/verite')} />
        </div>
      </div>
    </div>
  );
}

function NotionRow({ num, title, pct, cards, accent, onClick }) {
  const r = 11, circ = 2 * Math.PI * r;
  const done = pct === 100;
  return (
    <div className="la-tap" onClick={onClick} style={{
      background: '#fff', border: '1px solid #e8ddcb', borderRadius: 16,
      padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14,
      boxShadow: '0 1px 8px rgba(43,36,32,.04)',
    }}>
      <div style={{ position: 'relative', width: 30, height: 30, flexShrink: 0 }}>
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r={r} fill="none" stroke="#e8ddcb" strokeWidth="2.5" />
          <circle cx="15" cy="15" r={r} fill="none" stroke={accent}
            strokeWidth="2.5" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={circ * (1 - pct / 100)}
            transform="rotate(-90 15 15)" style={{ transition: 'stroke-dashoffset .5s ease' }} />
        </svg>
        {done && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: accent }}>✓</div>}
        {!done && pct === 0 && <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: '#a59488', fontWeight: 700 }}>{num}</div>}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -.1, color: '#2b2420', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </div>
        <div style={{ fontSize: 11, color: '#6f5f55', marginTop: 2, display: 'flex', gap: 8 }}>
          <span>{cards} cartes</span>
          {done && <span style={{ color: '#7a9e7e', fontWeight: 600 }}>· maîtrisé</span>}
          {!done && pct > 0 && <span style={{ color: accent, fontWeight: 600 }}>· {pct}% fait</span>}
        </div>
      </div>
      <div style={{ fontSize: 16, color: '#a59488' }}>→</div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div style={{ fontSize: 11, color: '#2b2420', letterSpacing: .9, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10, opacity: .7 }}>{children}</div>;
}

function QuickTile({ bg, icon, title, sub, border, onClick }) {
  return (
    <div className="la-tap" onClick={onClick} style={{
      background: bg, borderRadius: 14, padding: '12px 14px', minHeight: 80,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      border: border ? '1px solid #e8ddcb' : 'none', cursor: 'pointer',
    }}>
      <div style={{ fontSize: 20 }}>{icon}</div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#2b2420' }}>{title}</div>
        <div style={{ fontSize: 10, color: '#6f5f55', marginTop: 2 }}>{sub}</div>
      </div>
    </div>
  );
}
