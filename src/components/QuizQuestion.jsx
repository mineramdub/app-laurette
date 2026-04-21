import { useState } from 'react';

export default function QuizQuestion({ questions, onComplete }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);

  const q = questions[index];

  function handleSelect(i) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
  }

  function handleNext() {
    setSelected(null);
    setAnswered(false);
    if (index < questions.length - 1) {
      setIndex(i => i + 1);
    } else {
      setDone(true);
      onComplete && onComplete();
    }
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setAnswered(false);
    setDone(false);
  }

  if (done) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌸</div>
        <h3 style={{ marginBottom: '0.5rem' }}>Quiz terminé !</h3>
        <p style={{ marginBottom: '1.5rem' }}>Tu as répondu à toutes les questions — c'est super ! L'important, c'est de comprendre les explications.</p>
        <button className="btn btn-secondary" onClick={restart}>Recommencer le quiz</button>
      </div>
    );
  }

  const correct = selected === q.bonneReponse;

  return (
    <div style={{ maxWidth: '620px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          Question {index + 1} / {questions.length}
        </span>
        <div style={{ display: 'flex', gap: '0.3rem' }}>
          {questions.map((_, i) => (
            <div key={i} style={{
              width: '28px', height: '4px', borderRadius: '2px',
              background: i < index ? 'var(--sage-light)' : i === index ? 'var(--accent)' : 'var(--border)'
            }} />
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '1.25rem', lineHeight: 1.5 }}>{q.question}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {q.options.map((opt, i) => {
            let bg = 'var(--bg-soft)';
            let border = '1px solid var(--border)';
            let color = 'var(--text)';

            if (answered) {
              if (i === q.bonneReponse) {
                bg = 'var(--sage-light)';
                border = '1px solid var(--sage)';
                color = 'var(--sage-dark)';
              } else if (i === selected && !correct) {
                bg = '#fde8d8';
                border = '1px solid var(--accent-light)';
                color = 'var(--accent-dark)';
              }
            } else if (selected === i) {
              bg = 'var(--accent-light)';
              border = '1px solid var(--accent)';
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={answered}
                style={{
                  background: bg,
                  border,
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.75rem 1rem',
                  textAlign: 'left',
                  cursor: answered ? 'default' : 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color,
                  fontWeight: i === q.bonneReponse && answered ? 500 : 400,
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{
                  width: '22px', height: '22px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', fontWeight: 600, flexShrink: 0,
                  color: 'var(--text-muted)'
                }}>
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
                {answered && i === q.bonneReponse && <span style={{ marginLeft: 'auto' }}>✓</span>}
                {answered && i === selected && !correct && i !== q.bonneReponse && <span style={{ marginLeft: 'auto' }}>✗</span>}
              </button>
            );
          })}
        </div>
      </div>

      {answered && (
        <div style={{
          background: correct ? 'var(--sage-light)' : '#fde8d8',
          border: `1px solid ${correct ? 'var(--sage)' : 'var(--accent-light)'}`,
          borderRadius: 'var(--radius)',
          padding: '1.25rem 1.5rem',
          marginBottom: '1rem',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div style={{
            fontWeight: 600,
            marginBottom: '0.35rem',
            color: correct ? 'var(--sage-dark)' : 'var(--accent-dark)',
            fontFamily: 'var(--font-heading)',
          }}>
            {correct ? '🌿 Bonne réponse !' : '💡 Pas tout à fait…'}
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text)', margin: 0 }}>{q.explication}</p>
        </div>
      )}

      {answered && (
        <button className="btn btn-primary" onClick={handleNext}>
          {index < questions.length - 1 ? 'Question suivante →' : 'Terminer le quiz'}
        </button>
      )}
    </div>
  );
}
