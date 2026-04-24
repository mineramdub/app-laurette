import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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

function getQuiDitScores() {
  try { return JSON.parse(localStorage.getItem('laure_quidit_scores') || '{}'); }
  catch { return {}; }
}

function saveQuiDitScore(key, count) {
  const s = getQuiDitScores();
  s[key] = count;
  localStorage.setItem('laure_quidit_scores', JSON.stringify(s));
}

function normalizeAnswer(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
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
    { thesis: '"Agis uniquement selon la maxime qui fait que tu peux vouloir en même temps qu\'elle devienne une loi universelle."', options: ['Kant','Rousseau','Mill'], answer: 0, explain: 'Kant, Fondements de la métaphysique des mœurs. L\'impératif catégorique interdit le mensonge : si tout le monde mentait, la confiance et le langage s\'effondreraient.' },
    { thesis: '"Il faut manger pour vivre, et non vivre pour manger."', options: ['Molière','Voltaire','Rousseau'], answer: 0, explain: 'Molière, L\'Avare. Exemple canonique de chiasme (AB/BA) — figure de construction croisée qui crée un effet de symétrie et de renversement saisissant.' },
  ],
  hlp_ch2_cours: [
    { thesis: '"Les limites de mon langage signifient les limites de mon monde."', options: ['Husserl','Bergson','Wittgenstein'], answer: 2, explain: 'Wittgenstein, Tractatus. Le langage ne reflète pas passivement le monde — il le constitue. Ce qu\'on ne peut dire clairement, on doit le taire.' },
    { thesis: '"Des prisonniers enchaînés prennent les ombres projetées sur la paroi pour la réalité."', options: ['Aristote','Platon','Descartes'], answer: 1, explain: 'Platon, La République. L\'allégorie de la caverne illustre l\'opposition entre opinion (doxa) et connaissance vraie (épistémè), accessible par la philosophie.' },
    { thesis: '"La science ne pense pas."', options: ['Bachelard','Heidegger','Popper'], answer: 1, explain: 'Heidegger, Essais et conférences. La science calcule et produit des résultats efficaces, mais elle ne s\'interroge pas sur ses propres fondements — rôle de la philosophie.' },
    { thesis: '"Il faut imaginer Sisyphe heureux."', options: ['Sartre','Nietzsche','Camus'], answer: 2, explain: 'Camus, Le Mythe de Sisyphe (1942). Face à l\'absurdité de l\'existence (rocher éternel), la révolte lucide est la seule réponse digne — non le suicide ni l\'espoir illusoire.' },
    { thesis: '"Je sais que je ne sais rien."', options: ['Platon','Socrate','Aristote'], answer: 1, explain: 'Socrate (rapporté par Platon). La maïeutique socratique commence par la conscience de sa propre ignorance — seul point de départ honnête vers la sagesse.' },
  ],
  hlp_ch3_cours: [
    { thesis: '"Seul ce qui ne cesse pas de faire mal reste dans la mémoire."', options: ['Nietzsche','Freud','Bergson'], answer: 0, explain: 'Nietzsche, Généalogie de la morale. La mémoire n\'est pas naturelle — elle est inscrite par la douleur et la contrainte sociale.' },
    { thesis: '"Le réel est rationnel, et le rationnel est réel."', options: ['Marx','Hegel','Kant'], answer: 1, explain: 'Hegel, Principes de la philosophie du droit. L\'histoire n\'est pas un chaos : elle réalise progressivement la Raison (l\'Esprit absolu se déployant dans le temps).' },
    { thesis: '"Il est plus difficile d\'honorer la mémoire des sans-nom que celle des célébrités."', options: ['Arendt','Benjamin','Ricœur'], answer: 1, explain: 'Walter Benjamin, Thèses sur la philosophie de l\'histoire. Une histoire à contre-poil doit récupérer la mémoire des vaincus, que l\'histoire officielle écrase.' },
    { thesis: '"La guerre est la continuation de la politique par d\'autres moyens."', options: ['Machiavel','Napoléon','Clausewitz'], answer: 2, explain: 'Clausewitz, De la guerre (1832). La guerre n\'est pas une rupture avec la politique mais son prolongement — elle reste un instrument rationnel au service d\'objectifs politiques.' },
    { thesis: '"La paix perpétuelle ne nécessite pas une world-government mais une fédération d\'États républicains."', options: ['Kant','Rousseau','Voltaire'], answer: 0, explain: 'Kant, Vers la paix perpétuelle (1795). La paix durable exige des institutions : États républicains, droit cosmopolitique, fédération internationale. Inspiration de l\'ONU.' },
  ],
  hlp_ch4_cours: [
    { thesis: '"Je pense, donc je suis."', options: ['Descartes','Spinoza','Leibniz'], answer: 0, explain: 'Descartes, Discours de la méthode (1637). Après le doute radical, la seule certitude indubitable : le fait de penser prouve l\'existence du sujet pensant.' },
    { thesis: '"L\'homme est condamné à être libre."', options: ['Camus','Nietzsche','Sartre'], answer: 2, explain: 'Sartre, L\'Existentialisme est un humanisme. On n\'a pas choisi d\'exister, mais on doit choisir ce qu\'on fait de sa liberté — et en assumer l\'entière responsabilité.' },
    { thesis: '"L\'enfer, c\'est les autres."', options: ['Beauvoir','Sartre','Camus'], answer: 1, explain: 'Sartre, Huis clos (1944). Le regard d\'autrui nous fige comme objet et nous juge — tension fondamentale entre ma liberté et celle d\'autrui.' },
    { thesis: '"Le bonheur est l\'activité de l\'âme conforme à la vertu."', options: ['Platon','Épicure','Aristote'], answer: 2, explain: 'Aristote, Éthique à Nicomaque. L\'eudaimonia n\'est pas un état passif mais une pratique — vivre selon la vertu et développer ses capacités proprement humaines.' },
    { thesis: '"On ne naît pas femme, on le devient."', options: ['Arendt','Woolf','Beauvoir'], answer: 2, explain: 'Simone de Beauvoir, Le Deuxième Sexe (1949). La féminité est une construction sociale et culturelle, non un destin biologique — l\'existence précède l\'essence.' },
    { thesis: '"Le visage d\'autrui dit : Tu ne tueras point."', options: ['Sartre','Levinas','Arendt'], answer: 1, explain: 'Emmanuel Levinas, Totalité et Infini (1961). Le visage d\'autrui est une épiphanie éthique inconditionnelle — il m\'impose une responsabilité infinie avant tout choix.' },
    { thesis: '"Le désir est l\'essence même de l\'homme."', options: ['Freud','Nietzsche','Spinoza'], answer: 2, explain: 'Spinoza, Éthique (1677). Le désir (conatus) est la puissance d\'exister et d\'agir. Il ne faut pas le nier mais le comprendre pour l\'orienter vers la joie.' },
  ],
  hlp_ch5_cours: [
    { thesis: '"L\'homme n\'est ce qu\'il est que par l\'éducation."', options: ['Rousseau','Kant','Durkheim'], answer: 1, explain: 'Kant, Réflexions sur l\'éducation. L\'homme ne naît pas humain — il le devient par la discipline et la culture. L\'éducation est ce qui arrache l\'homme à l\'animalité.' },
    { thesis: '"Émile doit apprendre par l\'expérience directe, non par des livres."', options: ['Locke','Rousseau','Pestalozzi'], answer: 1, explain: 'Rousseau, Émile ou De l\'éducation (1762). L\'enfant est naturellement bon — l\'éducation doit préserver cette bonté en s\'adaptant aux stades du développement naturel.' },
    { thesis: '"L\'école est un facteur de reproduction des inégalités sociales."', options: ['Marx','Bourdieu','Foucault'], answer: 1, explain: 'Bourdieu & Passeron, La Reproduction (1970). Le capital culturel transmis en famille avantage les enfants des classes dominantes, que l\'école reproduit sous couvert de méritocratie.' },
    { thesis: '"Il faut instruire le peuple pour émanciper les esprits."', options: ['Condorcet','Voltaire','Diderot'], answer: 0, explain: 'Condorcet, Esquisse d\'un tableau des progrès de l\'esprit humain. L\'instruction publique universelle est le fondement de la démocratie et du progrès moral.' },
  ],
  hlp_ch6_cours: [
    { thesis: '"Le beau est ce qui plaît universellement sans concept."', options: ['Schiller','Hegel','Kant'], answer: 2, explain: 'Kant, Critique de la faculté de juger (1790). Le jugement de goût prétend à l\'universalité (\'c\'est beau\') sans reposer sur un concept — il est désintéressé et contemplatif.' },
    { thesis: '"L\'art est la sensibilisation de l\'Idée absolue."', options: ['Schopenhauer','Nietzsche','Hegel'], answer: 2, explain: 'Hegel, Esthétique (1835). L\'art rend sensible l\'idéal spirituel — il est une forme d\'expression de l\'Esprit absolu, au même titre que la religion et la philosophie.' },
    { thesis: '"La musique est la plus haute des formes d\'art car elle est pure expression de la volonté."', options: ['Hegel','Nietzsche','Schopenhauer'], answer: 2, explain: 'Schopenhauer, Le Monde comme volonté et représentation. La musique exprime directement la Volonté — l\'essence métaphysique du monde — sans passer par des représentations.' },
    { thesis: '"Sans la musique, la vie serait une erreur."', options: ['Schopenhauer','Wagner','Nietzsche'], answer: 2, explain: 'Nietzsche, Le Crépuscule des idoles. Pour le jeune Nietzsche nietzschéen, la musique (notamment Wagner) est l\'art dionysiaque par excellence — affirmation vitale contre le rationalisme socratique.' },
  ],
  hlp_ch7_cours: [
    { thesis: '"L\'existence précède l\'essence."', options: ['Heidegger','Camus','Sartre'], answer: 2, explain: 'Sartre, L\'Existentialisme est un humanisme (1945). Contrairement au coupe-papier (conçu avant d\'être fabriqué), l\'homme existe d\'abord et se définit ensuite par ses actes.' },
    { thesis: '"On ne naît pas femme, on le devient."', options: ['Wollstonecraft','Butler','Beauvoir'], answer: 2, explain: 'Beauvoir, Le Deuxième Sexe (1949). L\'identité de genre est une construction progressive — cumul de conditionnements sociaux, non destin biologique.' },
    { thesis: '"Le moi est une fiction grammaticale."', options: ['Sartre','Hume','Nietzsche'], answer: 2, explain: 'Nietzsche, Par-delà bien et mal. Le sujet unifié n\'existe pas en soi — il est une interprétation grammaticale que nous imposons à un flux d\'expériences sans centre fixe.' },
    { thesis: '"Je est un autre."', options: ['Baudelaire','Verlaine','Rimbaud'], answer: 2, explain: 'Arthur Rimbaud, lettre du Voyant (1871). La créativité poétique exige de se désapproprier le moi conventionnel — le poète se fait voyant en dérèglant tous ses sens.' },
  ],
  hlp_ch8_cours: [
    { thesis: '"L\'homme est un animal politique."', options: ['Platon','Socrate','Aristote'], answer: 2, explain: 'Aristote, Politique. L\'homme ne peut s\'épanouir qu\'en cité — il est par nature fait pour vivre avec d\'autres et participer à la vie politique. Seuls les dieux ou les bêtes peuvent vivre seuls.' },
    { thesis: '"L\'homme est un animal qui fabrique des outils."', options: ['Bergson','Marx','Franklin'], answer: 0, explain: 'Bergson, L\'Évolution créatrice (1907). L\'Homo faber définit l\'intelligence humaine par la fabrication. Bergson nuance en ajoutant l\'intuition comme connaissance supérieure à l\'intelligence.' },
    { thesis: '"La prohibition de l\'inceste est la démarche fondatrice par laquelle la nature se dépasse elle-même."', options: ['Freud','Durkheim','Lévi-Strauss'], answer: 2, explain: 'Lévi-Strauss, Les Structures élémentaires de la parenté (1949). Le tabou de l\'inceste est universel mais sa forme varie — c\'est la norme fondatrice qui fait passer de nature à culture.' },
    { thesis: '"Il n\'y a pas de culture primitive — toutes les cultures sont également complexes."', options: ['Montaigne','Rousseau','Lévi-Strauss'], answer: 2, explain: 'Lévi-Strauss, Race et Histoire (1952). L\'ethnocentrisme est un biais — toute culture a sa logique interne cohérente. La pensée sauvage n\'est pas inférieure à la pensée scientifique.' },
  ],
  hlp_ch9_cours: [
    { thesis: '"Eichmann ne pensait pas. Il exécutait des ordres sans réfléchir à ce qu\'il faisait."', options: ['Primo Levi','Hannah Arendt','Simone Weil'], answer: 1, explain: 'Arendt, Eichmann à Jérusalem (1963). La \'banalité du mal\' : les crimes les plus terribles peuvent être commis par des gens ordinaires, sans malveillance, par simple absence de jugement moral.' },
    { thesis: '"La guerre est la mère de toutes choses."', options: ['Héraclite','Thucydide','Machiavel'], answer: 0, explain: 'Héraclite (fragment 53). La guerre et le conflit sont les moteurs du devenir — de leur opposition naissent toutes les formes et distinctions. Repris par Hegel dans sa dialectique.' },
    { thesis: '"La résistance à l\'oppression est le plus sacré des droits."', options: ['Rousseau','Robespierre','Montesquieu'], answer: 1, explain: 'Robespierre, reprenant la Déclaration des droits de 1789. Le droit de résistance à l\'oppression est l\'un des quatre droits naturels et imprescriptibles reconnus par la Révolution.' },
    { thesis: '"Il y a des moments où l\'obéissance à la loi est le plus haut degré de la trahison."', options: ['Thoreau','Gandhi','Mandela'], answer: 0, explain: 'Thoreau, La Résistance au gouvernement civil (1849). La désobéissance civile : quand une loi est injuste, le citoyen de conscience doit refuser de la respecter, quitte à en payer le prix légal.' },
  ],
  hlp_ch10_cours: [
    { thesis: '"L\'existence précède l\'essence."', options: ['Heidegger','Camus','Sartre'], answer: 2, explain: 'Sartre, L\'Existentialisme est un humanisme (1946). L\'homme n\'a pas de nature préétablie — il se définit par ses actes. \'En choisissant pour moi-même, je choisis pour tous les hommes.\'' },
    { thesis: '"La mort n\'est rien pour nous : quand nous sommes là, elle n\'est pas là ; quand elle est là, nous n\'y sommes plus."', options: ['Lucrèce','Épicure','Sénèque'], answer: 1, explain: 'Épicure, Lettre à Ménécée. Argument symétrique : avant la naissance, le non-être ne nous affectait pas. Après la mort, il en sera de même. La craindre est une erreur logique.' },
    { thesis: '"Il faut imaginer Sisyphe heureux."', options: ['Sartre','Nietzsche','Camus'], answer: 2, explain: 'Camus, Le Mythe de Sisyphe (1942). L\'absurde naît du choc entre le désir humain de sens et le silence du monde. La révolte lucide — continuer malgré tout — est la seule réponse digne.' },
    { thesis: '"L\'angoisse est le vertige de la liberté."', options: ['Sartre','Kierkegaard','Heidegger'], answer: 1, explain: 'Kierkegaard, Le Concept d\'angoisse (1844). L\'homme libre regarde en bas du précipice de ses possibilités infinies et s\'angoisse — non d\'une peur concrète mais de sa propre liberté.' },
  ],
  philo_conscience_cours: [
    { thesis: '"Je pense, donc je suis."', options: ['Leibniz','Spinoza','Descartes'], answer: 2, explain: 'Descartes, Méditations métaphysiques (1641). Après le doute hyperbolique, seul le cogito résiste : en doutant, je pense ; en pensant, j\'existe. Fondation de la philosophie moderne.' },
    { thesis: '"Le moi n\'est pas maître dans sa propre maison."', options: ['Jung','Freud','Lacan'], answer: 1, explain: 'Freud. L\'inconscient — réservoir de désirs refoulés — influence nos comportements à notre insu. La psychanalyse vise à rendre conscient ce qui était inconscient.' },
    { thesis: '"L\'existence d\'autrui est nécessaire pour que je me reconnaisse comme conscience."', options: ['Descartes','Kant','Hegel'], answer: 2, explain: 'Hegel, Phénoménologie de l\'Esprit. La dialectique maître-esclave : la conscience de soi est intersubjective — je ne me reconnais comme sujet que si une autre conscience me reconnaît.' },
    { thesis: '"L\'angoisse est la conscience vertigineuse de la liberté absolue."', options: ['Freud','Kierkegaard','Sartre'], answer: 2, explain: 'Sartre, L\'Être et le Néant (1943). La mauvaise foi est une fuite de cette angoisse : on se comporte comme une chose déterminée pour éviter l\'abîme de sa liberté.' },
  ],
  philo_liberte_cours: [
    { thesis: '"Les hommes se croient libres parce qu\'ils ont conscience de leurs appétits et ignorent les causes qui les déterminent."', options: ['Leibniz','Hume','Spinoza'], answer: 2, explain: 'Spinoza, Éthique (1677). La liberté illusoire vient de l\'ignorance de nos causes. La vraie liberté spinoziste est la compréhension de ce qui nous détermine — passer de la passivité à l\'activité.' },
    { thesis: '"L\'homme est né libre et partout il est dans les fers."', options: ['Voltaire','Montesquieu','Rousseau'], answer: 2, explain: 'Rousseau, Du Contrat social (1762). La société a corrompu l\'homme naturellement bon et libre. Le contrat social légitime tente de réconcilier liberté naturelle et vie en société.' },
    { thesis: '"Le seul but légitime pour contraindre la liberté d\'un individu est de protéger les autres."', options: ['Locke','Kant','Mill'], answer: 2, explain: 'John Stuart Mill, De la liberté (1859). Principe de non-nuisance : ma liberté s\'arrête où commence le dommage causé à autrui. Fondement du libéralisme politique classique.' },
    { thesis: '"Liberté n\'est pas faire ce qu\'on veut, mais obéir à la loi qu\'on s\'est donnée."', options: ['Locke','Rousseau','Kant'], answer: 2, explain: 'Kant. L\'autonomie morale — se donner à soi-même sa propre loi selon la raison — est la vraie liberté. L\'hétéronomie (obéir à l\'inclination ou à l\'autorité) est une forme de servitude.' },
  ],
  philo_verite_cours: [
    { thesis: '"Il n\'y a pas de faits, seulement des interprétations."', options: ['Foucault','Heidegger','Nietzsche'], answer: 2, explain: 'Nietzsche, Fragments posthumes. Le perspectivisme : toute vérité est une perspective liée à une volonté de puissance. Il n\'existe pas de \'vue de nulle part\' — toute connaissance est situated.' },
    { thesis: '"Ce dont on ne peut parler, il faut le taire."', options: ['Wittgenstein','Russell','Frege'], answer: 0, explain: 'Wittgenstein, Tractatus logico-philosophicus (1921). Les propositions métaphysiques sont sans sens — elles ne décrivent ni ne font rien. Seules les propositions factuelles ont un sens véritable.' },
    { thesis: '"Une théorie scientifique doit pouvoir être réfutée par l\'expérience."', options: ['Kuhn','Popper','Bachelard'], answer: 1, explain: 'Popper, La Logique de la découverte scientifique (1934). La falsifiabilité est le critère de démarcation science/pseudo-science. On ne prouve jamais définitivement une théorie — on ne fait que la corroborer.' },
    { thesis: '"La vérité est une armée mobile de métaphores usées devenues monnaie courante."', options: ['Bergson','Nietzsche','Derrida'], answer: 1, explain: 'Nietzsche, Vérité et mensonge au sens extra-moral. Les \'vérités\' sont des métaphores que nous oublions être des métaphores — elles semblent objectives mais restent des constructions humaines.' },
  ],
  philo_etat_cours: [
    { thesis: '"La vie de l\'homme est solitaire, misérable, dangereuse, animale et brève."', options: ['Machiavel','Locke','Hobbes'], answer: 2, explain: 'Hobbes, Léviathan (1651). Description de l\'état de nature sans État — guerre de tous contre tous. Pour en sortir, les hommes transfèrent leur puissance à un souverain absolu.' },
    { thesis: '"Tout homme qui a du pouvoir est porté à en abuser."', options: ['Rousseau','Voltaire','Montesquieu'], answer: 2, explain: 'Montesquieu, De l\'Esprit des lois (1748). La séparation des pouvoirs (législatif, exécutif, judiciaire) est la garantie institutionnelle contre la tyrannie — chaque pouvoir freine les autres.' },
    { thesis: '"Le peuple anglais se croit libre ; il ne l\'est que durant l\'élection des membres du parlement."', options: ['Voltaire','Locke','Rousseau'], answer: 2, explain: 'Rousseau, Du Contrat social (1762). Critique de la démocratie représentative : déléguer sa volonté à des représentants, c\'est aliéner sa liberté. La vraie liberté exige la démocratie directe.' },
    { thesis: '"Derrière le voile d\'ignorance, nous choisirions des principes protégeant les plus défavorisés."', options: ['Nozick','Sen','Rawls'], answer: 2, explain: 'Rawls, Théorie de la justice (1971). Le voile d\'ignorance garantit l\'impartialité : sans savoir notre place dans la société, nous choisirions l\'égalité des libertés et le principe de différence.' },
  ],
  philo_bonheur_cours: [
    { thesis: '"Quand nous disons que le plaisir est le but de la vie, nous ne parlons pas des plaisirs des débauchés."', options: ['Épicure','Hédonisme vulgaire','Aristippe'], answer: 0, explain: 'Épicure, Lettre à Ménécée. Le bonheur épicurien n\'est pas la débauche mais l\'ataraxie (absence de trouble) et l\'aponie (absence de douleur) — obtenues par désirs simples et amitié.' },
    { thesis: '"Ce qui dépend de nous est en notre pouvoir ; ce qui n\'en dépend pas ne nous concerne pas."', options: ['Marc Aurèle','Épicure','Épictète'], answer: 2, explain: 'Épictète, Manuel. La distinction fondamentale du stoïcisme : nos jugements, désirs et aversions dépendent de nous. Le reste (corps, richesse, réputation) ne dépend pas de nous — l\'accepter, c\'est être libre.' },
    { thesis: '"Les seules personnes heureuses sont celles dont l\'esprit est fixé sur autre chose que leur propre bonheur."', options: ['Kant','Mill','Bentham'], answer: 1, explain: 'John Stuart Mill, Autobiographie. Le paradoxe du bonheur : chercher directement le bonheur l\'éloigne. Il vient en poursuivant une cause, un art, des relations — par surcroît, non par intention directe.' },
    { thesis: '"Le bonheur ne se cherche pas directement — il résulte d\'une vie pourvue de sens."', options: ['Seligman','Frankl','Csikszentmihalyi'], answer: 1, explain: 'Viktor Frankl, Man\'s Search for Meaning (1946). Survivant des camps nazis, Frankl observe que ceux qui trouvaient un sens à leur souffrance résistaient mieux. La recherche de sens précède et conditionne le bonheur.' },
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
  // ── HLP ──────────────────────────────────────────────────
  hlp_ch1_cours: [
    { statement: "Aristote pensait que la rhétorique ne sert qu'à manipuler les foules.", isTrue: false, explain: "FAUX. Aristote, Rhétorique : la rhétorique est l'art de trouver ce qui est propre à persuader — elle peut être honnête. Il distingue l'argumentation légitime (logos, ethos, pathos) de la manipulation sophistique." },
    { statement: "Kant pensait que le mensonge est toujours immoral, même pour sauver quelqu'un.", isTrue: true, explain: "VRAI. L'impératif catégorique interdit le mensonge sans exception : si tout le monde mentait, la confiance et le langage lui-même s'effondreraient. L'utilitarisme (Mill, Bentham) admet au contraire le 'mensonge bienveillant'." },
    { statement: "Austin affirmait que tous les énoncés décrivent une réalité (sont vrais ou faux).", isTrue: false, explain: "FAUX. Austin, Quand dire c'est faire : certains énoncés sont performatifs — ils accomplissent un acte ('Je vous déclare mariés'). Ils ne décrivent rien, ils font quelque chose. Ils sont 'heureux' ou 'malheureux', pas vrais ou faux." },
    { statement: "Platon distinguait le philosophe du sophiste en disant que le sophiste cherche la vérité.", isTrue: false, explain: "FAUX. Pour Platon, le sophiste vend sa sagesse au plus offrant et cherche à persuader sans souci de la vérité. Le philosophe (amour de la sagesse) s'oppose au sophiste qui maîtrise la rhétorique vide de contenu." },
  ],
  hlp_ch2_cours: [
    { statement: "Camus affirmait que la réponse juste à l'absurde de l'existence est le suicide.", isTrue: false, explain: "FAUX. Camus, Le Mythe de Sisyphe : la réponse à l'absurde n'est ni le suicide ni l'espoir illusoire ('saut philosophique'), mais la révolte lucide. Il faut imaginer Sisyphe heureux — continuer malgré tout." },
    { statement: "Descartes affirmait que les sens sont une source fiable de connaissance.", isTrue: false, explain: "FAUX. Descartes, Méditations : le doute hyperbolique remet en cause les sens (qui peuvent tromper), le rêve, et même les mathématiques. Seul le cogito — 'Je pense, donc je suis' — résiste au doute radical." },
    { statement: "Popper affirmait qu'une théorie est scientifique si on peut la vérifier définitivement.", isTrue: false, explain: "FAUX. Popper : le critère de scientificité est la falsifiabilité (réfutabilité), non la vérifiabilité. On ne peut jamais 'prouver' définitivement une théorie — un seul contre-exemple suffit à la réfuter." },
    { statement: "Kuhn affirmait que la science progresse uniquement par accumulation linéaire de connaissances.", isTrue: false, explain: "FAUX. Kuhn, La Structure des révolutions scientifiques : la science avance par 'changements de paradigme' — des révolutions où un cadre conceptuel entier est remplacé (Copernic, Newton, Einstein). Ce n'est pas linéaire." },
  ],
  hlp_ch3_cours: [
    { statement: "Clausewitz pensait que la guerre est une rupture totale avec la politique.", isTrue: false, explain: "FAUX. Clausewitz, De la guerre (1832) : 'La guerre est la continuation de la politique par d'autres moyens.' Elle reste un instrument rationnel au service d'objectifs politiques, pas une rupture." },
    { statement: "Kant proposait une fédération d'États républicains pour garantir la paix perpétuelle.", isTrue: true, explain: "VRAI. Kant, Vers la paix perpétuelle (1795) : la paix durable nécessite des institutions — États républicains, droit cosmopolitique, fédération internationale. Inspiration directe de la SDN puis de l'ONU." },
    { statement: "Hegel voyait l'histoire comme un progrès aléatoire sans direction ni sens.", isTrue: false, explain: "FAUX. Hegel voit l'histoire comme le déploiement dialectique de l'Esprit vers la liberté. L'histoire a un sens et un but — chaque civilisation incarne une étape de ce processus. Position téléologique." },
    { statement: "Ricœur pensait que le devoir de mémoire est toujours bénéfique, quelle qu'en soit l'intensité.", isTrue: false, explain: "FAUX. Ricœur, La Mémoire, l'Histoire, l'Oubli (2000) : il met en garde contre l'abus de mémoire — une mémoire obsessionnelle qui enferme dans le passé et empêche la réconciliation. La mémoire juste est nécessaire, l'abus est néfaste." },
  ],
  hlp_ch4_cours: [
    { statement: "Sartre affirmait que l'existence précède l'essence pour l'être humain.", isTrue: true, explain: "VRAI. Sartre, L'Existentialisme est un humanisme : contrairement au coupe-papier (dont l'essence précède l'existence), l'homme existe d'abord et se définit ensuite par ses actes. Il n'y a pas de nature humaine préétablie." },
    { statement: "Beauvoir pensait que l'identité féminine est déterminée biologiquement.", isTrue: false, explain: "FAUX. Beauvoir, Le Deuxième Sexe : 'On ne naît pas femme, on le devient.' L'identité de genre est une construction sociale progressive, non un destin biologique. L'existence précède l'essence." },
    { statement: "Sartre pensait que le regard d'autrui est libérateur et nous révèle positivement à nous-mêmes.", isTrue: false, explain: "FAUX. Sartre, Huis clos : le regard d'autrui me fige en objet et me soumet à un jugement que je ne contrôle pas — 'L'enfer, c'est les autres.' C'est Levinas qui voit dans le visage d'autrui un appel positif et éthique." },
    { statement: "Levinas affirmait que le visage d'autrui est un appel éthique inconditionnel — 'Tu ne tueras point'.", isTrue: true, explain: "VRAI. Levinas, Totalité et Infini (1961) : le visage d'autrui, dans sa vulnérabilité, m'impose une responsabilité infinie avant tout choix. Renversement de Sartre : autrui n'est pas une menace mais un fondement de la morale." },
    { statement: "Spinoza pensait que le désir est une faiblesse qu'il faut combattre.", isTrue: false, explain: "FAUX. Spinoza, Éthique : 'Le désir est l'essence même de l'homme.' Il ne faut pas le nier (ce serait vain) mais le comprendre et l'orienter vers ce qui augmente notre puissance d'agir (la joie)." },
  ],
  hlp_ch5_cours: [
    { statement: "Kant affirmait que l'homme n'est ce qu'il est que par l'éducation.", isTrue: true, explain: "VRAI. Kant, Réflexions sur l'éducation : l'homme ne naît pas humain — il le devient par la discipline, la culture et la morale. L'éducation est ce qui arrache l'homme à son animalité et le rend autonome." },
    { statement: "Rousseau pensait que l'enfant est naturellement mauvais et doit être corrigé.", isTrue: false, explain: "FAUX. C'est la position opposée : Rousseau affirmait que l'homme naît bon et que c'est la société qui le corrompt. L'éducation doit préserver cette bonté naturelle en s'adaptant au développement naturel de l'enfant (Émile)." },
    { statement: "Bourdieu pensait que l'école est un facteur de reproduction des inégalités sociales.", isTrue: true, explain: "VRAI. Bourdieu & Passeron, La Reproduction (1970) : l'école valorise le capital culturel des classes dominantes et le présente comme mérite universel — reproduisant les inégalités sous couvert de neutralité." },
    { statement: "Rousseau recommandait que l'éducation d'Émile passe d'abord par les livres et les cours.", isTrue: false, explain: "FAUX. Rousseau, Émile : l'apprentissage doit passer par l'expérience directe et la nature, non les livres. Émile apprend en faisant, en touchant, en expérimentant — l'abstraction vient plus tard." },
  ],
  hlp_ch6_cours: [
    { statement: "Kant affirmait que le beau plaît universellement et sans concept.", isTrue: true, explain: "VRAI. Kant, Critique de la faculté de juger (1790) : le jugement de goût ('c'est beau') prétend à l'universalité sans reposer sur un concept déterminé. Il est désintéressé — contrairement à l'agréable (plaisir subjectif) ou au bien (moral)." },
    { statement: "Hegel pensait que l'art est inférieur à la religion et à la philosophie.", isTrue: false, explain: "FAUX. Pour Hegel, Esthétique, l'art est l'une des trois formes d'expression de l'Esprit absolu — au même titre que la religion et la philosophie. L'art rend sensible l'idéal, il ne lui est pas inférieur." },
    { statement: "Nietzsche affirmait que sans la musique, la vie serait une erreur.", isTrue: true, explain: "VRAI. Nietzsche, Le Crépuscule des idoles. La musique est l'art dionysiaque par excellence — affirmation vitale, expression directe de la volonté de vivre. Nietzsche opposait Dionysos (musique, ivresse) à Apollon (forme, raison)." },
    { statement: "Kant confondait le beau (esthétique) et l'agréable (plaisir des sens).", isTrue: false, explain: "FAUX. Kant distingue précisément : l'agréable est subjectif et dépend des sens ('ce vin m'est agréable') ; le beau prétend à l'universalité ('ce tableau est beau'). La différence est l'absence de concept et le désintéressement." },
  ],
  hlp_ch7_cours: [
    { statement: "Rimbaud affirmait 'Je est un autre' pour exprimer que le poète doit se désapproprier son moi.", isTrue: true, explain: "VRAI. Rimbaud, Lettre du Voyant (1871) : la créativité poétique exige de dépasser le moi conventionnel. Le poète se fait voyant par un 'dérèglement de tous les sens' — il n'est plus maître de lui mais passeur d'une voix autre." },
    { statement: "Hume affirmait que le moi est une substance permanente et immuable.", isTrue: false, explain: "FAUX. Hume, Traité de la nature humaine : le moi n'est qu'un 'faisceau de perceptions' — une suite d'impressions et d'idées sans substance unifiante. L'identité personnelle est une fiction utile, non une réalité." },
    { statement: "Nietzsche pensait que le moi est une fiction grammaticale.", isTrue: true, explain: "VRAI. Nietzsche, Par-delà bien et mal : le sujet unifié est une interprétation grammaticale que nous imposons à un flux d'expériences sans centre fixe. 'Je pense' suppose un 'je' qui serait l'auteur de la pensée — illusion." },
    { statement: "Beauvoir affirmait que l'identité de genre est une donnée biologique naturelle.", isTrue: false, explain: "FAUX. Beauvoir, Le Deuxième Sexe : 'On ne naît pas femme, on le devient.' L'identité de genre est une construction progressive par conditionnements sociaux. Cette thèse a fondé le féminisme contemporain." },
  ],
  hlp_ch8_cours: [
    { statement: "Aristote affirmait que l'homme est par nature un animal politique.", isTrue: true, explain: "VRAI. Aristote, Politique : l'homme ne peut s'épanouir qu'en cité — il est fait pour vivre avec d'autres et participer à la vie politique. Seuls les dieux ou les bêtes peuvent vivre seuls. La solitude totale n'est pas humaine." },
    { statement: "Lévi-Strauss pensait que certaines cultures sont primitives et inférieures aux cultures occidentales.", isTrue: false, explain: "FAUX. Lévi-Strauss, Race et Histoire (1952) : toutes les cultures sont également complexes — l'ethnocentrisme est un biais. La 'pensée sauvage' n'est pas inférieure à la pensée scientifique, elle a sa logique propre." },
    { statement: "Lévi-Strauss affirmait que le tabou de l'inceste est le passage de la nature à la culture.", isTrue: true, explain: "VRAI. Lévi-Strauss, Les Structures élémentaires de la parenté (1949) : l'interdit de l'inceste est universel (nature) mais sa forme varie (culture). C'est la norme fondatrice par laquelle la nature se dépasse elle-même." },
    { statement: "Bergson définissait l'homme uniquement comme Homo faber — fabricateur d'outils.", isTrue: false, explain: "FAUX. Bergson, L'Évolution créatrice : si l'intelligence humaine est caractérisée par la fabrication (Homo faber), Bergson ajoute que l'intuition — connaissance directe de la durée — est une dimension supérieure spécifiquement humaine." },
  ],
  hlp_ch9_cours: [
    { statement: "Hannah Arendt affirmait que les grands crimes contre l'humanité ne peuvent être commis que par des monstres.", isTrue: false, explain: "FAUX. Arendt, Eichmann à Jérusalem (1963) : la 'banalité du mal' — Eichmann était un bureaucrate ordinaire qui 'ne pensait pas', obéissait aux ordres. Le mal radical peut être commis sans malveillance, par simple absence de jugement moral." },
    { statement: "Clausewitz voyait la guerre comme un instrument rationnel au service de la politique.", isTrue: true, explain: "VRAI. Clausewitz, De la guerre (1832) : 'La guerre est la continuation de la politique par d'autres moyens.' Elle n'est pas irrationnelle mais un outil calculé — avec ses propres logiques (friction, brouillard de guerre)." },
    { statement: "Gandhi prônait la violence révolutionnaire pour libérer l'Inde du colonialisme.", isTrue: false, explain: "FAUX. Gandhi développa le 'satyagraha' — résistance non-violente, force de la vérité. La non-violence (ahimsa) n'est pas passivité mais résistance active cherchant à transformer l'adversaire par la démonstration de l'injustice." },
    { statement: "Thoreau affirmait qu'il faut parfois désobéir à la loi si elle est injuste.", isTrue: true, explain: "VRAI. Thoreau, La Résistance au gouvernement civil (1849) : quand une loi est injuste, le citoyen de conscience doit refuser de la respecter. Il a lui-même refusé de payer des taxes finançant l'esclavage — et accepté la prison." },
  ],
  hlp_ch10_cours: [
    { statement: "Épicure pensait que nous devons craindre la mort car elle met fin à tout plaisir.", isTrue: false, explain: "FAUX. Épicure, Lettre à Ménécée : 'La mort n'est rien pour nous.' Argument symétrique : avant la naissance, le non-être ne nous affectait pas ; après la mort, il en sera de même. Craindre la mort est une erreur logique qui empoisonne la vie." },
    { statement: "Sartre affirmait qu'il est possible de choisir de ne pas être libre.", isTrue: false, explain: "FAUX. Sartre : l'homme est 'condamné à être libre' — même ne pas choisir est un choix. La liberté est constitutive de la conscience humaine, on ne peut pas y renoncer. La mauvaise foi est la tentative (vouée à l'échec) de fuir cette liberté." },
    { statement: "Camus affirmait que l'absurde naît du choc entre le désir humain de sens et le silence du monde.", isTrue: true, explain: "VRAI. Camus, Le Mythe de Sisyphe (1942) : l'absurde n'est ni dans l'homme ni dans le monde — il naît de leur confrontation. L'homme désire la clarté et le sens ; le monde est irrationnel et silencieux. La révolte maintient cet absurde vivant." },
    { statement: "Heidegger pensait que la conscience de la mort pousse vers une existence plus authentique.", isTrue: true, explain: "VRAI. Heidegger, Être et Temps : la mort est la 'possibilité la plus propre' de l'être humain. En prenant conscience de sa finitude, l'homme sort de l'existence anonyme ('le On') et est renvoyé à ses propres possibilités — existence authentique." },
  ],
  // ── PHILO ─────────────────────────────────────────────────
  philo_conscience_cours: [
    { statement: "Descartes affirmait que les sens sont la source la plus fiable de connaissance.", isTrue: false, explain: "FAUX. Descartes est rationaliste : il remet en cause les sens par le doute hyperbolique — ils peuvent tromper. Seul le cogito ('Je pense, donc je suis') résiste au doute radical et sert de fondation à la connaissance." },
    { statement: "Freud pensait que l'inconscient influence nos comportements à notre insu.", isTrue: true, explain: "VRAI. Freud, L'Interprétation des rêves (1900) : l'inconscient — réservoir des désirs refoulés — influence nos actes, rêves, lapsus et symptômes sans que nous en ayons conscience. 'Le moi n'est pas maître dans sa propre maison.'" },
    { statement: "Sartre acceptait le concept freudien d'inconscient comme explication de nos actes.", isTrue: false, explain: "FAUX. Sartre refusait l'inconscient freudien : la 'mauvaise foi' l'explique mieux. L'homme se ment à lui-même consciemment pour fuir sa liberté — il n'y a pas de 'censeur inconscient'. La conscience est toujours transparente à elle-même pour Sartre." },
    { statement: "Hegel pensait que la conscience de soi peut se constituer sans rapport à autrui.", isTrue: false, explain: "FAUX. Hegel, Phénoménologie de l'Esprit : la dialectique maître-esclave montre que la conscience de soi est intersubjective — je ne me reconnais comme sujet que si une autre conscience me reconnaît. La conscience de soi passe nécessairement par autrui." },
  ],
  philo_liberte_cours: [
    { statement: "Spinoza était un déterministe : il pensait que tout est nécessaire, y compris les actions humaines.", isTrue: true, explain: "VRAI. Spinoza, Éthique (1677) : Dieu-Nature est infini et tout ce qui arrive est nécessaire. La liberté humaine illusoire vient de l'ignorance de nos causes. La vraie liberté spinoziste est la compréhension de ce qui nous détermine." },
    { statement: "Kant affirmait que la liberté consiste à faire ce que l'on veut, sans contrainte.", isTrue: false, explain: "FAUX. Kant distingue liberté et licence. La vraie liberté est l'autonomie morale : se donner à soi-même sa propre loi selon la raison. Obéir à ses inclinations, c'est de l'hétéronomie — une forme de servitude." },
    { statement: "Sartre affirmait que la situation peut totalement supprimer la liberté humaine.", isTrue: false, explain: "FAUX. Sartre : la situation est la condition de la liberté, non son ennemi. Un prisonnier reste libre dans l'attitude qu'il adopte face à sa prison. 'L'homme est condamné à être libre' — même dans les contraintes les plus extrêmes." },
    { statement: "Rousseau affirmait que la liberté civile s'obtient en obéissant à la volonté générale.", isTrue: true, explain: "VRAI. Rousseau, Du Contrat social (1762) : en obéissant à la loi qu'on s'est donnée collectivement (volonté générale), chaque citoyen n'obéit qu'à lui-même — c'est la liberté véritable, non l'arbitraire de la volonté particulière." },
  ],
  philo_verite_cours: [
    { statement: "Popper affirmait qu'une théorie est prouvée vraie une fois qu'elle a été vérifiée suffisamment de fois.", isTrue: false, explain: "FAUX. Popper : on ne peut jamais 'prouver' définitivement une théorie par accumulation de confirmations. La science progresse par réfutations — un seul contre-exemple suffit à invalider une théorie universelle (problème de l'induction)." },
    { statement: "Nietzsche défendait l'existence d'une vérité absolue et objective, accessible à la raison.", isTrue: false, explain: "FAUX. Nietzsche est perspectiviste : 'Il n'y a pas de faits, seulement des interprétations.' Toute vérité est une perspective liée à une volonté de puissance. La mort de Dieu entraîne la mort de la Vérité absolue." },
    { statement: "Le relativisme radical affirme que toutes les vérités se valent — et se contredit lui-même.", isTrue: true, explain: "VRAI. Si toutes les vérités sont relatives, alors la thèse relativiste est elle-même relative — elle ne peut pas être absolument vraie. C'est l'argument classique contre le relativisme radical (Protagoras : 'L'homme est la mesure de toutes choses')." },
    { statement: "Platon affirmait que le monde sensible est la source de la vraie connaissance.", isTrue: false, explain: "FAUX. Platon distingue doxa (opinion sur le sensible changeant) et épistémè (savoir sur les idées éternelles). L'allégorie de la caverne montre que le sensible est le monde des ombres — la vraie connaissance passe par l'intelligible." },
  ],
  philo_etat_cours: [
    { statement: "Hobbes pensait que l'état de nature était une période de paix et de bonheur naturel.", isTrue: false, explain: "FAUX. Hobbes, Léviathan (1651) : à l'état de nature, la vie est 'solitaire, misérable, dangereuse, animale et brève' — guerre de tous contre tous. C'est Rousseau qui voit l'état de nature comme relativement bon." },
    { statement: "Locke affirmait que si l'État viole les droits naturels, les citoyens ont le droit de lui résister.", isTrue: true, explain: "VRAI. Locke, Traité du gouvernement civil (1689) : l'État est fondé pour protéger les droits naturels (vie, liberté, propriété). S'il les viole, il trahit sa mission et les citoyens retrouvent leur droit de résistance — argument qui a inspiré les révolutions américaine et française." },
    { statement: "Montesquieu recommandait de concentrer les trois pouvoirs pour une gouvernance efficace.", isTrue: false, explain: "FAUX. Montesquieu, De l'Esprit des lois (1748) : la séparation des pouvoirs (législatif, exécutif, judiciaire) est la garantie contre la tyrannie — 'tout homme qui a du pouvoir est porté à en abuser.' Il faut que le pouvoir arrête le pouvoir." },
    { statement: "Rawls affirmait que les principes de justice doivent être choisis sans savoir sa place dans la société.", isTrue: true, explain: "VRAI. Rawls, Théorie de la justice (1971) : le 'voile d'ignorance' garantit l'impartialité. Sans savoir si on sera riche ou pauvre, on choisirait : égalité des libertés fondamentales + principe de différence (les inégalités doivent profiter aux plus défavorisés)." },
  ],
  philo_bonheur_cours: [
    { statement: "Épicure prônait la recherche de plaisirs intenses et nombreux pour être heureux.", isTrue: false, explain: "FAUX. Épicure : le bonheur est l'ataraxie (absence de trouble) et l'aponie (absence de douleur). Il distingue les désirs naturels et nécessaires (à satisfaire simplement) des désirs vains (gloire, richesse — à supprimer). Le bonheur épicurien est une paix, non une frénésie." },
    { statement: "Épictète pensait que le bonheur dépend de ce que le monde nous offre.", isTrue: false, explain: "FAUX. Épictète, Manuel : la distinction fondamentale du stoïcisme — 'ce qui dépend de nous' (jugements, désirs, aversions) vs 'ce qui ne dépend pas de nous' (corps, richesse, réputation). Le bonheur stoïcien vient de la maîtrise du premier domaine." },
    { statement: "Aristote affirmait que le bonheur peut s'atteindre dans une complète solitude.", isTrue: false, explain: "FAUX. Aristote, Éthique à Nicomaque : l'eudaimonia exige l'amitié et la communauté. 'L'homme est un animal politique' — il ne peut s'épanouir que dans la relation aux autres. La solitude totale n'est ni divine ni humaine mais animale." },
    { statement: "Mill observa que les personnes heureuses cherchent directement leur propre bonheur.", isTrue: false, explain: "FAUX. Mill, Autobiographie — le paradoxe du bonheur : les seules personnes heureuses sont celles dont l'esprit est fixé sur autre chose (une cause, un art, des relations). Chercher directement le bonheur l'éloigne — il vient par surcroît." },
    { statement: "Viktor Frankl affirmait que trouver un sens à sa vie conditionne le bonheur, même dans les pires conditions.", isTrue: true, explain: "VRAI. Frankl, Man's Search for Meaning (1946) : survivant des camps nazis, il observe que ceux qui trouvaient un sens à leur souffrance résistaient mieux psychologiquement. Le bonheur ne se cherche pas — il résulte d'une vie pourvue de sens." },
  ],
  // ── SVT ch8-17 ────────────────────────────────────────────
  svt_ch8_cours: [
    { statement: "La pollinisation et la fécondation sont la même chose chez les plantes à fleurs.", isTrue: false, explain: "FAUX. La pollinisation est le transport du pollen vers le pistil (par le vent, les insectes...). La fécondation est la fusion des gamètes — elle suit la pollinisation une fois le tube pollinique formé et les gamètes mâles acheminés jusqu'à l'ovule." },
    { statement: "Chez les angiospermes (plantes à fleurs), la fécondation est dite 'double'.", isTrue: true, explain: "VRAI. Deux spermatozoïdes sont acheminés par le tube pollinique : l'un fusionne avec l'ovosphère → embryon ; l'autre fusionne avec les noyaux polaires → albumen (tissu nourricier de la graine). Ce mécanisme est propre aux angiospermes." },
    { statement: "Le pistil est l'organe reproducteur mâle de la fleur.", isTrue: false, explain: "FAUX. Le pistil (carpelle) est l'organe femelle : stigmate + style + ovaire contenant les ovules. L'étamine est l'organe mâle — elle produit les grains de pollen (gamètes mâles) dans l'anthère." },
    { statement: "La graine contient un embryon issu de la fécondation et des réserves nutritives.", isTrue: true, explain: "VRAI. La graine contient : l'embryon (issu de la 1ʳᵉ fécondation ovosphère + spermatozoïde) et l'albumen ou les cotylédons (réserves nutritives issues de la 2ᵉ fécondation). Le fruit se développe à partir des parois de l'ovaire." },
  ],
  svt_ch9_cours: [
    { statement: "La sélection artificielle des plantes cultivées obéit aux mêmes mécanismes que la sélection naturelle.", isTrue: false, explain: "FAUX. La sélection artificielle est dirigée par l'homme selon des critères précis (rendement, goût, résistance), indépendamment de la valeur sélective en milieu naturel. Elle est bien plus rapide et peut créer des variétés incapables de survivre sans l'homme (maïs, blé)." },
    { statement: "Un OGM contient un gène d'une autre espèce introduit par génie génétique.", isTrue: true, explain: "VRAI. Un OGM (Organisme Génétiquement Modifié) possède un transgène introduit en laboratoire — ex : maïs Bt (gène de Bacillus thuringiensis produisant une toxine insecticide), riz doré (gènes de synthèse du bêta-carotène). Différent des croisements classiques." },
    { statement: "La greffe permet de mélanger les génomes du greffon et du porte-greffe.", isTrue: false, explain: "FAUX. La greffe est une reproduction végétative (clonage) — les cellules du greffon et du porte-greffe restent génétiquement distinctes. Seule une union physique et vasculaire (vaisseaux conducteurs) se forme. Le génome de chaque partie est inchangé." },
    { statement: "La domestication a toujours sélectionné des critères avantageux pour la plante elle-même.", isTrue: false, explain: "FAUX. La domestication sélectionne selon les besoins humains, parfois au détriment de la plante : le blé domestiqué a des grains qui ne tombent plus spontanément (rachis solide) — avantage pour la récolte humaine mais désavantage pour la dissémination naturelle." },
  ],
  svt_ch10_cours: [
    { statement: "Les cycles de Milankovitch correspondent aux variations de l'orbite et de l'orientation de l'axe de la Terre.", isTrue: true, explain: "VRAI. Trois paramètres : excentricité orbitale (~100 000 ans), obliquité de l'axe (~41 000 ans), précession des équinoxes (~26 000 ans). Leurs combinaisons modulent la répartition du rayonnement solaire et expliquent les glaciations quaternaires." },
    { statement: "Les carottes de glace permettent de reconstituer les températures passées grâce à la composition isotopique de la glace.", isTrue: true, explain: "VRAI. Le rapport ¹⁶O/¹⁸O dans la glace est un proxy de température : les périodes froides ont moins de ¹⁸O dans la vapeur d'eau précipitée. Les bulles d'air conservent aussi la composition atmosphérique ancienne (CO₂, méthane)." },
    { statement: "Durant les périodes glaciaires, le taux de CO₂ atmosphérique était plus élevé qu'actuellement.", isTrue: false, explain: "FAUX. Les carottes de glace (Vostok, EPICA) montrent que les glaciations correspondent à de faibles taux de CO₂ (~180 ppm), et les périodes chaudes à des taux plus élevés (~280 ppm naturel). Aujourd'hui on dépasse 420 ppm — inédit depuis 3 millions d'années." },
  ],
  svt_ch11_cours: [
    { statement: "Le réchauffement climatique actuel est principalement dû aux activités humaines selon le GIEC.", isTrue: true, explain: "VRAI. Le GIEC (rapport 2021, AR6) conclut avec une certitude > 95 % que le réchauffement depuis 1850 est causé par les activités humaines : combustion de fossiles, déforestation, agriculture. L'activité solaire est restée stable ou a diminué depuis 1980." },
    { statement: "Le CO₂ dissous dans l'eau de mer n'a aucun effet sur la chimie océanique.", isTrue: false, explain: "FAUX. Le CO₂ dissous forme de l'acide carbonique (H₂CO₃) → ions H⁺ → acidification des océans. Le pH océanique a baissé de ~0,1 unité depuis 1850. Cela fragilise les organismes calcaires (coraux, mollusques, ptéropodes) dont le squelette se dissout en milieu acide." },
    { statement: "La hausse des températures peut provoquer des migrations d'espèces vers les pôles.", isTrue: true, explain: "VRAI. Face au réchauffement, les espèces se déplacent vers des latitudes plus élevées ou des altitudes supérieures pour trouver des températures compatibles. Les espèces peu mobiles ou spécialisées risquent l'extinction si leur habitat disparaît plus vite qu'elles ne peuvent migrer." },
    { statement: "L'effet de serre naturel est un phénomène néfaste pour la vie sur Terre.", isTrue: false, explain: "FAUX. L'effet de serre naturel est indispensable à la vie : sans lui, la température moyenne serait de -18°C au lieu de +15°C. C'est son amplification par les GES d'origine humaine (CO₂, méthane, N₂O) qui provoque le dérèglement climatique actuel." },
  ],
  svt_ch12_cours: [
    { statement: "La tectonique des plaques explique la répartition des volcans et séismes à la surface du globe.", isTrue: true, explain: "VRAI. Volcans et séismes se concentrent aux frontières de plaques : dorsales (divergence, volcanisme basaltique), zones de subduction (convergence, volcanisme andésitique, séismes profonds) et failles transformantes (décrochement, séismes superficiels)." },
    { statement: "Les fossiles se trouvent principalement dans les roches magmatiques.", isTrue: false, explain: "FAUX. Les fossiles se trouvent dans les roches sédimentaires (calcaires, grès, argiles) — les sédiments piègent et protègent les restes d'organismes. Les roches magmatiques (formées à haute température) détruisent toute trace organique." },
    { statement: "La subduction est le processus par lequel une plaque océanique plonge sous une autre plaque.", isTrue: true, explain: "VRAI. En zone de convergence, la plaque océanique (plus dense) s'enfonce sous la plaque continentale ou sous une autre plaque océanique. Ce processus génère : fosse océanique, séismes profonds, volcanisme andésitique, et peut former des chaînes de montagne (Andes)." },
  ],
  svt_ch13_cours: [
    { statement: "Lors d'une contraction musculaire, les filaments d'actine et de myosine raccourcissent.", isTrue: false, explain: "FAUX. Modèle des filaments glissants (Huxley, 1954) : les filaments eux-mêmes ne changent pas de longueur. Les têtes de myosine font glisser les filaments d'actine vers le centre du sarcomère — c'est le sarcomère qui raccourcit, pas les filaments." },
    { statement: "L'ATP est nécessaire pour le détachement des têtes de myosine de l'actine.", isTrue: true, explain: "VRAI. Cycle actine-myosine : liaison → hydrolyse ATP → changement de conformation (glissement) → une nouvelle molécule d'ATP permet le détachement. C'est pourquoi les cadavres se rigidifient (rigor mortis) : sans ATP, les ponts actine-myosine restent bloqués." },
    { statement: "Le calcium joue un rôle central dans le déclenchement de la contraction musculaire.", isTrue: true, explain: "VRAI. L'influx nerveux déclenche la libération de Ca²⁺ par le réticulum sarcoplasmique. Le Ca²⁺ se fixe sur la troponine, déplace la tropomyosine et expose les sites de liaison de l'actine aux têtes de myosine — déclenchant la contraction." },
  ],
  svt_ch14_cours: [
    { statement: "L'EPO est une hormone qui stimule la production de globules rouges.", isTrue: true, explain: "VRAI. L'érythropoïétine (EPO) est produite naturellement par les reins en réponse à l'hypoxie. Elle stimule la production de globules rouges (érythropoïèse) dans la moelle osseuse — augmentant la capacité de transport de l'O₂ et la VO₂max." },
    { statement: "La filière aérobie est la plus rapide à fournir de l'ATP lors d'un sprint maximal.", isTrue: false, explain: "FAUX. Lors d'un sprint maximal (< 10 s), c'est la filière anaérobie alactique (phosphocréatine) qui est la plus rapide. La filière aérobie est plus efficace (plus d'ATP par glucose) mais plus lente à s'activer — elle domine dans les efforts prolongés (> 2 min)." },
    { statement: "Le dopage par transfusion sanguine autologue est facile à détecter par les tests antidopage classiques.", isTrue: false, explain: "FAUX. La transfusion autologue (réinjection de son propre sang) n'introduit pas de substance étrangère détectable. Les autorités antidopage ont développé le passeport biologique — suivi longitudinal des paramètres sanguins pour détecter des variations anormales." },
  ],
  svt_ch15_cours: [
    { statement: "Le stress aigu active le système nerveux sympathique.", isTrue: true, explain: "VRAI. Face à un stresseur aigu, le système nerveux sympathique est activé en quelques secondes : accélération cardiaque, dilatation des bronches et pupilles, redistribution du sang vers les muscles, libération d'adrénaline par la médullosurrénale — réponse 'fight or flight'." },
    { statement: "Le cortisol est libéré en quelques secondes lors d'un stress aigu, avant l'adrénaline.", isTrue: false, explain: "FAUX. L'adrénaline (voie nerveuse : hypothalamus → moelle surrénale) est libérée en quelques secondes. Le cortisol (voie hormonale : hypothalamus → CRH → hypophyse → ACTH → cortex surrénal) est libéré en quelques minutes — il maintient la réponse au stress." },
    { statement: "Après le stress, le cortisol exerce un rétrocontrôle négatif sur l'axe hypothalamo-hypophysaire.", isTrue: true, explain: "VRAI. Le cortisol inhibe la sécrétion de CRH (hypothalamus) et d'ACTH (hypophyse), réduisant sa propre production. Ce rétrocontrôle négatif permet le retour à l'homéostasie après le stress — mécanisme essentiel pour éviter les effets délétères d'un cortisol chroniquement élevé." },
  ],
  svt_ch16_cours: [
    { statement: "Le stress chronique peut provoquer une atrophie de l'hippocampe.", isTrue: true, explain: "VRAI. L'exposition prolongée au cortisol est neurotoxique pour l'hippocampe (riche en récepteurs aux glucocorticoïdes). Elle inhibe la neurogénèse et détruit des synapses hippocampiques — d'où les troubles de la mémoire et de la régulation émotionnelle dans le burn-out et la dépression." },
    { statement: "Le stress chronique renforce le système immunitaire sur le long terme.", isTrue: false, explain: "FAUX. Le cortisol chroniquement élevé est immunosuppresseur : il inhibe les cytokines pro-inflammatoires, réduit la prolifération des lymphocytes T et diminue l'activité des cellules NK. Le stress chronique augmente la vulnérabilité aux infections, maladies auto-immunes et certains cancers." },
    { statement: "Le burn-out se définit uniquement par une surcharge de travail quantitative.", isTrue: false, explain: "FAUX. Le burn-out (Maslach) comporte trois dimensions : épuisement émotionnel, dépersonnalisation (cynisme, détachement) et réduction du sentiment d'accomplissement. Il résulte de l'interaction entre demandes excessives et ressources insuffisantes — pas seulement d'une surcharge quantitative." },
  ],
  svt_ch17_cours: [
    { statement: "La plasticité synaptique est la capacité du cerveau à modifier ses connexions en fonction de l'expérience.", isTrue: true, explain: "VRAI. La plasticité synaptique (LTP — potentialisation à long terme) est le mécanisme neurobiologique de l'apprentissage et de la mémoire. Une synapse répétitivement activée se renforce (règle de Hebb : 'les neurones qui s'activent ensemble se connectent ensemble')." },
    { statement: "L'addiction aux drogues n'implique pas le système dopaminergique.", isTrue: false, explain: "FAUX. Toutes les substances addictives (nicotine, alcool, cocaïne, héroïne, cannabis) augmentent la dopamine dans le noyau accumbens (circuit de récompense). Cette activation répétée crée tolérance et dépendance et modifie durablement la plasticité synaptique." },
    { statement: "Le cerveau adolescent est plus vulnérable à l'addiction que le cerveau adulte.", isTrue: true, explain: "VRAI. Le cortex préfrontal (contrôle des impulsions, évaluation des risques) est le dernier à maturer (vers 25 ans). À l'adolescence, le système limbique (récompense) prédomine — d'où une plus grande impulsivité, recherche de sensations et vulnérabilité aux addictions et comportements à risque." },
  ],
};

