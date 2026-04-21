import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// ── Palette ──────────────────────────────────────────────
const LA = {
  cream:'#fdf6e9', creamDeep:'#f4ead3',
  rose:'#f4cad2', roseSoft:'#f9dee2', roseDeep:'#e9a9b6',
  yellow:'#f7d97a', yellowSoft:'#fbe9a8', yellowDeep:'#efc84a',
  peach:'#f7c9a8',
  ink:'#2b2420', inkSoft:'#6f5f55', inkFaint:'#a59488', line:'#e8ddcb',
};

// ── Shared game components ────────────────────────────────
function GameHeader({ onBack, title, step, total, deep }) {
  return (
    <div style={{ padding:'16px 22px 20px', display:'flex', alignItems:'center', gap:12 }}>
      <div onClick={onBack} style={{
        width:36, height:36, borderRadius:18, background:LA.cream+'cc',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:18, cursor:'pointer', flexShrink:0,
      }}>←</div>
      <div style={{ flex:1 }}>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:17, fontWeight:600, letterSpacing:-.3 }}>{title}</div>
        {typeof step === 'number' && (
          <div style={{ display:'flex', gap:4, marginTop:6 }}>
            {Array.from({length:total}).map((_,k) => (
              <div key={k} style={{
                flex:1, height:4, borderRadius:2,
                background: k < step ? deep : k === step ? LA.ink : LA.cream,
              }}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function GameNextBtn({ onClick, last }) {
  return (
    <div onClick={onClick} style={{
      background:LA.ink, color:LA.cream, borderRadius:999, padding:'13px 22px',
      textAlign:'center', fontSize:14, fontWeight:600, cursor:'pointer',
      animation:'la-pop .3s ease-out',
    }}>
      {last ? "c'est fini →" : 'continuer →'}
    </div>
  );
}

function GameDone({ onBack, onReplay, title, msg }) {
  const dots = Array.from({length:16}).map((_,i) => ({
    c:[LA.rose,LA.yellow,LA.peach,LA.roseDeep,LA.yellowDeep][i%5],
    x:10+Math.random()*80, d:.05*i,
  }));
  return (
    <div style={{ height:'100%', background:LA.cream, display:'flex', flexDirection:'column', padding:'30px 24px', position:'relative', animation:'la-fade .4s ease-out' }}>
      {dots.map((d,i) => (
        <div key={i} style={{ position:'absolute', top:60, left:`${d.x}%`, width:8, height:8, borderRadius:'50%', background:d.c, animation:`la-bob 2.4s ${d.d}s ease-in-out infinite`, opacity:.85 }}/>
      ))}
      <div style={{ marginTop:'auto', marginBottom:'auto' }}>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:36, fontWeight:500, letterSpacing:-1, lineHeight:1.05 }}>{title}</div>
        <div style={{ fontSize:14, color:LA.inkSoft, marginTop:12, lineHeight:1.5, maxWidth:280 }}>{msg}</div>
      </div>
      <div style={{ display:'flex', gap:10 }}>
        <div onClick={onReplay} style={{ flex:1, background:LA.yellow, borderRadius:999, padding:'14px', textAlign:'center', fontSize:14, fontWeight:600, cursor:'pointer' }}>rejouer</div>
        <div onClick={onBack} style={{ flex:1, background:LA.ink, color:LA.cream, borderRadius:999, padding:'14px', textAlign:'center', fontSize:14, fontWeight:600, cursor:'pointer' }}>retour</div>
      </div>
    </div>
  );
}

// ── Jeu 1 : Qui a dit ça ? ────────────────────────────────
const QUIDIT = [
  { thesis:'"Je pense, donc je suis."', options:['Descartes','Kant','Sartre'], answer:0, explain:'Descartes, Discours de la méthode (1637). Point de départ du cogito : la seule certitude, c\'est que je pense.' },
  { thesis:'"L\'homme est condamné à être libre."', options:['Nietzsche','Sartre','Rousseau'], answer:1, explain:'Sartre, L\'Existentialisme est un humanisme. On ne choisit pas d\'exister, mais on doit choisir ce qu\'on fait de sa liberté.' },
  { thesis:'"Agis comme si la maxime de ton action devait être érigée en loi universelle."', options:['Kant','Aristote','Hume'], answer:0, explain:'Kant, Fondements de la métaphysique des mœurs. L\'impératif catégorique : la morale vient de la raison, pas des conséquences.' },
  { thesis:'"L\'homme naît libre, et partout il est dans les fers."', options:['Marx','Rousseau','Hobbes'], answer:1, explain:'Rousseau, Du Contrat social (1762). La liberté naturelle est perdue dans la société.' },
  { thesis:'"L\'enfer, c\'est les autres."', options:['Sartre','Camus','Beauvoir'], answer:0, explain:'Sartre, Huis clos. Autrui me juge, me fige — c\'est par son regard que je me découvre objet.' },
  { thesis:'"Le bonheur est l\'activité de l\'âme conforme à la vertu."', options:['Platon','Épicure','Aristote'], answer:2, explain:'Aristote, Éthique à Nicomaque. Le bonheur n\'est pas un plaisir mais une pratique qu\'on cultive.' },
];
const OK = ['Yes, bien joué !','Exactement ✨','Tu maîtrises !','Pile dedans.'];
const KO = ['Pas grave, on note.','Ça va venir.','On le revoit bientôt.','T\'inquiète, ça rentre.'];

function GameQuiDit({ onBack }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [done, setDone] = useState(false);
  const q = QUIDIT[i];
  const choose = idx => { if (picked !== null) return; setPicked(idx); };
  const next = () => { if (i+1>=QUIDIT.length){setDone(true);return;} setI(i+1); setPicked(null); };
  const correct = picked === q.answer;

  if (done) return <GameDone onBack={onBack} onReplay={()=>{setI(0);setPicked(null);setDone(false);}} title="C'est fini pour cette fois." msg="On reverra ensemble ce qui a coincé. Tu peux y revenir quand tu veux." />;

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.yellow, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>
      <GameHeader onBack={onBack} title="Qui a dit ça ?" step={i} total={QUIDIT.length} deep={LA.yellowDeep}/>
      <div style={{ flex:1, padding:'20px 22px', display:'flex', flexDirection:'column', gap:16, background:LA.yellowSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        {/* Citation */}
        <div key={i} style={{ background:LA.cream, borderRadius:20, padding:'20px', boxShadow:'0 2px 14px rgba(43,36,32,.06)', animation:'la-pop .35s cubic-bezier(.2,.8,.3,1)' }}>
          <div style={{ fontSize:10, color:LA.inkSoft, letterSpacing:.7, textTransform:'uppercase', marginBottom:6 }}>citation</div>
          <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:19, fontStyle:'italic', lineHeight:1.35, letterSpacing:-.2 }}>{q.thesis}</div>
        </div>
        {/* Options */}
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {q.options.map((opt, idx) => {
            const reveal = picked !== null, isA = idx===q.answer, isP = idx===picked;
            let bg=LA.cream, border=LA.line;
            if (reveal && isA) { bg='#c8e6c8'; border='#98c598'; }
            else if (reveal && isP && !isA) { bg='#f6c9c4'; border='#e69d95'; }
            else if (reveal) { bg=LA.cream; }
            return (
              <div key={idx} onClick={()=>choose(idx)} style={{
                background:bg, border:`1.5px solid ${border}`, borderRadius:14,
                padding:'14px 18px', fontSize:15, fontWeight:500, cursor:reveal?'default':'pointer',
                display:'flex', alignItems:'center', justifyContent:'space-between',
                transition:'background .2s, border-color .2s',
              }}>
                <span>{opt}</span>
                {reveal && isA && <span style={{ color:'#3a7a3a' }}>✓</span>}
                {reveal && isP && !isA && <span style={{ color:'#b24a3e' }}>✗</span>}
              </div>
            );
          })}
        </div>
        {/* Feedback */}
        {picked !== null && (
          <div style={{ background:LA.cream, borderRadius:14, padding:'14px 16px', animation:'la-pop .3s ease-out', border:`1px solid ${LA.line}` }}>
            <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:16, fontWeight:600, color:correct?'#3a7a3a':'#b24a3e' }}>
              {correct ? OK[i%OK.length] : KO[i%KO.length]}
            </div>
            <div style={{ fontSize:12.5, color:LA.inkSoft, marginTop:6, lineHeight:1.5 }}>{q.explain}</div>
          </div>
        )}
        {picked !== null && <div style={{ marginTop:'auto', paddingTop:8 }}><GameNextBtn onClick={next} last={i+1>=QUIDIT.length}/></div>}
      </div>
    </div>
  );
}

