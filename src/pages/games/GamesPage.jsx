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

// ── Progress helpers ──────────────────────────────────────
function getProgress() {
  try { return JSON.parse(localStorage.getItem('laure_bac_progress') || '{}'); }
  catch { return {}; }
}

function filterBank(BANK, progress) {
  const readKeys = Object.keys(BANK).filter(k => progress[k]);
  const pool = readKeys.length > 0
    ? readKeys.flatMap(k => BANK[k])
    : Object.values(BANK).flat();
  return [...pool].sort(() => Math.random() - .5);
}

// ── QUIDIT_BANK ───────────────────────────────────────────
const QUIDIT_BANK = {
  hlp_ch1_cours: [
    { thesis: '"La rhétorique est l\'art de trouver ce qui est propre à persuader dans chaque sujet."', options: ['Aristote','Platon','Cicéron'], answer: 0, explain: 'Aristote, Rhétorique. Trois modes de persuasion : logos (raison), ethos (caractère), pathos (émotion du public).' },
    { thesis: '"Quand je dis \'je promets\', je ne décris pas ma promesse — je la fais."', options: ['Wittgenstein','Austin','Searle'], answer: 1, explain: 'John L. Austin, Quand dire c\'est faire. Les performatifs accomplissent l\'acte qu\'ils énoncent — ni vrais ni faux, mais heureux ou malheureux.' },
    { thesis: '"Les sophistes vendent leur sagesse au plus offrant comme s\'il s\'agissait de nourriture."', options: ['Aristote','Platon','Socrate'], answer: 1, explain: 'Platon, Protagoras. Il oppose le philosophe (amour gratuit de la sagesse) au sophiste (enseignant payant, rhétorique vide de vérité).' },
  ],
  hlp_ch2_cours: [
    { thesis: '"Les limites de mon langage signifient les limites de mon monde."', options: ['Husserl','Bergson','Wittgenstein'], answer: 2, explain: 'Wittgenstein, Tractatus. Le langage ne reflète pas passivement le monde — il le constitue. Ce qu\'on ne peut dire clairement, on doit le taire.' },
    { thesis: '"Des prisonniers enchaînés prennent les ombres projetées sur la paroi pour la réalité."', options: ['Aristote','Platon','Descartes'], answer: 1, explain: 'Platon, La République. L\'allégorie de la caverne illustre l\'opposition entre opinion (doxa) et connaissance vraie (épistémè), accessible par la philosophie.' },
    { thesis: '"La science ne pense pas."', options: ['Bachelard','Heidegger','Popper'], answer: 1, explain: 'Heidegger, Essais et conférences. La science calcule et produit des résultats efficaces, mais elle ne s\'interroge pas sur ses propres fondements — rôle de la philosophie.' },
  ],
  hlp_ch3_cours: [
    { thesis: '"Seul ce qui ne cesse pas de faire mal reste dans la mémoire."', options: ['Nietzsche','Freud','Bergson'], answer: 0, explain: 'Nietzsche, Généalogie de la morale. La mémoire n\'est pas naturelle — elle est inscrite par la douleur et la contrainte sociale.' },
    { thesis: '"Le réel est rationnel, et le rationnel est réel."', options: ['Marx','Hegel','Kant'], answer: 1, explain: 'Hegel, Principes de la philosophie du droit. L\'histoire n\'est pas un chaos : elle réalise progressivement la Raison (l\'Esprit absolu se déployant dans le temps).' },
    { thesis: '"Il est plus difficile d\'honorer la mémoire des sans-nom que celle des célébrités."', options: ['Arendt','Benjamin','Ricœur'], answer: 1, explain: 'Walter Benjamin, Thèses sur la philosophie de l\'histoire. Une histoire à contre-poil doit récupérer la mémoire des vaincus, que l\'histoire officielle écrase.' },
  ],
  hlp_ch4_cours: [
    { thesis: '"Je pense, donc je suis."', options: ['Descartes','Spinoza','Leibniz'], answer: 0, explain: 'Descartes, Discours de la méthode (1637). Après le doute radical, la seule certitude indubitable : le fait de penser prouve l\'existence du sujet pensant.' },
    { thesis: '"L\'homme est condamné à être libre."', options: ['Camus','Nietzsche','Sartre'], answer: 2, explain: 'Sartre, L\'Existentialisme est un humanisme. On n\'a pas choisi d\'exister, mais on doit choisir ce qu\'on fait de sa liberté — et en assumer l\'entière responsabilité.' },
    { thesis: '"L\'enfer, c\'est les autres."', options: ['Beauvoir','Sartre','Camus'], answer: 1, explain: 'Sartre, Huis clos (1944). Le regard d\'autrui nous fige comme objet et nous juge — tension fondamentale entre ma liberté et celle d\'autrui.' },
    { thesis: '"Le bonheur est l\'activité de l\'âme conforme à la vertu."', options: ['Platon','Épicure','Aristote'], answer: 2, explain: 'Aristote, Éthique à Nicomaque. L\'eudaimonia n\'est pas un état passif mais une pratique — vivre selon la vertu et développer ses capacités proprement humaines.' },
    { thesis: '"On ne naît pas femme, on le devient."', options: ['Arendt','Woolf','Beauvoir'], answer: 2, explain: 'Simone de Beauvoir, Le Deuxième Sexe (1949). La féminité est une construction sociale et culturelle, non un destin biologique — l\'existence précède l\'essence.' },
    { thesis: '"Agis de telle sorte que la maxime de ton action puisse être érigée en loi universelle."', options: ['Kant','Rousseau','Mill'], answer: 0, explain: 'Kant, Fondements de la métaphysique des mœurs. L\'impératif catégorique : une action est morale si on peut vouloir qu\'elle soit universalisable — indépendamment des conséquences.' },
  ],
};

