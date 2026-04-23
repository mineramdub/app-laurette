// ===== PHILOSOPHIE BAC — 10 notions clés =====

export const philoNotions = [
  {
    id: 'conscience',
    titre: 'La conscience et l\'inconscient',
    description: 'Cogito, conscience de soi, inconscient freudien, mauvaise foi.',
    cours: {
      sections: [
        {
          titre: 'La conscience : se connaître soi-même',
          contenu: [
            "La conscience désigne la capacité d'un être à se représenter lui-même et le monde. On distingue la conscience immédiate (être éveillé, percevoir) de la conscience réflexive (se prendre soi-même comme objet de pensée).",
            "Descartes (Méditations métaphysiques, 1641) : le cogito — 'Je pense, donc je suis' — est la première certitude indubitable. En doutant de tout, je ne peux pas douter que je doute, donc que je pense, donc que j'existe en tant que chose pensante.",
            "La conscience est-elle transparente à elle-même ? Descartes le pense : la conscience a un accès direct et privilégié à ses propres états. Mais cette thèse sera contestée par Freud et la psychanalyse.",
            "Hegel distingue la conscience (rapport au monde extérieur) et la conscience de soi (rapport à soi-même). La dialectique du maître et de l'esclave montre que la conscience de soi se constitue dans la relation à une autre conscience : je ne me reconnais comme sujet que dans la reconnaissance d'autrui.",
            "Points clés : 1) Cogito = première certitude — je pense, donc je suis. 2) Conscience réflexive = se prendre comme objet de pensée. 3) Conscience ≠ transparence totale à soi-même (Freud). 4) La conscience de soi passe par la reconnaissance d'autrui (Hegel)."
          ]
        },
        {
          titre: "L'inconscient freudien",
          contenu: [
            "Freud (L'Interprétation des rêves, 1900) révolutionne la conception du psychisme : une grande partie de notre vie mentale est inconsciente et nous influence à notre insu. Le moi n'est pas maître dans sa propre maison.",
            "Le modèle topique : Freud distingue le conscient (ce dont on a connaissance), le préconscient (ce qui peut devenir conscient) et l'inconscient (refoulé, inaccessible directement). La censure psychique empêche les désirs refoulés d'accéder à la conscience.",
            "Le modèle structural : ça (pulsions), moi (instance médiatrice, principe de réalité) et surmoi (intériorisation des interdits sociaux, conscience morale). Le ça obéit au principe de plaisir ; le moi cherche à satisfaire le ça tout en respectant la réalité.",
            "Les voies d'accès à l'inconscient : les rêves ('voie royale vers l'inconscient'), les lapsus, les actes manqués, les symptômes névrotiques. La psychanalyse vise à rendre conscient ce qui était inconscient pour libérer le sujet de ses répétitions.",
            "Critiques de l'inconscient freudien : Sartre refuse un inconscient 'en soi' — la mauvaise foi explique mieux que l'inconscient nos auto-illusions. Les neurosciences parlent de 'cognition non consciente' mais sans valider le concept freudien de refoulement."
          ]
        },
        {
          titre: 'Conscience, liberté et mauvaise foi',
          contenu: [
            "Pour Sartre (L'Être et le Néant, 1943), la conscience humaine est 'néant' — elle n'est jamais une chose fixe. Elle est toujours en train de se faire, de se projeter vers l'avenir. C'est ce qu'il appelle l'être pour-soi (par opposition à l'en-soi des choses).",
            "La mauvaise foi sartrienne : refuser d'assumer sa liberté en se comportant comme une chose déterminée (factricité), en jouant un rôle social. L'exemple du garçon de café qui joue à être garçon de café, niant sa liberté.",
            "L'angoisse est la conscience de la liberté : quand je réalise que rien ne me force à agir comme je le fais, que je pourrais toujours faire autrement. La mauvaise foi est une fuite de cette angoisse.",
            "Merleau-Ponty critique le pur cogito cartésien : la conscience est toujours incarnée, ancrée dans un corps et dans une situation. On ne pense pas depuis nulle part — on pense depuis une chair, une histoire, une culture.",
            "La question de la conscience animale : les sciences cognitives contemporaines montrent que certains animaux ont une conscience primaire (réaction au monde) et même secondaire (certains primates, dauphins, éléphants). Les critères de la conscience restent débattus."
          ]
        },
        {
          titre: 'Connais-toi toi-même',
          contenu: [
            "La maxime delphique 'Gnôthi seauton' (Connais-toi toi-même) est le programme de la philosophie socratique. Pour Socrate, la sagesse commence par la reconnaissance de son ignorance.",
            "Peut-on vraiment se connaître soi-même ? Les biais cognitifs (psychologie contemporaine) montrent que nos jugements sur nous-mêmes sont systématiquement erronés. On surestime nos capacités, on mémorise le passé de manière sélective.",
            "L'introspection est-elle fiable ? Nisbett et Wilson (1977) montrent expérimentalement que les gens ignorent souvent les vraies causes de leurs comportements et invoquent des rationalisations post-hoc.",
            "Ricœur (Soi-même comme un autre) propose que la connaissance de soi passe par le détour de l'autre et de l'interprétation. Je me comprends en comprenant les textes, les œuvres, les récits que je produis et qui me constituent.",
            "La conscience de soi dans la méditation : les traditions bouddhistes et les pratiques contemplatives visent à observer la conscience elle-même — ses flux, ses constructions, son impermanence. Ce programme rejoint certaines questions de la philosophie de l'esprit contemporaine."
          ]
        },
        {
          titre: 'Philosophie de l\'esprit contemporaine',
          contenu: [
            "La philosophie de l'esprit (mind) pose la question de la relation entre conscience et cerveau. Le problème difficile de la conscience (Chalmers) : pourquoi y a-t-il quelque chose que cela fait d'être moi ? La subjectivité ne semble pas réductible à des processus physiques.",
            "Matérialisme : la conscience n'est qu'un processus cérébral complexe. Les qualia (le 'rouge' du rouge, la 'douleur' de la douleur) seront un jour expliqués par les neurosciences. Dennett défend cette position.",
            "Dualisme : substance pensante et substance étendue sont irréductibles l'une à l'autre (Descartes). Mais comment interagissent-elles ? Le problème de l'interaction corps-esprit reste ouvert.",
            "Fonctionnalisme : ce qui compte, c'est la structure fonctionnelle, pas le substrat physique. Une IA ayant les mêmes fonctions qu'un cerveau humain aurait-elle conscience ? Le test de Turing et ses limites.",
            "Les neurosciences de la conscience : les expériences sur le 'split brain', les états végétatifs, la perception subliminale enrichissent notre compréhension de la conscience tout en posant de nouvelles questions éthiques."
          ]
        }
      ]
    },
    flashcards: [
      { terme: 'Cogito (Descartes)', definition: "'Je pense, donc je suis' — première certitude indubitable. En doutant de tout, je ne peux douter que je pense, donc que j'existe comme chose pensante." },
      { terme: 'Conscience réflexive', definition: 'Capacité à se prendre soi-même comme objet de pensée. Se distingue de la conscience immédiate (simple perception du monde).' },
      { terme: "Inconscient (Freud)", definition: "Partie du psychisme inaccessible à la conscience directe, contenant les désirs refoulés. Influence nos comportements à notre insu." },
      { terme: 'Ça / Moi / Surmoi', definition: "Trois instances freudiennes. Le ça = pulsions (principe de plaisir). Le moi = médiation avec la réalité. Le surmoi = intériorisation des interdits sociaux." },
      { terme: 'Refoulement', definition: "Mécanisme de défense qui maintient hors de la conscience les désirs, pensées et souvenirs insupportables. Processus actif et inconscient." },
      { terme: 'Mauvaise foi (Sartre)', definition: "Fuir sa liberté en se comportant comme une chose déterminée, en jouant un rôle social niant sa liberté. Ex : le garçon de café qui 'est' garçon de café." },
      { terme: 'Pour-soi / En-soi (Sartre)', definition: "Pour-soi = conscience humaine (être qui n'est pas ce qu'il est, toujours en projet). En-soi = être des choses (fixe, opaque à lui-même)." },
      { terme: 'Angoisse existentielle (Sartre)', definition: "Conscience vertigineuse de la liberté absolue. Je pourrais toujours agir autrement. La mauvaise foi est une fuite de cette angoisse." },
      { terme: 'Problème difficile de la conscience', definition: "Chalmers : pourquoi y a-t-il quelque chose que cela fait d'être moi ? La subjectivité (qualia) semble irréductible aux processus physiques." },
      { terme: 'Gnôthi seauton', definition: "'Connais-toi toi-même' — maxime delphique, programme socratique. La sagesse commence par la conscience de sa propre ignorance." },
      { terme: 'Dialectique maître-esclave (Hegel)', definition: "La conscience de soi se constitue dans la lutte pour la reconnaissance avec une autre conscience. Je ne me reconnais comme sujet que si autrui me reconnaît." },
      { terme: 'Lapsus / acte manqué', definition: "Pour Freud : voies d'accès à l'inconscient. Les 'erreurs' révèlent des désirs ou conflits inconscients (ex : dire le nom de l'ex à la place du conjoint)." },
      { terme: 'Qualia', definition: "Qualités subjectives de l'expérience consciente (le 'rouge' du rouge vu, la douleur sentie). Irréductibles à une description purement physique selon les dualistes." },
      { terme: 'Conscience incarnée (Merleau-Ponty)', definition: "La conscience est toujours ancrée dans un corps situé. On ne pense pas depuis nulle part mais depuis une chair, une histoire, une culture." },
      { terme: 'Rêves (Freud)', definition: "'Voie royale vers l'inconscient.' Les rêves sont des réalisations déguisées de désirs refoulés. Leur interprétation révèle le contenu latent sous le contenu manifeste." },
    ],
    quiz: [
      { question: "Le cogito cartésien ('Je pense, donc je suis') prouve :", options: ["L'existence du monde extérieur", "L'existence de Dieu", "Mon existence en tant que chose pensante — seule certitude indubitable", "La fiabilité de mes sens"], bonneReponse: 2, explication: "En doutant de tout, Descartes réalise qu'il ne peut douter qu'il doute — donc qu'il pense, donc qu'il existe. Cette certitude est la seule qui résiste au doute hyperbolique." },
      { question: "Le 'ça' dans le modèle structural de Freud est :", options: ["La conscience morale intériorisée", "L'instance médiatrice avec la réalité", "Le réservoir des pulsions obéissant au principe de plaisir", "La conscience claire et rationnelle"], bonneReponse: 2, explication: "Le ça contient les pulsions (libido, pulsion de mort) et obéit au principe de plaisir : satisfaction immédiate. Le moi doit gérer ses exigences en tenant compte de la réalité. Le surmoi représente les interdits intériorisés." },
      { question: "La 'mauvaise foi' chez Sartre consiste à :", options: ["Mentir aux autres", "Fuir sa liberté en se comportant comme une chose déterminée", "Avoir de mauvaises intentions", "Croire en Dieu à tort"], bonneReponse: 1, explication: "La mauvaise foi est une auto-illusion : on refuse d'assumer sa liberté en se convainquant qu'on 'est' tel rôle ou telle nature. Le garçon de café qui joue à être garçon de café, niant qu'il pourrait choisir autrement." },
      { question: "Le 'problème difficile de la conscience' (Chalmers) porte sur :", options: ["Comment mémoriser plus facilement", "Pourquoi il y a quelque chose que cela fait d'être moi — la subjectivité irréductible", "Comment l'inconscient influence la conscience", "La difficulté de se connaître soi-même"], bonneReponse: 1, explication: "Chalmers : même si on expliquait tous les processus cérébraux, on n'aurait pas expliqué pourquoi il y a une expérience subjective (les qualia). Ce 'fossé explicatif' reste ouvert entre neurosciences et philosophie." },
      { question: "Pour Hegel, la conscience de soi se constitue :", options: ["Dans la solitude et la méditation", "Par le cogito — en pensant seul", "Dans la relation à une autre conscience, par la lutte pour la reconnaissance", "Par l'introspection directe"], bonneReponse: 2, explication: "La dialectique maître-esclave montre que je ne me reconnais comme sujet conscient que dans la confrontation avec une autre conscience qui me reconnaît à son tour. La conscience de soi est irréductiblement intersubjective." },
    ],
    texteTrous: {
      paragraphe: "Descartes fonde la certitude sur le [cogito] : 'Je [pense], donc je suis.' Freud révèle que le moi n'est pas maître dans sa propre maison : l'[inconscient] contient les désirs [refoulés]. Ses trois instances sont le [ça], le [moi] et le [surmoi]. Sartre appelle [mauvaise foi] le refus d'assumer sa [liberté]. Pour Hegel, la conscience de soi passe par la [reconnaissance] d'autrui.",
      banqueMots: ['cogito', 'pense', 'inconscient', 'refoulés', 'ça', 'moi', 'surmoi', 'mauvaise foi', 'liberté', 'reconnaissance']
    }
  },
  {
    id: 'liberte',
    titre: 'La liberté',
    description: 'Libre arbitre, déterminisme, liberté politique, Kant, Sartre, Spinoza.',
    cours: {
      sections: [
        {
          titre: 'Le libre arbitre existe-t-il ?',
          contenu: [
            "Le libre arbitre désigne la capacité de choisir librement, sans être déterminé par des causes extérieures ou intérieures. C'est l'une des questions les plus débattues de la philosophie.",
            "Arguments pour le libre arbitre : l'expérience subjective de la délibération (je sens que je choisis), la responsabilité morale et juridique (on tient les gens responsables de leurs actes), la possibilité d'agir contre ses désirs immédiats.",
            "Arguments contre : le déterminisme universel (chaque événement a une cause — y compris mes décisions), les neurosciences (expériences de Libet : l'activité cérébrale précède la conscience de la décision), la génétique et l'environnement qui conditionnent nos comportements.",
            "Le compatibilisme (Hume, Kant) : liberté et déterminisme ne sont pas incompatibles. La liberté n'est pas l'absence de causes mais l'action selon ses propres raisons, sans contrainte extérieure. Je suis libre quand j'agis selon ma propre volonté.",
            "Points clés : 1) Libre arbitre ≠ indéterminisme (liberté du hasard). 2) Le compatibilisme tente de concilier liberté et causalité. 3) La responsabilité morale dépend de la position adoptée. 4) Les neurosciences relancent le débat sans le clore définitivement."
          ]
        },
        {
          titre: 'Déterminisme et liberté',
          contenu: [
            "Le déterminisme affirme que tout événement, y compris les actions humaines, est causalement déterminé par des états antérieurs. Laplace imaginait un démon qui, connaissant la position et la vitesse de toutes les particules, pourrait prédire l'avenir entier.",
            "Spinoza (Éthique, 1677) est un déterministe radical : Dieu-Nature est infini et tout ce qui arrive est nécessaire. La liberté humaine illusoire vient de ce qu'on ignore les causes qui nous déterminent. 'Les hommes se croient libres parce qu'ils ont conscience de leurs appétits et ignorent les causes qui les déterminent.'",
            "Spinoza propose néanmoins une liberté spinoziste : non pas l'absence de causes mais la compréhension de nos causes. En comprenant ce qui nous détermine, on cesse d'être passifs (soumis aux passions) et on devient actifs (guidés par la raison).",
            "Le déterminisme en sciences humaines : la sociologie (Bourdieu), la psychologie behavioriste, les neurosciences montrent que nos comportements sont largement déterminés par des facteurs que nous ne contrôlons pas. Cela remet-il en question la responsabilité ?",
            "Le principe de responsabilité : même les philosophes compatibilistes maintiennent la responsabilité morale. Strawson montre que nos pratiques réactives (gratitude, indignation, reproche) présupposent la responsabilité — indépendamment de la vérité du déterminisme."
          ]
        },
        {
          titre: 'La liberté morale (Kant)',
          contenu: [
            "Kant distingue la liberté phénoménale (dans le monde des causes et des effets) et la liberté nouménale (le fait d'agir selon la raison morale, au-delà de la causalité naturelle). La liberté morale est l'autonomie : se donner à soi-même sa propre loi.",
            "L'impératif catégorique : 'Agis uniquement selon la maxime par laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle.' La liberté morale c'est agir par devoir, non par intérêt ou peur.",
            "L'hétéronomie est le contraire de l'autonomie : obéir à une loi extérieure (inclinations, traditions, autorité) plutôt qu'à la loi que la raison se donne elle-même. L'esclave de ses passions n'est pas libre même s'il fait ce qu'il veut.",
            "La tension chez Kant : si le monde naturel est entièrement déterminé, comment la liberté morale est-elle possible ? Kant maintient que la liberté est un postulat pratique nécessaire — on doit la postuler pour que la moralité ait un sens, même si on ne peut la démontrer théoriquement.",
            "L'autonomie comme idéal éducatif : éduquer à la liberté, c'est éduquer à l'autonomie morale — la capacité de se donner à soi-même ses propres règles selon la raison, sans dépendre de l'autorité extérieure."
          ]
        },
        {
          titre: 'La liberté politique',
          contenu: [
            "La liberté politique concerne les rapports entre l'individu et la société. Isaiah Berlin distingue liberté négative (absence d'obstacles extérieurs — liberté de...) et liberté positive (capacité effective de réaliser ses fins — liberté pour...).",
            "Liberté négative (libéralisme) : l'État doit interférer le moins possible avec les choix individuels. Mill (De la liberté, 1859) : 'Le seul but légitime pour lequel les hommes peuvent s'immiscer dans la liberté d'action de leurs semblables est de se protéger eux-mêmes.'",
            "Liberté positive (républicanisme, socialisme) : une liberté purement formelle (absence de contrainte légale) est illusoire si les conditions matérielles (pauvreté, ignorance) empêchent de l'exercer réellement. La liberté effective exige des conditions sociales.",
            "Rousseau (Du Contrat social, 1762) : la liberté civile est obtenue par le contrat social. En obéissant à la loi qu'on s'est donnée collectivement, on obéit à sa propre volonté — c'est la liberté véritable, non l'arbitraire de la volonté particulière.",
            "Le paradoxe de la liberté : peut-on forcer quelqu'un à être libre ? Rousseau admet qu'on peut 'contraindre à être libre' — forcer quelqu'un à respecter la volonté générale. Cette formule a été critiquée comme ouvrant la porte au totalitarisme."
          ]
        },
        {
          titre: 'Liberté et existence',
          contenu: [
            "Sartre (L'Être et le Néant, 1943) radicalise la liberté : 'L'homme est condamné à être libre.' La conscience humaine est un néant — elle n'est jamais une chose fixe, elle est toujours en train de se projeter vers l'avenir.",
            "La situation ne supprime pas la liberté, elle en est la condition. Je suis toujours libre dans une situation donnée, non malgré elle. Un prisonnier reste libre dans l'usage qu'il fait de son emprisonnement.",
            "La liberté sartrienne crée une responsabilité absolue : je suis responsable non seulement de mes actes mais de ce que je fais de ma situation, de ma 'facticité' (corps, naissance, passé). Même ne pas choisir est un choix.",
            "Bergson (Essai sur les données immédiates de la conscience, 1889) : la vraie liberté est dans les actes qui émanent du moi profond — non des réactions automatiques superficielles. La durée (temps vécu) est le milieu de la liberté authentique.",
            "La liberté aujourd'hui : questions contemporaines — liberté numérique vs surveillance (algorithmes, big data), liberté économique vs inégalités, liberté d'expression vs discours de haine. La liberté reste un enjeu philosophique et politique central."
          ]
        }
      ]
    },
    flashcards: [
      { terme: 'Libre arbitre', definition: "Capacité de choisir librement, sans être entièrement déterminé par des causes extérieures ou intérieures. L'une des questions les plus débattues en philosophie." },
      { terme: 'Déterminisme', definition: "Tout événement (y compris les actions humaines) est causalement déterminé par des états antérieurs. Incompatible avec le libre arbitre strict." },
      { terme: 'Compatibilisme', definition: "Position philosophique (Hume, Kant) : liberté et déterminisme sont compatibles. La liberté = agir selon ses propres raisons sans contrainte extérieure, même dans un monde déterminé." },
      { terme: 'Liberté spinoziste', definition: "Non pas l'absence de causes mais la compréhension de ses causes. Comprendre ce qui me détermine me rend actif (guidé par la raison) plutôt que passif (soumis aux passions)." },
      { terme: 'Autonomie morale (Kant)', definition: "Se donner à soi-même sa propre loi morale selon la raison. Opposée à l'hétéronomie (obéir à une loi extérieure). Fondement de la dignité humaine." },
      { terme: 'Impératif catégorique', definition: "Kant : 'Agis selon la maxime que tu peux vouloir universelle.' Loi morale inconditionnelle, indépendante de toute conséquence ou inclination." },
      { terme: 'Liberté négative (Berlin)', definition: "Absence d'obstacles extérieurs — liberté de faire quelque chose sans interférence. Idéal libéral classique : l'État ne doit pas contraindre." },
      { terme: 'Liberté positive (Berlin)', definition: "Capacité effective de réaliser ses fins. Critique de la liberté purement formelle : sans conditions matérielles, la liberté est illusoire." },
      { terme: 'Volonté générale (Rousseau)', definition: "La volonté de tous orientée vers le bien commun. Distincte de la 'volonté de tous' (somme des volontés particulières). Fondement de la loi légitime." },
      { terme: "Condamné à être libre (Sartre)", definition: "L'homme est irrémédiablement libre : même ne pas choisir est un choix. La liberté est une condition, non un don qu'on pourrait refuser." },
      { terme: 'Hétéronomie', definition: "Obéir à une loi extérieure (tradition, autorité, passions) plutôt qu'à la loi que la raison se donne elle-même. Opposé d'autonomie." },
      { terme: 'Expériences de Libet', definition: "Neurosciences : l'activité cérébrale précède la conscience de la décision de quelques centaines de millisecondes. Remet en question la spontanéité du libre arbitre." },
      { terme: 'Principe de Mill', definition: "'Le seul but légitime pour contraindre la liberté est de protéger les autres.' La liberté individuelle est souveraine tant qu'elle ne nuit pas à autrui." },
      { terme: 'Moi profond (Bergson)', definition: "La vraie liberté émerge du moi profond (dure, temporalité authentique) et non des réactions automatiques du moi superficiel formaté par les habitudes sociales." },
      { terme: 'Responsabilité absolue (Sartre)', definition: "Puisque l'homme est totalement libre, il est aussi totalement responsable — de ses actes, de sa situation, de ce qu'il fait de sa 'facticité'." },
    ],
    quiz: [
      { question: "Le compatibilisme affirme que :", options: ["Le libre arbitre est une illusion", "Liberté et déterminisme sont incompatibles", "On peut être libre même dans un monde déterminé si on agit selon ses propres raisons", "Seul Dieu est vraiment libre"], bonneReponse: 2, explication: "Le compatibilisme (Hume, Kant) distingue liberté et indéterminisme. On est libre quand on agit selon ses propres raisons sans contrainte extérieure — même si ces raisons ont elles-mêmes des causes." },
      { question: "L'impératif catégorique de Kant signifie :", options: ["Faire ce qui maximise le bonheur", "Agir selon une maxime qu'on pourrait vouloir universelle", "Obéir aux lois de l'État", "Suivre ses intuitions morales"], bonneReponse: 1, explication: "L'impératif catégorique est inconditionnel : 'Agis uniquement selon la maxime par laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle.' Il s'oppose à l'intérêt personnel (hypothétique)." },
      { question: "Isaiah Berlin distingue :", options: ["Liberté naturelle et liberté civile", "Liberté négative (absence d'obstacles) et liberté positive (capacité effective)", "Liberté individuelle et liberté collective", "Liberté intérieure et liberté extérieure"], bonneReponse: 1, explication: "Berlin : liberté négative = être libre de (absence d'interférence). Liberté positive = être libre pour (avoir les moyens d'agir). Cette distinction structure le débat entre libéralisme et social-démocratie." },
      { question: "Pour Spinoza, la liberté véritable est :", options: ["Agir selon ses passions", "L'absence de toute causalité", "Comprendre les causes qui nous déterminent pour passer de la passivité à l'activité", "Obéir à Dieu"], bonneReponse: 2, explication: "Spinoza est déterministe mais propose une liberté authentique : comprendre ce qui nous détermine. On passe de la 'servitude' (guidé par les passions/causes externes ignorées) à la liberté (guidé par la raison qui comprend la nécessité)." },
      { question: "Sartre affirme que l'homme est 'condamné à être libre'. Cela signifie :", options: ["La liberté est une punition divine", "Même dans les situations les plus contraintes, on reste toujours libre de faire quelque chose de sa situation", "La liberté finit par la mort", "On est libre seulement si on le mérite"], bonneReponse: 1, explication: "Pour Sartre, la liberté est constitutive de la conscience humaine. Même le prisonnier reste libre dans l'attitude qu'il adopte face à sa prison. Ne pas choisir est encore un choix. La responsabilité est totale." },
    ],
    texteTrous: {
      paragraphe: "Le [compatibilisme] affirme que liberté et [déterminisme] sont compatibles. Kant fonde la liberté sur l'[autonomie] : se donner à soi-même sa propre loi. Son [impératif catégorique] demande d'agir selon une maxime [universalisable]. Berlin distingue liberté [négative] (absence d'obstacles) et [positive] (capacité effective). Spinoza voit la liberté dans la compréhension de nos [causes]. Sartre affirme que l'homme est [condamné] à être libre.",
      banqueMots: ['compatibilisme', 'déterminisme', 'autonomie', 'impératif catégorique', 'universalisable', 'négative', 'positive', 'causes', 'condamné']
    }
  },
  {
    id: 'verite',
    titre: 'La vérité',
    description: 'Vérité et opinion, critères de vérité, Platon, Descartes, Nietzsche, relativisme et post-vérité.',
    cours: {
      sections: [
        {
          titre: "Qu'est-ce que la vérité ?",
          contenu: [
            "La vérité est traditionnellement définie comme l'adéquation entre une proposition et la réalité (vérité-correspondance). 'Il pleut' est vrai si et seulement s'il pleut effectivement.",
            "Platon distingue opinion (doxa) et savoir (épistémè). L'opinion porte sur le monde sensible changeant ; le savoir porte sur les idées éternelles et immuables. L'allégorie de la caverne illustre ce passage de l'illusion à la vérité.",
            "Descartes (Règles pour la direction de l'esprit, Méditations) cherche un critère de vérité : l'évidence — ce qui est clair et distinct à l'esprit. Le cogito est la première vérité indubitable qui sert de fondation.",
            "La vérité-cohérence : une proposition est vraie si elle est cohérente avec l'ensemble du système (mathématiques, logique). La vérité-pragmatique (William James) : est vrai ce qui est utile, ce qui 'fonctionne' dans la pratique.",
            "Points clés : 1) Vérité-correspondance = adéquation à la réalité. 2) Vérité-cohérence = cohérence interne du système. 3) Relativisme = la vérité dépend du point de vue — position à nuancer. 4) La méthode scientifique vise l'objectivité mais reste historiquement et socialement située."
          ]
        },
        {
          titre: 'Vérité, science et méthode',
          contenu: [
            "La méthode scientifique vise à établir des vérités objectives et universelles. Elle repose sur l'observation, l'expérimentation, la vérification et la réfutation (Popper : une théorie est scientifique si elle est falsifiable).",
            "Popper (La logique de la découverte scientifique, 1934) : on ne peut jamais vérifier définitivement une théorie (on ne peut pas observer tous les cygnes pour affirmer 'tous les cygnes sont blancs'), mais on peut la réfuter (un seul cygne noir suffit). La science progresse par réfutations.",
            "Kuhn (La Structure des révolutions scientifiques, 1962) : la science ne progresse pas linéairement mais par 'changements de paradigme' — des révolutions où un cadre conceptuel entier est remplacé. Copernic, Newton, Einstein sont des exemples.",
            "La vérité scientifique est provisoire : toute théorie peut être réfutée. Mais cela ne signifie pas que 'tout se vaut' (relativisme). Certaines théories sont mieux corroborées, plus cohérentes, plus prédictives que d'autres.",
            "La démarcation science/non-science : l'astrologie, la créationnisme, l'homéopathie ne sont pas falsifiables (ou leurs prédictions ont été réfutées). Le critère de Popper distingue la science de la pseudo-science."
          ]
        },
        {
          titre: 'Nietzsche et la critique de la vérité',
          contenu: [
            "Nietzsche (Le Gai Savoir, Par-delà bien et mal) remet radicalement en question l'idée de vérité objective. Il n'y a pas de 'faits', seulement des interprétations. La vérité est une 'armée mobile de métaphores' que nous prenons pour des réalités.",
            "La généalogie de la vérité : Nietzsche demande qui a intérêt à poser telle chose comme 'vraie'. La vérité est liée à des rapports de pouvoir (volonté de puissance). Les 'vérités' morales et religieuses sont des inventions des 'faibles' pour dominer les 'forts'.",
            "La mort de Dieu entraîne la mort de la Vérité absolue : sans fondement transcendant, il n'y a plus de point de vue absolu depuis lequel juger. Toute vérité est une perspective parmi d'autres (perspectivisme).",
            "Le perspectivisme nietzschéen ne conduit pas au nihilisme mais à la création : puisqu'il n'y a pas de vérité absolue, il faut créer de nouvelles valeurs, affirmer la vie dans sa pluralité et sa puissance.",
            "L'influence de Nietzsche : Foucault (Les Mots et les Choses) développe une 'archéologie du savoir' qui montre comment les 'vérités' d'une époque sont liées à des configurations de pouvoir historiquement situées."
          ]
        },
        {
          titre: 'Relativisme, post-vérité et désinformation',
          contenu: [
            "Le relativisme affirme que la vérité dépend du point de vue, de la culture ou de l'individu. Il existe différents degrés : relativisme culturel (les valeurs varient selon les cultures) et relativisme épistémique (la vérité elle-même est relative).",
            "Critique du relativisme radical (Protagoras : 'L'homme est la mesure de toutes choses') : si tout est relatif, alors la thèse relativiste est elle-même relative — elle ne peut pas être absolument vraie. Le relativisme radical se contredit.",
            "La post-vérité (concept contemporain) désigne un contexte où les faits objectifs ont moins d'influence sur l'opinion publique que les appels aux émotions et aux croyances personnelles. Les 'faits alternatifs', fake news et théories du complot en sont des manifestations.",
            "Les réseaux sociaux amplifient la désinformation : les algorithmes créent des 'chambres d'écho' où les utilisateurs ne voient que ce qui confirme leurs croyances (biais de confirmation). La vitesse de diffusion dépasse la capacité de vérification.",
            "La défense de la vérité : l'esprit critique, le fact-checking, l'éducation aux médias sont des réponses. La vérité n'est pas relative mais elle exige un effort — méthode, doute, vérification. Le scepticisme est une posture intellectuellement honnête."
          ]
        },
        {
          titre: 'Vérité et langage',
          contenu: [
            "Le tournant linguistique en philosophie (XXe siècle) : la vérité n'est pas une relation directe entre l'esprit et la réalité mais est médiatisée par le langage. Les propositions sont vraies ou fausses, pas les pensées ou les perceptions.",
            "Wittgenstein (Tractatus) : la structure logique du langage reflète la structure du monde. Ce dont on ne peut parler, il faut le taire. Les propositions métaphysiques ('Dieu existe') ne sont ni vraies ni fausses mais sans sens.",
            "La pragmatique du langage (Austin, Searle) : certains énoncés ne décrivent pas une réalité mais accomplissent une action ('Je vous déclare mari et femme' — acte de langage performatif). La vérité s'applique aux énoncés constatatifs.",
            "La vérité en histoire : comment établir la vérité des événements passés ? L'historien travaille à partir de traces (documents, témoignages, archives). Il reconstruit une interprétation corroborée par les sources, non une 'vérité absolue'.",
            "La sincérité et la vérité : mentir implique de dire le contraire de ce qu'on croit vrai. Mais la 'vérité' que je dis peut être fausse si mes croyances sont erronées. La sincérité (dire ce qu'on croit) ≠ véracité (dire ce qui est vrai)."
          ]
        }
      ]
    },
    flashcards: [
      { terme: 'Vérité-correspondance', definition: "Une proposition est vraie si elle correspond à la réalité. Définition classique : adéquation entre l'intellect et la chose (adequatio intellectus et rei)." },
      { terme: 'Doxa / Épistémè (Platon)', definition: "Doxa = opinion (sur le monde sensible changeant). Épistémè = savoir véritable (sur les idées éternelles). L'allégorie de la caverne illustre ce passage." },
      { terme: 'Évidence cartésienne', definition: "Critère de vérité chez Descartes : est vrai ce qui est clair et distinct à l'esprit. Le cogito est la première évidence indubitable." },
      { terme: 'Falsifiabilité (Popper)', definition: "Critère de scientificité : une théorie est scientifique si elle peut être réfutée par l'expérience. La science progresse par réfutations, non par vérifications." },
      { terme: 'Changement de paradigme (Kuhn)', definition: "La science avance par révolutions (Copernic, Newton, Einstein) qui remplacent un cadre conceptuel entier, non par accumulation linéaire." },
      { terme: 'Perspectivisme (Nietzsche)', definition: "Il n'y a pas de faits, seulement des interprétations. Toute vérité est une perspective parmi d'autres, liée à une volonté de puissance." },
      { terme: 'Post-vérité', definition: "Contexte où les faits objectifs influencent moins l'opinion que les émotions et croyances personnelles. Lié aux fake news et aux réseaux sociaux." },
      { terme: 'Relativisme épistémique', definition: "La vérité dépend du point de vue ou de la culture. Critique : le relativisme radical se contredit (la thèse relativiste serait elle-même relative)." },
      { terme: 'Chambres d\'écho', definition: "Phénomène où les algorithmes des réseaux sociaux n'exposent les utilisateurs qu'à des contenus confirmant leurs croyances (biais de confirmation)." },
      { terme: 'Généalogie (Nietzsche/Foucault)', definition: "Méthode qui demande : qui a intérêt à poser cela comme vrai ? La vérité est liée à des rapports de pouvoir et à des configurations historiques." },
      { terme: 'Vérité-pragmatique (James)', definition: "Est vrai ce qui est utile, ce qui 'fonctionne' dans la pratique. Définition issue du pragmatisme américain (Peirce, James, Dewey)." },
      { terme: 'Vérité-cohérence', definition: "Une proposition est vraie si elle est cohérente avec l'ensemble du système de propositions (mathématiques, logique formelle)." },
      { terme: 'Fait alternatif', definition: "Expression apparue en 2017 pour désigner une affirmation présentée comme factuelle mais contredite par les faits vérifiables. Symptôme de la post-vérité." },
      { terme: 'Scepticisme', definition: "Attitude intellectuelle qui suspend le jugement faute de certitude suffisante. Distinguer le scepticisme radical (Pyrrhon) et le doute méthodique (Descartes)." },
      { terme: 'Allégorie de la caverne (Platon)', definition: "Les prisonniers prennent les ombres pour la réalité. Le philosophe sort de la caverne et accède au soleil (Bien, Vérité). Illustre le passage de l'opinion au savoir." },
    ],
    quiz: [
      { question: "La falsifiabilité selon Popper est :", options: ["La capacité d'être prouvé vrai", "Le fait qu'une théorie puisse être réfutée par l'expérience — critère de scientificité", "La tendance des scientifiques à se tromper", "La possibilité de falsifier les données"], bonneReponse: 1, explication: "Popper : une théorie est scientifique si et seulement si elle peut être réfutée par l'expérience. L'astrologie et la psychanalyse freudienne classique ne sont pas falsifiables — elles peuvent toujours être interprétées pour coller aux faits." },
      { question: "Le perspectivisme de Nietzsche signifie :", options: ["La vérité dépend de la perspective géographique", "Il n'y a pas de faits, seulement des interprétations liées à des perspectives", "La vérité absolue existe mais on ne peut y accéder", "Les scientifiques ont raison sur tout"], bonneReponse: 1, explication: "Nietzsche : toute vérité est une perspective parmi d'autres, liée à une volonté de puissance. Il n'y a pas de 'vue de nulle part' — toute connaissance est située, partielle, intéressée." },
      { question: "La 'post-vérité' désigne :", options: ["La vérité révélée après la mort", "Un contexte où émotions et croyances influencent plus que les faits vérifiables", "Les vérités scientifiques dépassées", "La vérité relative à chaque culture"], bonneReponse: 1, explication: "La post-vérité (mot de l'année Oxford 2016) : dans le débat public contemporain, les appels aux émotions, aux croyances et aux identités influencent plus l'opinion que les faits objectifs. Lié aux fake news et aux réseaux sociaux." },
      { question: "La doxa chez Platon désigne :", options: ["Le savoir véritable sur les idées", "L'opinion sur le monde sensible — instable et incertaine", "La méthode dialectique", "Le savoir des artisans"], bonneReponse: 1, explication: "La doxa (opinion) porte sur le monde sensible changeant et est instable. L'épistémè (science, savoir) porte sur les idées éternelles et immuables. La philosophie est le passage de la doxa à l'épistémè." },
      { question: "Le relativisme radical pose un problème logique car :", options: ["Il est trop difficile à comprendre", "La thèse relativiste se contredit elle-même — si tout est relatif, elle l'est aussi", "Il est condamné par la religion", "Les sciences le réfutent"], bonneReponse: 1, explication: "Le relativisme radical ('la vérité est relative à chaque individu/culture') se contredit : si toute vérité est relative, alors la thèse relativiste elle-même est relative — elle ne peut pas prétendre être absolument vraie." },
    ],
    texteTrous: {
      paragraphe: "Platon distingue la [doxa] (opinion sur le sensible) et l'[épistémè] (savoir sur les idées). Descartes cherche l'[évidence] — le clair et distinct. Popper exige la [falsifiabilité] pour distinguer science et pseudo-science. Nietzsche défend le [perspectivisme] : il n'y a pas de faits, seulement des [interprétations]. La [post-vérité] désigne un contexte où les émotions influencent plus que les [faits].",
      banqueMots: ['doxa', 'épistémè', 'évidence', 'falsifiabilité', 'perspectivisme', 'interprétations', 'post-vérité', 'faits']
    }
  },
  {
    id: 'etat',
    titre: 'L\'État',
    description: 'Légitimité du pouvoir, contrat social, Hobbes, Locke, Rousseau, État de droit, démocratie.',
    cours: {
      sections: [
        {
          titre: "L'origine et la légitimité de l'État",
          contenu: [
            "L'État est une organisation politique qui exerce un pouvoir souverain sur un territoire et une population. Il détient le monopole de la violence légitime (Max Weber) — seul l'État peut user légalement de la force.",
            "La question de la légitimité : pourquoi obéir à l'État ? Les théories du contrat social (Hobbes, Locke, Rousseau) répondent : l'État est fondé sur un accord (réel ou fictif) entre les individus.",
            "Hobbes (Léviathan, 1651) : à l'état de nature, la vie est 'solitaire, misérable, dangereuse, animale et brève' — guerre de tous contre tous. Pour sortir de cet état, les hommes transfèrent leur puissance à un souverain absolu (le Léviathan). L'obéissance est justifiée par la sécurité.",
            "Locke (Traité du gouvernement civil, 1689) : l'état de nature est relativement pacifique — les hommes ont des droits naturels (vie, liberté, propriété). L'État est fondé pour mieux protéger ces droits. Si l'État les viole, les citoyens ont le droit de résistance.",
            "Points clés : 1) L'État ≠ la société : l'État est une institution politique, la société est l'ensemble des relations sociales. 2) Légitimité ≠ légalité : un État peut être légal mais illégitime (régime injuste). 3) Le monopole de la violence légitime (Weber) définit l'État. 4) Les théories du contrat social fondent l'autorité sur le consentement."
          ]
        },
        {
          titre: 'Rousseau et la volonté générale',
          contenu: [
            "Rousseau (Du Contrat social, 1762) : l'homme naît libre mais est partout dans les fers. La société a corrompu l'homme naturellement bon. Le contrat social légitime cherche à concilier liberté et vie en société.",
            "La volonté générale : distincte de la 'volonté de tous' (somme des volontés particulières), elle vise le bien commun. Les lois légitimes expriment la volonté générale — en leur obéissant, chaque citoyen n'obéit qu'à lui-même.",
            "La démocratie directe : Rousseau refuse la représentation — déléguer sa volonté à des représentants, c'est aliéner sa liberté. 'Le peuple anglais se croit libre ; il se trompe fort, il ne l'est que durant l'élection des membres du parlement.'",
            "La tension chez Rousseau : la volonté générale peut être imposée contre la volonté particulière — 'contraindre à être libre'. Cette formule a été interprétée comme ouvrant la voie au totalitarisme (Berlin critique ce point).",
            "L'héritage de Rousseau est immense : la Révolution française se réclame de lui, l'idée de souveraineté populaire, de laïcité, d'éducation civique lui doivent beaucoup."
          ]
        },
        {
          titre: "L'État de droit et la démocratie",
          contenu: [
            "L'État de droit est un État dans lequel le pouvoir politique est soumis au droit — les dirigeants eux-mêmes doivent respecter la loi. Il implique la séparation des pouvoirs (Montesquieu), l'indépendance de la justice, les droits fondamentaux.",
            "Montesquieu (De l'Esprit des lois, 1748) : la séparation des pouvoirs législatif, exécutif et judiciaire est la garantie contre la tyrannie. 'C'est une expérience éternelle que tout homme qui a du pouvoir est porté à en abuser.'",
            "La démocratie libérale : régime qui combine suffrage universel (démocratie) et protection des droits individuels (libéralisme). La majorité ne peut pas tout — certains droits sont soustraits au vote (Constitution, droits fondamentaux).",
            "La démocratie représentative vs directe : dans les démocraties modernes, les citoyens élisent des représentants. Critique : confiscation du pouvoir par les élites, déconnexion entre représentants et représentés. La démocratie participative et délibérative cherchent à y remédier.",
            "Les crises de la démocratie contemporaine : populisme (appel au 'peuple' contre les 'élites'), désinformation, abstention électorale, montée des régimes illibéraux. La démocratie n'est pas un état stable mais une conquête permanente."
          ]
        },
        {
          titre: 'Justice sociale et rôle de l\'État',
          contenu: [
            "Rawls (Théorie de la justice, 1971) : derrière un 'voile d'ignorance' (sans savoir quelle place on occupera dans la société), quels principes de justice choisirions-nous ? Réponse : égalité des libertés fondamentales + principe de différence (les inégalités ne sont justifiées que si elles bénéficient aux plus défavorisés).",
            "Le libéralisme économique (Nozick) critique l'État redistributeur : si les transferts de richesse violent les droits de propriété (acquis légitimement), ils sont injustes. L'État minimal (protection des droits et contrats) est le seul État légitime.",
            "L'État-providence : au XXe siècle, l'État développe des fonctions sociales (santé, éducation, retraite, chômage). Ce modèle est débattu : efficacité, financement, responsabilité individuelle vs solidarité collective.",
            "La question de l'État mondial : face aux défis globaux (changement climatique, pandémies, criminalité transnationale), les États nationaux semblent insuffisants. Kant avait proposé une 'fédération de peuples' — l'ONU en est une réalisation imparfaite.",
            "Anarchisme vs étatisme : les anarchistes (Bakounine, Kropotkine) contestent la légitimité de tout État, vu comme instrument d'oppression. L'étatisme défend au contraire l'État fort comme condition de l'ordre social. Ce débat traverse l'histoire politique."
          ]
        },
        {
          titre: 'Résistance à l\'oppression et désobéissance civile',
          contenu: [
            "Le droit de résistance : quand l'État devient tyrannique, les citoyens ont-ils le droit de lui résister ? Locke affirme que si l'État viole les droits naturels, le peuple peut le renverser. La Déclaration d'indépendance américaine (1776) s'en réclame.",
            "La Déclaration des droits de l'homme de 1789 consacre 'le droit de résistance à l'oppression' comme droit naturel et imprescriptible.",
            "La désobéissance civile (Thoreau, Gandhi, King) : refus public, non-violent, d'obéir à une loi injuste dans une société globalement juste. Elle s'adresse au sens de la justice de la majorité et accepte les conséquences légales.",
            "La légalité vs la légitimité : il peut y avoir des lois légales mais illégitimes (les lois ségrégationnistes aux États-Unis, les lois nazies). La désobéissance civile pose la question : à quelle loi doit-on obéissance — la loi positive ou la loi morale ?",
            "L'État contemporain face aux libertés numériques : surveillance de masse (révélations Snowden), régulation d'internet, données personnelles. La tension entre sécurité nationale et libertés individuelles redéfinit le rapport entre État et citoyens."
          ]
        }
      ]
    },
    flashcards: [
      { terme: "Monopole de la violence légitime (Weber)", definition: "L'État est la seule institution autorisée à user légalement de la force sur son territoire. C'est ce qui le distingue des autres organisations." },
      { terme: "État de nature (Hobbes)", definition: "'Guerre de tous contre tous' — vie solitaire, misérable, dangereuse. L'absence d'État mène à un conflit permanent. Justifie le contrat social." },
      { terme: "Léviathan (Hobbes)", definition: "Souverain absolu auquel les individus transfèrent leur puissance pour obtenir sécurité et paix. L'obéissance au Léviathan est justifiée par la protection qu'il offre." },
      { terme: "Droits naturels (Locke)", definition: "Droits que tout homme possède à l'état de nature : vie, liberté, propriété. L'État est fondé pour les protéger. S'il les viole, les citoyens peuvent résister." },
      { terme: "Volonté générale (Rousseau)", definition: "Volonté orientée vers le bien commun, distincte de la 'volonté de tous' (somme des intérêts particuliers). Fondement de la loi légitime." },
      { terme: "Séparation des pouvoirs (Montesquieu)", definition: "Division entre pouvoir législatif, exécutif et judiciaire. Garantie contre la tyrannie : 'tout homme qui a du pouvoir est porté à en abuser'." },
      { terme: "État de droit", definition: "État dans lequel le pouvoir politique est soumis au droit. Les dirigeants eux-mêmes doivent respecter la loi. Oppose à l'arbitraire." },
      { terme: "Démocratie libérale", definition: "Régime combinant suffrage universel et protection des droits individuels. La majorité ne peut pas tout — certains droits sont soustraits au vote." },
      { terme: "Voile d'ignorance (Rawls)", definition: "Expérience de pensée : choisir les principes de justice sans savoir quelle place on occupera dans la société. Garantit l'impartialité." },
      { terme: "Principe de différence (Rawls)", definition: "Les inégalités ne sont justifiées que si elles améliorent la situation des plus défavorisés. Fonde la redistribution dans un cadre libéral." },
      { terme: "État minimal (Nozick)", definition: "L'État ne doit protéger que les droits et contrats. Toute redistribution forcée viole le droit de propriété. Critique de l'État-providence." },
      { terme: "Désobéissance civile", definition: "Refus public, non-violent, délibéré d'obéir à une loi injuste dans une société globalement juste, en acceptant les conséquences légales (Thoreau, Gandhi, King)." },
      { terme: "Légalité vs légitimité", definition: "Une loi peut être légale (conforme au droit positif) sans être légitime (moralement justifiée). Ex : lois ségrégationnistes légales mais illégitimes." },
      { terme: "Populisme", definition: "Discours politique opposant le 'peuple vertueux' aux 'élites corrompues'. Peut menacer les contre-pouvoirs et droits des minorités tout en se réclamant de la démocratie." },
      { terme: "Contrat social", definition: "Accord (réel ou fictif) par lequel les individus quittent l'état de nature pour former une société politique régie par des lois. Base de la légitimité de l'État." },
    ],
    quiz: [
      { question: "Pour Hobbes, le Léviathan (État absolu) est justifié par :", options: ["La volonté divine", "La nécessité d'échapper à la guerre de tous contre tous de l'état de nature", "L'amour du bien commun", "La supériorité intellectuelle des souverains"], bonneReponse: 1, explication: "Hobbes : à l'état de nature, la vie est 'solitaire, misérable, dangereuse, animale et brève'. Pour obtenir sécurité et paix, les individus transfèrent leur puissance à un souverain absolu. L'obéissance est justifiée par la protection." },
      { question: "La séparation des pouvoirs chez Montesquieu vise à :", options: ["Accélérer la prise de décision", "Prévenir la tyrannie en divisant le pouvoir entre plusieurs institutions indépendantes", "Renforcer l'autorité du monarque", "Garantir l'efficacité administrative"], bonneReponse: 1, explication: "Montesquieu : 'tout homme qui a du pouvoir est porté à en abuser.' La division entre pouvoir législatif, exécutif et judiciaire crée des contre-pouvoirs mutuels qui limitent les abus." },
      { question: "Le 'voile d'ignorance' de Rawls est :", options: ["Une métaphore de l'ignorance politique", "Une expérience de pensée où on choisit les principes de justice sans savoir sa place dans la société", "Un argument contre la démocratie", "La thèse que les politiciens ignorent les besoins des citoyens"], bonneReponse: 1, explication: "Rawls imagine qu'on choisit les principes de justice sans savoir si on sera riche ou pauvre, homme ou femme, majoritaire ou minoritaire. Ce voile d'ignorance garantit l'impartialité des choix." },
      { question: "La désobéissance civile (Thoreau, Gandhi) se caractérise par :", options: ["L'usage de la violence pour changer les lois", "Un refus public et non-violent d'obéir à une loi injuste en acceptant les conséquences légales", "Le refus de participer aux élections", "L'exil à l'étranger pour protester"], bonneReponse: 1, explication: "La désobéissance civile est délibérée, publique (elle témoigne), non-violente (elle respecte l'adversaire) et accepte les conséquences légales (montrant qu'on respecte l'État de droit en général, juste pas cette loi particulière)." },
      { question: "Locke affirme que si l'État viole les droits naturels des citoyens :", options: ["Il faut l'accepter par devoir d'obéissance", "Les citoyens ont le droit de lui résister", "Seul Dieu peut le sanctionner", "Les citoyens doivent fuir vers un autre pays"], bonneReponse: 1, explication: "Pour Locke, l'État est fondé pour protéger les droits naturels (vie, liberté, propriété). Si l'État les viole, il trahit sa mission et les citoyens retrouvent leur droit de résistance — argument qui a inspiré les révolutions américaine et française." },
    ],
    texteTrous: {
      paragraphe: "Hobbes justifie le [Léviathan] par la nécessité d'échapper à la [guerre] de tous contre tous. Locke fonde l'État sur la protection des [droits naturels]. Rousseau distingue volonté [générale] et volonté de tous. Montesquieu préconise la [séparation] des pouvoirs. Rawls choisit les principes de justice derrière un [voile d'ignorance]. Weber définit l'État par le monopole de la [violence] légitime.",
      banqueMots: ['Léviathan', 'guerre', 'droits naturels', 'générale', 'séparation', 'voile d\'ignorance', 'violence']
    }
  },
  {
    id: 'bonheur',
    titre: 'Le bonheur',
    description: 'Eudaimonia, hédonisme, stoïcisme, épicurisme, bonheur et morale, sens de la vie.',
    cours: {
      sections: [
        {
          titre: 'Qu\'est-ce que le bonheur ?',
          contenu: [
            "Le bonheur est l'état de satisfaction complète et durable que tout être humain recherche. Aristote affirme que le bonheur (eudaimonia) est la fin ultime de toute action — tout ce qu'on fait, on le fait en vue du bonheur.",
            "La diversité des conceptions : hédonisme (le bonheur = plaisir), eudémonisme (le bonheur = épanouissement, vie bonne), stoïcisme (le bonheur = vertu et maîtrise de soi), épicurisme (le bonheur = ataraxie, absence de trouble).",
            "Le paradoxe du bonheur : chercher directement le bonheur l'éloigne. Mill observe que les seules personnes heureuses sont celles qui ont l'esprit fixé sur autre chose que leur propre bonheur (une cause, un art, une relation) — le bonheur vient par surcroît.",
            "Bonheur et plaisir : le bonheur n'est pas une somme de plaisirs instantanés. L'expérience de la 'machine à expériences' (Nozick) : si une machine pouvait vous faire vivre toutes les expériences heureuses que vous souhaitez sans que ce soit réel, la brancheriez-vous ? La plupart disent non — ce qui montre que le bonheur exige la réalité, pas seulement l'expérience.",
            "Points clés : 1) Bonheur ≠ plaisir : le bonheur est durable, le plaisir est fugace. 2) Bonheur ≠ chance/fortune : on peut être dans des conditions favorables sans être heureux. 3) Le bonheur est à la fois individuel et social : il dépend des autres et de la société. 4) Le bonheur se construit, il n'est pas donné."
          ]
        },
        {
          titre: 'Épicure : le plaisir comme chemin vers la paix',
          contenu: [
            "Épicure (Lettre à Ménécée) : le plaisir est le principe et la fin de la vie heureuse. Mais attention — le plaisir épicurien n'est pas la débauche. 'Quand nous disons que le plaisir est le but de la vie, nous ne voulons pas parler des plaisirs des débauchés.'",
            "Épicure distingue les désirs naturels et nécessaires (manger simplement, boire, s'abriter — à satisfaire), les désirs naturels non nécessaires (manger des mets raffinés — à modérer) et les désirs ni naturels ni nécessaires (gloire, richesse — à supprimer car ils ne peuvent jamais être satisfaits).",
            "L'ataraxie (absence de trouble de l'âme) et l'aponie (absence de douleur du corps) constituent le bonheur épicurien. C'est un bonheur de retrait et de paix, non d'excitation et de passion.",
            "Les conditions du bonheur épicurien : l'amitié (bien suprême), la philosophie (médecine de l'âme), la vie retirée du monde politique, le calcul des plaisirs (préférer le plaisir durable au plaisir intense qui engendre la douleur).",
            "La mort selon Épicure : 'La mort n'est rien pour nous.' Quand nous sommes là, la mort n'est pas encore là ; quand elle est là, nous n'y sommes plus. La craindre est absurde et empoisonne la vie."
          ]
        },
        {
          titre: 'Les Stoïciens : bonheur et vertu',
          contenu: [
            "Les Stoïciens (Zénon, Épictète, Marc Aurèle, Sénèque) : le bonheur réside dans la vertu seule. Les biens extérieurs (richesse, santé, réputation) sont des 'préférables' (indifférents en termes de bonheur).",
            "La distinction fondamentale d'Épictète (Manuel) : 'Ce qui dépend de nous' (nos jugements, désirs, aversions, impulsions) et 'ce qui ne dépend pas de nous' (corps, richesse, réputation, commandements). Le bonheur consiste à se concentrer sur la première catégorie.",
            "Marc Aurèle (Pensées pour moi-même) : philosophie comme exercice spirituel quotidien. Accepter ce qu'on ne peut changer, s'améliorer soi-même, servir la communauté humaine — telle est la sagesse stoïcienne.",
            "La vertu stoïcienne est le seul vrai bien : courage, sagesse, justice, tempérance. Celui qui possède la vertu est heureux même au fond du tonneau de Régulus. Résilience face aux adversités.",
            "Le stoïcisme contemporain : le mouvement 'modern stoicism' applique les pratiques stoïciennes (journaling, méditation négative — visualiser le pire) comme thérapie pour le stress et l'anxiété. Influence sur les TCC (thérapies cognitivo-comportementales)."
          ]
        },
        {
          titre: 'Aristote et l\'éudémonisme',
          contenu: [
            "Aristote (Éthique à Nicomaque) : l'eudaimonia est la fin ultime de toute action humaine. Elle n'est pas un état mais une activité — activité de l'âme en accord avec la vertu.",
            "L'eudaimonia aristotélicienne est pluridimensionnelle : elle requiert des biens extérieurs (santé, amis, un minimum de ressources), des biens du corps et des biens de l'âme (vertus). On ne peut être pleinement heureux dans la misère.",
            "La théorie des vertus : chaque vertu est un juste milieu entre deux excès (courage entre lâcheté et témérité, générosité entre avarice et prodigalité). Les vertus s'acquièrent par l'habitude — on devient courageux en faisant des actes courageux.",
            "L'amitié (philia) est essentielle au bonheur chez Aristote : 'L'homme est un animal politique' — il ne peut s'épanouir que dans la communauté avec d'autres. L'amitié vertueuse (pas seulement utile ou agréable) est la plus haute forme.",
            "Le bonheur comme contemplation : le bonheur le plus parfait est la vie contemplative (theoría) — l'exercice de l'intellect dans la recherche de la vérité. C'est la forme d'activité la plus proche du divin."
          ]
        },
        {
          titre: 'Bonheur, morale et sens de la vie',
          contenu: [
            "Kant refuse que le bonheur soit la finalité morale : la morale exige d'agir par devoir, indépendamment de ce qui nous rend heureux. Mais Kant n'est pas hostile au bonheur — il espère que la vertu sera récompensée (postulat de l'immortalité et de Dieu).",
            "La psychologie positive (Seligman, Csikszentmihalyi) tente de mesurer scientifiquement le bonheur et ses conditions. Les facteurs identifiés : relations sociales, sens (contribuer à quelque chose de plus grand), compétence, autonomie.",
            "Le 'flow' (Csikszentmihalyi) : état optimal d'engagement intense dans une activité challenging mais maîtrisable. Ni trop facile (ennui), ni trop difficile (anxiété). Le flow produit du bonheur intrinsèque.",
            "Viktor Frankl (Man's Search for Meaning) : le bonheur ne se cherche pas directement — il est le résultat d'une vie pourvue de sens. Même dans les conditions extrêmes (camps nazis), ceux qui trouvaient un sens survivaient mieux psychologiquement.",
            "Le bonheur collectif : peut-on mesurer le bonheur d'une société ? Le Bhoutan mesure le 'Bonheur National Brut' plutôt que le PIB. L'économie du bonheur (Layard) montre que au-delà d'un certain revenu, augmenter la richesse n'augmente pas le bonheur."
          ]
        }
      ]
    },
    flashcards: [
      { terme: "Eudaimonia (Aristote)", definition: "Bonheur comme épanouissement et activité de l'âme en accord avec la vertu. Fin ultime de toute action humaine. Requiert vertus, amis et conditions matérielles minimales." },
      { terme: "Ataraxie (Épicure)", definition: "Absence de trouble de l'âme — tranquillité profonde. Avec l'aponie (absence de douleur du corps), constitue le bonheur épicurien." },
      { terme: "Aponie (Épicure)", definition: "Absence de douleur physique. Avec l'ataraxie (absence de trouble de l'âme), constitue le double idéal du bonheur épicurien." },
      { terme: "Désirs naturels et nécessaires", definition: "Épicure : désirs simples à satisfaire (manger, boire). Les désirs ni naturels ni nécessaires (gloire, richesse) sont source de souffrance car insatiables." },
      { terme: "Ce qui dépend de nous (Épictète)", definition: "Nos jugements, désirs, aversions, impulsions. Seul ce domaine est vraiment en notre pouvoir. Le bonheur stoïcien = maîtriser ce domaine." },
      { terme: "Vertu comme juste milieu (Aristote)", definition: "Chaque vertu est un juste milieu entre deux vices : le courage entre lâcheté et témérité. Les vertus s'acquièrent par l'habitude." },
      { terme: "Paradoxe du bonheur (Mill)", definition: "Les seules personnes heureuses sont celles dont l'esprit est fixé sur autre chose que leur propre bonheur. Chercher directement le bonheur l'éloigne." },
      { terme: "Machine à expériences (Nozick)", definition: "Expérience de pensée : si une machine pouvait simuler toutes les expériences heureuses, la brancheriez-vous ? La plupart disent non — le bonheur exige la réalité." },
      { terme: "Flow (Csikszentmihalyi)", definition: "État optimal d'engagement intense dans une activité challenging mais maîtrisable. Ni ennui ni anxiété — produit du bonheur intrinsèque." },
      { terme: "Kant et le bonheur", definition: "Le bonheur n'est pas la finalité morale. La morale exige d'agir par devoir. Mais la 'vertu méritante le bonheur' est l'idéal du souverain bien." },
      { terme: "Viktor Frankl et le sens", definition: "Le bonheur ne se cherche pas directement — il résulte d'une vie pourvue de sens. Même dans les camps nazis, le sens permettait de survivre psychologiquement." },
      { terme: "Bonheur national brut (Bhoutan)", definition: "Indicateur alternatif au PIB mesurant le bonheur collectif de la population selon des dimensions (gouvernance, environnement, culture, bien-être psychologique)." },
      { terme: "Hédonisme", definition: "Le plaisir est le bien suprême et la finalité de la vie. Distinguer hédonisme raffiné (Épicure) et hédonisme vulgaire (recherche des plaisirs intenses et immédiats)." },
      { terme: "Stoïcisme contemporain", definition: "Application moderne des pratiques stoïciennes (journaling, méditation négative, memento mori) comme outils de résilience et de gestion du stress." },
      { terme: "Amitié (philia, Aristote)", definition: "Condition essentielle du bonheur. L'amitié vertueuse (basée sur la vertu mutuelle) est la plus haute. 'L'homme est un animal politique' — il ne peut s'épanouir seul." },
    ],
    quiz: [
      { question: "L'ataraxie épicurienne désigne :", options: ["Le plaisir intense et immédiat", "L'absence de trouble de l'âme — tranquillité profonde", "La vertu morale", "L'union avec Dieu"], bonneReponse: 1, explication: "L'ataraxie (absence de trouble) et l'aponie (absence de douleur) constituent le double idéal épicurien. C'est un bonheur de paix et de retrait, non d'excitation — obtenu en satisfaisant les désirs simples et en cultivant l'amitié et la sagesse." },
      { question: "Pour Épictète, le bonheur stoïcien repose sur :", options: ["La richesse et la santé", "La maîtrise de ce qui dépend de nous — nos jugements et désirs", "Le plaisir sensuel", "La participation à la vie politique"], bonneReponse: 1, explication: "Épictète distingue ce qui dépend de nous (jugements, désirs, aversions) de ce qui ne dépend pas de nous (corps, richesse, réputation). Le bonheur stoïcien consiste à se concentrer sur la première catégorie et accepter la seconde." },
      { question: "L'eudaimonia aristotélicienne est :", options: ["Un plaisir fugace", "Une activité de l'âme en accord avec la vertu — épanouissement complet", "L'absence de désir", "La richesse matérielle"], bonneReponse: 1, explication: "L'eudaimonia (souvent traduit par 'bonheur' ou 'épanouissement') est chez Aristote une activité, non un état passif. Elle requiert l'exercice des vertus, l'amitié, et des conditions matérielles minimales." },
      { question: "Le 'paradoxe du bonheur' (Mill) signifie que :", options: ["Le bonheur est impossible", "Chercher directement le bonheur l'éloigne — il vient par surcroît quand on est engagé dans autre chose", "Le bonheur rend malheureux", "Seuls les philosophes sont heureux"], bonneReponse: 1, explication: "Mill observe que les personnes heureuses ont l'esprit fixé sur une cause, un art, des relations — non sur leur propre bonheur. En cherchant directement le bonheur, on ne le trouve pas ; il vient en poursuivant d'autres fins." },
      { question: "Viktor Frankl affirme que le bonheur :", options: ["S'obtient par la richesse matérielle", "Ne peut être cherché directement — il résulte d'une vie pourvue de sens", "Est impossible après un traumatisme", "Dépend uniquement des circonstances extérieures"], bonneReponse: 1, explication: "Frankl (survivant des camps nazis) : le bonheur ne se cherche pas directement. Il est un effet secondaire du sens que l'on donne à sa vie. Même dans les pires conditions, trouver un sens permet de survivre et de maintenir sa dignité." },
    ],
    texteTrous: {
      paragraphe: "Épicure vise l'[ataraxie] — absence de trouble — et l'[aponie] — absence de douleur. Aristote définit l'[eudaimonia] comme activité de l'âme selon la [vertu]. Épictète distingue ce qui [dépend] de nous de ce qui ne dépend pas de nous. Kant refuse que le bonheur soit la finalité [morale]. Frankl affirme que le bonheur vient du [sens] donné à sa vie. La machine à expériences de [Nozick] montre que le bonheur exige la réalité.",
      banqueMots: ['ataraxie', 'aponie', 'eudaimonia', 'vertu', 'dépend', 'morale', 'sens', 'Nozick']
    }
  }
];