// ── AVENTURE ──────────────────────────────────────────────
const AVENTURE = [
  { scene:'🏰', story:'Le dragon Henri-Gaston bloque le pont. Il exige une réponse de philo.', question:'Quel philosophe a écrit "Je pense, donc je suis" ?', options:['Kant','Descartes','Nietzsche'], answer:1, wrongLine:o=>`"${o} ?! Ridicule !" grogne Henri-Gaston et crache de la fumée.`, rightLine:'Henri-Gaston soupire, impressionné, et te laisse passer.', explain:'Descartes, Discours de la méthode (1637). Après le doute radical, la seule certitude indubitable : la pensée prouve l\'existence.', topic:'HLP · le cogito' },
  { scene:'🌲', story:"Dans la forêt enchantée, un écureuil en smoking te barre la route.", question:"Quel organite produit l'ATP par respiration cellulaire ?", options:['Le noyau','La mitochondrie','Le ribosome'], answer:1, wrongLine:o=>`L'écureuil éclate de rire : "Le ${o.toLowerCase()} ?! Certainement pas !"`, rightLine:"L'écureuil te tend une noisette magique. \"Respect. Tu peux passer.\"", explain:"La mitochondrie produit l'ATP par respiration cellulaire — c'est la centrale énergétique de la cellule.", topic:'SVT · cellule' },
  { scene:'🧬', story:"Un savant fou en blouse tachée de café barre le laboratoire secret.", question:"Lors de la transcription, l'ADN est copié en...", options:["ARNm","Protéine","ADN complémentaire"], answer:0, wrongLine:o=>`"${o} ?! Tu confonds les étapes !" Il renverse ses éprouvettes.`, rightLine:"\"ARNm ! Exactement. Transcription → ARNm, puis traduction → protéine.\" Il s'écarte.", explain:"La transcription (dans le noyau) produit un ARNm à partir de l'ADN. Ensuite la traduction (dans le cytoplasme, par les ribosomes) produit la protéine.", topic:'SVT · expression génétique' },
  { scene:'🦠', story:"Un virus géant en costume trois pièces bloque le couloir immunitaire.", question:"Quelle cellule du système immunitaire détruit directement les cellules infectées ?", options:['Lymphocyte B','Lymphocyte T cytotoxique','Macrophage'], answer:1, wrongLine:o=>`Le virus ricane : "Le ${o.toLowerCase()} ne me détruira pas directement !"`, rightLine:"\"Lymphocyte T cytotoxique !\" Le virus pâlit et se dissout. Bravo.", explain:"Les LT cytotoxiques (CD8+) reconnaissent les cellules infectées via le CMH-I et les détruisent par injection de perforines/granzymes — immunité cellulaire.", topic:'SVT · immunité' },
  { scene:'🧪', story:"Un alchimiste farfelu garde la cave secrète. Il veut tester ta SVT.", question:"Quelle est la glycémie normale à jeun ?", options:['0,5 g/L','1 g/L','2 g/L'], answer:1, wrongLine:o=>`"${o} ?! C'est pas ça du tout !" L'alchimiste renverse son chaudron.`, rightLine:"\"Exactement ! 1 g/L.\" Il t'offre un bonbon au glucose.", explain:"La glycémie normale à jeun est 0,8–1,1 g/L. Au-dessus de 1,26 g/L à deux reprises à jeun : diabète.", topic:'SVT · glycémie' },
  { scene:'🌸', story:"Une fée des plantes garde l'entrée du jardin magique.", question:"Quel organe de la fleur produit les grains de pollen ?", options:['Le pistil','Les pétales','L\'étamine'], answer:2, wrongLine:o=>`La fée soupire : "Non, ${o.toLowerCase()} ne produit pas de pollen."`, rightLine:"\"L'étamine ! Bravo.\" La fée t'ouvre le portail fleuri.", explain:"L'étamine est l'organe reproducteur mâle de la fleur — elle est composée du filet et de l'anthère qui produit les grains de pollen (gamètes mâles).", topic:'SVT · plantes à fleurs' },
  { scene:'🌉', story:'Sur le pont de cristal, une sorcière à lunettes roses lit Sartre.', question:'"L\'enfer, c\'est les autres." — qui a dit ça ?', options:['Camus','Sartre','Beauvoir'], answer:1, wrongLine:o=>`"${o} ?!" La sorcière lève les yeux au ciel et murmure une malédiction.`, rightLine:"La sorcière te fait un clin d'œil. \"Va sauver ta princesse, existentialiste.\"", explain:"Sartre, Huis clos (1944). Le regard d'autrui nous fige comme objet — tension entre liberté et regard.", topic:'HLP · autrui' },
  { scene:'🧠', story:"Un neurone géant en pyjama bloque le pont synaptique.", question:"Dans quel sens se propage un influx nerveux le long d'un axone ?", options:['Dans les deux sens','Du corps cellulaire vers les terminaisons','Des terminaisons vers le corps cellulaire'], answer:1, wrongLine:o=>`Le neurone bâille : "Non, la propagation n'est pas ça — la période réfractaire l'interdit !"`, rightLine:"\"Exactement ! Unidirectionnel : corps cellulaire → axone → terminaisons.\" Le neurone se rendort.", explain:"La propagation de l'influx nerveux est unidirectionnelle grâce à la période réfractaire (la zone qui vient de dépolariser ne peut pas re-dépolariser immédiatement).", topic:'SVT · système nerveux' },
  { scene:'🌡️', story:"Une chimiste en armure garde le laboratoire hormonal.", question:"Quelle hormone fait baisser la glycémie après un repas ?", options:['Le glucagon','L\'adrénaline','L\'insuline'], answer:2, wrongLine:o=>`"${o} ? Non, c'est l'effet inverse !" Elle fait sonner l'alarme.`, rightLine:"\"L'insuline ! Produite par les cellules β du pancréas.\" Elle baisse sa lance.", explain:"L'insuline (sécrétée par les cellules β des îlots de Langerhans) est hypoglycémiante : elle favorise l'entrée du glucose dans les cellules et son stockage en glycogène.", topic:'SVT · régulation glycémie' },
  { scene:'🦉', story:"Un vieux hibou philosophe médite sur une branche dorée.", question:"Pour Aristote, le bonheur (eudaimonia) consiste en...", options:["L'accumulation de plaisirs","L'activité de l'âme conforme à la vertu","L'absence de souffrance"], answer:1, wrongLine:o=>`Le hibou secoue la tête tristement. "Non, ça c'est une autre conception du bonheur."`, rightLine:"Le hibou bat des ailes d'approbation. \"L'eudaimonia ! Passe, jeune sage.\"", explain:"Aristote, Éthique à Nicomaque. Le bonheur n'est pas un état passif mais une activité — pratiquer la vertu et développer ses capacités humaines.", topic:'HLP · bonheur' },
  { scene:'🌊', story:"Une sirène gardienne d'un lac souterrain te pose une devinette SVT.", question:"Quel type de lymphocyte produit les anticorps ?", options:['Lymphocyte T cytotoxique','Lymphocyte NK','Lymphocyte B'], answer:2, wrongLine:o=>`La sirène fronce les sourcils. "Le ${o.toLowerCase()} ne produit pas d'anticorps..."`, rightLine:"\"Exact ! Les lymphocytes B → plasmocytes → anticorps.\" La sirène te montre le chemin.", explain:"Les lymphocytes B, activés par un antigène, se différencient en plasmocytes sécréteurs d'anticorps — immunité humorale.", topic:'SVT · immunité' },
  { scene:'🌿', story:"Un druide écologiste bloque le chemin avec sa houlette.", question:"Quel gaz est principalement responsable du renforcement de l'effet de serre ?", options:['L\'oxygène (O₂)','Le CO₂ et le méthane (CH₄)','L\'azote (N₂)'], answer:1, wrongLine:o=>`Le druide secoue la tête : "${o} n'est pas le principal coupable."`, rightLine:"\"CO₂ et méthane ! Tu as conscience de l'urgence.\" Il t'ouvre un passage dans les ronces.", explain:"Le CO₂ (combustibles fossiles, déforestation) et le méthane (élevage, rizières, décharges) sont les principaux GES d'origine humaine amplifiant l'effet de serre naturel.", topic:'SVT · réchauffement climatique' },
  { scene:'💪', story:"Un gladiateur musclé fait des tractions sur la herse du château.", question:"Lors d'une contraction musculaire intense, quelle filière énergétique prend le relais quand l'ATP est épuisé en quelques secondes ?", options:['La voie aérobie','La voie anaérobie lactique','La glycogénolyse hépatique'], answer:1, wrongLine:o=>`"${o} ? Pas si vite !" grogne le gladiateur en serrant les poings.`, rightLine:"\"Anaérobie lactique ! Exactement.\" Le gladiateur s'effondre, épuisé, et te laisse passer.", explain:"La filière anaérobie lactique (sans O₂) dégrade le glucose en lactate pour régénérer l'ATP rapidement — mais produit de l'acide lactique responsable de la fatigue musculaire.", topic:'SVT · énergie & contraction' },
  { scene:'🧫', story:"Une scientifique en combinaison jaune garde le sas de décontamination.", question:"Quel phénomène permet à une espèce de s'adapter à son environnement sur de nombreuses générations ?", options:['La dérive génétique uniquement','La sélection naturelle','La mutation dirigée'], answer:1, wrongLine:o=>`"${o} seul ne suffit pas à créer une adaptation !" Elle bloque le sas.`, rightLine:"\"Sélection naturelle ! Darwin avait raison.\" Elle te laisse entrer avec un sourire.", explain:"La sélection naturelle (Darwin) : les individus dont les variations génétiques favorisent la survie et la reproduction transmettent davantage leurs allèles — l'espèce s'adapte progressivement.", topic:'SVT · évolution' },
  { scene:'😤', story:"Un géant stressé en costume barricade la porte du donjon.", question:"Lors d'un stress aigu, quelle hormone est libérée en premier par les glandes surrénales ?", options:['Le cortisol','La mélatonine','L\'adrénaline'], answer:2, wrongLine:o=>`"${o} ?! Tu m'stresses encore plus !" Le géant claque la porte.`, rightLine:"\"L'adrénaline ! Réponse immédiate au stress.\" Il se calme et s'écarte.", explain:"Face au stress aigu, la médullosurrénale libère l'adrénaline en quelques secondes (axe nerveux) → accélération cardiaque, dilatation des pupilles, mobilisation du glucose.", topic:'SVT · stress aigu' },
  { scene:'🌙', story:"Un vampire savant garde le laboratoire de chronobiologie.", question:"Quelle glande sécrète la mélatonine, l'hormone du sommeil ?", options:['L\'hypophyse','L\'épiphyse (glande pinéale)','Le pancréas'], answer:1, wrongLine:o=>`Le vampire plisse les yeux : "${o} ? C'est très loin du compte."`, rightLine:"\"L'épiphyse ! Parfait.\" Le vampire disparaît dans un nuage violet.", explain:"L'épiphyse (glande pinéale) sécrète la mélatonine en réponse à l'obscurité — elle synchronise le rythme circadien. La lumière bleue des écrans inhibe sa sécrétion.", topic:'SVT · cerveau & rythmes' },
  { scene:'🗝️', story:"Un fantôme élégant tient la clé de la dernière porte.", question:'"On ne naît pas femme, on le devient." — qui a écrit cela ?', options:['Hannah Arendt','Virginia Woolf','Simone de Beauvoir'], answer:2, wrongLine:o=>`"${o} est remarquable, mais non." Le fantôme fait tournoyer la clé.`, rightLine:"\"Beauvoir, Le Deuxième Sexe !\" Le fantôme disparaît en t'offrant la clé.", explain:"Simone de Beauvoir, Le Deuxième Sexe (1949). La condition féminine est une construction sociale — l'existence précède l'essence.", topic:'HLP · identité' },
  { scene:'🌍', story:"Un gardien de la Terre en tenue de géologue bloque la dernière galerie.", question:"Qu'appelle-t-on l'Anthropocène ?", options:["L'étude des ancêtres de l'homme","L'ère géologique où l'humanité est devenue la principale force de transformation de la planète","La période d'extinction des dinosaures"], answer:1, wrongLine:o=>`"Non, ${o.toLowerCase()} n'a rien à voir !" Il croise les bras.`, rightLine:"\"L'Anthropocène ! Bravo.\" Il te guide vers la sortie de la galerie.", explain:"L'Anthropocène désigne l'époque actuelle où l'activité humaine (GES, déforestation, artificialisation) modifie la planète à l'échelle géologique — concept central en SVT et en éthique environnementale.", topic:'SVT · variations climatiques' },
  { scene:'🏆', story:"Tu arrives au château ! Le garde exige un dernier effort SVT.", question:"Lors d'une contraction musculaire, quelle molécule fournit directement l'énergie aux fibres ?", options:['Le glucose','L\'ATP','Le glycogène'], answer:1, wrongLine:o=>`"Pas directement ! Le ${o.toLowerCase()} doit d'abord être converti en ATP." Le garde barre la route.`, rightLine:"\"L'ATP ! Toujours l'ATP.\" Le pont-levis s'abaisse. La princesse est libre. 👑", explain:"L'ATP (adénosine triphosphate) est la seule molécule directement utilisable par les protéines motrices (myosine). Glucose et glycogène servent à régénérer l'ATP.", topic:'SVT · muscles & ATP' },
  { scene:'🌺', story:"Une botaniste en chapeau de paille garde la serre tropicale.", question:"Chez les angiospermes, la fécondation est dite 'double' car...", options:["deux fleurs sont fécondées en même temps","deux fécondations ont lieu : embryon + albumen","deux spermatozoïdes fusionnent avec le même ovule"], answer:1, wrongLine:o=>`La botaniste soupire : "${o} — relis le mécanisme !"`, rightLine:"\"Embryon ET albumen nourricier ! Bravo.\" Elle t'ouvre la serre.", explain:"Deux spermatozoïdes sont acheminés par le tube pollinique : 1er + ovosphère → embryon ; 2e + noyaux polaires → albumen (réserves nutritives de la graine). Mécanisme propre aux angiospermes.", topic:'SVT · plantes à fleurs' },
  { scene:'🌽', story:"Un fermier philosophe garde les champs de maïs transgénique.", question:"Qu'est-ce qui distingue un OGM d'une variété obtenue par sélection artificielle classique ?", options:["Le temps nécessaire pour obtenir la variété","L'insertion d'un gène étranger par génie génétique","La couleur des graines"], answer:1, wrongLine:o=>`"${o} ? Ce n'est pas la définition d'un OGM !"`, rightLine:"\"Transgène introduit par génie génétique ! Maïs Bt, riz doré...\" Il s'écarte.", explain:"Un OGM contient un transgène d'une autre espèce introduit en laboratoire. La sélection artificielle classique utilise des croisements entre individus de la même espèce — sans manipulation directe de l'ADN.", topic:'SVT · domestication' },
  { scene:'🌋', story:"Un géologue en gilet orange barre l'accès à la grotte rocheuse.", question:"Dans quel type de roche trouve-t-on des fossiles ?", options:['Les roches magmatiques (volcaniques)','Les roches sédimentaires','Les roches métamorphiques'], answer:1, wrongLine:o=>`"${o} ? La chaleur ou la pression y détruit les fossiles !"`, rightLine:"\"Roches sédimentaires ! Les sédiments piègent et conservent les restes.\"", explain:"Les fossiles se forment dans les roches sédimentaires (calcaires, grès, argiles) par enfouissement progressif. Les roches magmatiques (haute température) et métamorphiques (pression + chaleur) détruisent toute trace organique.", topic:'SVT · histoire géologique' },
  { scene:'🏋️', story:"Un athlète en pleine séance bloque le couloir de musculation.", question:"Lors d'une contraction musculaire, les filaments d'actine et de myosine...", options:["raccourcissent tous les deux","glissent l'un sur l'autre sans changer de longueur","fusionnent temporairement"], answer:1, wrongLine:o=>`"${o} ? Relis le modèle des filaments glissants de Huxley !"`, rightLine:"\"Glissement ! Les filaments restent de même longueur — c'est le sarcomère qui se raccourcit.\"", explain:"Modèle des filaments glissants (Huxley, 1954) : les têtes de myosine s'accrochent à l'actine et les font glisser vers le centre du sarcomère. Les filaments eux-mêmes ne raccourcissent pas.", topic:'SVT · contraction musculaire' },
  { scene:'🧘', story:"Une coach de bien-être bloque le chemin avec son tapis de yoga.", question:"Quel effet le stress chronique a-t-il sur l'hippocampe ?", options:["Il le stimule et augmente la mémoire","Il provoque son atrophie","Il n'a aucun effet sur le cerveau"], answer:1, wrongLine:o=>`"${o} ? Le cortisol prolongé a des effets très précis sur le cerveau !"`, rightLine:"\"Atrophie de l'hippocampe ! Le cortisol chronique est neurotoxique.\"", explain:"L'exposition prolongée au cortisol inhibe la neurogénèse et détruit des synapses dans l'hippocampe — d'où les troubles de mémoire et de régulation émotionnelle dans le burn-out et la dépression.", topic:'SVT · stress chronique' },
  { scene:'⚔️', story:"Un général en uniforme d'époque barre le pont-levis.", question:"Pour Clausewitz, la guerre est...", options:["Une rupture totale avec la politique","La continuation de la politique par d'autres moyens","Un phénomène irrationnel impossible à maîtriser"], answer:1, wrongLine:o=>`"${o} ? Clausewitz serait en désaccord !"`, rightLine:"\"La continuation de la politique par d'autres moyens ! Clausewitz, De la guerre (1832).\"", explain:"Clausewitz : la guerre n'est pas une rupture avec la politique mais son prolongement rationnel. Elle reste un instrument au service d'objectifs politiques — avec ses propres logiques (friction, brouillard de guerre).", topic:'HLP · histoire et violence' },
  { scene:'📚', story:"Une institutrice sévère garde la bibliothèque du château.", question:"Pour Rousseau, l'enfant est naturellement...", options:["Mauvais — la société doit le corriger","Bon — c'est la société qui le corrompt","Neutre — façonné entièrement par l'éducation"], answer:1, wrongLine:o=>`"${o} ? C'est plutôt la position de Hobbes ou Kant !"`, rightLine:"\"Bon naturellement ! La société corrompt. D'où Émile — éducation à la nature.\"", explain:"Rousseau, Émile (1762) : l'homme naît bon, la société le corrompt. L'éducation doit préserver cette bonté en s'adaptant au développement naturel de l'enfant — à l'opposé de l'éducation par les livres et l'autorité.", topic:'HLP · éducation' },
  { scene:'🔗', story:"Un prisonnier philosophe en cape violette bloque les cachots.", question:"Pour Spinoza, d'où vient l'illusion du libre arbitre ?", options:["De l'absence de contrainte physique","De l'ignorance des causes qui nous déterminent","De la volonté divine"], answer:1, wrongLine:o=>`"${o} ? Spinoza dirait que tu ignores encore tes propres causes !"`, rightLine:"\"L'ignorance de nos causes ! Spinoza, Éthique (1677).\"", explain:"Spinoza : les hommes se croient libres parce qu'ils ont conscience de leurs désirs mais ignorent les causes qui les y poussent. La vraie liberté est la compréhension de ce qui nous détermine — passer de la passivité à l'activité rationnelle.", topic:'Philo · liberté' },
  { scene:'🔭', story:"Un astronome en blouse blanche garde l'observatoire secret.", question:"Pour Popper, une théorie est scientifique si elle est...", options:["Vérifiée par de nombreuses expériences","Falsifiable — capable d'être réfutée par l'expérience","Ancienne et reconnue par la communauté"], answer:1, wrongLine:o=>`"${o} ? Popper critiquerait cette réponse !"`, rightLine:"\"Falsifiable ! Un seul contre-exemple suffit à invalider une théorie universelle.\"", explain:"Popper, La Logique de la découverte scientifique (1934) : le critère de scientificité est la réfutabilité. On ne 'prouve' jamais définitivement une théorie — on la corrobore jusqu'au contre-exemple qui la réfute.", topic:'Philo · vérité' },
  { scene:'🪞', story:"Un fantôme qui se regarde dans un miroir infini bloque le couloir.", question:"Pour Freud, pourquoi 'le moi n'est pas maître dans sa propre maison' ?", options:["Parce que la société contrôle nos actions","Parce que l'inconscient influence nos comportements à notre insu","Parce que la raison est toujours vaincue par les émotions"], answer:1, wrongLine:o=>`"${o} ? Ce n'est pas la réponse psychanalytique !"`, rightLine:"\"L'inconscient ! Les désirs refoulés agissent sans que nous le sachions. Freud.\"", explain:"Freud : l'inconscient — réservoir de désirs refoulés — influence nos actes, rêves et lapsus à notre insu. Cette formule résume le renversement de la psychanalyse : la conscience n'est pas le maître de la vie psychique.", topic:'Philo · conscience' },
  { scene:'🌡️‍❄️', story:"Un climatologue en parka polaire bloque la station météo.", question:"Quel paramètre de Milankovitch a le cycle le plus long (~100 000 ans) ?", options:["L'obliquité de l'axe terrestre","La précession des équinoxes","L'excentricité de l'orbite terrestre"], answer:2, wrongLine:o=>`"${o} ? Ce cycle-là est plus court que 100 000 ans !"`, rightLine:"\"L'excentricité ! Cycle orbital de ~100 000 ans — le plus long de Milankovitch.\"", explain:"Les trois paramètres de Milankovitch : excentricité orbitale (~100 000 ans), obliquité de l'axe (~41 000 ans), précession (~26 000 ans). Leur combinaison module le rayonnement solaire reçu et explique les glaciations quaternaires.", topic:'SVT · variations climatiques' },
];

