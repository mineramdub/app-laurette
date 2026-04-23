import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../hooks/useProgress';
import { svtChapitres } from '../../data/svtData';

const chapterKeys = {
  ch1: ['svt_ch1_flashcards','svt_ch1_trous','svt_ch1_assoc'],
  ch2: ['svt_ch2_quiz','svt_ch2_schema','svt_ch2_flashcards'],
  ch3: ['svt_ch3_quiz','svt_ch3_schema','svt_ch3_trous'],
  ch4: ['svt_ch4_flashcards','svt_ch4_quiz','svt_ch4_trous'],
  ch5: ['svt_ch5_flashcards','svt_ch5_quiz','svt_ch5_trous'],
  ch6: ['svt_ch6_flashcards','svt_ch6_quiz','svt_ch6_trous'],
  ch7: ['svt_ch7_cours','svt_ch7_flashcards','svt_ch7_trous','svt_ch7_quiz'],
  ch8: ['svt_ch8_cours','svt_ch8_flashcards','svt_ch8_trous','svt_ch8_quiz'],
  ch9: ['svt_ch9_cours','svt_ch9_flashcards','svt_ch9_trous','svt_ch9_quiz'],
  ch10: ['svt_ch10_cours','svt_ch10_flashcards','svt_ch10_trous','svt_ch10_quiz'],
  ch11: ['svt_ch11_cours','svt_ch11_flashcards','svt_ch11_trous','svt_ch11_quiz'],
  ch12: ['svt_ch12_cours','svt_ch12_flashcards','svt_ch12_trous','svt_ch12_quiz'],
  ch13: ['svt_ch13_cours','svt_ch13_flashcards','svt_ch13_trous','svt_ch13_quiz'],
  ch14: ['svt_ch14_cours','svt_ch14_flashcards','svt_ch14_trous','svt_ch14_quiz'],
  ch15: ['svt_ch15_cours','svt_ch15_flashcards','svt_ch15_trous','svt_ch15_quiz'],
  ch16: ['svt_ch16_cours','svt_ch16_flashcards','svt_ch16_trous','svt_ch16_quiz'],
  ch17: ['svt_ch17_cours','svt_ch17_flashcards','svt_ch17_trous','svt_ch17_quiz'],
};

export default function SVTIndex() {
  const navigate = useNavigate();
  const { countDone } = useProgress();

  const allKeys = Object.values(chapterKeys).flat();
  const totalDone = countDone(allKeys);
  const pct = Math.round((totalDone / allKeys.length) * 100);

  return (
    <div style={{ display:'flex', flexDirection:'column', animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>

      {/* Rose header */}
      <div style={{
        background:'#f4cad2', padding:'24px 28px 40px', position:'relative',
        boxShadow:'inset 0 -10px 0 #e9a9b644', borderRadius:'0 0 28px 28px', marginBottom:24,
      }}>
        <button onClick={() => navigate('/')} style={{
          width:36, height:36, borderRadius:18, background:'rgba(253,246,233,.7)',
          border:'none', display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:18, cursor:'pointer', marginBottom:12, backdropFilter:'blur(6px)',
        }}>←</button>
        <div style={{ fontSize:11, color:'#6f5f55', letterSpacing:.7, textTransform:'uppercase', fontWeight:500 }}>
          Sciences de la Vie et de la Terre
        </div>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:60, fontWeight:600, letterSpacing:-2, lineHeight:1, marginTop:4 }}>
          SVT
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
        {svtChapitres.map((ch, i) => {
          const keys = chapterKeys[ch.id];
          const done = countDone(keys);
          const chPct = Math.round((done / keys.length) * 100);
          return (
            <ChapterRow key={ch.id} num={i+1} title={ch.titre} desc={ch.description}
              cards={ch.flashcards?.length ?? 0} pct={chPct}
              accent="#e9a9b6"
              onClick={() => navigate(`/svt/${ch.id}`)}
            />
          );
        })}
      </div>

      {/* Quick tiles */}
      <div style={{ marginTop:28 }}>
        <SectionLabel>Accès rapide</SectionLabel>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
          <QuickTile bg="#f9dee2" icon="🎴" title="Flashcards" sub="toute la matière" onClick={() => navigate('/svt/ch1')} />
          <QuickTile bg="#fbe9a8" icon="🎤" title="Grand Oral" sub="sujets SVT×HLP" onClick={() => navigate('/grand-oral')} />
          <QuickTile bg="#fdf6e9" icon="📄" title="Fiches" sub={`${svtChapitres.length} cours`} border onClick={() => navigate('/svt/ch1')} />
          <QuickTile bg="#fdf6e9" icon="🎮" title="Jeux" sub="spécial SVT" border onClick={() => navigate('/jeux')} />
        </div>
      </div>
    </div>
  );
}

function ChapterRow({ num, title, desc, cards, pct, accent, onClick }) {
  const r = 11, circ = 2 * Math.PI * r;
  const done = pct === 100;
  return (
    <div className="la-tap" onClick={onClick} style={{
      background:'#fff', border:'1px solid #e8ddcb', borderRadius:16,
      padding:'14px 16px', display:'flex', alignItems:'center', gap:14,
      boxShadow:'0 1px 8px rgba(43,36,32,.04)',
    }}>
      {/* SVG progress ring */}
      <div style={{ position:'relative', width:30, height:30, flexShrink:0 }}>
        <svg width="30" height="30" viewBox="0 0 30 30">
          <circle cx="15" cy="15" r={r} fill="none" stroke="#e8ddcb" strokeWidth="2.5" />
          <circle cx="15" cy="15" r={r} fill="none" stroke={accent}
            strokeWidth="2.5" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={circ * (1 - pct/100)}
            transform="rotate(-90 15 15)" style={{ transition:'stroke-dashoffset .5s ease' }} />
        </svg>
        {done && <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, color:accent }}>✓</div>}
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
