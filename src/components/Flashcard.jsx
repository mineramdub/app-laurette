import { useState, useRef, useCallback } from 'react';

const SWIPE_THRESHOLD = 80;

const s = {
  container: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', userSelect: 'none' },
  counter: { fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' },
  hint: { fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', letterSpacing: '0.03em' },
  arena: { position: 'relative', width: '100%', maxWidth: '560px', height: '240px' },
  labels: { display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '560px', padding: '0 0.5rem' },
  labelLeft: { fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.5 },
  labelRight: { fontSize: '0.78rem', fontWeight: 600, color: 'var(--sage)', letterSpacing: '0.05em', textTransform: 'uppercase', opacity: 0.5 },
  cardWrap: {
    position: 'absolute', inset: 0,
    cursor: 'grab',
    touchAction: 'none',
  },
  cardInner: {
    position: 'relative', width: '100%', height: '100%',
    transformStyle: 'preserve-3d',
  },
  face: {
    position: 'absolute', inset: 0,
    backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
    borderRadius: 'var(--radius)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    padding: '2rem', textAlign: 'center',
  },
  front: { background: 'var(--bg-card)', border: '1px solid var(--border-soft)', boxShadow: 'var(--shadow)' },
  back: { background: 'var(--accent-light)', border: '1px solid var(--accent)', transform: 'rotateY(180deg)' },
  faceHint: { fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 },
  term: { fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text)' },
  definition: { fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'var(--text)', lineHeight: 1.6 },
  tapHint: { fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '1rem' },
  badge: {
    position: 'absolute', top: '1rem', padding: '0.3rem 0.8rem',
    borderRadius: '20px', fontWeight: 700, fontSize: '0.85rem',
    letterSpacing: '0.04em', pointerEvents: 'none',
    transition: 'opacity 0.1s',
  },
  badgeLeft: { left: '1rem', background: '#f3e8e4', color: 'var(--accent)' },
  badgeRight: { right: '1rem', background: '#e8f0e8', color: 'var(--sage-dark)' },
  dots: { display: 'flex', gap: '0.4rem' },
  dot: { width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border)', transition: 'background 0.2s' },
  dotDone: { background: 'var(--sage)' },
  dotActive: { background: 'var(--accent)' },
  nav: { display: 'flex', alignItems: 'center', gap: '1rem' },
};

export default function Flashcard({ cards, onComplete }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(false);
  const [known, setKnown] = useState([]); // indices of known cards
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [exiting, setExiting] = useState(null); // 'left' | 'right' | null

  const startXRef = useRef(null);
  const cardRef = useRef(null);

  const goNext = useCallback((dir, isKnown) => {
    setExiting(dir);
    if (isKnown) setKnown(k => [...k, index]);
    setTimeout(() => {
      setDragX(0);
      setFlipped(false);
      setExiting(null);
      if (index < cards.length - 1) {
        setIndex(i => i + 1);
      } else {
        setDone(true);
        onComplete && onComplete();
      }
    }, 300);
  }, [index, cards.length, onComplete]);

  // Touch handlers
  function onTouchStart(e) {
    startXRef.current = e.touches[0].clientX;
    setIsDragging(true);
  }
  function onTouchMove(e) {
    if (startXRef.current === null) return;
    setDragX(e.touches[0].clientX - startXRef.current);
  }
  function onTouchEnd() {
    if (dragX > SWIPE_THRESHOLD) goNext('right', true);
    else if (dragX < -SWIPE_THRESHOLD) goNext('left', false);
    else setDragX(0);
    setIsDragging(false);
    startXRef.current = null;
  }

  // Mouse handlers
  function onMouseDown(e) {
    startXRef.current = e.clientX;
    setIsDragging(true);
  }
  function onMouseMove(e) {
    if (!isDragging || startXRef.current === null) return;
    setDragX(e.clientX - startXRef.current);
  }
  function onMouseUp() {
    if (isDragging) {
      if (dragX > SWIPE_THRESHOLD) goNext('right', true);
      else if (dragX < -SWIPE_THRESHOLD) goNext('left', false);
      else { setDragX(0); }
    }
    setIsDragging(false);
    startXRef.current = null;
  }

  function handleClick() {
    if (Math.abs(dragX) < 5) setFlipped(f => !f);
  }

  function restart() {
    setIndex(0);
    setFlipped(false);
    setDone(false);
    setKnown([]);
    setDragX(0);
    setExiting(null);
  }

  if (done) {
    const knownCount = known.length;
    return (
      <div style={s.container}>
        <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', maxWidth: '560px', width: '100%' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌿</div>
          <h3 style={{ marginBottom: '0.5rem' }}>C'est terminé !</h3>
          <p style={{ marginBottom: '0.5rem' }}>
            Tu avais mémorisé <strong>{knownCount}</strong> carte{knownCount > 1 ? 's' : ''} sur {cards.length}.
          </p>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {knownCount === cards.length
              ? 'Tu connais tout — excellent travail !'
              : knownCount >= cards.length * 0.7
              ? 'Tu progresses vraiment bien, continue !'
              : 'Refaire un tour aide beaucoup, prends ton temps.'}
          </p>
          <button className="btn btn-secondary" onClick={restart}>Recommencer</button>
        </div>
      </div>
    );
  }

  const card = cards[index];

  // Calculate card transform during drag / exit animation
  const rotate = dragX / 20;
  let transform = `translateX(${dragX}px) rotate(${rotate}deg)`;
  let transition = isDragging ? 'none' : 'transform 0.2s ease';
  if (exiting === 'right') { transform = 'translateX(120%) rotate(20deg)'; transition = 'transform 0.3s ease'; }
  if (exiting === 'left') { transform = 'translateX(-120%) rotate(-20deg)'; transition = 'transform 0.3s ease'; }

  const swipeRightOpacity = Math.min(1, Math.max(0, dragX / SWIPE_THRESHOLD));
  const swipeLeftOpacity = Math.min(1, Math.max(0, -dragX / SWIPE_THRESHOLD));

  return (
    <div style={s.container}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <span style={s.counter}>Carte {index + 1} sur {cards.length}</span>

      <div style={s.labels}>
        <span style={{ ...s.labelLeft, opacity: 0.4 + swipeLeftOpacity * 0.6 }}>← À revoir</span>
        <span style={{ ...s.labelRight, opacity: 0.4 + swipeRightOpacity * 0.6 }}>Je sais →</span>
      </div>

      <div style={s.arena}>
        <div
          ref={cardRef}
          style={{ ...s.cardWrap, cursor: isDragging ? 'grabbing' : 'grab' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onClick={handleClick}
        >
          <div style={{
            ...s.cardInner,
            transform: flipped
              ? `${transform} rotateY(180deg)`
              : transform,
            transition,
          }}>
            {/* Badge À revoir */}
            <div style={{ ...s.badge, ...s.badgeLeft, opacity: swipeLeftOpacity }}>À revoir</div>
            {/* Badge Je sais */}
            <div style={{ ...s.badge, ...s.badgeRight, opacity: swipeRightOpacity }}>Je sais ✓</div>

            {/* Front */}
            <div style={{ ...s.face, ...s.front }}>
              <div style={s.faceHint}>Terme</div>
              <div style={s.term}>{card.terme}</div>
              <div style={s.tapHint}>Clique pour voir la définition</div>
            </div>
            {/* Back */}
            <div style={{ ...s.face, ...s.back }}>
              <div style={{ ...s.faceHint, color: 'var(--accent-dark)' }}>Définition</div>
              <div style={s.definition}>{card.definition}</div>
            </div>
          </div>
        </div>
      </div>

      <p style={s.hint}>Glisse à droite si tu sais · à gauche si tu veux revoir</p>

      <div style={s.nav}>
        <button className="btn btn-ghost" onClick={() => goNext('left', false)} disabled={!!exiting}>
          ← À revoir
        </button>
        <div style={s.dots}>
          {cards.map((_, i) => (
            <div key={i} style={{
              ...s.dot,
              ...(known.includes(i) ? s.dotDone : {}),
              ...(i === index ? s.dotActive : {}),
            }} />
          ))}
        </div>
        <button className="btn btn-primary" onClick={() => goNext('right', true)} disabled={!!exiting}>
          Je sais →
        </button>
      </div>
    </div>
  );
}