// ── VRAIFAUX_BANK ─────────────────────────────────────────
const VRAIFAUX_BANK = {
  svt_ch1_cours: [
    { statement: "L'ADN est directement traduit en protéine sans passer par l'ARN.", isTrue: false, explain: "FAUX. L'info génétique est transcrite en ARNm dans le noyau, puis l'ARNm est traduit en protéine par les ribosomes dans le cytoplasme (dogme central de la biologie)." },
    { statement: "La transcription de l'ADN en ARNm a lieu dans le noyau de la cellule eucaryote.", isTrue: true, explain: "VRAI. L'ARN polymérase lit le brin matrice d'ADN dans le noyau et synthétise un pré-ARNm, qui sera matûré (élimination des introns) avant export vers le cytoplasme." },
    { statement: "Toutes les cellules d'un organisme expriment exactement les mêmes gènes simultanément.", isTrue: false, explain: "FAUX. Toutes les cellules partagent le même génome, mais l'expression génique est différentielle selon le type cellulaire, le stade de développement et les signaux reçus." },
  ],
  svt_ch2_cours: [
    { statement: "Une mutation génétique est toujours nocive pour l'organisme.", isTrue: false, explain: "FAUX. Une mutation peut être neutre (sans effet phénotypique), bénéfique (avantage sélectif) ou néfaste. Cela dépend de l'environnement et du contexte génétique global." },
    { statement: "La dérive génétique a un effet plus marqué dans les petites populations.", isTrue: true, explain: "VRAI. Dans une petite population, les variations aléatoires de fréquences alléliques d'une génération à l'autre sont proportionnellement plus importantes — pouvant mener à la fixation ou disparition d'un allèle." },
    { statement: "L'évolution biologique est un processus orienté vers un but précis (plus grand, plus complexe, plus fort).", isTrue: false, explain: "FAUX. L'évolution est non-téléologique. La sélection naturelle retient ce qui favorise la survie/reproduction dans un environnement donné — c'est un processus aveugle sans direction prédéfinie." },
  ],
  svt_ch3_cours: [
    { statement: "Les anticorps pénètrent dans les cellules infectées pour les détruire de l'intérieur.", isTrue: false, explain: "FAUX. Les anticorps (immunoglobulines) se fixent sur les antigènes en surface des pathogènes, les neutralisant et facilitant leur phagocytose — ils n'entrent pas dans les cellules." },
    { statement: "La mémoire immunitaire permet une réponse plus rapide et plus intense lors d'un second contact avec un antigène.", isTrue: true, explain: "VRAI. Lors du premier contact, des lymphocytes mémoire B et T se forment. Lors d'un second contact, ils répondent en quelques heures avec une production massive d'anticorps — base de la vaccination." },
    { statement: "Les lymphocytes T et les lymphocytes B remplissent la même fonction immunitaire.", isTrue: false, explain: "FAUX. Les lymphocytes B produisent des anticorps (immunité humorale). Les lymphocytes T cytotoxiques détruisent directement les cellules infectées ou tumorales (immunité cellulaire)." },
  ],
  svt_ch4_cours: [
    { statement: "Un influx nerveux peut se propager dans les deux sens le long d'un axone.", isTrue: false, explain: "FAUX. La propagation est unidirectionnelle : dendrites → corps cellulaire → axone → terminaisons synaptiques. La période réfractaire empêche le retour en arrière." },
    { statement: "La zone de Broca est impliquée dans la production du langage parlé.", isTrue: true, explain: "VRAI. La zone de Broca (lobe frontal gauche) coordonne la production du langage. Sa lésion provoque l'aphasie de Broca : le patient comprend mais ne peut plus parler normalement." },
    { statement: "Toutes les synapses du système nerveux utilisent le même neurotransmetteur.", isTrue: false, explain: "FAUX. Il existe de nombreux neurotransmetteurs : acétylcholine (jonction neuromusculaire), dopamine (circuit de récompense), sérotonine (humeur), GABA (inhibition), glutamate (excitation)..." },
  ],
  svt_ch5_cours: [
    { statement: "La biodiversité se limite au nombre d'espèces présentes dans un écosystème.", isTrue: false, explain: "FAUX. La biodiversité comprend trois niveaux : diversité génétique (au sein d'une espèce), diversité spécifique (nombre d'espèces), et diversité des écosystèmes." },
    { statement: "L'effet de serre est un phénomène entièrement d'origine humaine.", isTrue: false, explain: "FAUX. L'effet de serre naturel est indispensable à la vie (sans lui : -18°C en moyenne). L'activité humaine l'amplifie en ajoutant des GES (CO₂, méthane, N₂O) — c'est le réchauffement climatique." },
    { statement: "Le CO₂ absorbé par les forêts lors de la photosynthèse est définitivement stocké dans les arbres.", isTrue: false, explain: "FAUX. Le carbone est temporairement stocké dans la biomasse. Il peut être relarché lors d'incendies, de déforestation ou de décomposition de la matière organique par les décomposeurs." },
  ],
  svt_ch6_cours: [
    { statement: "L'ovulation a lieu au tout début du cycle menstruel, juste après les règles.", isTrue: false, explain: "FAUX. Dans un cycle de 28 jours, l'ovulation survient vers le 14ème jour sous l'effet d'un pic de LH. Elle marque la fin de la phase folliculaire et le début de la phase lutéale." },
    { statement: "La pilule contraceptive combinée bloque l'ovulation en simulant l'état hormonal de la grossesse.", isTrue: true, explain: "VRAI. Elle contient œstrogènes + progestérone de synthèse, qui exercent un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire, bloquant les pics de FSH et LH nécessaires à l'ovulation." },
    { statement: "Dans la FIV, la fécondation de l'ovule par le spermatozoïde se fait directement dans l'utérus.", isTrue: false, explain: "FAUX. Dans la FIV, les gamètes sont mis en contact en laboratoire. L'embryon obtenu est cultivé 2 à 5 jours puis transféré dans l'utérus — d'où le terme 'in vitro' (en verre)." },
  ],
  svt_ch7_cours: [
    { statement: "L'insuline fait augmenter le taux de glucose dans le sang.", isTrue: false, explain: "FAUX. L'insuline est une hormone hypoglycémiante : elle fait baisser la glycémie en favorisant l'entrée du glucose dans les cellules et son stockage sous forme de glycogène (foie, muscles)." },
    { statement: "Le diabète de type 1 est une maladie auto-immune.", isTrue: true, explain: "VRAI. Dans le DT1, le système immunitaire détruit les cellules β des îlots de Langerhans du pancréas, supprimant totalement la production d'insuline. Traitement : injections d'insuline obligatoires." },
    { statement: "Dans le diabète de type 2, le pancréas ne produit plus aucune insuline.", isTrue: false, explain: "FAUX. Dans le DT2 (résistance à l'insuline), les cellules cibles ne répondent plus correctement à l'insuline. Au début, le pancréas compense en produisant plus — mais peut s'épuiser avec le temps." },
  ],
};

