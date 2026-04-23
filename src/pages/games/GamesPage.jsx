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
