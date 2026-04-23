import { useNavigate } from 'react-router-dom';
import { useProgress } from '../hooks/useProgress';

const allKeys = [
  'svt_ch1_flashcards','svt_ch1_trous','svt_ch1_assoc',
  'svt_ch2_quiz','svt_ch2_schema','svt_ch2_flashcards',
  'svt_ch3_quiz','svt_ch3_schema','svt_ch3_trous',
  'svt_ch4_flashcards','svt_ch4_quiz','svt_ch4_trous',
  'svt_ch5_flashcards','svt_ch5_quiz','svt_ch5_trous',
  'hlp_ch1_flashcards','hlp_ch1_quiz','hlp_ch1_trous',
  'hlp_ch2_flashcards','hlp_ch2_quiz','hlp_ch2_trous',
  'hlp_ch3_flashcards','hlp_ch3_quiz','hlp_ch3_trous',
  'philo_conscience_flashcards','philo_conscience_quiz','philo_conscience_trous',
  'philo_liberte_flashcards','philo_liberte_quiz','philo_liberte_trous',
  'philo_verite_flashcards','philo_verite_quiz','philo_verite_trous',
  'philo_etat_flashcards','philo_etat_quiz','philo_etat_trous',
  'philo_bonheur_flashcards','philo_bonheur_quiz','philo_bonheur_trous',
];

const svtKeys = allKeys.filter(k => k.startsWith('svt'));
const hlpKeys = allKeys.filter(k => k.startsWith('hlp'));
const philoKeys = allKeys.filter(k => k.startsWith('philo'));