// ── AVENTURE ──────────────────────────────────────────────
const AVENTURE = [
  { scene:'🏰', story:'Le dragon Henri-Gaston bloque le pont. Il exige une réponse de philo.', question:'Quel philosophe a écrit "Je pense, donc je suis" ?', options:['Kant','Descartes','Nietzsche'], answer:1, wrongLine:o=>`"${o} ?! Ridicule !" grogne Henri-Gaston et crache de la fumée.`, rightLine:'Henri-Gaston soupire, impressionné, et te laisse passer.', explain:'Descartes, Discours de la méthode (1637). Après le doute radical, la seule certitude indubitable : la pensée prouve l\'existence.', topic:'HLP · le cogito' },
  { scene:'🌲', story:"Dans la forêt enchantée, un écureuil en smoking te barre la route.", question:"Quel organite produit l'ATP par respiration cellulaire ?", options:['Le noyau','La mitochondrie','Le ribosome'], answer:1, wrongLine:o=>`L'écureuil éclate de rire : "Le ${o.toLowerCase()} ?! Certainement pas !"`, rightLine:"L'écureuil te tend une noisette magique. \"Respect. Tu peux passer.\"", explain:"La mitochondrie produit l'ATP par respiration cellulaire — c'est la centrale énergétique de la cellule.", topic:'SVT · cellule' },
  { scene:'🌉', story:'Sur le pont de cristal, une sorcière à lunettes roses lit Sartre.', question:'"L\'enfer, c\'est les autres." — qui a dit ça ?', options:['Camus','Sartre','Beauvoir'], answer:1, wrongLine:o=>`"${o} ?!" La sorcière lève les yeux au ciel et murmure une malédiction.`, rightLine:"La sorcière te fait un clin d'œil. \"Va sauver ta princesse, existentialiste.\"", explain:"Sartre, Huis clos (1944). Le regard d'autrui nous fige comme objet — tension entre liberté et regard.", topic:'HLP · autrui' },
  { scene:'🧪', story:"Un alchimiste farfelu garde la cave secrète. Il veut tester ta SVT.", question:"Quelle est la glycémie normale à jeun ?", options:['0,5 g/L','1 g/L','2 g/L'], answer:1, wrongLine:o=>`"${o} ?! C'est pas ça du tout !" L'alchimiste renverse son chaudron.`, rightLine:"\"Exactement ! 1 g/L.\" Il t'offre un bonbon au glucose.", explain:"La glycémie normale à jeun est 0,8–1,1 g/L. Au-dessus de 1,26 g/L à deux reprises à jeun : diabète.", topic:'SVT · glycémie' },
  { scene:'🦉', story:"Un vieux hibou philosophe médite sur une branche dorée.", question:"Pour Aristote, le bonheur (eudaimonia) consiste en...", options:["L'accumulation de plaisirs","L'activité de l'âme conforme à la vertu","L'absence de souffrance"], answer:1, wrongLine:o=>`Le hibou secoue la tête tristement. "Non, ça c'est une autre conception du bonheur."`, rightLine:"Le hibou bat des ailes d'approbation. \"L'eudaimonia ! Passe, jeune sage.\"", explain:"Aristote, Éthique à Nicomaque. Le bonheur n'est pas un état passif mais une activité — pratiquer la vertu et développer ses capacités humaines.", topic:'HLP · bonheur' },
  { scene:'🌊', story:"Une sirène gardienne d'un lac souterrain te pose une devinette SVT.", question:"Quel type de lymphocyte produit les anticorps ?", options:['Lymphocyte T cytotoxique','Lymphocyte NK','Lymphocyte B'], answer:2, wrongLine:o=>`La sirène fronce les sourcils. "Le ${o.toLowerCase()} ne produit pas d'anticorps..."`, rightLine:"\"Exact ! Les lymphocytes B → plasmocytes → anticorps.\" La sirène te montre le chemin.", explain:"Les lymphocytes B, activés par un antigène, se différencient en plasmocytes sécréteurs d'anticorps — immunité humorale.", topic:'SVT · immunité' },
  { scene:'🗝️', story:"Un fantôme élégant tient la clé de la dernière porte.", question:'"On ne naît pas femme, on le devient." — qui a écrit cela ?', options:['Hannah Arendt','Virginia Woolf','Simone de Beauvoir'], answer:2, wrongLine:o=>`"${o} est remarquable, mais non." Le fantôme fait tournoyer la clé.`, rightLine:"\"Beauvoir, Le Deuxième Sexe !\" Le fantôme disparaît en t'offrant la clé.", explain:"Simone de Beauvoir, Le Deuxième Sexe (1949). La condition féminine est une construction sociale — l'existence précède l'essence.", topic:'HLP · identité' },
  { scene:'🏆', story:"Tu arrives au château ! Le garde exige un dernier effort SVT.", question:"Lors d'une contraction musculaire, quelle molécule fournit directement l'énergie aux fibres ?", options:['Le glucose','L\'ATP','Le glycogène'], answer:1, wrongLine:o=>`"Pas directement ! Le ${o.toLowerCase()} doit d'abord être converti en ATP." Le garde barre la route.`, rightLine:"\"L'ATP ! Toujours l'ATP.\" Le pont-levis s'abaisse. La princesse est libre. 👑", explain:"L'ATP (adénosine triphosphate) est la seule molécule directement utilisable par les protéines motrices (myosine). Glucose et glycogène servent à régénérer l'ATP.", topic:'SVT · muscles & ATP' },
];