// ── SCHEMAS for Puzzles ───────────────────────────────────
const SCHEMAS = [
  {
    id:'cellule', title:'La cellule eucaryote', chapter:'SVT · Bases', icon:'🧫',
    color:'#f9dee2', deep:'#e9a9b6', viewBox:'0 0 320 230',
    parts:[
      { id:'noyau',        label:'Noyau',             cx:175, cy:138, rx:34, ry:28 },
      { id:'mitochondrie', label:'Mitochondrie',       cx:88,  cy:100, rx:22, ry:12 },
      { id:'membrane',     label:'Membrane plasmique', cx:175, cy:36,  rx:20, ry:12 },
      { id:'ribosome',     label:'Ribosome',           cx:252, cy:182, rx:13, ry:13 },
      { id:'golgi',        label:'App. de Golgi',      cx:126, cy:175, rx:23, ry:12 },
      { id:'reticulum',    label:'Réticulum endo.',    cx:245, cy:100, rx:22, ry:12 },
    ],
    renderBg:() => (
      <>
        <ellipse cx="160" cy="115" rx="148" ry="103" fill="#f9e8e8" stroke="#e9a9b6" strokeWidth="2" strokeDasharray="3 5" opacity=".8"/>
        <ellipse cx="175" cy="138" rx="36" ry="30" fill="#e9b8b8" opacity=".35"/>
        <ellipse cx="88" cy="100" rx="22" ry="10" fill="#c89090" transform="rotate(-15 88 100)" opacity=".35"/>
        <path d="M230 90 Q 250 105 260 95" fill="none" stroke="#c89090" strokeWidth="4" strokeLinecap="round" opacity=".3"/>
        <path d="M232 100 Q 252 115 262 105" fill="none" stroke="#c89090" strokeWidth="3" strokeLinecap="round" opacity=".25"/>
        <path d="M108 168 Q 126 162 144 168" fill="none" stroke="#d0a0a0" strokeWidth="3" strokeLinecap="round" opacity=".3"/>
        <path d="M110 175 Q 126 169 142 175" fill="none" stroke="#d0a0a0" strokeWidth="3" strokeLinecap="round" opacity=".25"/>
      </>
    ),
  },
  {
    id:'neurone', title:'Le neurone', chapter:'SVT · Ch. 4', icon:'🧠',
    color:'#f0e8ff', deep:'#9060c0', viewBox:'0 0 320 200',
    parts:[
      { id:'corps',    label:'Corps cellulaire', cx:78,  cy:100, rx:32, ry:28 },
      { id:'dendrite', label:'Dendrites',        cx:26,  cy:72,  rx:18, ry:14 },
      { id:'axone',    label:'Axone',            cx:185, cy:100, rx:75, ry:9  },
      { id:'myeline',  label:'Gaine de myéline', cx:158, cy:86,  rx:22, ry:10 },
      { id:'noeud',    label:'Nœud de Ranvier',  cx:210, cy:100, rx:6,  ry:12 },
      { id:'bouton',   label:'Bouton terminal',  cx:292, cy:100, rx:16, ry:16 },
    ],
    renderBg:() => (
      <>
        <line x1="78" y1="78" x2="30" y2="58" stroke="#c0a0e0" strokeWidth="3" strokeLinecap="round" opacity=".6"/>
        <line x1="68" y1="80" x2="22" y2="72" stroke="#c0a0e0" strokeWidth="2.5" strokeLinecap="round" opacity=".6"/>
        <line x1="72" y1="90" x2="18" y2="96" stroke="#c0a0e0" strokeWidth="2.5" strokeLinecap="round" opacity=".5"/>
        <ellipse cx="78" cy="100" rx="32" ry="28" fill="#ddd0f0" stroke="#9060c0" strokeWidth="1.5" opacity=".6"/>
        <ellipse cx="78" cy="100" rx="12" ry="10" fill="#b090d8" opacity=".35"/>
        <line x1="110" y1="100" x2="276" y2="100" stroke="#c0a0e0" strokeWidth="6" strokeLinecap="round" opacity=".55"/>
        <ellipse cx="142" cy="100" rx="20" ry="9" fill="#f0e8ff" stroke="#9060c0" strokeWidth="1" opacity=".7"/>
        <ellipse cx="182" cy="100" rx="20" ry="9" fill="#f0e8ff" stroke="#9060c0" strokeWidth="1" opacity=".7"/>
        <ellipse cx="222" cy="100" rx="20" ry="9" fill="#f0e8ff" stroke="#9060c0" strokeWidth="1" opacity=".7"/>
        <line x1="162" y1="92" x2="162" y2="108" stroke="#9060c0" strokeWidth="2" opacity=".4"/>
        <line x1="202" y1="92" x2="202" y2="108" stroke="#9060c0" strokeWidth="2" opacity=".4"/>
        <circle cx="292" cy="100" r="16" fill="#ddd0f0" stroke="#9060c0" strokeWidth="1.5" opacity=".6"/>
        <circle cx="288" cy="96" r="3" fill="#c0a0e0" opacity=".4"/>
        <circle cx="296" cy="103" r="3" fill="#c0a0e0" opacity=".4"/>
      </>
    ),
  },
  {
    id:'synapse', title:'La synapse', chapter:'SVT · Ch. 4', icon:'⚡',
    color:'#f7f0e8', deep:'#d4a060', viewBox:'0 0 320 220',
    parts:[
      { id:'neurone_pre',  label:'Neurone pré-syn.',    cx:70,  cy:110, rx:55, ry:38 },
      { id:'vesicule',     label:'Vésicule synaptique', cx:148, cy:95,  rx:13, ry:13 },
      { id:'fente',        label:'Fente synaptique',    cx:178, cy:110, rx:8,  ry:28 },
      { id:'recepteur',    label:'Récepteur',           cx:210, cy:138, rx:16, ry:10 },
      { id:'neurone_post', label:'Neurone post-syn.',   cx:265, cy:162, rx:42, ry:32 },
    ],
    renderBg:() => (
      <>
        <ellipse cx="70" cy="110" rx="55" ry="38" fill="#fef3cd" stroke="#efc84a" strokeWidth="1.5" opacity=".6"/>
        <ellipse cx="142" cy="108" rx="16" ry="20" fill="#fde68a" stroke="#efc84a" strokeWidth="1.5" opacity=".7"/>
        <circle cx="142" cy="100" r="5" fill="#fef3cd" stroke="#efc84a" strokeWidth="1" opacity=".5"/>
        <circle cx="150" cy="108" r="5" fill="#fef3cd" stroke="#efc84a" strokeWidth="1" opacity=".5"/>
        <circle cx="142" cy="116" r="5" fill="#fef3cd" stroke="#efc84a" strokeWidth="1" opacity=".5"/>
        <rect x="170" y="82" width="16" height="56" rx="2" fill="#e0eef8" opacity=".4"/>
        <circle cx="178" cy="98" r="3" fill="#efc84a" opacity=".5"/>
        <circle cx="178" cy="110" r="3" fill="#efc84a" opacity=".5"/>
        <circle cx="178" cy="122" r="3" fill="#efc84a" opacity=".5"/>
        <rect x="192" y="130" width="7" height="14" rx="2" fill="#90c0e8" opacity=".4"/>
        <rect x="203" y="130" width="7" height="14" rx="2" fill="#90c0e8" opacity=".4"/>
        <ellipse cx="265" cy="162" rx="42" ry="32" fill="#d4edff" stroke="#90c0e8" strokeWidth="1.5" opacity=".6"/>
      </>
    ),
  },
  {
    id:'fleur', title:'Structure de la fleur', chapter:'SVT · Ch. 8', icon:'🌸',
    color:'#fce8f0', deep:'#e9a9b6', viewBox:'0 0 320 240',
    parts:[
      { id:'petale',     label:'Pétale',     cx:160, cy:50,  rx:28, ry:20 },
      { id:'sepale',     label:'Sépale',     cx:88,  cy:128, rx:20, ry:28 },
      { id:'etamine',    label:'Étamine',    cx:198, cy:112, rx:16, ry:26 },
      { id:'pistil',     label:'Pistil',     cx:160, cy:118, rx:13, ry:30 },
      { id:'ovaire',     label:'Ovaire',     cx:160, cy:180, rx:20, ry:16 },
      { id:'receptacle', label:'Réceptacle', cx:160, cy:210, rx:28, ry:10 },
    ],
    renderBg:() => (
      <>
        <line x1="160" y1="225" x2="160" y2="190" stroke="#7ab840" strokeWidth="4" strokeLinecap="round"/>
        <ellipse cx="160" cy="210" rx="28" ry="10" fill="#a0d060" opacity=".4"/>
        <ellipse cx="160" cy="180" rx="20" ry="16" fill="#f7c9d0" stroke="#e9a9b6" strokeWidth="1.5" opacity=".6"/>
        <ellipse cx="88" cy="128" rx="20" ry="28" fill="#c0e080" stroke="#7ab840" strokeWidth="1" transform="rotate(-30 88 128)" opacity=".5"/>
        <ellipse cx="232" cy="128" rx="20" ry="28" fill="#c0e080" stroke="#7ab840" strokeWidth="1" transform="rotate(30 232 128)" opacity=".5"/>
        <ellipse cx="160" cy="152" rx="18" ry="26" fill="#c0e080" stroke="#7ab840" strokeWidth="1" opacity=".4"/>
        <ellipse cx="160" cy="50" rx="28" ry="20" fill="#f9b8c8" stroke="#e9a9b6" strokeWidth="1.5" opacity=".7"/>
        <ellipse cx="100" cy="78" rx="20" ry="28" fill="#f9b8c8" stroke="#e9a9b6" strokeWidth="1.5" transform="rotate(-40 100 78)" opacity=".6"/>
        <ellipse cx="220" cy="78" rx="20" ry="28" fill="#f9b8c8" stroke="#e9a9b6" strokeWidth="1.5" transform="rotate(40 220 78)" opacity=".6"/>
        <rect x="155" y="90" width="10" height="92" rx="5" fill="#f7a0b0" stroke="#e9a9b6" strokeWidth="1" opacity=".5"/>
        <line x1="185" y1="168" x2="196" y2="88" stroke="#d4a000" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
        <ellipse cx="196" cy="86" rx="5" ry="3" fill="#f7d97a" stroke="#efc84a" strokeWidth="1" opacity=".8"/>
        <line x1="205" y1="166" x2="218" y2="92" stroke="#d4a000" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
        <ellipse cx="218" cy="90" rx="5" ry="3" fill="#f7d97a" stroke="#efc84a" strokeWidth="1" opacity=".8"/>
      </>
    ),
  },
  {
    id:'sarcomere', title:'Le sarcomère', chapter:'SVT · Ch. 13', icon:'💪',
    color:'#fde8d8', deep:'#d98b5e', viewBox:'0 0 320 200',
    parts:[
      { id:'ligne_z',  label:'Ligne Z',             cx:47,  cy:100, rx:7,  ry:55 },
      { id:'actine',   label:"Filament d'actine",   cx:100, cy:80,  rx:38, ry:9  },
      { id:'myosine',  label:'Filament de myosine', cx:160, cy:100, rx:52, ry:11 },
      { id:'zone_h',   label:'Zone H',              cx:160, cy:100, rx:20, ry:28 },
      { id:'bande_a',  label:'Bande A',             cx:160, cy:138, rx:52, ry:12 },
      { id:'bande_i',  label:'Bande I',             cx:54,  cy:138, rx:20, ry:12 },
    ],
    renderBg:() => (
      <>
        <line x1="47" y1="45" x2="47" y2="155" stroke="#d98b5e" strokeWidth="4" strokeLinecap="round" opacity=".7"/>
        <line x1="273" y1="45" x2="273" y2="155" stroke="#d98b5e" strokeWidth="4" strokeLinecap="round" opacity=".7"/>
        <rect x="52" y="74" width="76" height="8" rx="4" fill="#f4b080" opacity=".6"/>
        <rect x="52" y="118" width="76" height="8" rx="4" fill="#f4b080" opacity=".6"/>
        <rect x="192" y="74" width="76" height="8" rx="4" fill="#f4b080" opacity=".6"/>
        <rect x="192" y="118" width="76" height="8" rx="4" fill="#f4b080" opacity=".6"/>
        <rect x="105" y="88" width="110" height="24" rx="8" fill="#c07840" opacity=".45"/>
        <circle cx="120" cy="88" r="4" fill="#d98b5e" opacity=".5"/>
        <circle cx="140" cy="88" r="4" fill="#d98b5e" opacity=".5"/>
        <circle cx="160" cy="88" r="4" fill="#d98b5e" opacity=".5"/>
        <circle cx="180" cy="88" r="4" fill="#d98b5e" opacity=".5"/>
        <circle cx="200" cy="112" r="4" fill="#d98b5e" opacity=".5"/>
        <circle cx="180" cy="112" r="4" fill="#d98b5e" opacity=".5"/>
        <circle cx="160" cy="112" r="4" fill="#d98b5e" opacity=".5"/>
        <circle cx="140" cy="112" r="4" fill="#d98b5e" opacity=".5"/>
        <rect x="103" y="128" width="114" height="5" rx="2" fill="#d98b5e" opacity=".25"/>
        <rect x="48" y="128" width="48" height="5" rx="2" fill="#f4b080" opacity=".25"/>
        <rect x="224" y="128" width="48" height="5" rx="2" fill="#f4b080" opacity=".25"/>
      </>
    ),
  },
  {
    id:'effet_serre', title:"L'effet de serre", chapter:'SVT · Ch. 11', icon:'🌡️',
    color:'#e8f0ff', deep:'#6090d0', viewBox:'0 0 320 230',
    parts:[
      { id:'soleil',     label:'Soleil',                cx:262, cy:40,  rx:26, ry:26  },
      { id:'atmosphere', label:'Atmosphère',             cx:160, cy:78,  rx:138,ry:20  },
      { id:'gaz_serre',  label:'Gaz à effet de serre',  cx:160, cy:125, rx:58, ry:18  },
      { id:'rayt_ir',    label:'Rayonnement IR renvoyé', cx:68,  cy:155, rx:28, ry:17  },
      { id:'surface',    label:'Surface terrestre',      cx:160, cy:198, rx:138,ry:18  },
    ],
    renderBg:() => (
      <>
        <circle cx="262" cy="40" r="24" fill="#ffd700" opacity=".7"/>
        <line x1="262" y1="10" x2="262" y2="4"   stroke="#ffd700" strokeWidth="2" opacity=".5"/>
        <line x1="288" y1="18" x2="294" y2="12"  stroke="#ffd700" strokeWidth="2" opacity=".5"/>
        <line x1="295" y1="40" x2="301" y2="40"  stroke="#ffd700" strokeWidth="2" opacity=".5"/>
        <line x1="288" y1="62" x2="294" y2="68"  stroke="#ffd700" strokeWidth="2" opacity=".5"/>
        <line x1="240" y1="62" x2="195" y2="98"  stroke="#ffd700" strokeWidth="2" strokeDasharray="4 2" opacity=".6"/>
        <polygon points="192,101 198,91 204,100" fill="#ffd700" opacity=".6"/>
        <rect x="22" y="60" width="276" height="36" rx="10" fill="#c8e8ff" stroke="#90b8e0" strokeWidth="1" opacity=".5"/>
        <ellipse cx="160" cy="125" rx="62" ry="20" fill="#a0c8a0" stroke="#60a060" strokeWidth="1" opacity=".4"/>
        <text x="122" y="123" fontSize="7.5" fill="#60a060" fontFamily="Inter, sans-serif" opacity=".7">CO₂ · CH₄ · H₂O</text>
        <line x1="152" y1="143" x2="70" y2="140"  stroke="#ff6040" strokeWidth="2" strokeDasharray="4 2" opacity=".6"/>
        <polygon points="67,138 77,134 77,144" fill="#ff6040" opacity=".6"/>
        <line x1="160" y1="180" x2="160" y2="146" stroke="#ff6040" strokeWidth="1.5" strokeDasharray="3 2" opacity=".5"/>
        <rect x="22" y="182" width="276" height="30" rx="8" fill="#90c060" stroke="#60a030" strokeWidth="1.5" opacity=".6"/>
      </>
    ),
  },
  {
    id:'tectonique', title:'Tectonique des plaques', chapter:'SVT · Ch. 12', icon:'🌋',
    color:'#f0e8d8', deep:'#a08060', viewBox:'0 0 320 230',
    parts:[
      { id:'plaque_cont', label:'Plaque continentale', cx:72,  cy:90,  rx:55, ry:28 },
      { id:'plaque_oce',  label:'Plaque océanique',    cx:232, cy:102, rx:55, ry:22 },
      { id:'subduction',  label:'Zone de subduction',  cx:148, cy:148, rx:28, ry:20 },
      { id:'dorsale',     label:'Dorsale océanique',   cx:268, cy:162, rx:26, ry:22 },
      { id:'manteau',     label:'Manteau',             cx:160, cy:198, rx:98, ry:20 },
    ],
    renderBg:() => (
      <>
        <rect x="12" y="178" width="296" height="40" rx="8" fill="#c8a070" opacity=".5"/>
        <rect x="12" y="55"  width="296" height="30" rx="5" fill="#90c8e8" opacity=".35"/>
        <path d="M12 92 Q 62 62 132 90 L 132 178 L 12 178 Z"   fill="#d4b890" stroke="#a08060" strokeWidth="1.5" opacity=".6"/>
        <path d="M132 90 Q 188 68 308 78 L 308 178 L 132 178 Z" fill="#90b0c8" stroke="#607090" strokeWidth="1.5" opacity=".6"/>
        <path d="M132 90 Q 142 132 132 178" fill="none" stroke="#a08060" strokeWidth="3" strokeLinecap="round" opacity=".6"/>
        <path d="M270 78 L 260 55 L 280 55 Z" fill="#d0a060" opacity=".5"/>
        <path d="M270 55 L 264 38 L 276 38 Z" fill="#e0b070" opacity=".4"/>
        <line x1="82"  y1="92"  x2="128" y2="105" stroke="#a08060" strokeWidth="1.5" strokeDasharray="4 2" opacity=".5"/>
        <line x1="218" y1="94"  x2="172" y2="108" stroke="#607090" strokeWidth="1.5" strokeDasharray="4 2" opacity=".5"/>
        <circle cx="268" cy="162" r="20" fill="#e87040" opacity=".18"/>
        <circle cx="268" cy="162" r="10" fill="#e87040" opacity=".28"/>
      </>
    ),
  },
];