// ── Jeu 2 : Sauve la princesse ────────────────────────────
const AVENTURE = [
  { scene:'🏰', story:'Le dragon Henri-Gaston bloque le pont. Il exige une réponse de philo.', question:'Quel philosophe a écrit "Je pense, donc je suis" ?', options:['Kant','Descartes','Nietzsche'], answer:1, wrongLine:o=>`"${o} ?! Ridicule !" grogne Henri-Gaston et il crache un nuage de fumée.`, rightLine:'Henri-Gaston soupire, impressionné, et te laisse passer.', explain:'Descartes, Discours de la méthode (1637). La première certitude indubitable.', topic:'HLP · le cogito' },
  { scene:'🌲', story:"Dans la forêt, un écureuil en smoking te barre la route.", question:"Quel organite produit l'énergie de la cellule ?", options:['Le noyau','La mitochondrie','Le ribosome'], answer:1, wrongLine:o=>`L'écureuil éclate de rire : "Le ${o.toLowerCase()} ?! Réessaie !"`, rightLine:"L'écureuil te tend une noisette. \"Respect. Tu peux passer.\"", explain:"La mitochondrie produit l'ATP par respiration cellulaire — la centrale énergétique.", topic:'SVT · cellule' },
  { scene:'🌉', story:'Sur le dernier pont, une sorcière à lunettes roses lit Sartre.', question:'"L\'enfer, c\'est les autres." — qui a dit ça ?', options:['Camus','Sartre','Beauvoir'], answer:1, wrongLine:o=>`"${o} ?!" La sorcière lève les yeux au ciel.`, rightLine:"La sorcière te fait un clin d'œil. \"Va sauver ta princesse.\"", explain:'Sartre, Huis clos (1944). Le regard d\'autrui nous fige, nous objective.', topic:'HLP · autrui' },
];

