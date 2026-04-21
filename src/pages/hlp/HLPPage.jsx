const philosophieTopics = [
  "La connaissance",
  "Le bonheur",
  "La liberté",
  "La politique",
  "La morale et l'éthique",
];

const litteratureTopics = [
  "Analyse de texte",
  "Argumentation",
  "Rhétorique",
];

export default function HLPPage() {
  return (
    <div>
      <div className="page-header">
        <div className="subject-tag" style={{ background: 'var(--sage-light)', color: 'var(--sage-dark)' }}>HLP</div>
        <h1>Humanités, Littérature et Philosophie</h1>
        <p>Cette section sera bientôt disponible. Les thèmes ci-dessous seront couverts avec cours et exercices.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div className="placeholder-section" style={{ textAlign: 'left' }}>
          <div className="soon-badge">Philosophie</div>
          <h2 style={{ marginBottom: '0.75rem' }}>Philosophie</h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Les grandes thématiques du programme de Terminale HLP.
          </p>
          <div className="topic-list" style={{ justifyContent: 'flex-start' }}>
            {philosophieTopics.map((t, i) => (
              <span key={i} className="topic-chip">{t}</span>
            ))}
          </div>
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'var(--bg-soft)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic'
          }}>
            ✨ Bientôt disponible — cours, dissertations guidées et flashcards.
          </div>
        </div>

        <div className="placeholder-section" style={{ textAlign: 'left' }}>
          <div className="soon-badge" style={{ background: 'var(--accent-light)', color: 'var(--accent-dark)' }}>Littérature</div>
          <h2 style={{ marginBottom: '0.75rem' }}>Littérature</h2>
          <p style={{ marginBottom: '1.25rem' }}>
            Techniques d'analyse et d'argumentation pour les textes littéraires.
          </p>
          <div className="topic-list" style={{ justifyContent: 'flex-start' }}>
            {litteratureTopics.map((t, i) => (
              <span key={i} className="topic-chip">{t}</span>
            ))}
          </div>
          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'var(--bg-soft)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic'
          }}>
            ✨ Bientôt disponible — méthodes de commentaire et d'argumentation.
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow)' }}>
        <h3 style={{ marginBottom: '0.5rem', color: 'var(--accent-dark)' }}>💡 En attendant…</h3>
        <p style={{ fontSize: '0.9rem' }}>
          Les thèmes HLP sont étroitement liés au Grand Oral. Rends-toi dans la section <strong>Grand Oral</strong> pour explorer des sujets croisant SVT et HLP — une excellente façon de préparer les deux matières simultanément !
        </p>
      </div>
    </div>
  );
}