// ── GAMES hub data ────────────────────────────────────────
const GAMES = [
  { id:'quidit',    title:'Qui a dit ça ?',       sub:'HLP · philosophes & citations',     icon:'💭', bg:'#f7d97a', deep:'#efc84a', mins:'5 min', tag:'HLP' },
  { id:'vraifaux',  title:'Vrai ou Faux ?',        sub:'SVT · teste tes connaissances',     icon:'🔬', bg:'#f4cad2', deep:'#e9a9b6', mins:'4 min', tag:'SVT' },
  { id:'princesse', title:'Sauve la princesse',    sub:'quiz mixte · aventure narrative',   icon:'👑', bg:'#f7c9a8', deep:'#d98b5e', mins:'8 min', tag:'MIX' },
  { id:'cellule',   title:'Puzzles de schémas',     sub:'SVT · 7 schémas à reconstituer',    icon:'🧫', bg:'#f9dee2', deep:'#e9a9b6', mins:'5 min', tag:'SVT' },
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
  const [scores, setScores] = useState(() => getQuiDitScores());
  const [textInput, setTextInput] = useState('');
  const inputRef = useRef(null);

  const q = questions[i];
  const qKey = q.thesis.slice(0, 80);
  const correctCount = scores[qKey] || 0;
  const isTextMode = correctCount >= 2;
  const correctAnswer = q.options[q.answer];

  const recordCorrect = () => {
    const next = correctCount + 1;
    const newScores = { ...scores, [qKey]: next };
    setScores(newScores);
    saveQuiDitScore(qKey, next);
  };

  const choose = idx => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.answer) recordCorrect();
  };

  const submitText = () => {
    if (picked !== null || !textInput.trim()) return;
    const norm = normalizeAnswer(textInput);
    const normFull = normalizeAnswer(correctAnswer);
    const normLast = normalizeAnswer(correctAnswer.split(' ').at(-1));
    const ok = norm === normFull || norm === normLast || (norm.length > 3 && normFull.includes(norm));
    setPicked(ok ? q.answer : -1);
    if (ok) recordCorrect();
  };

  const next = () => { if (i+1 >= questions.length) { setDone(true); return; } setI(i+1); setPicked(null); setTextInput(''); };
  const correct = picked === q.answer;
  const replay = () => { setI(0); setPicked(null); setDone(false); setTextInput(''); };

  if (done) return <GameDone onBack={onBack} onReplay={replay} title="C'est fini pour cette fois." msg="On reverra ensemble ce qui a coincé. Tu peux y revenir quand tu veux." />;

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.yellow, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s cubic-bezier(.2,.8,.3,1)' }}>
      <GameHeader onBack={onBack} title="Qui a dit ça ?" step={i} total={questions.length} deep={LA.yellowDeep}/>
      <div style={{ flex:1, padding:'20px 22px', display:'flex', flexDirection:'column', gap:16, background:LA.yellowSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        {noFilter && <ReadNotice/>}
        {/* Citation */}
        <div key={i} style={{ background:LA.cream, borderRadius:20, padding:'20px', boxShadow:'0 2px 14px rgba(43,36,32,.06)', animation:'la-pop .35s cubic-bezier(.2,.8,.3,1)' }}>
          <div style={{ fontSize:10, color:LA.inkSoft, letterSpacing:.7, textTransform:'uppercase', marginBottom:6 }}>
            citation
            {isTextMode && <span style={{ marginLeft:8, background:LA.yellowDeep, color:LA.ink, borderRadius:6, padding:'1px 7px', fontSize:9, fontWeight:700 }}>✍️ mode écriture</span>}
          </div>
          <div style={{ fontFamily:'Fraunces, Georgia, serif', fontSize:19, fontStyle:'italic', lineHeight:1.35, letterSpacing:-.2 }}>{q.thesis}</div>
          {isTextMode && <div style={{ fontSize:10, color:LA.inkSoft, marginTop:8 }}>Tu l'as eu {correctCount} fois — écris directement le nom !</div>}
        </div>

        {/* Mode QCM ou écriture */}
        {isTextMode ? (
          <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
            {picked === null ? (
              <div style={{ display:'flex', gap:8 }}>
                <input
                  ref={inputRef}
                  autoFocus
                  value={textInput}
                  onChange={e => setTextInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && submitText()}
                  placeholder="Écris le nom du philosophe..."
                  style={{
                    flex:1, borderRadius:12, border:`1.5px solid ${LA.line}`,
                    padding:'14px 16px', fontSize:15, fontFamily:'inherit',
                    background:'#fff', outline:'none',
                  }}
                />
                <div onClick={submitText} style={{
                  background:LA.ink, color:LA.cream, borderRadius:12,
                  padding:'14px 18px', cursor:'pointer', fontWeight:700, fontSize:16,
                  display:'flex', alignItems:'center',
                }}>→</div>
              </div>
            ) : (
              <div style={{
                borderRadius:14, padding:'14px 16px',
                background: correct ? '#c8e6c8' : '#f6c9c4',
                border: `1.5px solid ${correct ? '#98c598' : '#e69d95'}`,
                animation:'la-pop .3s ease-out',
              }}>
                <div style={{ fontWeight:700, fontSize:15, color: correct ? '#3a7a3a' : '#b24a3e' }}>
                  {correct ? '✓ ' : '✗ Réponse : '}{correctAnswer}
                </div>
                {!correct && textInput && (
                  <div style={{ fontSize:11.5, color:LA.inkSoft, marginTop:3 }}>Tu as écrit : "{textInput}"</div>
                )}
              </div>
            )}
          </div>
        ) : (
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
        )}

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

// ── Puzzle de schéma (générique) ──────────────────────────
function SchemaPuzzle({ schema, onBack }) {
  const [placed, setPlaced] = useState({});
  const [pool, setPool] = useState(() => [...schema.parts].sort(() => Math.random() - .5));
  const [selected, setSelected] = useState(null);
  const [msg, setMsg] = useState(null);
  const [done, setDone] = useState(false);

  const handleLabelClick = (partId) => {
    if (placed[partId]) return;
    setSelected(prev => prev === partId ? null : partId);
    setMsg(null);
  };

  const handleZoneClick = (zone) => {
    if (placed[zone.id] || selected === null) return;
    if (selected === zone.id) {
      const next = { ...placed, [zone.id]: true };
      setPlaced(next);
      setPool(p => p.filter(x => x.id !== zone.id));
      setSelected(null);
      setMsg({ ok: true, text: `${schema.parts.find(p => p.id === zone.id)?.label} ✓` });
      if (Object.keys(next).length >= schema.parts.length) setTimeout(() => setDone(true), 700);
    } else {
      const selectedLabel = schema.parts.find(p => p.id === selected)?.label || '';
      setMsg({ ok: false, text: `Ce n'est pas ${selectedLabel.toLowerCase()} ici.` });
    }
    setTimeout(() => setMsg(null), 2200);
  };

  const replay = () => { setPlaced({}); setPool([...schema.parts].sort(() => Math.random() - .5)); setSelected(null); setMsg(null); setDone(false); };

  if (done) return <GameDone onBack={onBack} onReplay={replay} title="Schéma complété !" msg="Tu as identifié toutes les structures. Rejoue pour ancrer." />;

  const instructionText = selected === null
    ? 'Clique sur une étiquette pour la sélectionner'
    : '→ Clique sur la zone correspondante dans le schéma';

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:schema.color, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s ease-out' }}>
      <GameHeader onBack={onBack} title={schema.title} step={Object.keys(placed).length} total={schema.parts.length} deep={schema.deep}/>
      <div style={{ flex:1, padding:'16px 18px', display:'flex', flexDirection:'column', gap:12, background:LA.roseSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-10 }}>
        <div style={{ background:LA.cream, borderRadius:16, padding:10 }}>
          <svg viewBox={schema.viewBox} width="100%" style={{ display:'block', maxHeight:220 }}>
            {schema.renderBg()}
            {schema.parts.map(z => {
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
        {msg && (
          <div style={{ padding:'8px 12px', borderRadius:10, fontSize:12.5, fontWeight:500, background:msg.ok?'#d9edd9':'#f6d6d1', color:msg.ok?'#3a7a3a':'#b24a3e', animation:'la-pop .3s ease-out' }}>{msg.text}</div>
        )}
        <div style={{ fontSize:11, color:LA.inkSoft, letterSpacing:.4, fontStyle:'italic' }}>{instructionText}</div>
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

// ── Jeu 4 : Hub puzzles de schémas SVT ────────────────────
function GameCellule({ onBack }) {
  const [activeSchema, setActiveSchema] = useState(null);

  if (activeSchema) {
    return <SchemaPuzzle schema={activeSchema} onBack={() => setActiveSchema(null)}/>;
  }

  return (
    <div style={{ display:'flex', flexDirection:'column', minHeight:'80vh', background:LA.rose, borderRadius:24, overflow:'hidden', animation:'la-in-right .28s ease-out' }}>
      <div style={{ padding:'16px 18px 10px', display:'flex', alignItems:'center', gap:12 }}>
        <button onClick={onBack} style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', padding:'4px 8px', borderRadius:8, color:LA.ink, lineHeight:1 }}>←</button>
        <span style={{ fontWeight:700, fontSize:17, color:LA.ink, fontFamily:'Fraunces, Georgia, serif', fontStyle:'italic' }}>Puzzles de schémas</span>
      </div>
      <div style={{ flex:1, padding:'8px 18px 24px', display:'flex', flexDirection:'column', gap:10, background:LA.roseSoft, borderTopLeftRadius:24, borderTopRightRadius:24, marginTop:-4, overflowY:'auto' }}>
        <p style={{ margin:'8px 0 4px', fontSize:13, color:LA.inkSoft, fontStyle:'italic' }}>Choisis un schéma SVT à reconstituer :</p>
        {SCHEMAS.map(s => (
          <div
            key={s.id}
            onClick={() => setActiveSchema(s)}
            style={{
              background:s.color, borderRadius:16, padding:'14px 16px',
              display:'flex', alignItems:'center', gap:14,
              cursor:'pointer', boxShadow:`0 3px 0 ${s.deep}55`,
              userSelect:'none',
            }}
          >
            <span style={{ fontSize:26 }}>{s.icon}</span>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, fontSize:14.5, color:LA.ink }}>{s.title}</div>
              <div style={{ fontSize:11, color:LA.inkSoft, marginTop:2 }}>{s.chapter} · {s.parts.length} structures</div>
            </div>
            <span style={{ fontSize:20, color:s.deep, opacity:.7 }}>›</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Hub principal ─────────────────────────────────────────
export default function GamesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.state?.game || null);

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
