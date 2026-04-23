import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import { hlpChapitres } from '../../data/hlpData';

const chapterKeys = {
  'hlp-ch1': ['hlp_ch1_cours','hlp_ch1_flashcards','hlp_ch1_quiz','hlp_ch1_trous'],
  'hlp-ch2': ['hlp_ch2_cours','hlp_ch2_flashcards','hlp_ch2_quiz','hlp_ch2_trous'],
  'hlp-ch3': ['hlp_ch3_cours','hlp_ch3_flashcards','hlp_ch3_quiz','hlp_ch3_trous'],
  'hlp-ch4': ['hlp_ch4_cours','hlp_ch4_flashcards','hlp_ch4_quiz','hlp_ch4_trous'],
  'hlp-ch5': ['hlp_ch5_cours','hlp_ch5_flashcards','hlp_ch5_quiz','hlp_ch5_trous'],
  'hlp-ch6': ['hlp_ch6_cours','hlp_ch6_flashcards','hlp_ch6_quiz','hlp_ch6_trous'],
  'hlp-ch7': ['hlp_ch7_cours','hlp_ch7_flashcards','hlp_ch7_quiz','hlp_ch7_trous'],
  'hlp-ch8': ['hlp_ch8_cours','hlp_ch8_flashcards','hlp_ch8_quiz','hlp_ch8_trous'],
  'hlp-ch9': ['hlp_ch9_cours','hlp_ch9_flashcards','hlp_ch9_quiz','hlp_ch9_trous'],
  'hlp-ch10': ['hlp_ch10_cours','hlp_ch10_flashcards','hlp_ch10_quiz','hlp_ch10_trous'],
};
const chapterRoutes = {
  'hlp-ch1':'/hlp/ch1', 'hlp-ch2':'/hlp/ch2', 'hlp-ch3':'/hlp/ch3',
  'hlp-ch4':'/hlp/ch4', 'hlp-ch5':'/hlp/ch5', 'hlp-ch6':'/hlp/ch6',
  'hlp-ch7':'/hlp/ch7', 'hlp-ch8':'/hlp/ch8', 'hlp-ch9':'/hlp/ch9',
  'hlp-ch10':'/hlp/ch10',
};

export default function HLPIndex() {
  const navigate = useNavigate();
  const { countDone } = useProgress();

  const allKeys = Object.values(chapterKeys).flat();
  const totalDone = countDone(allKeys);
  const pct = Math.round((totalDone / allKeys.length) * 100);

  return (
    <div style={{ display:'flex', flexDirection:'column', animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>

      {/* Yellow header */}
      <div style={{
        background:'#f7d97a', padding:'24px 28px 40px', position:'relative',
        boxShadow:'inset 0 -10px 0 #efc84a44', borderRadius:'0 0 28px 28px', marginBottom:24,
      }}>
        <button onClick={() => navigate('/')} style={{
          width:36, height:36, borderRadius:18, background:'rgba(253,246,233,.7)',
          border:'none', display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:18, cursor:'pointer', marginBottom:12,
        }}>←</button>
        <div style={{ fontSize:11, color:'#6f5f55', letterSpacing:.7, textTransform:'uppercase', fontWeight:500 }}>
          Humanités, Littérature et Philosophie
        </div>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:60, fontWeight:600, letterSpacing:-2, lineHeight:1, marginTop:4 }}>
          HLP
        </div>
        <div style={{ marginTop:16 }}>
          <div style={{ fontSize:11, color:'#6f5f55', marginBottom:5, display:'flex', justifyContent:'space-between' }}>
            <span>progression globale</span><span>{pct}%</span>
          </div>
          <div style={{ height:7, background:'rgba(253,246,233,.6)', borderRadius:4, overflow:'hidden' }}>
            <div style={{ height:'100%', background:'#2b2420', borderRadius:4, width:`${pct}%`, transition:'width .6s ease' }} />
          </div>
        </div>
      </div>

      {/* Chapter list */}
      <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {hlpChapitres.map((ch, i) => {
          const keys = chapterKeys[ch.id];
          const done = countDone(keys);
          const chPct = Math.round((done / keys.length) * 100);
          return (
            <ChapterRow key={ch.id} num={i+1} title={ch.titre} desc={ch.description}
              cards={ch.flashcards?.length ?? 0} pct={chPct}
              accent="#efc84a"
              onClick={() => navigate(chapterRoutes[ch.id])}
            />
          );
        })}
      </div>

      {/* Quick tiles */}
      <div style={{ marginTop:28 }}>
        <SectionLabel>Accès rapide</SectionLabel>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          <QuickTile bg="#fbe9a8" icon="🎴" title="Flashcards" sub="toute la matière" onClick={() => navigate('/hlp/ch1')} />
          <QuickTile bg="#f9dee2" icon="🎤" title="Grand Oral" sub="sujets HLP×SVT" onClick={() => navigate('/grand-oral')} />
          <QuickTile bg="#fdf6e9" icon="📄" title="Fiches" sub={`${hlpChapitres.length} cours`} border onClick={() => navigate('/hlp/ch1')} />
          <QuickTile bg="#fdf6e9" icon="💬" title="Argumentation" sub="rhétorique" border onClick={() => navigate('/hlp/ch1')} />
        </div>
      </div>
    </div>
  );
}