function GamePrincesse({ onBack }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [done, setDone] = useState(false);
  const s = AVENTURE[i];
  const choose = idx => { if (picked !== null) return; setPicked(idx); };
  const next = () => { if (i+1>=AVENTURE.length){setDone(true);return;} setI(i+1); setPicked(null); };
  const correct = picked===s.answer;

  if (done) return <GameDone onBack={onBack} onReplay={()=>{setI(0);setPicked(null);setDone(false);}} title="Princesse sauvée 👑" msg="Ta frange est un peu brûlée mais la princesse est libre. Merci Laurette." />;

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.peach, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s ease-out' }}>
      <GameHeader onBack={onBack} title="Sauve la princesse" step={i} total={AVENTURE.length} deep="#d98b5e"/>
      <div style={{ flex:1, padding:'16px 20px', display:'flex', flexDirection:'column', gap:14, background:LA.cream, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        <div style={{ textAlign:'center', padding:'8px 0', animation:'la-pop .35s ease-out' }}>
          <div style={{ fontSize:64, lineHeight:1 }}>{s.scene}</div>
          <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:15, fontStyle:'italic', lineHeight:1.35, maxWidth:280, margin:'8px auto 0', color:LA.ink }}>{s.story}</div>
        </div>
        <div style={{ background:LA.peach+'55', borderRadius:14, padding:'12px 16px' }}>
          <div style={{ fontSize:10, color:LA.inkSoft, letterSpacing:.7, textTransform:'uppercase', marginBottom:4 }}>{s.topic}</div>
          <div style={{ fontSize:14.5, fontWeight:600 }}>{s.question}</div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
          {s.options.map((opt, idx) => {
            const reveal=picked!==null, isA=idx===s.answer, isP=idx===picked;
            let bg=LA.cream, border=LA.line;
            if (reveal && isA) { bg='#c8e6c8'; border='#98c598'; }
            else if (reveal && isP && !isA) { bg='#f6c9c4'; border='#e69d95'; }
            return (
              <div key={idx} onClick={()=>choose(idx)} style={{ background:bg, border:`1.5px solid ${border}`, borderRadius:12, padding:'12px 16px', fontSize:14, fontWeight:500, cursor:reveal?'default':'pointer' }}>
                {opt}
              </div>
            );
          })}
        </div>
        {picked !== null && (
          <div style={{ background:correct?'#e9f4e9':'#fbe3df', borderRadius:14, padding:'12px 14px', animation:'la-pop .3s ease-out' }}>
            <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:14, fontStyle:'italic', color:correct?'#3a7a3a':'#b24a3e', lineHeight:1.4 }}>
              {correct ? s.rightLine : s.wrongLine(s.options[picked])}
            </div>
            <div style={{ fontSize:12, color:LA.inkSoft, marginTop:6, lineHeight:1.4 }}>💡 {s.explain}</div>
          </div>
        )}
        {picked !== null && <div style={{ marginTop:'auto', paddingTop:8 }}><GameNextBtn onClick={next} last={i+1>=AVENTURE.length}/></div>}
      </div>
    </div>
  );
}