// ── PARTS for GameCellule ─────────────────────────────────
const PARTS = [
  { id:'noyau',        label:'Noyau',          cx:175, cy:138, rx:34, ry:28 },
  { id:'mitochondrie', label:'Mitochondrie',    cx:88,  cy:100, rx:22, ry:12 },
  { id:'membrane',     label:'Membrane',        cx:175, cy:36,  rx:20, ry:12 },
  { id:'ribosome',     label:'Ribosome',        cx:252, cy:182, rx:13, ry:13 },
  { id:'golgi',        label:'Ap. de Golgi',    cx:126, cy:175, rx:23, ry:12 },
  { id:'reticulum',    label:'Rétic. endo.',    cx:245, cy:100, rx:22, ry:12 },
];

// ── GAMES hub data ────────────────────────────────────────
const GAMES = [
  { id:'quidit',    title:'Qui a dit ça ?',       sub:'HLP · philosophes & citations',     icon:'💭', bg:'#f7d97a', deep:'#efc84a', mins:'5 min', tag:'HLP' },
  { id:'vraifaux',  title:'Vrai ou Faux ?',        sub:'SVT · teste tes connaissances',     icon:'🔬', bg:'#f4cad2', deep:'#e9a9b6', mins:'4 min', tag:'SVT' },
  { id:'princesse', title:'Sauve la princesse',    sub:'quiz mixte · aventure narrative',   icon:'👑', bg:'#f7c9a8', deep:'#d98b5e', mins:'8 min', tag:'MIX' },
  { id:'cellule',   title:'Puzzle de la cellule',  sub:'SVT · identifie les organites',     icon:'🧫', bg:'#f9dee2', deep:'#e9a9b6', mins:'5 min', tag:'SVT' },
];

