import { useState } from 'react';

export default function SchemaInteractif({ stages, title, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [seen, setSeen] = useState(new Set());

  function handleSelect(stage) {
    setSelected(stage.id === selected?.id ? null : stage);
    setSeen(prev => {
      const next = new Set(prev);
      next.add(stage.id);
      if (next.size === stages.length) {
        onComplete && onComplete();
      }
      return next;
    });
  }

  return (
    <div style={{ maxWidth: '700px' }}>
      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
        Clique sur chaque étape pour voir sa description.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginBottom: '2rem' }}>
        {stages.map((stage) => {
          const isSeen = seen.has(stage.id);
          const isSelected = selected?.id === stage.id;

          return (
            <button
              key={stage.id}
              onClick={() => handleSelect(stage)}
              style={{
                padding: '0.6rem 1.1rem',
                borderRadius: '100px',
                border: isSelected
                  ? '2px solid var(--accent)'
                  : isSeen
                  ? '2px solid var(--sage)'
                  : '2px solid var(--border)',
                background: isSelected
                  ? 'var(--accent-light)'
                  : isSeen
                  ? 'var(--sage-light)'
                  : 'var(--bg-card)',
                color: isSelected
                  ? 'var(--accent-dark)'
                  : isSeen
                  ? 'var(--sage-dark)'
                  : 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.88rem',
                fontWeight: isSelected ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              {stage.emoji && <span>{stage.emoji}</span>}
              {stage.nom}
              {isSeen && !isSelected && <span style={{ fontSize: '0.7rem' }}>✓</span>}
            </button>
          );
        })}
      </div>

      {selected ? (
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--accent-light)',
            borderRadius: 'var(--radius)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow)',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            {selected.emoji && <span style={{ fontSize: '1.5rem' }}>{selected.emoji}</span>}
            <h3 style={{ color: 'var(--accent-dark)' }}>{selected.nom}</h3>
          </div>
          <p style={{ color: 'var(--text)', lineHeight: 1.7, margin: 0 }}>{selected.description}</p>
        </div>
      ) : (
        <div style={{
          background: 'var(--bg-soft)',
          border: '1px dashed var(--border)',
          borderRadius: 'var(--radius)',
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          fontStyle: 'italic',
        }}>
          Clique sur une étape ci-dessus pour voir son explication
        </div>
      )}

      {seen.size === stages.length && (
        <div className="encouragement" style={{ marginTop: '1.25rem' }}>
          🌿 Bravo ! Tu as exploré toutes les étapes.
        </div>
      )}

      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
        {seen.size} / {stages.length} étapes explorées
      </div>
    </div>
  );
}
