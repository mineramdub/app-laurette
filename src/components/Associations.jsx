import { useState, useEffect } from 'react';

export default function Associations({ pairs, onComplete }) {
  const [shuffledLeft] = useState(() => shuffle([...pairs.map((p, i) => ({ ...p, id: i }))]));
  const [shuffledRight] = useState(() => shuffle([...pairs.map((p, i) => ({ ...p, id: i }))]));

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrong, setWrong] = useState([]);
  const [done, setDone] = useState(false);

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    if (selectedLeft !== null && selectedRight !== null) {
      if (selectedLeft === selectedRight) {
        // Correct match
        const newMatched = { ...matched, [selectedLeft]: true };
        setMatched(newMatched);
        setSelectedLeft(null);
        setSelectedRight(null);

        if (Object.keys(newMatched).length === pairs.length) {
          setDone(true);
          onComplete && onComplete();
        }
      } else {
        // Wrong
        setWrong([selectedLeft, selectedRight]);
        setTimeout(() => {
          setWrong([]);
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 700);
      }
    }
  }, [selectedLeft, selectedRight]);

  function selectLeft(id) {
    if (matched[id] || wrong.length) return;
    setSelectedLeft(id === selectedLeft ? null : id);
  }

  function selectRight(id) {
    if (matched[id] || wrong.length || selectedLeft === null) return;
    setSelectedRight(id);
  }

  function reset() {
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatched({});
    setWrong([]);
    setDone(false);
  }

  function getItemStyle(id, side) {
    const isMatched = matched[id];
    const isWrong = wrong.includes(id);
    const isSelected = side === 'left' ? selectedLeft === id : selectedRight === id;

    if (isMatched) return {
      background: 'var(--sage-light)',
      border: '2px solid var(--sage)',
      color: 'var(--sage-dark)',
      cursor: 'default',
    };
    if (isWrong) return {
      background: '#fde8d8',
      border: '2px solid var(--accent)',
      color: 'var(--accent-dark)',
      cursor: 'default',
    };
    if (isSelected) return {
      background: 'var(--accent-light)',
      border: '2px solid var(--accent)',
      color: 'var(--accent-dark)',
      cursor: 'pointer',
    };
    return {
      background: 'var(--bg-card)',
      border: '2px solid var(--border)',
      color: 'var(--text)',
      cursor: side === 'right' && selectedLeft === null ? 'default' : 'pointer',
      opacity: side === 'right' && selectedLeft === null ? 0.6 : 1,
    };
  }

  const itemStyle = {
    padding: '0.75rem 1.1rem',
    borderRadius: 'var(--radius-sm)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.88rem',
    transition: 'all 0.15s',
    textAlign: 'center',
  };

  if (done) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', maxWidth: '560px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌿</div>
        <h3 style={{ marginBottom: '0.5rem' }}>Toutes les associations trouvées !</h3>
        <p style={{ marginBottom: '1.5rem' }}>Excellent travail, tu maîtrises bien les correspondances.</p>
        <button className="btn btn-secondary" onClick={reset}>Recommencer</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px' }}>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontStyle: 'italic' }}>
        Clique sur un élément à gauche, puis son correspondant à droite.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
            Élément
          </div>
          {shuffledLeft.map((p) => (
            <button
              key={p.id}
              onClick={() => selectLeft(p.id)}
              style={{ ...itemStyle, ...getItemStyle(p.id, 'left'), border: getItemStyle(p.id, 'left').border }}
            >
              {matched[p.id] && <span style={{ marginRight: '0.35rem' }}>✓</span>}
              {p.gauche}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
            Correspond à
          </div>
          {shuffledRight.map((p) => (
            <button
              key={p.id}
              onClick={() => selectRight(p.id)}
              style={{ ...itemStyle, ...getItemStyle(p.id, 'right'), border: getItemStyle(p.id, 'right').border }}
            >
              {matched[p.id] && <span style={{ marginRight: '0.35rem' }}>✓</span>}
              {p.droite}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          {Object.keys(matched).length} / {pairs.length} associations trouvées
        </span>
      </div>
    </div>
  );
}
