import { useState } from 'react';
import { grandOralThemes, oralTemplate } from '../../data/grandOralData';

export default function GrandOralPage() {
  const [section, setSection] = useState('sujets');
  const [selectedTheme, setSelectedTheme] = useState(null);

  const tabs = [
    { id: 'sujets', label: '💡 Choisir ton sujet' },
    { id: 'structurer', label: '📝 Structurer ton oral' },
    { id: 'sentrainer', label: '🎙️ S\'entraîner' },
  ];

  return (
    <div>
      <div className="page-header">
        <div className="subject-tag" style={{ background: '#e8d4f0', color: '#6a3e7e' }}>Grand Oral</div>
        <h1>Grand Oral</h1>
        <p>Prépare ton grand oral avec méthode et sérénité. Trouve ton sujet, structure ton intervention et entraîne-toi à ton rythme.</p>
      </div>

      <div className="exercise-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`exercise-tab${section === tab.id ? ' active' : ''}`}
            onClick={() => setSection(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {section === 'sujets' && (
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Sujets SVT × HLP</h2>
            <p>Ces thèmes croisent les deux spécialités — idéaux pour le grand oral. Clique sur un sujet pour en savoir plus.</p>
          </div>

          <div className="grand-oral-grid">
            {grandOralThemes.map(theme => (
              <div
                key={theme.id}
                className="theme-card"
                onClick={() => setSelectedTheme(selectedTheme?.id === theme.id ? null : theme)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4>{theme.titre}</h4>
                  <span style={{ color: 'var(--accent)', fontSize: '0.9rem', flexShrink: 0, marginLeft: '0.5rem' }}>
                    {selectedTheme?.id === theme.id ? '▲' : '▼'}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  {theme.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '0.15rem 0.55rem',
                      background: 'var(--bg-soft)',
                      border: '1px solid var(--border)',
                      borderRadius: '100px',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      fontWeight: 500
                    }}>{tag}</span>
                  ))}
                </div>
                {selectedTheme?.id === theme.id && (
                  <p style={{ fontSize: '0.88rem', color: 'var(--text)', lineHeight: 1.6, marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-soft)' }}>
                    {theme.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow)' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-dark)' }}>💡 Comment choisir ton sujet ?</h3>
            <ul style={{ marginLeft: '1.25rem' }}>
              <li style={{ color: 'var(--text-light)', marginBottom: '0.5rem', lineHeight: 1.6 }}>Choisis un sujet qui t'intéresse vraiment — tu vas en parler pendant 20 minutes.</li>
              <li style={{ color: 'var(--text-light)', marginBottom: '0.5rem', lineHeight: 1.6 }}>Assure-toi de pouvoir faire le lien avec tes deux spécialités (SVT et HLP).</li>
              <li style={{ color: 'var(--text-light)', marginBottom: '0.5rem', lineHeight: 1.6 }}>Formule une problématique claire sous forme de question.</li>
              <li style={{ color: 'var(--text-light)', lineHeight: 1.6 }}>Valide ton sujet avec ton professeur avant de commencer à préparer.</li>
            </ul>
          </div>
        </div>
      )}

      {section === 'structurer' && (
        <div>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Structure ton oral</h2>
            <p>Le grand oral dure 20 minutes : 5 min d'exposé + 10 min d'échange avec le jury + 5 min sur ton projet. Voici le plan pour l'exposé.</p>
          </div>

          <div className="oral-template">
            {oralTemplate.map((step) => (
              <div key={step.etape} className="oral-step">
                <div className="oral-step-num">{step.etape}</div>
                <div className="oral-step-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                    <h4>{step.titre}</h4>
                    <span style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      background: 'var(--bg-soft)',
                      padding: '0.15rem 0.55rem',
                      borderRadius: '100px',
                      border: '1px solid var(--border)'
                    }}>{step.duree}</span>
                  </div>
                  <ul style={{ marginLeft: '1.1rem', marginBottom: '0.75rem' }}>
                    {step.consignes.map((c, i) => (
                      <li key={i} style={{ color: 'var(--text-light)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '0.3rem' }}>{c}</li>
                    ))}
                  </ul>
                  <div style={{
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-soft)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}>
                    {step.exemple}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.5rem', background: 'var(--sage-light)', border: '1px solid var(--sage)', borderRadius: 'var(--radius)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '1.25rem' }}>🌿</span>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--sage-dark)', marginBottom: '0.25rem' }}>Conseil</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text)', margin: 0 }}>
                Entraîne-toi à voix haute, chronomètre en main. L'objectif n'est pas d'apprendre un texte par cœur,
                mais d'être à l'aise avec ton sujet pour pouvoir répondre aux questions du jury avec naturel.
              </p>
            </div>
          </div>
        </div>
      )}

      {section === 'sentrainer' && (
        <div>
          <div className="placeholder-section">
            <div className="soon-badge">Bientôt disponible</div>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎙️</div>
            <h2 style={{ marginBottom: '0.75rem' }}>S'entraîner à l'oral</h2>
            <p>
              Cette section proposera bientôt des exercices pour t'entraîner à l'oral : questions types du jury,
              minuteur pour chronométrer ton exposé, et grille d'auto-évaluation bienveillante.
            </p>
            <div style={{ marginTop: '1.5rem', padding: '1.25rem 1.5rem', background: 'var(--bg-soft)', borderRadius: 'var(--radius-sm)', display: 'inline-block' }}>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>
                En attendant, entraîne-toi devant un miroir ou avec un proche — c'est la meilleure préparation !
              </p>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { emoji: '⏱️', titre: 'Minuteur d\'exposé', desc: 'Chronométre ton intervention de 5 minutes.' },
              { emoji: '❓', titre: 'Questions du jury', desc: 'Prépare-toi aux questions types sur ton sujet.' },
              { emoji: '📋', titre: 'Auto-évaluation', desc: 'Grille bienveillante pour progresser sans stress.' },
            ].map((item, i) => (
              <div key={i} className="card" style={{ textAlign: 'center', opacity: 0.6 }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.emoji}</div>
                <h3 style={{ marginBottom: '0.35rem', fontSize: '1rem' }}>{item.titre}</h3>
                <p style={{ fontSize: '0.82rem' }}>{item.desc}</p>
                <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>Bientôt disponible</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
