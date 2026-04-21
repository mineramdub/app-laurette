import { useState, useEffect } from 'react';

function parseParagraphe(texte) {
  const parts = [];
  const regex = /\[([^\]]+)\]/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(texte)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: texte.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'blank', value: match[1], id: parts.filter(p => p.type === 'blank').length });
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < texte.length) {
    parts.push({ type: 'text', value: texte.slice(lastIndex) });
  }

  return parts;
}

export default function TexteTrous({ data, onComplete }) {
  const parts = parseParagraphe(data.paragraphe);
  const blanks = parts.filter(p => p.type === 'blank');

  const [answers, setAnswers] = useState({});
  const [usedWords, setUsedWords] = useState([]);
  const [checked, setChecked] = useState(false);
  const [done, setDone] = useState(false);

  // Shuffle bank once
  const [bank] = useState(() => {
    const b = [...data.banqueMots];
    for (let i = b.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  });

  function placeWord(word) {
    // Find first empty blank
    const firstEmpty = blanks.find(b => !answers[b.id]);
    if (!firstEmpty) return;
    setAnswers(prev => ({ ...prev, [firstEmpty.id]: word }));
    setUsedWords(prev => [...prev, word]);
  }

  function removeAnswer(blankId) {
    const word = answers[blankId];
    if (!word) return;
    setAnswers(prev => {
      const n = { ...prev };
      delete n[blankId];
      return n;
    });
    setUsedWords(prev => prev.filter((w, i) => {
      // remove one occurrence
      const idx = prev.indexOf(word);
      return i !== idx;
    }));
  }

  function checkAnswers() {
    setChecked(true);
    const allCorrect = blanks.every(b => answers[b.id]?.toLowerCase() === b.value.toLowerCase());
    if (allCorrect) {
      onComplete && onComplete();
      setDone(true);
    }
  }

  function reset() {
    setAnswers({});
    setUsedWords([]);
    setChecked(false);
    setDone(false);
  }

  function isCorrect(blank) {
    return answers[blank.id]?.toLowerCase() === blank.value.toLowerCase();
  }

  const allFilled = blanks.every(b => answers[b.id] !== undefined);

  return (
    <div style={{ maxWidth: '700px' }}>
      <div style={{ marginBottom: '1.5rem', lineHeight: 2.2, fontSize: '1rem', color: 'var(--text)' }}>
        {parts.map((part, i) => {
          if (part.type === 'text') {
            return <span key={i}>{part.value}</span>;
          }
          const filled = answers[part.id];
          const correct = checked ? isCorrect(part) : null;
          return (
            <button
              key={i}
              onClick={() => filled && !done ? removeAnswer(part.id) : null}
              style={{
                display: 'inline-block',
                minWidth: '120px',
                padding: '0.15rem 0.7rem',
                margin: '0 0.2rem',
                borderRadius: '6px',
                border: checked
                  ? `2px solid ${correct ? 'var(--sage)' : 'var(--accent)'}`
                  : filled ? '2px solid var(--accent-light)' : '2px dashed var(--border)',
                background: checked
                  ? correct ? 'var(--sage-light)' : '#fde8d8'
                  : filled ? 'var(--accent-light)' : 'var(--bg-soft)',
                color: checked
                  ? correct ? 'var(--sage-dark)' : 'var(--accent-dark)'
                  : filled ? 'var(--accent-dark)' : 'var(--text-muted)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: filled && !done ? 'pointer' : 'default',
                transition: 'all 0.2s',
                verticalAlign: 'middle',
                textAlign: 'center',
              }}
              title={filled ? 'Cliquer pour retirer ce mot' : ''}
            >
              {filled || '___'}
              {checked && correct && ' ✓'}
            </button>
          );
        })}
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          Banque de mots
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {bank.map((word, i) => {
            const inUse = usedWords.includes(word) &&
              usedWords.filter(w => w === word).length > bank.filter(w => w === word).length - 1;
            // Count available copies
            const bankCount = bank.filter(w => w === word).length;
            const usedCount = usedWords.filter(w => w === word).length;
            const available = usedCount < bankCount;

            return (
              <button
                key={i}
                onClick={() => available && !done ? placeWord(word) : null}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '100px',
                  border: '1px solid var(--border)',
                  background: available ? 'var(--bg-card)' : 'var(--bg-soft)',
                  color: available ? 'var(--text)' : 'var(--text-muted)',
                  cursor: available && !done ? 'pointer' : 'default',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  opacity: available ? 1 : 0.45,
                  transition: 'all 0.15s',
                  textDecoration: available ? 'none' : 'line-through',
                }}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>

      {done && (
        <div className="encouragement" style={{ marginBottom: '1rem' }}>
          🌿 Parfait ! Tu as tout bon, continue comme ça !
        </div>
      )}

      {checked && !done && (
        <div style={{
          background: '#fde8d8',
          border: '1px solid var(--accent-light)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.8rem 1rem',
          marginBottom: '1rem',
          fontSize: '0.88rem',
          color: 'var(--accent-dark)',
        }}>
          Certaines réponses ne sont pas correctes. Les cases en rouge contiennent les erreurs — tu peux les retirer et réessayer !
        </div>
      )}

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        {!done && (
          <button
            className="btn btn-primary"
            onClick={checkAnswers}
            disabled={!allFilled}
          >
            Vérifier mes réponses
          </button>
        )}
        <button className="btn btn-ghost" onClick={reset}>
          Recommencer
        </button>
      </div>
    </div>
  );
}