// ── Jeu 3 : Puzzle de la cellule ─────────────────────────
const PARTS = [
  { id:'noyau',        label:'Noyau',                  cx:180, cy:140, rx:34, ry:30 },
  { id:'mitochondrie', label:'Mitochondrie',            cx:90,  cy:95,  rx:20, ry:12 },
  { id:'membrane',     label:'Membrane plasmique',      cx:180, cy:42,  rx:16, ry:12 },
  { id:'ribosome',     label:'Ribosome',                cx:260, cy:190, rx:14, ry:14 },
];

function GameCellule({ onBack }) {
  const [placed, setPlaced] = useState({});
  const [pool, setPool] = useState(() => [...PARTS].sort(()=>Math.random()-.5));
  const [wrong, setWrong] = useState(null);
  const [msg, setMsg] = useState(null);
  const [done, setDone] = useState(false);
  const svgRef = useRef(null);

  const drop = (part, cx, cy) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x=cx-rect.left, y=cy-rect.top;
    let hit = null;
    for (const z of PARTS) {
      const dx=(x-z.cx)/z.rx, dy=(y-z.cy)/z.ry;
      if (dx*dx+dy*dy < 1.2) { hit=z; break; }
    }
    if (!hit) return;
    if (hit.id===part.id) {
      const next = { ...placed, [part.id]:true };
      setPlaced(next);
      setPool(p => p.filter(x=>x.id!==part.id));
      setMsg({ ok:true, text:`${part.label} ✓` });
      if (Object.keys(next).length>=PARTS.length) setTimeout(()=>setDone(true),700);
    } else {
      setWrong(hit.id); setTimeout(()=>setWrong(null),500);
      setMsg({ ok:false, text:`Ce n'est pas ${part.label.toLowerCase()} ici.` });
    }
    setTimeout(()=>setMsg(null),2200);
  };

  const onPointerDown = (e, part) => {
    e.preventDefault();
    const move = ev => {};
    const up = ev => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      drop(part, ev.clientX, ev.clientY);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };

  if (done) return <GameDone onBack={onBack} onReplay={()=>{setPlaced({});setPool([...PARTS].sort(()=>Math.random()-.5));setDone(false);}} title="Bravo, tu l'as montée !" msg="Tu as reconstruit la cellule. Tu peux rejouer pour ancrer." />;

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.rose, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s ease-out' }}>
      <GameHeader onBack={onBack} title="Puzzle de la cellule" step={Object.keys(placed).length} total={PARTS.length} deep={LA.roseDeep}/>
      <div style={{ flex:1, padding:'16px 18px', display:'flex', flexDirection:'column', gap:12, background:LA.roseSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        <div style={{ background:LA.cream, borderRadius:16, padding:10 }}>
          <svg ref={svgRef} viewBox="0 0 320 260" width="100%" height="240" style={{ display:'block' }}>
            <ellipse cx="160" cy="130" rx="145" ry="110" fill="#f9e8e8" stroke={LA.roseDeep} strokeWidth="2" strokeDasharray="3 5" opacity=".8"/>
            <ellipse cx="180" cy="140" rx="34" ry="30" fill="#e9b8b8" opacity=".6"/>
            <circle cx="188" cy="135" r="6" fill="#b87878" opacity=".7"/>
            <ellipse cx="90" cy="95" rx="20" ry="10" fill="#c89090" transform="rotate(-20 90 95)" opacity=".7"/>
            <path d="M230 185 Q 250 200 268 196" fill="none" stroke="#c89090" strokeWidth="5" strokeLinecap="round" opacity=".7"/>
            {PARTS.map(z => {
              const isPlaced=placed[z.id], isWrong=wrong===z.id;
              return (
                <g key={z.id}>
                  <ellipse cx={z.cx} cy={z.cy} rx={z.rx} ry={z.ry}
                    fill={isPlaced?LA.yellow+'cc':'transparent'}
                    stroke={isWrong?'#c64a3a':isPlaced?LA.yellowDeep:LA.ink}
                    strokeWidth="1.5" strokeDasharray={isPlaced?'0':'3 3'} opacity={isPlaced?1:.55}/>
                  {isPlaced && <text x={z.cx} y={z.cy+4} textAnchor="middle" fontSize="9" fontFamily="Inter" fontWeight="700" fill={LA.ink}>{z.label.split(' ')[0]}</text>}
                </g>
              );
            })}
          </svg>
        </div>
        {msg && (
          <div style={{ padding:'8px 12px', borderRadius:10, fontSize:12.5, fontWeight:500, background:msg.ok?'#d9edd9':'#f6d6d1', color:msg.ok?'#3a7a3a':'#b24a3e', animation:'la-pop .3s ease-out' }}>{msg.text}</div>
        )}
        <div style={{ fontSize:11, color:LA.inkSoft, letterSpacing:.6, textTransform:'uppercase' }}>glisse l'étiquette sur la bonne zone</div>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {pool.map(p => (
            <div key={p.id} onPointerDown={e=>onPointerDown(e,p)} style={{
              padding:'8px 14px', background:LA.yellow, borderRadius:999,
              fontSize:13, fontWeight:600, cursor:'grab', touchAction:'none',
              boxShadow:`0 2px 0 ${LA.yellowDeep}66`, userSelect:'none',
            }}>{p.label}</div>
          ))}
        </div>
        {pool.length===0 && <div style={{ marginTop:'auto' }}><GameNextBtn onClick={()=>setDone(true)} last/></div>}
      </div>
    </div>
  );
}