const days = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
const months = ['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];

export default function Home() {
  const navigate = useNavigate();
  const { countDone } = useProgress();

  const now = new Date();
  const dateStr = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]}`;

  const svtDone = countDone(svtKeys);
  const hlpDone = countDone(hlpKeys);
  const philoDone = countDone(philoKeys);
  const svtPct = Math.round((svtDone / svtKeys.length) * 100);
  const hlpPct = Math.round((hlpDone / hlpKeys.length) * 100);
  const philoPct = Math.round((philoDone / philoKeys.length) * 100);

  const totalDone = svtDone + hlpDone + philoDone;
  const streak = totalDone > 0 ? Math.min(totalDone, 21) : 0;

  return (
    <div style={{ height:'100%', display:'flex', flexDirection:'column', animation:'la-fade .3s ease-out' }}>

      {/* Cream header */}
      <div style={{ padding:'28px 28px 36px', background:'#fdf6e9', position:'relative' }}>
        <div style={{ fontSize:11, color:'#6f5f55', letterSpacing:.8, textTransform:'uppercase', fontWeight:500 }}>
          {dateStr}
        </div>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:46, fontWeight:500, letterSpacing:-1.5, lineHeight:.95, marginTop:8 }}>
          Bonjour,
        </div>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:46, fontWeight:500, letterSpacing:-1.5, lineHeight:1.05, fontStyle:'italic', color:'#6f5f55' }}>
          Laurette.
        </div>

        {/* Animated sun */}
        <svg width="52" height="52" viewBox="0 0 56 56" style={{ position:'absolute', top:20, right:24, animation:'la-bob 3s ease-in-out infinite' }}>
          <circle cx="28" cy="28" r="12" fill="#f7d97a" />
          {Array.from({length:8}).map((_,i) => {
            const a = i * Math.PI / 4;
            return <line key={i} x1={28+Math.cos(a)*16} y1={28+Math.sin(a)*16} x2={28+Math.cos(a)*22} y2={28+Math.sin(a)*22} stroke="#efc84a" strokeWidth="2" strokeLinecap="round"/>;
          })}
        </svg>
      </div>

      {/* Rose section */}
      <div style={{
        flex:1, background:'#f9dee2',
        borderTopLeftRadius:28, borderTopRightRadius:28, marginTop:-20,
        padding:'28px 24px 28px', display:'flex', flexDirection:'column', gap:24,
        overflowY:'auto',
      }}>

        {/* Subject circles */}
        <div style={{ display:'flex', gap:12, justifyContent:'center', marginTop:4 }}>
          <SubjectCircle
            tone="rose" code="SVT" sub="le vivant" pct={svtPct}
            onClick={() => navigate('/svt')}
          />
          <SubjectCircle
            tone="yellow" code="HLP" sub="la pensée" pct={hlpPct}
            onClick={() => navigate('/hlp')}
          />
          <SubjectCircle
            tone="purple" code="Philo" sub="les notions" pct={philoPct}
            onClick={() => navigate('/philo')}
          />
        </div>
        <div style={{ fontSize:11, textAlign:'center', color:'#6f5f55' }}>
          touche une matière pour voir les chapitres
        </div>

        {/* Games */}
        <div>
          <SectionLabel>Jeux</SectionLabel>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
            <MiniCard bg="#fbe9a8" icon="💭" title="Qui a dit ça ?" sub="HLP · 5 min" onClick={() => navigate('/jeux', { state: { game: 'quidit' } })} />
            <MiniCard bg="#f4cad2" icon="🔬" title="Vrai ou Faux ?" sub="SVT · 4 min" onClick={() => navigate('/jeux', { state: { game: 'vraifaux' } })} />
            <MiniCard bg="#f7c9a8" icon="👑" title="Sauve la princesse" sub="quiz · 8 min" onClick={() => navigate('/jeux', { state: { game: 'princesse' } })} />
            <MiniCard bg="#f9dee2" icon="🧫" title="Puzzle cellule" sub="SVT · 5 min" onClick={() => navigate('/jeux', { state: { game: 'cellule' } })} />
          </div>
        </div>

        {/* Révisions rapides */}
        <div>
          <SectionLabel>À réviser</SectionLabel>
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            <ReviseRow icon="🧬" title="SVT" meta={`${svtKeys.length - svtDone} exercices restants`} accent="#e9a9b6" onClick={() => navigate('/svt')} />
            <ReviseRow icon="📖" title="HLP" meta={`${hlpKeys.length - hlpDone} exercices restants`} accent="#efc84a" onClick={() => navigate('/hlp')} />
            <ReviseRow icon="🦉" title="Philo" meta={`${philoKeys.length - philoDone} exercices restants`} accent="#c9b8e8" onClick={() => navigate('/philo')} />
            <ReviseRow icon="🎤" title="Grand Oral" meta="Préparer ton sujet" accent="#f7c9a8" onClick={() => navigate('/grand-oral')} />
          </div>
        </div>

        {/* Bottom motivation */}
        <div style={{ marginTop:'auto', fontSize:11, color:'#6f5f55', textAlign:'center', paddingTop:4 }}>
          {streak > 0 ? `${streak} exercices terminés · continue comme ça ✨` : 'par où commencer aujourd\'hui ?'}
        </div>
      </div>
    </div>
  );
}

function SubjectCircle({ tone, code, sub, pct, onClick }) {
  const bg   = tone === 'rose' ? '#f4cad2' : tone === 'yellow' ? '#f7d97a' : '#c9b8e8';
  const deep = tone === 'rose' ? '#e9a9b6' : tone === 'yellow' ? '#efc84a' : '#a896d4';
  const r = 44, c = 48, circ = 2 * Math.PI * r;
  return (
    <div className="la-ring la-tap" onClick={onClick} style={{
      width:124, height:124, borderRadius:'50%', background:bg,
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
      position:'relative', boxShadow:`inset 0 -8px 0 ${deep}55`,
    }}>
      {/* Progress ring */}
      <svg width={c*2} height={c*2} viewBox={`0 0 ${c*2} ${c*2}`} style={{ position:'absolute', inset:0, transform:'rotate(-90deg)' }}>
        <circle cx={c} cy={c} r={r} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="3" />
        <circle cx={c} cy={c} r={r} fill="none" stroke="rgba(43,36,32,.2)" strokeWidth="3"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct/100)}
          strokeLinecap="round" style={{ transition:'stroke-dashoffset .6s ease' }} />
      </svg>
      <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:28, fontWeight:600, letterSpacing:-0.8, lineHeight:1 }}>{code}</div>
      <div style={{ fontSize:10, color:'#6f5f55', marginTop:4, fontStyle:'italic' }}>{sub}</div>
      {pct > 0 && (
        <div style={{ position:'absolute', bottom:14, fontSize:10, fontWeight:700, color:'rgba(43,36,32,.5)' }}>{pct}%</div>
      )}
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{ fontSize:11, color:'#2b2420', letterSpacing:.9, textTransform:'uppercase', fontWeight:700, marginBottom:8, opacity:.7 }}>
      {children}
    </div>
  );
}

function MiniCard({ bg, icon, title, sub, onClick }) {
  return (
    <div className="la-tap" onClick={onClick} style={{
      background:bg, borderRadius:16, padding:'12px 14px', minHeight:76,
      display:'flex', flexDirection:'column', justifyContent:'space-between',
    }}>
      <div style={{ fontSize:20 }}>{icon}</div>
      <div>
        <div style={{ fontSize:13, fontWeight:600, letterSpacing:-.1 }}>{title}</div>
        <div style={{ fontSize:10, color:'#6f5f55', marginTop:2 }}>{sub}</div>
      </div>
    </div>
  );
}

function ReviseRow({ icon, title, meta, accent, onClick }) {
  return (
    <div className="la-tap" onClick={onClick} style={{
      background:'#fff', border:'1px solid #e8ddcb', borderRadius:14,
      padding:'11px 14px', display:'flex', alignItems:'center', gap:12,
      boxShadow:'0 1px 6px rgba(43,36,32,.04)',
    }}>
      <div style={{ width:38, height:38, borderRadius:'50%', background:accent+'44', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18 }}>
        {icon}
      </div>
      <div style={{ flex:1 }}>
        <div style={{ fontSize:14, fontWeight:600, letterSpacing:-.1 }}>{title}</div>
        <div style={{ fontSize:11, color:'#6f5f55', marginTop:1 }}>{meta}</div>
      </div>
      <div style={{ fontSize:16, color:'#a59488' }}>→</div>
    </div>
  );
}
