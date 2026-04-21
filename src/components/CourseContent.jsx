const SECTION_COLORS = [
  { border: '#c17c56', bg: '#fdf6f1', icon: '🔬' },
  { border: '#7a9e7e', bg: '#f4f9f4', icon: '📖' },
  { border: '#9b8ea0', bg: '#f7f4f9', icon: '💡' },
  { border: '#c4a84a', bg: '#fdf9ee', icon: '🔑' },
  { border: '#5a8fa0', bg: '#f1f7fa', icon: '🌍' },
  { border: '#c17c56', bg: '#fdf6f1', icon: '⚡' },
];

// Highlight flashcard terms inside a paragraph text
function highlightTerms(text, terms) {
  if (!terms || terms.length === 0) return [text];

  // Sort by length desc to match longer terms first
  const sorted = [...terms].sort((a, b) => b.length - a.length);
  const pattern = sorted
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  const parts = text.split(regex);
  return parts.map((part, i) => {
    const isMatch = sorted.some(t => t.toLowerCase() === part.toLowerCase());
    if (isMatch) {
      return (
        <mark key={i} style={{
          background: 'linear-gradient(180deg, transparent 55%, #e8c4a8 55%)',
          color: 'var(--accent-dark)',
          fontWeight: 600,
          padding: '0 2px',
          borderRadius: '2px',
          fontStyle: 'normal',
        }}>
          {part}
        </mark>
      );
    }
    return part;
  });
}

function renderParagraph(text, terms, index) {
  // "Points clés" callout box
  if (text.startsWith('Points clés')) {
    const content = text.replace(/^Points clés\s*[:：]?\s*/i, '');
    const items = content.split(/\d+\)\s+/).filter(Boolean);
    return (
      <div key={index} style={{
        background: 'linear-gradient(135deg, #fdf3eb 0%, #f9ede3 100%)',
        border: '1px solid var(--accent-light)',
        borderLeft: '4px solid var(--accent)',
        borderRadius: 'var(--radius-sm)',
        padding: '1rem 1.25rem',
        marginTop: '1.25rem',
      }}>
        <div style={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
          color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.6rem',
        }}>
          ✨ À retenir
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {items.map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.5 }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>›</span>
              <span>{highlightTerms(item.trim(), terms)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Formula / schéma lines (contain → or →)
  if (text.includes('→') || text.includes('⟶')) {
    return (
      <div key={index} style={{
        background: 'var(--bg-soft)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        padding: '0.75rem 1.25rem',
        marginTop: '0.75rem',
        fontFamily: 'var(--font-heading)',
        fontSize: '1rem',
        color: 'var(--accent-dark)',
        fontWeight: 500,
        letterSpacing: '0.02em',
        textAlign: 'center',
      }}>
        {highlightTerms(text, terms)}
      </div>
    );
  }

  // Regular paragraph
  return (
    <p key={index} style={{
      color: 'var(--text-light)',
      lineHeight: 1.8,
      fontSize: '0.97rem',
      marginTop: '0.65rem',
    }}>
      {highlightTerms(text, terms)}
    </p>
  );
}

export default function CourseContent({ cours, flashcards }) {
  const terms = flashcards ? flashcards.map(f => f.terme) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {cours.sections.map((section, i) => {
        const color = SECTION_COLORS[i % SECTION_COLORS.length];
        return (
          <div key={i} style={{
            background: color.bg,
            border: '1px solid var(--border-soft)',
            borderLeft: `4px solid ${color.border}`,
            borderRadius: 'var(--radius)',
            padding: '1.5rem 1.75rem',
            boxShadow: 'var(--shadow)',
          }}>
            {/* Section header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.9rem' }}>
              <span style={{
                background: color.border,
                color: '#fff',
                borderRadius: '50%',
                width: '28px', height: '28px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.75rem', fontWeight: 700, flexShrink: 0,
              }}>{i + 1}</span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text)',
                margin: 0,
              }}>{section.titre}</h3>
            </div>

            {/* Content */}
            <div>
              {section.contenu.map((para, j) => renderParagraph(para, terms, j))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