// ── Hub principal ─────────────────────────────────────────
const GAMES = [
  { id:'quidit',    title:'Qui a dit ça ?',      sub:'HLP · philosophes & thèses',      icon:'💭', bg:LA.yellow,    deep:LA.yellowDeep, mins:'3 min', tag:'HLP' },
  { id:'cellule',   title:'Puzzle de la cellule', sub:'SVT · assemble le schéma',        icon:'🧫', bg:LA.rose,      deep:LA.roseDeep,   mins:'5 min', tag:'SVT' },
  { id:'princesse', title:'Sauve la princesse',   sub:'quiz mixte · aventure rigolote',  icon:'👑', bg:LA.peach,     deep:'#d98b5e',     mins:'6 min', tag:'MIX' },
];

export default function GamesPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  if (active === 'quidit')    return <GameQuiDit    onBack={()=>setActive(null)}/>;
  if (active === 'princesse') return <GamePrincesse onBack={()=>setActive(null)}/>;
  if (active === 'cellule')   return <GameCellule   onBack={()=>setActive(null)}/>;

  return (
    <div style={{ animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>
      <div style={{ padding:'0 0 28px' }}>
        <button onClick={()=>navigate('/')} style={{ width:36, height:36, borderRadius:18, background:LA.creamDeep, border:'none', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, cursor:'pointer', marginBottom:16 }}>←</button>
        <div style={{ fontSize:11, color:LA.inkSoft, letterSpacing:.7, textTransform:'uppercase' }}>Jeux · on souffle un peu</div>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:36, fontWeight:500, letterSpacing:-1, lineHeight:1, marginTop:6 }}>
          Un peu de fun<br/>
          <span style={{ fontStyle:'italic', color:LA.inkSoft }}>pour mieux retenir.</span>
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        {GAMES.map(g => (
          <div key={g.id} onClick={()=>setActive(g.id)} style={{
            background:g.bg, borderRadius:20, padding:'18px 20px',
            display:'flex', alignItems:'center', gap:16, cursor:'pointer',
            boxShadow:`inset 0 -6px 0 ${g.deep}44`,
            transition:'transform .15s, box-shadow .15s',
          }}
            onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow=`0 8px 24px rgba(43,36,32,.12),inset 0 -6px 0 ${g.deep}44`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform='';e.currentTarget.style.boxShadow=`inset 0 -6px 0 ${g.deep}44`;}}
          >
            <div style={{ width:52, height:52, borderRadius:16, background:LA.cream, display:'flex', alignItems:'center', justifyContent:'center', fontSize:26, flexShrink:0 }}>
              {g.icon}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:19, fontWeight:600, letterSpacing:-.3, lineHeight:1.1 }}>{g.title}</div>
              <div style={{ fontSize:12, color:LA.inkSoft, marginTop:3 }}>{g.sub}</div>
              <div style={{ display:'flex', gap:6, marginTop:8 }}>
                {[g.mins, g.tag].map((c,i) => (
                  <div key={i} style={{ fontSize:10, padding:'2px 8px', borderRadius:999, background:LA.cream+'cc', fontWeight:500, letterSpacing:.3 }}>{c}</div>
                ))}
              </div>
            </div>
            <div style={{ fontSize:20 }}>→</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize:11, color:LA.inkSoft, textAlign:'center', marginTop:20, fontStyle:'italic' }}>
        pas de score, pas de stress — juste pour jouer ☁
      </div>
    </div>
  );
}