const OK = ['Yes, bien joué !','Exactement ✨','Tu maîtrises !','Pile dedans.'];
const KO = ['Pas grave, on note.','Ça va venir.','On le revoit bientôt.','T\'inquiète, ça rentre.'];

// ── Shared components ─────────────────────────────────────
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

function ReadNotice() {
  return (
    <div style={{ background:'rgba(253,246,233,.85)', border:'1px solid #e8ddcb', borderRadius:12, padding:'10px 14px', fontSize:11.5, color:'#6f5f55', display:'flex', gap:8, alignItems:'flex-start' }}>
      <span style={{ fontSize:14, flexShrink:0 }}>💡</span>
      <span>Marque des cours comme "lus" pour ne réviser que ce que tu as étudié — sinon, toutes les questions sont affichées.</span>
    </div>
  );
}

// ── Jeu 1 : Qui a dit ça ? ────────────────────────────────
function GameQuiDit({ onBack }) {
  const [questions] = useState(() => filterBank(QUIDIT_BANK, getProgress()));
  const [noFilter] = useState(() => {
    const p = getProgress();
    return Object.keys(QUIDIT_BANK).every(k => !p[k]);
  });
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [done, setDone] = useState(false);

  const q = questions[i];
  const choose = idx => { if (picked !== null) return; setPicked(idx); };
  const next = () => { if (i+1 >= questions.length) { setDone(true); return; } setI(i+1); setPicked(null); };
  const correct = picked === q.answer;

  const replay = () => { setI(0); setPicked(null); setDone(false); };

  if (done) return <GameDone onBack={onBack} onReplay={replay} title="C'est fini pour cette fois." msg="On reverra ensemble ce qui a coincé. Tu peux y revenir quand tu veux." />;

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.yellow, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>
      <GameHeader onBack={onBack} title="Qui a dit ça ?" step={i} total={questions.length} deep={LA.yellowDeep}/>
      <div style={{ flex:1, padding:'20px 22px', display:'flex', flexDirection:'column', gap:16, background:LA.yellowSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        {noFilter && <ReadNotice/>}
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
        {picked !== null && <div style={{ marginTop:'auto', paddingTop:8 }}><GameNextBtn onClick={next} last={i+1>=questions.length}/></div>}
      </div>
    </div>
  );
}

// ── Jeu 2 : Vrai ou Faux ? ───────────────────────────────
function GameVraiFaux({ onBack }) {
  const [questions] = useState(() => filterBank(VRAIFAUX_BANK, getProgress()));
  const [noFilter] = useState(() => {
    const p = getProgress();
    return Object.keys(VRAIFAUX_BANK).every(k => !p[k]);
  });
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null); // 'vrai' | 'faux' | null
  const [done, setDone] = useState(false);

  const q = questions[i];
  const choose = val => { if (picked !== null) return; setPicked(val); };
  const next = () => { if (i+1 >= questions.length) { setDone(true); return; } setI(i+1); setPicked(null); };
  const replay = () => { setI(0); setPicked(null); setDone(false); };

  const userCorrect = picked !== null && ((picked === 'vrai') === q.isTrue);

  if (done) return <GameDone onBack={onBack} onReplay={replay} title="Vrai ou faux terminé !" msg="Tu as fait le tour. Rejoue pour ancrer les notions qui ont glissé." />;

  const revealVrai = picked !== null && q.isTrue;
  const revealFaux = picked !== null && !q.isTrue;
  const pickedVrai = picked === 'vrai';
  const pickedFaux = picked === 'faux';

  let vraiStyle = { background:LA.cream, border:`1.5px solid ${LA.line}` };
  let fauxStyle  = { background:LA.cream, border:`1.5px solid ${LA.line}` };

  if (picked !== null) {
    if (q.isTrue) {
      vraiStyle = { background:'#c8e6c8', border:'1.5px solid #98c598' };
      if (!pickedVrai) fauxStyle = { background:'#f6c9c4', border:'1.5px solid #e69d95' };
    } else {
      fauxStyle = { background:'#c8e6c8', border:'1.5px solid #98c598' };
      if (!pickedFaux) vraiStyle = { background:'#f6c9c4', border:'1.5px solid #e69d95' };
    }
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.rose, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>
      <GameHeader onBack={onBack} title="Vrai ou Faux ?" step={i} total={questions.length} deep={LA.roseDeep}/>
      <div style={{ flex:1, padding:'20px 22px', display:'flex', flexDirection:'column', gap:16, background:LA.roseSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        {noFilter && <ReadNotice/>}
        {/* Statement */}
        <div key={i} style={{ background:LA.cream, borderRadius:20, padding:'20px', boxShadow:'0 2px 14px rgba(43,36,32,.06)', animation:'la-pop .35s cubic-bezier(.2,.8,.3,1)' }}>
          <div style={{ fontSize:10, color:LA.inkSoft, letterSpacing:.7, textTransform:'uppercase', marginBottom:6 }}>affirmation</div>
          <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:18, lineHeight:1.4, letterSpacing:-.2 }}>{q.statement}</div>
        </div>
        {/* Vrai / Faux buttons */}
        <div style={{ display:'flex', gap:10 }}>
          <div onClick={()=>choose('vrai')} style={{
            flex:1, borderRadius:14, padding:'16px', textAlign:'center',
            fontSize:16, fontWeight:700, cursor:picked?'default':'pointer',
            transition:'background .2s, border-color .2s',
            display:'flex', alignItems:'center', justifyContent:'center', gap:8,
            ...vraiStyle,
          }}>
            <span>✓</span><span>Vrai</span>
          </div>
          <div onClick={()=>choose('faux')} style={{
            flex:1, borderRadius:14, padding:'16px', textAlign:'center',
            fontSize:16, fontWeight:700, cursor:picked?'default':'pointer',
            transition:'background .2s, border-color .2s',
            display:'flex', alignItems:'center', justifyContent:'center', gap:8,
            ...fauxStyle,
          }}>
            <span>✗</span><span>Faux</span>
          </div>
        </div>
        {/* Feedback */}
        {picked !== null && (
          <div style={{ background:LA.cream, borderRadius:14, padding:'14px 16px', animation:'la-pop .3s ease-out', border:`1px solid ${LA.line}` }}>
            <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:16, fontWeight:600, color:userCorrect?'#3a7a3a':'#b24a3e' }}>
              {userCorrect ? OK[i%OK.length] : KO[i%KO.length]}
            </div>
            <div style={{ fontSize:12.5, color:LA.inkSoft, marginTop:6, lineHeight:1.5 }}>{q.explain}</div>
          </div>
        )}
        {picked !== null && <div style={{ marginTop:'auto', paddingTop:8 }}><GameNextBtn onClick={next} last={i+1>=questions.length}/></div>}
      </div>
    </div>
  );
}