function ChapterRow({ num, title, pct, cards, accent, onClick }) {
  const r = 11, circ = 2 * Math.PI * r;
  const done = pct === 100;
  return (
    <div className="la-tap" onClick={onClick} style={{
      background:'#fff', border:'1px solid #e8ddcb', borderRadius:16,
      padding:'14px 16px', display:'flex', alignItems:'center', gap:14,
      boxShadow:'0 1px 8px rgba(43,36,32,.04)',
    }}>
      <div style={{ position:'relative', width:30, height:30, flexShrink:0 }}>
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r={r} fill="none" stroke="#e8ddcb" strokeWidth="2.5" />
          <circle cx="15" cy="15" r={r} fill="none" stroke={accent}
            strokeWidth="2.5" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={circ * (1 - pct/100)}
            transform="rotate(-90 15 15)" />
        </svg>
        {done && <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, color:'#6f5f55' }}>✓</div>}
        {!done && pct === 0 && <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, color:'#a59488', fontWeight:700 }}>{num}</div>}
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:14, fontWeight:600, letterSpacing:-.1, color:'#2b2420', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
          {title}
        </div>
        <div style={{ fontSize:11, color:'#6f5f55', marginTop:2, display:'flex', gap:8 }}>
          <span>{cards} cartes</span>
          {done && <span style={{ color:'#7a9e7e', fontWeight:600 }}>· maîtrisé</span>}
          {!done && pct > 0 && <span style={{ color:accent, fontWeight:600 }}>· {pct}% fait</span>}
        </div>
      </div>
      <div style={{ fontSize:16, color:'#a59488' }}>→</div>
    </div>
  );
}

function SectionLabel({ children }) {
  return <div style={{ fontSize:11, color:'#2b2420', letterSpacing:.9, textTransform:'uppercase', fontWeight:700, marginBottom:10, opacity:.7 }}>{children}</div>;
}

function QuickTile({ bg, icon, title, sub, border, onClick }) {
  return (
    <div className="la-tap" onClick={onClick} style={{
      background:bg, borderRadius:14, padding:'12px 14px', minHeight:80,
      display:'flex', flexDirection:'column', justifyContent:'space-between',
      border: border ? '1px solid #e8ddcb' : 'none', cursor:'pointer',
    }}>
      <div style={{ fontSize:20 }}>{icon}</div>
      <div>
        <div style={{ fontSize:13, fontWeight:600, color:'#2b2420' }}>{title}</div>
        <div style={{ fontSize:10, color:'#6f5f55', marginTop:2 }}>{sub}</div>
      </div>
    </div>
  );
}