// ── Jeu 3 : Sauve la princesse ────────────────────────────
function GamePrincesse({ onBack }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState(null);
  const [done, setDone] = useState(false);
  const s = AVENTURE[i];
  const choose = idx => { if (picked !== null) return; setPicked(idx); };
  const next = () => { if (i+1 >= AVENTURE.length) { setDone(true); return; } setI(i+1); setPicked(null); };
  const correct = picked === s.answer;

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

// ── Jeu 4 : Puzzle de la cellule (click-to-select) ────────
function GameCellule({ onBack }) {
  const [placed, setPlaced] = useState({});
  const [pool, setPool] = useState(() => [...PARTS].sort(() => Math.random() - .5));
  const [selected, setSelected] = useState(null); // id string or null
  const [msg, setMsg] = useState(null); // { ok: bool, text: string } | null
  const [done, setDone] = useState(false);

  const handleLabelClick = (partId) => {
    if (placed[partId]) return;
    setSelected(prev => prev === partId ? null : partId);
    setMsg(null);
  };

  const handleZoneClick = (zone) => {
    if (placed[zone.id]) return;
    if (selected === null) return;

    if (selected === zone.id) {
      // Correct match
      const next = { ...placed, [zone.id]: true };
      setPlaced(next);
      setPool(p => p.filter(x => x.id !== zone.id));
      setSelected(null);
      setMsg({ ok: true, text: `${PARTS.find(p => p.id === zone.id)?.label} ✓` });
      if (Object.keys(next).length >= PARTS.length) setTimeout(() => setDone(true), 700);
    } else {
      // Wrong match
      const selectedLabel = PARTS.find(p => p.id === selected)?.label || '';
      setMsg({ ok: false, text: `Ce n'est pas ${selectedLabel.toLowerCase()} ici.` });
    }
    setTimeout(() => setMsg(null), 2200);
  };

  const replay = () => { setPlaced({}); setPool([...PARTS].sort(() => Math.random() - .5)); setSelected(null); setMsg(null); setDone(false); };

  if (done) return <GameDone onBack={onBack} onReplay={replay} title="Bravo, tu l'as montée !" msg="Tu as reconstruit la cellule. Tu peux rejouer pour ancrer." />;

  const instructionText = selected === null
    ? 'Clique sur une étiquette pour la sélectionner'
    : '→ Clique sur la zone correspondante dans la cellule';

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.rose, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s ease-out' }}>
      <GameHeader onBack={onBack} title="Puzzle de la cellule" step={Object.keys(placed).length} total={PARTS.length} deep={LA.roseDeep}/>
      <div style={{ flex:1, padding:'16px 18px', display:'flex', flexDirection:'column', gap:12, background:LA.roseSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        {/* SVG Cell */}
        <div style={{ background:LA.cream, borderRadius:16, padding:10 }}>
          <svg viewBox="0 0 320 230" width="100%" height="220" style={{ display:'block' }}>
            {/* Cell body */}
            <ellipse cx="160" cy="115" rx="148" ry="103" fill="#f9e8e8" stroke={LA.roseDeep} strokeWidth="2" strokeDasharray="3 5" opacity=".8"/>
            {/* Decorative nucleus shadow */}
            <ellipse cx="175" cy="138" rx="36" ry="30" fill="#e9b8b8" opacity=".35"/>
            {/* Decorative mitochondria shape */}
            <ellipse cx="88" cy="100" rx="22" ry="10" fill="#c89090" transform="rotate(-15 88 100)" opacity=".35"/>
            {/* Decorative ER lines */}
            <path d="M230 90 Q 250 105 260 95" fill="none" stroke="#c89090" strokeWidth="4" strokeLinecap="round" opacity=".3"/>
            <path d="M232 100 Q 252 115 262 105" fill="none" stroke="#c89090" strokeWidth="3" strokeLinecap="round" opacity=".25"/>
            {/* Decorative Golgi stacks */}
            <path d="M108 168 Q 126 162 144 168" fill="none" stroke="#d0a0a0" strokeWidth="3" strokeLinecap="round" opacity=".3"/>
            <path d="M110 175 Q 126 169 142 175" fill="none" stroke="#d0a0a0" strokeWidth="3" strokeLinecap="round" opacity=".25"/>
            {/* Zone ellipses */}
            {PARTS.map(z => {
              const isPlaced = placed[z.id];
              const isDropTarget = selected !== null && !isPlaced;
              return (
                <g key={z.id} onClick={() => handleZoneClick(z)} style={{ cursor: selected !== null && !isPlaced ? 'pointer' : 'default' }}>
                  <ellipse
                    cx={z.cx} cy={z.cy} rx={z.rx} ry={z.ry}
                    fill={isPlaced ? LA.yellow+'cc' : isDropTarget ? LA.peach+'88' : 'transparent'}
                    stroke={isPlaced ? LA.yellowDeep : isDropTarget ? LA.peach : LA.ink}
                    strokeWidth={isDropTarget ? 2 : 1.5}
                    strokeDasharray={isPlaced ? '0' : '3 3'}
                    opacity={isPlaced ? 1 : .7}
                  />
                  {isPlaced && (
                    <text x={z.cx} y={z.cy+4} textAnchor="middle" fontSize="8.5" fontFamily="Inter, sans-serif" fontWeight="700" fill={LA.ink}>{z.label}</text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
        {/* Message */}
        {msg && (
          <div style={{ padding:'8px 12px', borderRadius:10, fontSize:12.5, fontWeight:500, background:msg.ok?'#d9edd9':'#f6d6d1', color:msg.ok?'#3a7a3a':'#b24a3e', animation:'la-pop .3s ease-out' }}>{msg.text}</div>
        )}
        {/* Instruction */}
        <div style={{ fontSize:11, color:LA.inkSoft, letterSpacing:.4, fontStyle:'italic' }}>{instructionText}</div>
        {/* Pool labels */}
        <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
          {pool.map(p => {
            const isSelected = selected === p.id;
            return (
              <div
                key={p.id}
                onClick={() => handleLabelClick(p.id)}
                style={{
                  padding:'8px 14px',
                  background: isSelected ? LA.ink : LA.yellow,
                  color: isSelected ? LA.cream : LA.ink,
                  borderRadius:999,
                  fontSize:13, fontWeight:600, cursor:'pointer',
                  boxShadow: isSelected ? 'none' : `0 2px 0 ${LA.yellowDeep}66`,
                  userSelect:'none',
                  transition:'background .15s, color .15s',
                }}
              >{p.label}</div>
            );
          })}
        </div>
        {pool.length === 0 && (
          <div style={{ marginTop:'auto' }}><GameNextBtn onClick={() => setDone(true)} last/></div>
        )}
      </div>
    </div>
  );
}

// ── Hub principal ─────────────────────────────────────────
export default function GamesPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  if (active === 'quidit')    return <GameQuiDit    onBack={() => setActive(null)}/>;
  if (active === 'vraifaux')  return <GameVraiFaux  onBack={() => setActive(null)}/>;
  if (active === 'princesse') return <GamePrincesse onBack={() => setActive(null)}/>;
  if (active === 'cellule')   return <GameCellule   onBack={() => setActive(null)}/>;

  return (
    <div style={{ animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>
      <div style={{ padding:'0 0 28px' }}>
        <button onClick={() => navigate('/')} style={{ width:36, height:36, borderRadius:18, background:LA.creamDeep, border:'none', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, cursor:'pointer', marginBottom:16 }}>←</button>
        <div style={{ fontSize:11, color:LA.inkSoft, letterSpacing:.7, textTransform:'uppercase' }}>Jeux · on souffle un peu</div>
        <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:36, fontWeight:500, letterSpacing:-1, lineHeight:1, marginTop:6 }}>
          Un peu de fun<br/>
          <span style={{ fontStyle:'italic', color:LA.inkSoft }}>pour mieux retenir.</span>
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        {GAMES.map(g => (
          <div key={g.id} onClick={() => setActive(g.id)} style={{
            background:g.bg, borderRadius:20, padding:'18px 20px',
            display:'flex', alignItems:'center', gap:16, cursor:'pointer',
            boxShadow:`inset 0 -6px 0 ${g.deep}44`,
            transition:'transform .15s, box-shadow .15s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=`0 8px 24px rgba(43,36,32,.12),inset 0 -6px 0 ${g.deep}44`; }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=`inset 0 -6px 0 ${g.deep}44`; }}
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
