// ===== CHAPITRE 1 : Expression du patrimoine génétique =====

export const chapitre1 = {
  id: 'ch1',
  titre: 'Expression du patrimoine génétique',
  description: 'ADN, transcription, traduction, mutations et régulation génétique.',
  cours: {
    sections: [
      {
        titre: "De l'ADN à la protéine",
        contenu: [
          "L'information génétique est stockée dans l'ADN, une molécule double brin présente dans le noyau des cellules eucaryotes.",
          "Le dogme central de la biologie moléculaire décrit le flux d'information : ADN → ARN → Protéine.",
          "Ce processus se déroule en deux grandes étapes : la transcription et la traduction.",
          "L'ADN est organisé en chromosomes, eux-mêmes enroulés autour de protéines appelées histones. Le génome humain contient environ 3 milliards de paires de bases réparties sur 23 paires de chromosomes.",
          "Seule une petite fraction de l'ADN code pour des protéines (environ 1,5 %). Le reste contient des séquences régulatrices, des séquences non codantes et des régions dont la fonction est encore étudiée.",
          "Points clés : 1) L'ADN est le support de l'information génétique. 2) Le flux ADN → ARN → Protéine est universel chez les êtres vivants. 3) La transcription a lieu dans le noyau. 4) La traduction a lieu dans le cytoplasme. 5) Le code génétique est quasi universel (partagé par presque tous les êtres vivants). 6) Chaque gène code pour une protéine spécifique qui remplit une fonction cellulaire."
        ]
      },
      {
        titre: "La transcription",
        contenu: [
          "La transcription se déroule dans le noyau. Elle consiste à copier une portion d'ADN en ARN messager (ARNm).",
          "L'enzyme ARN polymérase lit le brin matrice d'ADN et synthétise un ARNpré-messager complémentaire.",
          "Chez les eucaryotes, l'ARNpré-m est ensuite épissé (les introns sont retirés, les exons conservés) pour donner l'ARNm mature.",
          "L'ARNm mature sort du noyau via les pores nucléaires et rejoint le cytoplasme.",
          "La transcription démarre au niveau d'une région promotrice sur l'ADN, reconnue par l'ARN polymérase. Elle se termine au niveau d'une séquence terminatrice. Un même gène peut être transcrit plusieurs fois pour produire de nombreuses copies d'ARNm.",
          "L'épissage alternatif permet à un même gène de produire plusieurs protéines différentes selon les exons conservés : c'est une source importante de diversité des protéines chez les eucaryotes."
        ]
      },
      {
        titre: "La traduction",
        contenu: [
          "La traduction se déroule dans le cytoplasme, sur les ribosomes.",
          "Les ribosomes lisent l'ARNm codon par codon (3 nucléotides = 1 codon).",
          "Chaque codon correspond à un acide aminé, selon le code génétique (quasi-universel).",
          "Les ARN de transfert (ARNt) apportent les acides aminés correspondants grâce à leur anticodon complémentaire.",
          "La chaîne d'acides aminés ainsi formée se replie pour donner une protéine fonctionnelle.",
          "Il existe 64 codons possibles pour seulement 20 acides aminés : le code génétique est donc redondant (plusieurs codons peuvent coder le même acide aminé). Trois codons sont des codons stop (UAA, UAG, UGA) qui signalent la fin de la traduction.",
          "Après leur synthèse, de nombreuses protéines subissent des modifications post-traductionnelles (ajout de sucres, coupures, repliement) qui leur confèrent leur forme et leur activité définitives."
        ]
      },
      {
        titre: "Les mutations",
        contenu: [
          "Une mutation est une modification de la séquence nucléotidique de l'ADN.",
          "Les mutations peuvent être ponctuelles (substitution, insertion, délétion d'un ou quelques nucléotides) ou chromosomiques (remaniements à grande échelle).",
          "Une mutation dans une région codante peut modifier la protéine produite : mutation faux-sens, non-sens, ou synonyme (silencieuse).",
          "Les mutations sont à l'origine de la diversité génétique, mais peuvent aussi causer des maladies génétiques.",
          "Les mutations peuvent être spontanées (erreurs lors de la réplication) ou induites par des agents mutagènes physiques (rayons UV, radiations ionisantes) ou chimiques (certains pesticides, tabac). La plupart des mutations sont réparées par des mécanismes cellulaires de réparation de l'ADN.",
          "Une mutation dans une cellule germinale (gamètes) sera transmise à la descendance ; une mutation somatique (cellule du corps) ne sera pas héritée mais peut conduire à des maladies comme le cancer si elle affecte des gènes contrôlant la division cellulaire."
        ]
      },
      {
        titre: "Régulation de l'expression génétique",
        contenu: [
          "Toutes les cellules d'un organisme contiennent le même génome, mais n'expriment pas les mêmes gènes : c'est la différenciation cellulaire.",
          "La régulation peut se faire au niveau de la transcription (facteurs de transcription), de la maturation de l'ARN, ou de la traduction.",
          "L'épigénétique désigne des modifications héritables de l'expression génique sans modification de la séquence d'ADN (méthylation, modifications des histones).",
          "Les facteurs de transcription sont des protéines qui se fixent sur l'ADN en amont des gènes et activent ou répriment leur transcription. Ils permettent à la cellule de répondre à des signaux de son environnement.",
          "La méthylation de l'ADN (ajout d'un groupement méthyl sur la cytosine) est un mécanisme épigénétique qui réprime en général la transcription du gène correspondant. Elle joue un rôle clé dans la différenciation cellulaire et dans l'empreinte parentale.",
          "L'environnement peut modifier les marques épigénétiques : stress, alimentation, exercice physique peuvent avoir des effets durables sur l'expression de certains gènes, sans modifier la séquence d'ADN."
        ]
      }
    ]
  },
  flashcards: [
    { terme: "Transcription", definition: "Processus de synthèse d'un ARN messager à partir d'un brin d'ADN, réalisé par l'ARN polymérase dans le noyau." },
    { terme: "Traduction", definition: "Processus de synthèse d'une protéine à partir de l'ARNm, réalisé par les ribosomes dans le cytoplasme." },
    { terme: "ARNm", definition: "ARN messager : copie de l'information génétique d'un gène, transportée du noyau vers le cytoplasme pour être traduite." },
    { terme: "Ribosome", definition: "Organite cellulaire (ARNr + protéines) qui lit l'ARNm et assemble les acides aminés pour former une protéine." },
    { terme: "Codon", definition: "Séquence de 3 nucléotides sur l'ARNm codant pour un acide aminé spécifique ou un signal stop/start." },
    { terme: "Anticodon", definition: "Séquence de 3 nucléotides sur l'ARNt, complémentaire du codon de l'ARNm, permettant l'appariement lors de la traduction." },
    { terme: "ARNt", definition: "ARN de transfert : molécule qui transporte un acide aminé spécifique vers le ribosome lors de la traduction." },
    { terme: "Mutation", definition: "Modification permanente de la séquence nucléotidique de l'ADN. Peut être ponctuelle ou chromosomique." },
    { terme: "Gène", definition: "Séquence d'ADN portant l'information pour synthétiser une protéine ou un ARN fonctionnel." },
    { terme: "Intron", definition: "Séquence non codante de l'ADN eucaryote, présente dans l'ARNpré-m mais éliminée lors de l'épissage." },
    { terme: "Exon", definition: "Séquence codante conservée dans l'ARNm mature après épissage de l'ARNpré-messager." },
    { terme: "Épigénétique", definition: "Modifications héritables de l'expression génique sans changement de séquence d'ADN (méthylation, acétylation des histones…)." },
  ],
  texteTrous: {
    paragraphe: "L'expression d'un gène se déroule en deux grandes étapes. D'abord, dans le [noyau], l'[ARN polymérase] copie le brin matrice d'[ADN] pour synthétiser un [ARNm]. Cette étape s'appelle la [transcription]. L'ARNm quitte ensuite le noyau pour rejoindre le [cytoplasme]. Là, les [ribosomes] lisent l'ARNm [codon] par codon. Les [ARNt] apportent les [acides aminés] correspondants, qui s'assemblent pour former une [protéine]. Cette deuxième étape s'appelle la [traduction]. Une modification de la séquence d'ADN s'appelle une [mutation].",
    banqueMots: ["noyau", "ARN polymérase", "ADN", "ARNm", "transcription", "cytoplasme", "ribosomes", "codon", "ARNt", "acides aminés", "protéine", "traduction", "mutation"]
  },
  associations: [
    { gauche: "ADN → ARNm", droite: "Transcription" },
    { gauche: "ARNm → Protéine", droite: "Traduction" },
    { gauche: "Lieu : noyau", droite: "Transcription" },
    { gauche: "Lieu : cytoplasme", droite: "Traduction" },
    { gauche: "Enzyme : ARN polymérase", droite: "Transcription" },
    { gauche: "Organite : ribosome", droite: "Traduction" },
    { gauche: "Triplet de nucléotides sur ARNm", droite: "Codon" },
    { gauche: "Triplet complémentaire sur ARNt", droite: "Anticodon" },
  ]
};

// ===== CHAPITRE 2 : Génétique et évolution =====

export const chapitre2 = {
  id: 'ch2',
  titre: 'Génétique et évolution',
  description: 'Méiose, brassages génétiques, mutations, sélection naturelle et spéciation.',
  cours: {
    sections: [
      {
        titre: "La méiose",
        contenu: [
          "La méiose est une division cellulaire spéciale qui produit des cellules haploïdes (gamètes) à partir de cellules diploïdes.",
          "Elle comprend deux divisions successives : méiose I (réductionnelle, séparation des chromosomes homologues) et méiose II (équationnelle, séparation des chromatides).",
          "Elle génère 4 cellules filles haploïdes génétiquement différentes.",
          "La méiose est à l'origine du brassage génétique, source de diversité chez les organismes à reproduction sexuée.",
          "La méiose ne se produit que dans les cellules germinales des gonades (testicules et ovaires). Elle est précédée d'une phase S de réplication de l'ADN : chaque chromosome est ainsi composé de deux chromatides identiques réunies au niveau du centromère avant la méiose.",
          "Points clés : 1) La méiose produit des gamètes haploïdes. 2) Deux divisions successives : méiose I réductionnelle, méiose II équationnelle. 3) Le crossing-over a lieu en prophase I. 4) Le brassage interchromosomique intervient en métaphase I. 5) Les quatre cellules issues de la méiose sont génétiquement toutes différentes. 6) La fécondation rétablit la diploïdie."
        ]
      },
      {
        titre: "Les brassages génétiques",
        contenu: [
          "Le brassage intrachromosomique est dû aux crossing-overs (enjambements) entre chromosomes homologues lors de la prophase I. Il crée de nouvelles combinaisons d'allèles sur un même chromosome.",
          "Le brassage interchromosomique résulte de la répartition aléatoire des chromosomes homologues dans les cellules filles lors de la méiose I. Il dépend du nombre de paires de chromosomes.",
          "La fécondation aléatoire entre gamètes amplifie encore la diversité génétique.",
          "Pour une espèce avec n paires de chromosomes, le brassage interchromosomique peut générer 2ⁿ combinaisons différentes. Chez l'Homme (n = 23), cela donne plus de 8 millions de gamètes génétiquement différents avant même de compter les crossing-overs.",
          "Les crossing-overs se produisent en moyenne une à deux fois par chromosome et par méiose. Leur fréquence est utilisée en génétique pour établir des cartes génétiques indiquant les distances entre gènes sur un chromosome.",
          "La combinaison des brassages intra- et interchromosomiques et de la fécondation aléatoire explique pourquoi chaque être humain est génétiquement unique (à l'exception des vrais jumeaux)."
        ]
      },
      {
        titre: "Les mutations",
        contenu: [
          "Les mutations sont des modifications aléatoires et héritables du matériel génétique.",
          "Elles peuvent toucher un seul nucléotide (mutation ponctuelle) ou des segments chromosomiques entiers.",
          "Les mutations sont la principale source de nouveaux allèles dans une population.",
          "Elles peuvent être neutres, avantageuses ou délétères selon l'environnement.",
          "Une mutation non-sens introduit un codon stop prématuré, conduisant à une protéine tronquée souvent non fonctionnelle. Une mutation faux-sens remplace un acide aminé par un autre, modifiant éventuellement la forme et la fonction de la protéine (exemple : drépanocytose due à la substitution d'un seul acide aminé dans l'hémoglobine).",
          "Les mutations chromosomiques comprennent les délétions, duplications, inversions et translocations de segments. Elles peuvent modifier le dosage des gènes ou perturber leur régulation. La trisomie 21 (syndrome de Down) est due à une non-disjonction lors de la méiose, produisant un chromosome 21 supplémentaire."
        ]
      },
      {
        titre: "Sélection naturelle et dérive génétique",
        contenu: [
          "La sélection naturelle favorise la reproduction des individus portant des allèles avantageux dans un environnement donné.",
          "La dérive génétique est une variation aléatoire des fréquences alléliques d'une génération à l'autre, surtout importante dans les petites populations.",
          "Ces deux mécanismes agissent sur la fréquence des allèles dans les populations au cours du temps.",
          "La sélection naturelle peut être directionnelle (favorise un extrême phénotypique), stabilisante (favorise le phénotype moyen) ou diversifiante (favorise les extrêmes). La résistance aux antibiotiques chez les bactéries est un exemple de sélection directionnelle rapide.",
          "La dérive génétique peut entraîner la fixation d'un allèle (fréquence = 100 %) ou sa disparition (fréquence = 0 %) par simple effet du hasard. Les effets fondateur (colonisation par un petit groupe) et goulot d'étranglement (chute brutale des effectifs) sont des cas extrêmes de dérive.",
          "Sélection naturelle et dérive génétique sont complémentaires : la sélection est déterministe et orientée par l'environnement, la dérive est stochastique (aléatoire) et aveugle. Dans les petites populations, la dérive peut l'emporter sur la sélection."
        ]
      },
      {
        titre: "La spéciation",
        contenu: [
          "La spéciation est le processus de formation d'une nouvelle espèce à partir d'une population ancestrale.",
          "Elle survient généralement après une isolation géographique (spéciation allopatrique) qui empêche les échanges génétiques.",
          "L'accumulation de mutations et l'évolution indépendante des populations isolées mènent à l'isolement reproducteur.",
          "Deux populations sont considérées comme des espèces différentes si elles ne peuvent plus se reproduire entre elles pour donner des descendants fertiles.",
          "La spéciation sympatrique peut se produire sans isolation géographique, par exemple par polyploïdisation (doublement du nombre de chromosomes) chez les plantes. De nombreuses espèces végétales cultivées (blé, coton) sont issues de polyploïdisations naturelles.",
          "L'isolement reproducteur peut être pré-zygotique (empêche la fécondation : différences de comportement, de période de reproduction, d'organes reproducteurs) ou post-zygotique (l'hybride est stérile ou non viable, comme le mulet issu du croisement cheval-âne). Ces barrières s'accumulent progressivement au cours de la divergence des populations."
        ]
      }
    ]
  },
  quizQuestions: [
    {
      question: "Combien de divisions cellulaires comporte la méiose ?",
      options: ["1", "2", "3", "4"],
      bonneReponse: 1,
      explication: "La méiose comprend 2 divisions successives : la méiose I (réductionnelle) et la méiose II (équationnelle), produisant 4 cellules haploïdes."
    },
    {
      question: "Le crossing-over est responsable de quel type de brassage ?",
      options: ["Brassage interchromosomique", "Brassage intrachromosomique", "Dérive génétique", "Sélection naturelle"],
      bonneReponse: 1,
      explication: "Le crossing-over (ou enjambement) entre chromatides de chromosomes homologues produit un brassage intrachromosomique, créant de nouvelles combinaisons d'allèles sur un même chromosome."
    },
    {
      question: "Quelle est la principale source de nouveaux allèles dans une population ?",
      options: ["La sélection naturelle", "La dérive génétique", "Les mutations", "La fécondation"],
      bonneReponse: 2,
      explication: "Les mutations sont la seule source de nouveaux allèles. La sélection naturelle et la dérive génétique agissent ensuite sur la fréquence de ces allèles dans la population."
    },
    {
      question: "Dans quelle situation la dérive génétique a-t-elle le plus d'effet ?",
      options: ["Dans une grande population", "Dans une petite population", "Dans un environnement stable", "Lors de la méiose I"],
      bonneReponse: 1,
      explication: "La dérive génétique est un phénomène aléatoire dont l'effet est d'autant plus marqué que la population est petite. Dans une petite population, le hasard peut fortement modifier les fréquences alléliques."
    },
    {
      question: "La spéciation allopatrique implique :",
      options: ["Un croisement forcé entre deux espèces", "Une isolation géographique des populations", "Une augmentation de la taille de la population", "Un arrêt des mutations"],
      bonneReponse: 1,
      explication: "La spéciation allopatrique se produit quand des populations d'une même espèce sont séparées géographiquement. L'absence d'échanges génétiques et l'évolution indépendante mènent à l'isolement reproducteur et à la formation de nouvelles espèces."
    },
    {
      question: "Les cellules produites à la fin de la méiose sont :",
      options: ["Diploïdes et identiques", "Haploïdes et identiques", "Haploïdes et génétiquement différentes", "Diploïdes et génétiquement différentes"],
      bonneReponse: 2,
      explication: "La méiose produit 4 cellules haploïdes (n chromosomes), toutes génétiquement différentes grâce aux brassages intra- et interchromosomiques."
    }
  ],
  meioseStages: [
    {
      id: 1,
      nom: "Prophase I",
      description: "Les chromosomes homologues se rapprochent et forment des bivalents. Les crossing-overs se produisent entre chromatides non-sœurs : c'est le brassage intrachromosomique.",
      couleur: "#e8c4a8"
    },
    {
      id: 2,
      nom: "Métaphase I",
      description: "Les bivalents s'alignent sur la plaque équatoriale. L'orientation aléatoire des chromosomes homologues prépare le brassage interchromosomique.",
      couleur: "#b8d4ba"
    },
    {
      id: 3,
      nom: "Anaphase I",
      description: "Les chromosomes homologues (mais pas les chromatides) se séparent et migrent vers les pôles opposés. C'est la division réductionnelle.",
      couleur: "#c4d4e8"
    },
    {
      id: 4,
      nom: "Télophase I",
      description: "Deux cellules haploïdes se forment, chacune avec un chromosome de chaque paire. Les chromosomes peuvent se décondenser brièvement.",
      couleur: "#d8c4e8"
    },
    {
      id: 5,
      nom: "Méiose II",
      description: "Similaire à une mitose. Les chromatides de chaque chromosome se séparent lors de l'anaphase II, donnant 4 cellules haploïdes génétiquement uniques.",
      couleur: "#e8d4a8"
    }
  ],
  flashcards2: [
    { terme: "Méiose", definition: "Division cellulaire spéciale produisant 4 cellules haploïdes à partir d'une cellule diploïde, à l'origine des gamètes." },
    { terme: "Crossing-over", definition: "Échange de segments entre chromatides de chromosomes homologues lors de la prophase I. Source du brassage intrachromosomique." },
    { terme: "Brassage interchromosomique", definition: "Diversification génétique due à la répartition aléatoire des chromosomes homologues lors de la méiose I." },
    { terme: "Brassage intrachromosomique", definition: "Diversification génétique due aux crossing-overs entre chromatides de chromosomes homologues lors de la prophase I." },
    { terme: "Mutation", definition: "Modification aléatoire et héritable de la séquence d'ADN. Seule source de nouveaux allèles dans une population." },
    { terme: "Dérive génétique", definition: "Variation aléatoire des fréquences alléliques d'une génération à l'autre, plus marquée dans les petites populations." },
    { terme: "Sélection naturelle", definition: "Mécanisme évolutif favorisant la reproduction des individus les mieux adaptés à leur environnement, modifiant les fréquences alléliques." },
    { terme: "Spéciation", definition: "Processus de formation d'une nouvelle espèce par accumulation de différences génétiques entre populations isolées." },
  ]
};

// ===== CHAPITRE 3 : Le système immunitaire =====

export const chapitre3 = {
  id: 'ch3',
  titre: 'Le système immunitaire',
  description: "Immunité innée, immunité adaptative, lymphocytes, anticorps, vaccins et VIH.",
  cours: {
    sections: [
      {
        titre: "Les deux lignes de défense",
        contenu: [
          "L'organisme dispose de deux systèmes de défense complémentaires : l'immunité innée (non spécifique) et l'immunité adaptative (spécifique).",
          "L'immunité innée est immédiate (quelques minutes à heures) et non spécifique : elle réagit de la même façon à tous les agents pathogènes.",
          "L'immunité adaptative est plus lente (jours) mais très spécifique et dotée d'une mémoire immunologique.",
          "Ces deux systèmes ne sont pas indépendants : l'immunité innée déclenche et oriente l'immunité adaptative. Les cellules dendritiques sont la charnière entre les deux, capturant les antigènes pour les présenter aux lymphocytes.",
          "Points clés : 1) L'immunité innée est immédiate et non spécifique. 2) L'immunité adaptative est lente mais spécifique et mémorisable. 3) Les cellules dendritiques font le lien entre les deux. 4) Les plasmocytes produisent les anticorps. 5) Les LTc détruisent les cellules infectées. 6) La mémoire immunitaire est le principe de base de la vaccination."
        ]
      },
      {
        titre: "L'immunité innée",
        contenu: [
          "Elle comprend les barrières physiques (peau, muqueuses), les cellules phagocytaires (macrophages, neutrophiles) et les protéines du complément.",
          "Les macrophages englobent et détruisent les agents pathogènes par phagocytose.",
          "L'inflammation est une réaction innée locale caractérisée par rougeur, chaleur, douleur et œdème.",
          "Les cellules dendritiques font le lien entre l'immunité innée et adaptative : elles présentent les antigènes aux lymphocytes T.",
          "Les cellules phagocytaires reconnaissent les agents pathogènes grâce à des récepteurs qui détectent des motifs moléculaires caractéristiques des micro-organismes (PAMPs). Cette reconnaissance est codée génétiquement et ne nécessite pas de contact préalable avec le pathogène.",
          "Les protéines du système du complément forment une cascade d'activation qui aboutit à la lyse des bactéries et au recrutement de cellules immunitaires. Elles constituent une défense humorale non spécifique très efficace contre les bactéries à Gram négatif."
        ]
      },
      {
        titre: "Les lymphocytes B et la réponse humorale",
        contenu: [
          "Les lymphocytes B reconnaissent les antigènes via leurs récepteurs membranaires (immunoglobulines).",
          "Après activation (avec l'aide des lymphocytes T auxiliaires), ils se différencient en plasmocytes qui sécrètent des anticorps.",
          "Les anticorps (immunoglobulines) sont des protéines spécifiques qui se fixent sur l'antigène correspondant, le neutralisant ou le marquant pour la destruction.",
          "Certains lymphocytes B deviennent des cellules mémoire, permettant une réponse plus rapide et intense lors d'un second contact.",
          "La structure d'un anticorps est en forme de Y. Il possède deux régions variables (qui reconnaissent l'antigène) et une région constante (qui interagit avec d'autres cellules immunitaires). Chaque lymphocyte B produit un seul type d'anticorps, spécifique d'un épitope particulier.",
          "La sélection clonale est le mécanisme par lequel seuls les lymphocytes B portant un récepteur complémentaire de l'antigène sont activés et se multiplient (expansion clonale). Ce principe est fondamental pour comprendre comment le système immunitaire produit une réponse spécifique parmi des millions de lymphocytes différents."
        ]
      },
      {
        titre: "Les lymphocytes T et la réponse cellulaire",
        contenu: [
          "Les lymphocytes T cytotoxiques (LTc) détruisent directement les cellules infectées ou tumorales présentant l'antigène.",
          "Les lymphocytes T auxiliaires (LTa) sécrètent des cytokines qui activent les LTc et les lymphocytes B.",
          "Les lymphocytes T régulateurs contrôlent et freinent la réponse immunitaire pour éviter les dommages excessifs.",
          "Comme les lymphocytes B, certains LT deviennent des cellules mémoire.",
          "Les lymphocytes T reconnaissent les antigènes uniquement lorsqu'ils sont présentés par le Complexe Majeur d'Histocompatibilité (CMH). Le CMH-I est présent sur toutes les cellules nucléées et présente les antigènes aux LTc. Le CMH-II est présent sur les cellules présentatrices d'antigène et présente les antigènes aux LTa.",
          "Les LTc induisent la mort de la cellule cible par apoptose (mort cellulaire programmée) en libérant des molécules cytotoxiques (perforine, granzymes). Ce mécanisme est crucial pour éliminer les cellules infectées par des virus ou les cellules cancéreuses."
        ]
      },
      {
        titre: "Vaccins et mémoire immunitaire",
        contenu: [
          "La vaccination exploite la mémoire immunitaire : on introduit un antigène inoffensif (pathogène atténué, tué, ou sous-unité protéique) pour déclencher une réponse primaire.",
          "Lors d'un contact ultérieur avec le vrai pathogène, la réponse secondaire est plus rapide et plus forte grâce aux cellules mémoire.",
          "Certains vaccins nécessitent des rappels pour maintenir un niveau de protection suffisant.",
          "Les vaccins à ARNm (comme ceux contre la COVID-19) représentent une nouvelle génération vaccinale : ils introduisent dans l'organisme un ARN messager codant pour une protéine du pathogène. Les cellules du receveur synthétisent elles-mêmes la protéine antigénique, déclenchant la réponse immunitaire.",
          "L'immunité collective (ou immunité de troupeau) est atteinte quand une proportion suffisante de la population est immunisée, protégeant indirectement les personnes non vaccinées. Ce seuil varie selon le taux de contagiosité du pathogène (environ 95 % pour la rougeole, 60-70 % pour la grippe)."
        ]
      },
      {
        titre: "Le VIH et le SIDA",
        contenu: [
          "Le VIH (Virus de l'Immunodéficience Humaine) est un rétrovirus qui infecte préférentiellement les lymphocytes T auxiliaires (CD4+).",
          "Le VIH utilise la rétrotranscriptase pour convertir son ARN en ADN, qui s'intègre au génome de la cellule hôte.",
          "La destruction progressive des LT4 affaiblit le système immunitaire, conduisant au SIDA (Syndrome d'Immunodéficience Acquise).",
          "Au stade SIDA, le patient devient vulnérable aux infections opportunistes et aux cancers normalement contrôlés par le système immunitaire.",
          "L'infection par le VIH passe par trois phases : la primo-infection (syndrome grippal bref avec charge virale élevée), la phase asymptomatique (pouvant durer 10 ans, avec diminution progressive des LT4) et le stade SIDA (LT4 < 200/mm³, infections opportunistes).",
          "Les trithérapies (combinaison de trois antirétroviraux) permettent aujourd'hui de contrôler la multiplication du VIH et d'empêcher la progression vers le SIDA. Elles ne guérissent pas l'infection mais permettent aux patients de vivre normalement. Le virus peut cependant rester latent dans des réservoirs cellulaires, ce qui empêche une guérison complète."
        ]
      }
    ]
  },
  quizImmuno: [
    {
      question: "Quelle est la différence principale entre l'immunité innée et l'immunité adaptative ?",
      options: [
        "L'immunité innée est spécifique, l'adaptative est non-spécifique",
        "L'immunité innée est non-spécifique et immédiate, l'adaptative est spécifique et mémorisable",
        "L'immunité innée implique des anticorps, l'adaptative non",
        "Elles sont identiques, seule la vitesse diffère"
      ],
      bonneReponse: 1,
      explication: "L'immunité innée est immédiate et non spécifique (même réponse pour tous les pathogènes). L'immunité adaptative est plus lente mais spécifique à chaque antigène et garde une mémoire de la rencontre."
    },
    {
      question: "Quel type de cellule sécrète les anticorps ?",
      options: ["Lymphocyte T cytotoxique", "Macrophage", "Plasmocyte", "Cellule dendritique"],
      bonneReponse: 2,
      explication: "Les plasmocytes sont des lymphocytes B activés et différenciés, spécialisés dans la production et la sécrétion massive d'anticorps spécifiques de l'antigène."
    },
    {
      question: "Comment le VIH affaiblit-il le système immunitaire ?",
      options: [
        "Il détruit les globules rouges",
        "Il infecte et détruit les lymphocytes T auxiliaires (CD4+)",
        "Il bloque la production d'anticorps par les reins",
        "Il empêche la phagocytose dans le foie"
      ],
      bonneReponse: 1,
      explication: "Le VIH cible spécifiquement les lymphocytes T auxiliaires (LT4, CD4+). En les détruisant progressivement, il prive le système immunitaire de cellules coordinatrices essentielles, menant au SIDA."
    },
    {
      question: "Sur quel principe repose l'efficacité d'un vaccin ?",
      options: [
        "Il détruit directement les bactéries dans le sang",
        "Il stimule la production de cellules mémoire sans déclencher la maladie",
        "Il augmente la température corporelle pour tuer les virus",
        "Il remplace les lymphocytes défaillants"
      ],
      bonneReponse: 1,
      explication: "Un vaccin introduit un antigène inoffensif qui déclenche une réponse immunitaire primaire et la formation de cellules mémoire. Si le vrai pathogène est rencontré plus tard, la réponse secondaire est très rapide et efficace."
    },
    {
      question: "Quelle est la fonction des lymphocytes T cytotoxiques ?",
      options: [
        "Produire des anticorps",
        "Phagocyter les bactéries",
        "Détruire directement les cellules infectées",
        "Présenter les antigènes aux lymphocytes B"
      ],
      bonneReponse: 2,
      explication: "Les lymphocytes T cytotoxiques (LTc) reconnaissent et détruisent directement les cellules infectées par un virus ou les cellules tumorales qui présentent l'antigène à leur surface."
    }
  ],
  immunoSteps: [
    {
      id: 1,
      nom: "Entrée du pathogène",
      description: "Un agent pathogène (bactérie, virus…) pénètre dans l'organisme. Les barrières physiques (peau, mucus) constituent la première ligne de défense.",
      emoji: "🦠"
    },
    {
      id: 2,
      nom: "Réaction innée",
      description: "Les macrophages et neutrophiles phagocytent les agents pathogènes. L'inflammation locale se déclenche. Les cellules dendritiques capturent les antigènes.",
      emoji: "🔥"
    },
    {
      id: 3,
      nom: "Présentation des antigènes",
      description: "Les cellules dendritiques migrent vers les ganglions lymphatiques et présentent les antigènes aux lymphocytes T via le complexe majeur d'histocompatibilité (CMH).",
      emoji: "📋"
    },
    {
      id: 4,
      nom: "Activation des lymphocytes",
      description: "Les lymphocytes T et B spécifiques de l'antigène sont activés. Les LT auxiliaires sécrètent des cytokines pour amplifier la réponse. Début de la réponse adaptative.",
      emoji: "⚡"
    },
    {
      id: 5,
      nom: "Réponse humorale",
      description: "Les lymphocytes B se différencient en plasmocytes qui produisent des anticorps spécifiques. Les anticorps neutralisent ou marquent les pathogènes pour destruction.",
      emoji: "🎯"
    },
    {
      id: 6,
      nom: "Réponse cellulaire",
      description: "Les lymphocytes T cytotoxiques détruisent les cellules infectées qui présentent l'antigène à leur surface via le CMH-I.",
      emoji: "💥"
    },
    {
      id: 7,
      nom: "Mémoire immunitaire",
      description: "Des cellules mémoire longévives (LB et LT mémoire) persistent après l'infection. Lors d'un second contact, la réponse est plus rapide et plus intense.",
      emoji: "🧠"
    }
  ],
  texteTrousVaccin: {
    paragraphe: "La vaccination exploite la [mémoire] immunitaire. On introduit dans l'organisme un [antigène] inoffensif (pathogène [atténué] ou sous-unité protéique). Cela déclenche une réponse [primaire] : les [lymphocytes] B et T spécifiques sont activés, et des cellules [mémoire] se forment. Lors d'un second contact avec le vrai [pathogène], la réponse [secondaire] est beaucoup plus rapide et intense. Les [anticorps] produits neutralisent le pathogène avant qu'il ne provoque la maladie. Certains vaccins nécessitent des [rappels] pour maintenir une protection suffisante.",
    banqueMots: ["mémoire", "antigène", "atténué", "primaire", "lymphocytes", "mémoire", "pathogène", "secondaire", "anticorps", "rappels"]
  }
};

// ===== CHAPITRE 4 : De l'œil au cerveau — la vision =====

export const chapitre4 = {
  id: 'ch4',
  titre: "De l'œil au cerveau — la vision",
  description: "Photorécepteurs, voies visuelles, cortex visuel, potentiel d'action et synapse.",
  cours: {
    sections: [
      {
        titre: "La lumière et la perception visuelle",
        contenu: [
          "L'œil capte la lumière. La rétine contient deux types de photorécepteurs : cônes (vision des couleurs, lumière vive) et bâtonnets (vision nocturne, niveaux de gris).",
          "Les photorécepteurs convertissent le signal lumineux en signal électrique (potentiel d'action) via la phototransduction.",
          "La rétine compte environ 120 millions de bâtonnets et 6 millions de cônes, concentrés principalement dans la fovéa (zone de vision maximale). La fovéa ne contient que des cônes, ce qui explique pourquoi la vision des détails et des couleurs est meilleure au centre du champ visuel.",
          "Il existe trois types de cônes, sensibles respectivement au rouge, au vert et au bleu (trichromatie). La combinaison de leurs signaux permet de percevoir toutes les couleurs du spectre visible. Le daltonisme résulte de l'absence ou du dysfonctionnement d'un type de cônes.",
          "Points clés : 1) Les cônes : vision des couleurs, lumière vive, fovéa. 2) Les bâtonnets : vision nocturne, périphérie. 3) La phototransduction convertit lumière en signal électrique. 4) Le message nerveux est codé en fréquence de potentiels d'action. 5) La rétine traite déjà une partie de l'information avant de l'envoyer au cerveau. 6) L'œil forme une image inversée sur la rétine."
        ]
      },
      {
        titre: "Le nerf optique et les voies visuelles",
        contenu: [
          "Les informations visuelles sont transmises via le nerf optique au cerveau.",
          "La moitié des fibres se croisent au chiasma optique : les informations du champ visuel gauche arrivent dans l'hémisphère droit et vice versa.",
          "Les informations arrivent au cortex visuel primaire (V1) situé dans le lobe occipital.",
          "Le nerf optique est formé des axones des cellules ganglionnaires de la rétine. Il y a environ un million de fibres nerveuses dans chaque nerf optique. La tache aveugle correspond à la zone où le nerf optique quitte la rétine, sans photorécepteurs.",
          "Après le chiasma optique, les fibres se dirigent vers le corps genouillé latéral (thalamus), qui relaye les informations vers le cortex visuel. Ce parcours s'appelle les radiations optiques.",
          "Cette organisation en hémichamps visuels est importante cliniquement : une lésion du cortex visuel droit entraîne une hémianopsie gauche (cécité du champ visuel gauche dans les deux yeux)."
        ]
      },
      {
        titre: "Le traitement cortical de l'image",
        contenu: [
          "Le cortex visuel primaire (V1) traite les informations élémentaires (couleur, mouvement, contours).",
          "Des aires spécialisées traitent ensuite des aspects spécifiques : reconnaissance des visages (aire fusiforme), mouvement (aire MT).",
          "La plasticité cérébrale : le cortex visuel peut se réorganiser en cas de perte de la vision.",
          "Le traitement visuel emprunte deux voies distinctes depuis V1 : la voie ventrale (vers le lobe temporal) pour la reconnaissance des objets et des visages ('quoi'), et la voie dorsale (vers le lobe pariétal) pour la localisation dans l'espace et le guidage du mouvement ('où').",
          "La prosopagnosie (incapacité à reconnaître les visages) résulte d'une lésion de l'aire fusiforme. Ce trouble démontre la spécialisation des aires corticales visuelles.",
          "La plasticité visuelle est particulièrement marquée chez les personnes aveugles de naissance : le cortex visuel peut être recruté pour traiter des informations tactiles (lecture du braille) ou auditives, illustrant la plasticité intermodale du cerveau."
        ]
      },
      {
        titre: "Le potentiel d'action",
        contenu: [
          "Le message nerveux est codé en fréquence de potentiels d'action.",
          "Dépolarisation (entrée de Na+), repolarisation (sortie de K+), hyperpolarisation. Loi du tout ou rien.",
          "La vitesse de propagation est variable selon la myélinisation.",
          "Au repos, la face interne de la membrane neuronale est à −70 mV par rapport à l'extérieur (potentiel de repos). Si un stimulus dépasse le seuil de dépolarisation, les canaux sodiques voltage-dépendants s'ouvrent massivement : l'intérieur devient transitoirement positif (+30 mV).",
          "La myéline, gaine isolante formée par les cellules de Schwann, permet la conduction saltatoire : le potentiel d'action 'saute' de nœud de Ranvier en nœud de Ranvier, accélérant considérablement la vitesse de propagation (jusqu'à 120 m/s contre 1 m/s sans myéline). La sclérose en plaques résulte de la destruction de la myéline.",
          "La période réfractaire absolue (environ 1 ms après un potentiel d'action) empêche la sommation de deux potentiels d'action et impose une limite maximale à la fréquence de décharge neuronale. Elle assure également la propagation unidirectionnelle du message nerveux."
        ]
      },
      {
        titre: "La synapse",
        contenu: [
          "La synapse est la zone de communication entre deux neurones.",
          "Arrivée du potentiel d'action → exocytose de neurotransmetteurs → fixation sur récepteurs → nouveau potentiel d'action ou inhibition.",
          "Il existe deux types de synapses : excitatrices (le neurotransmetteur dépolarise le neurone post-synaptique, favorisant un nouveau PA) et inhibitrices (le neurotransmetteur hyperpolarise le neurone post-synaptique, s'opposant au déclenchement d'un PA). L'intégration neuronale résulte de la sommation de tous ces signaux.",
          "Les principaux neurotransmetteurs sont : l'acétylcholine (jonction neuromusculaire, système nerveux autonome), la dopamine (circuits de la récompense), la sérotonine (humeur, sommeil), le glutamate (principal excitateur du SNC) et le GABA (principal inhibiteur du SNC).",
          "De nombreuses drogues et médicaments agissent en modifiant la transmission synaptique : les antidépresseurs ISRS bloquent la recapture de la sérotonine, la morphine mime les endorphines en se fixant sur leurs récepteurs, la cocaïne bloque la recapture de la dopamine, amplifiant le signal de récompense.",
          "La potentialisation à long terme (LTP) est un renforcement durable de la transmission synaptique suite à une stimulation répétée. Elle est considérée comme le mécanisme cellulaire de base de l'apprentissage et de la mémoire."
        ]
      }
    ]
  },
  flashcards: [
    { terme: "Photorécepteur", definition: "Cellule spécialisée de la rétine (cônes et bâtonnets) capable de convertir un signal lumineux en signal électrique par phototransduction." },
    { terme: "Cônes", definition: "Photorécepteurs concentrés dans la fovéa, sensibles à la couleur et fonctionnant en lumière vive. Il en existe 3 types (rouge, vert, bleu)." },
    { terme: "Bâtonnets", definition: "Photorécepteurs très sensibles à la lumière, permettant la vision nocturne et la détection des mouvements, surtout en périphérie de la rétine." },
    { terme: "Phototransduction", definition: "Processus par lequel les photorécepteurs convertissent l'énergie lumineuse en signal électrique (potentiel d'action)." },
    { terme: "Potentiel d'action", definition: "Signal électrique bref (environ 1 ms) généré par un neurone, codant l'information nerveuse en fréquence. Obéit à la loi du tout ou rien." },
    { terme: "Nerf optique", definition: "Ensemble des axones des cellules ganglionnaires de la rétine, transmettant les informations visuelles vers le cerveau." },
    { terme: "Chiasma optique", definition: "Zone d'entrecroisement partiel des fibres optiques, où les informations du champ visuel gauche basculent vers l'hémisphère droit et vice versa." },
    { terme: "Cortex visuel (V1)", definition: "Aire corticale primaire du traitement visuel, située dans le lobe occipital. Reçoit et traite en premier les informations visuelles." },
    { terme: "Plasticité cérébrale", definition: "Capacité du cerveau à modifier ses connexions neuronales en réponse à l'expérience, à l'apprentissage ou à une lésion." },
    { terme: "Synapse", definition: "Zone de communication chimique entre deux neurones (ou entre un neurone et une cellule effectrice), impliquant des neurotransmetteurs." },
    { terme: "Neurotransmetteur", definition: "Molécule chimique libérée par la terminaison axonale lors de l'arrivée d'un potentiel d'action, se fixant sur les récepteurs du neurone post-synaptique." },
    { terme: "Myéline", definition: "Gaine lipidique entourant certains axones, formée par les cellules de Schwann. Accélère la propagation du potentiel d'action par conduction saltatoire." },
    { terme: "Dépolarisation", definition: "Phase ascendante du potentiel d'action : entrée massive de Na+ rendant l'intérieur de la cellule positif (+30 mV)." },
    { terme: "Repolarisation", definition: "Phase descendante du potentiel d'action : sortie de K+ rétablissant la polarité négative de la membrane." },
    { terme: "Loi du tout ou rien", definition: "Propriété du potentiel d'action : il se déclenche entièrement si le seuil est atteint, ou pas du tout. Son amplitude est constante." },
  ],
  quiz: [
    {
      question: "Quel type de photorécepteur permet la vision des couleurs ?",
      options: ["Les bâtonnets", "Les cônes", "Les cellules ganglionnaires", "Les cellules bipolaires"],
      bonneReponse: 1,
      explication: "Les cônes sont sensibles à la couleur et fonctionnent bien en lumière vive. Il en existe 3 types selon la longueur d'onde captée (rouge, vert, bleu)."
    },
    {
      question: "Où se trouve le cortex visuel primaire ?",
      options: ["Dans le lobe frontal", "Dans le lobe temporal", "Dans le lobe pariétal", "Dans le lobe occipital"],
      bonneReponse: 3,
      explication: "Le lobe occipital, situé à l'arrière du cerveau, contient l'aire V1 qui reçoit et traite en premier les informations visuelles."
    },
    {
      question: "Qu'est-ce que la plasticité cérébrale ?",
      options: ["La rigidité du crâne", "La capacité du cerveau à se réorganiser", "La transmission synaptique", "La vitesse de propagation nerveuse"],
      bonneReponse: 1,
      explication: "Le cerveau peut modifier ses connexions neuronales en réponse à l'expérience ou à une lésion. C'est la base de l'apprentissage."
    },
    {
      question: "Lors d'un potentiel d'action, que se passe-t-il lors de la dépolarisation ?",
      options: ["Des ions K+ entrent dans la cellule", "Des ions Na+ sortent de la cellule", "Des ions Na+ entrent dans la cellule", "Des ions Ca2+ sortent de la cellule"],
      bonneReponse: 2,
      explication: "Les canaux sodiques s'ouvrent, le Na+ entre, rendant l'intérieur de la cellule positif par rapport à l'extérieur."
    },
    {
      question: "Qu'est-ce que la loi du tout ou rien ?",
      options: ["Un potentiel d'action dont l'amplitude varie avec le stimulus", "Un potentiel d'action qui se déclenche entièrement ou pas du tout", "Une loi régissant la vision des couleurs", "Le principe de la phototransduction"],
      bonneReponse: 1,
      explication: "Si le seuil de dépolarisation est atteint, le potentiel d'action se déclenche avec une amplitude constante, quelle que soit l'intensité du stimulus."
    },
    {
      question: "Comment l'information visuelle du champ visuel gauche est-elle traitée ?",
      options: ["Par l'hémisphère gauche", "Par l'hémisphère droit", "Par les deux hémisphères simultanément", "Par le cervelet"],
      bonneReponse: 1,
      explication: "La moitié des fibres optiques se croisent au chiasma optique, ce qui fait que le champ visuel gauche est traité par le cortex droit et vice versa."
    }
  ],
  texteTrous: {
    paragraphe: "La vision commence dans l'[œil], où les [photorécepteurs] de la rétine convertissent la lumière en signal électrique. Les [cônes] permettent la vision des couleurs tandis que les [bâtonnets] assurent la vision nocturne. Le signal nerveux est transmis sous forme de [potentiel d'action] via le nerf optique jusqu'au [cortex visuel] situé dans le lobe [occipital]. La transmission entre neurones se fait au niveau de la [synapse] grâce aux [neurotransmetteurs]. La capacité du cerveau à se réorganiser s'appelle la [plasticité cérébrale].",
    banqueMots: ["œil", "photorécepteurs", "cônes", "bâtonnets", "potentiel d'action", "cortex visuel", "occipital", "synapse", "neurotransmetteurs", "plasticité cérébrale"]
  }
};

// ===== CHAPITRE 5 : Écologie et enjeux planétaires =====

export const chapitre5 = {
  id: 'ch5',
  titre: 'Écologie et enjeux planétaires',
  description: "Écosystèmes, biodiversité, cycles biogéochimiques, perturbations humaines et développement durable.",
  cours: {
    sections: [
      {
        titre: "Les écosystèmes et leurs composantes",
        contenu: [
          "Un écosystème est l'ensemble formé par un milieu de vie (biotope) et les êtres vivants qui y habitent (biocénose).",
          "Les échanges de matière et d'énergie structurent l'écosystème : producteurs primaires (autotrophes), consommateurs (hétérotrophes), décomposeurs.",
          "Les réseaux trophiques décrivent les relations alimentaires au sein d'un écosystème. Ils sont plus réalistes que les simples chaînes alimentaires, qui ne représentent qu'un seul chemin possible dans ce réseau.",
          "Le flux d'énergie dans un écosystème suit la règle des 10 % : seul environ 10 % de l'énergie d'un niveau trophique est transféré au niveau suivant (le reste est perdu sous forme de chaleur ou utilisé pour la respiration). Cette règle explique pourquoi les chaînes alimentaires sont rarement plus longues que 5 maillons.",
          "Points clés : 1) Biotope = milieu physique, biocénose = êtres vivants. 2) Les producteurs primaires sont la base de tout écosystème. 3) Les décomposeurs minéralisent la matière organique morte. 4) Le flux d'énergie est unidirectionnel (soleil → producteurs → consommateurs). 5) La matière est recyclée en permanence dans les cycles biogéochimiques. 6) Chaque espèce occupe une niche écologique spécifique."
        ]
      },
      {
        titre: "Les cycles biogéochimiques",
        contenu: [
          "Le carbone, l'azote et d'autres éléments circulent entre les compartiments de la biosphère, l'atmosphère, l'hydrosphère et la lithosphère.",
          "Le cycle du carbone est aujourd'hui perturbé par les activités humaines : combustion de fossiles, déforestation → augmentation du CO₂ atmosphérique → effet de serre additionnel.",
          "Le cycle de l'azote implique différentes bactéries spécialisées : les bactéries fixatrices d'azote (transforment N₂ atmosphérique en ammonium), les bactéries nitrifiantes et dénitrifiantes. Les engrais azotés perturbent ce cycle en provoquant l'eutrophisation des milieux aquatiques.",
          "La concentration atmosphérique de CO₂ est passée de 280 ppm à l'ère préindustrielle à plus de 420 ppm aujourd'hui, une augmentation sans précédent depuis 800 000 ans selon les analyses des carottes de glace.",
          "Les forêts et les océans sont des puits de carbone majeurs. La déforestation tropicale émet du CO₂ (décomposition et combustion de la biomasse) tout en réduisant la capacité d'absorption future. L'océan absorbe environ 25 % du CO₂ émis, mais son acidification menace les écosystèmes marins."
        ]
      },
      {
        titre: "La biodiversité",
        contenu: [
          "La biodiversité comprend la diversité des espèces, la diversité génétique au sein de chaque espèce, et la diversité des écosystèmes.",
          "Elle résulte de l'évolution et est menacée par les activités humaines (destruction des habitats, pollution, espèces invasives, surexploitation, changement climatique).",
          "La biodiversité fournit de nombreux services écosystémiques : pollinisation, épuration des eaux, régulation du climat, stockage du carbone, ressources alimentaires et médicamenteuses. La perte de biodiversité fragilise ces services dont dépend l'humanité.",
          "Le taux d'extinction actuel est estimé à 100 à 1000 fois supérieur au taux naturel de fond. Depuis 1970, les populations de vertébrés sauvages ont diminué en moyenne de 69 % selon le rapport Planète Vivante du WWF.",
          "Les points chauds de biodiversité ('hotspots') sont des zones abritant une concentration exceptionnelle d'espèces endémiques et subissant une forte pression humaine. On en recense 36 dans le monde, couvrant seulement 2,5 % de la surface terrestre mais hébergeant plus de la moitié des espèces végétales et des vertébrés."
        ]
      },
      {
        titre: "Les perturbations des écosystèmes",
        contenu: [
          "Les activités humaines modifient les écosystèmes : pollution chimique, fragmentation des habitats, changement climatique.",
          "La 6e extinction de masse est en cours, liée aux activités humaines. Les indicateurs biologiques permettent de mesurer l'état de santé des écosystèmes.",
          "La fragmentation des habitats isole les populations, réduit le flux de gènes entre elles et augmente leur vulnérabilité à la consanguinité et aux catastrophes locales. Les corridors écologiques (haies, passages à faune) permettent de restaurer la connectivité.",
          "Les espèces invasives (introduites hors de leur aire d'origine) peuvent bouleverser les écosystèmes où elles s'installent, en l'absence de prédateurs naturels. Exemples : la jussie en zones humides françaises, la perche du Nil dans le lac Victoria, le frelon asiatique en Europe.",
          "Les indicateurs biologiques comme l'IBD (Indice Biologique Diatomées) ou l'IBGN (Invertébrés Benthiques) permettent d'évaluer la qualité des milieux aquatiques. La présence ou l'absence de certaines espèces (bioindicateurs) renseigne sur le niveau de pollution d'un milieu."
        ]
      },
      {
        titre: "Le développement durable",
        contenu: [
          "Le développement durable vise à répondre aux besoins actuels sans compromettre ceux des générations futures.",
          "Il repose sur 3 piliers : économique, social, environnemental.",
          "Des solutions existent : énergies renouvelables, agriculture raisonnée, gestion durable des ressources.",
          "Le concept a été défini en 1987 par le rapport Brundtland et adopté à l'échelle internationale lors du Sommet de la Terre de Rio en 1992. Les 17 Objectifs de Développement Durable (ODD) de l'ONU (agenda 2030) en constituent le cadre actuel.",
          "Les limites planétaires (concept de Rockström et al.) définissent 9 frontières biophysiques à ne pas dépasser pour maintenir un espace sûr pour l'humanité. En 2023, 6 de ces 9 limites ont déjà été franchies, dont le changement climatique, l'érosion de la biodiversité et les perturbations des cycles de l'azote et du phosphore.",
          "La transition écologique nécessite des changements à tous les niveaux : individuel (consommation, alimentation, mobilité), collectif (politiques publiques, normes) et économique (internalisation des coûts environnementaux, économie circulaire). La responsabilité est partagée mais inégale selon les pays et les niveaux de revenus."
        ]
      }
    ]
  },
  flashcards: [
    { terme: "Écosystème", definition: "Ensemble formé par un milieu de vie (biotope) et les êtres vivants qui y habitent (biocénose), liés par des échanges de matière et d'énergie." },
    { terme: "Biotope", definition: "Milieu physique d'un écosystème, caractérisé par ses facteurs abiotiques (température, lumière, eau, sol, salinité…)." },
    { terme: "Biocénose", definition: "Ensemble des êtres vivants (animaux, végétaux, champignons, bactéries) peuplant un biotope et interagissant entre eux." },
    { terme: "Biodiversité", definition: "Diversité du vivant à trois niveaux : diversité des espèces, diversité génétique au sein des espèces, diversité des écosystèmes." },
    { terme: "Chaîne alimentaire", definition: "Suite linéaire d'organismes reliés par des relations de prédation : producteur → consommateur 1 → consommateur 2 → décomposeur." },
    { terme: "Réseau trophique", definition: "Ensemble des chaînes alimentaires interconnectées au sein d'un écosystème, représentant la réalité complexe des relations alimentaires." },
    { terme: "Producteur primaire", definition: "Organisme autotrophe (plante, algue, cyanobactérie) qui synthétise de la matière organique à partir de matière minérale par photosynthèse." },
    { terme: "Décomposeur", definition: "Organisme (bactérie, champignon) qui dégrade la matière organique morte en matière minérale, la remettant à disposition des producteurs primaires." },
    { terme: "Cycle du carbone", definition: "Circulation du carbone entre les différents compartiments (atmosphère, biosphère, hydrosphère, lithosphère). Perturbé par les activités humaines." },
    { terme: "Effet de serre", definition: "Phénomène naturel par lequel certains gaz (CO₂, CH₄, H₂O) retiennent la chaleur dans l'atmosphère. L'effet de serre additionnel est dû aux émissions humaines." },
    { terme: "Extinction de masse", definition: "Disparition rapide d'une large fraction des espèces vivantes. La 6e extinction de masse est en cours, causée par les activités humaines." },
    { terme: "Développement durable", definition: "Mode de développement répondant aux besoins du présent sans compromettre ceux des générations futures, reposant sur 3 piliers : économique, social, environnemental." },
  ],
  quiz: [
    {
      question: "Qu'est-ce que la biocénose ?",
      options: ["Le milieu physique d'un écosystème", "L'ensemble des êtres vivants d'un écosystème", "Les relations alimentaires entre espèces", "L'ensemble des facteurs abiotiques"],
      bonneReponse: 1,
      explication: "La biocénose désigne toute la communauté d'organismes vivants (animaux, végétaux, champignons, bactéries) qui peuplent un biotope donné."
    },
    {
      question: "Quel est le rôle des producteurs primaires ?",
      options: ["Ils décomposent la matière organique morte", "Ils synthétisent de la matière organique à partir de matière minérale", "Ils consomment d'autres animaux", "Ils régulent la température de l'écosystème"],
      bonneReponse: 1,
      explication: "Les producteurs primaires (plantes, algues, cyanobactéries) réalisent la photosynthèse et constituent la base des chaînes alimentaires."
    },
    {
      question: "Pourquoi la biodiversité est-elle menacée ?",
      options: ["Par l'évolution naturelle uniquement", "Par la destruction des habitats, la pollution et le changement climatique", "Par les maladies uniquement", "Par le vieillissement des espèces"],
      bonneReponse: 1,
      explication: "Les activités humaines fragmentent les habitats, polluent les milieux et accélèrent le changement climatique, réduisant ainsi l'espace vital et les ressources des espèces."
    },
    {
      question: "Qu'est-ce que l'effet de serre additionnel ?",
      options: ["L'effet de serre naturel indispensable à la vie", "L'augmentation de l'effet de serre naturel due aux émissions humaines de CO₂", "La disparition de l'effet de serre", "Un phénomène uniquement dû aux éruptions volcaniques"],
      bonneReponse: 1,
      explication: "L'effet de serre est naturel et indispensable à la vie. L'excès de CO₂ et de méthane produit par les activités humaines amplifie cet effet, entraînant un réchauffement climatique."
    },
    {
      question: "Sur quels piliers repose le développement durable ?",
      options: ["Politique, militaire et économique", "Économique, social et environnemental", "Industriel, agricole et technologique", "National, européen et mondial"],
      bonneReponse: 1,
      explication: "Le développement durable cherche un équilibre entre croissance économique, équité sociale et préservation de l'environnement pour les générations futures."
    }
  ],
  texteTrous: {
    paragraphe: "Un [écosystème] est formé par un [biotope] (milieu physique) et une [biocénose] (ensemble des êtres vivants). Les végétaux sont des [producteurs primaires] : ils fabriquent de la matière organique par [photosynthèse]. Les animaux sont des [consommateurs] et les bactéries jouent le rôle de [décomposeurs]. Le [cycle du carbone] est perturbé par les activités humaines, augmentant l'[effet de serre] et entraînant un [réchauffement climatique]. La perte de [biodiversité] est une menace majeure pour l'équilibre des écosystèmes.",
    banqueMots: ["écosystème", "biotope", "biocénose", "producteurs primaires", "photosynthèse", "consommateurs", "décomposeurs", "cycle du carbone", "effet de serre", "réchauffement climatique", "biodiversité"]
  }
};


// ===== CHAPITRE 6 : Procréation et sexualité humaine =====
export const chapitre6 = {
  id: 'ch6',
  titre: 'Procréation et sexualité humaine',
  description: 'Hormones, cycle menstruel, fécondation, contraception et procréation médicalement assistée.',
  cours: {
    sections: [
      {
        titre: 'Hormones et système reproducteur',
        contenu: [
          "La reproduction humaine est contrôlée par l'axe hypothalamo-hypophysaire. L'hypothalamus sécrète la GnRH, qui stimule l'hypophyse à produire la FSH et la LH (gonadotrophines).",
          "Chez l'homme, la FSH stimule la spermatogenèse dans les testicules, et la LH stimule la sécrétion de testostérone par les cellules de Leydig. La testostérone exerce une rétroaction négative sur l'axe hypothalamo-hypophysaire.",
          "Chez la femme, FSH et LH contrôlent le cycle ovarien et la production d'œstrogènes et de progestérone. Ces hormones agissent en retour sur l'hypothalamus et l'hypophyse (rétroaction).",
          "La spermatogenèse est continue chez l'homme adulte : des millions de spermatozoïdes sont produits chaque jour. L'ovogenèse, elle, est cyclique : un seul ovocyte est libéré par cycle.",
          "Points clés : 1) L'axe hypothalamo-hypophysaire régule les gonades. 2) FSH et LH sont les gonadotrophines. 3) La testostérone est l'androgène principal. 4) Œstrogènes et progestérone sont les hormones ovariennes. 5) La rétroaction négative régule l'axe. 6) La spermatogenèse est continue, l'ovogenèse est cyclique."
        ]
      },
      {
        titre: 'Le cycle menstruel',
        contenu: [
          "Le cycle menstruel dure en moyenne 28 jours. Il est coordonné par les variations des taux de FSH, LH, œstrogènes et progestérone.",
          "Phase folliculaire (j1–j14) : la FSH stimule la croissance de follicules ovariens. Le follicule dominant sécrète des œstrogènes qui épaississent l'endomètre et stimulent le pic de LH.",
          "Ovulation (j14) : le pic de LH déclenche la rupture du follicule dominant et la libération de l'ovocyte II. L'ovocyte est fertile pendant environ 24 heures.",
          "Phase lutéale (j14–j28) : le follicule rompu se transforme en corps jaune, qui sécrète progestérone et œstrogènes. Ces hormones maintiennent l'endomètre en vue d'une nidation.",
          "Si aucune fécondation ne survient, le corps jaune dégénère, les taux hormonaux chutent et l'endomètre se détache : ce sont les règles (menstruations). Si la fécondation a lieu, l'hCG maintient le corps jaune actif."
        ]
      },
      {
        titre: 'Fécondation et développement précoce',
        contenu: [
          "La fécondation a lieu dans la trompe de Fallope. Un spermatozoïde pénètre l'ovocyte II, qui achève sa méiose II. Le zygote (2n) est formé.",
          "Le zygote se divise par mitoses successives (segmentation) en progressant vers l'utérus. À J4–J5, il atteint le stade blastocyste (cavité + trophoblaste + masse cellulaire interne).",
          "La nidation a lieu vers J7 : le blastocyste s'implante dans l'endomètre. Le trophoblaste sécrète l'hCG, qui maintient le corps jaune actif et donc la grossesse.",
          "L'hCG est détectée dans les urines par les tests de grossesse dès 10 jours après la fécondation. Son taux augmente rapidement jusqu'à la 10e semaine.",
          "Le développement embryonnaire suit les stades : zygote → morula → blastocyste → gastrula → organogenèse. Les trois feuillets (ectoderme, mésoderme, endoderme) donnent tous les organes."
        ]
      },
      {
        titre: 'Contraception',
        contenu: [
          "La contraception permet de prévenir une grossesse non désirée. Les méthodes agissent à des étapes différentes : blocage de l'ovulation, empêchement de la fécondation ou de la nidation.",
          "La pilule combinée (œstrogènes + progestérone de synthèse) bloque l'ovulation par rétroaction négative sur l'axe hypothalamo-hypophysaire. Elle épaissit aussi la glaire cervicale.",
          "Le stérilet (DIU) peut être en cuivre (effet spermicide, empêche la fécondation et la nidation) ou hormonal (libère de la progestérone localement, épaissit la glaire cervicale).",
          "La contraception d'urgence (pilule du lendemain) contient du lévonorgestrel à forte dose. Elle bloque ou retarde l'ovulation si prise dans les 72 heures suivant un rapport non protégé.",
          "Le préservatif est la seule méthode contraceptive protégeant également contre les infections sexuellement transmissibles (IST). Son efficacité dépend d'une utilisation correcte et systématique."
        ]
      },
      {
        titre: 'Procréation médicalement assistée (PMA)',
        contenu: [
          "La PMA regroupe les techniques médicales permettant à des couples ayant des difficultés à concevoir d'avoir des enfants. Elle est encadrée par la loi de bioéthique.",
          "L'insémination artificielle consiste à déposer des spermatozoïdes directement dans l'utérus au moment de l'ovulation, naturelle ou induite.",
          "La fécondation in vitro (FIV) : des ovocytes sont prélevés après stimulation ovarienne, fécondés en laboratoire, et les embryons obtenus sont transférés dans l'utérus.",
          "L'ICSI (injection intra-cytoplasmique de spermatozoïde) est une variante de la FIV où un seul spermatozoïde est injecté directement dans l'ovocyte. Elle est indiquée en cas d'infertilité masculine sévère.",
          "La PMA soulève des questions éthiques importantes : statut des embryons surnuméraires, congélation des embryons, don de gamètes, gestation pour autrui (GPA). Ces questions relèvent de la bioéthique et des lois de chaque pays."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Spermatogenèse', definition: 'Production continue de spermatozoïdes dans les testicules, sous contrôle de la FSH et de la testostérone.' },
    { terme: 'Ovogenèse', definition: "Production cyclique d'ovules dans les ovaires. Un seul ovocyte est libéré par cycle." },
    { terme: 'FSH', definition: "Hormone folliculo-stimulante (hypophyse). Stimule la croissance folliculaire chez la femme et la spermatogenèse chez l'homme." },
    { terme: 'LH', definition: "Hormone lutéinisante (hypophyse). Déclenche l'ovulation chez la femme (pic au j14) et stimule la testostérone chez l'homme." },
    { terme: 'Ovulation', definition: "Libération d'un ovocyte II par le follicule dominant, déclenchée par le pic de LH vers le 14e jour du cycle." },
    { terme: 'Corps jaune', definition: "Structure formée après l'ovulation. Sécrète progestérone et œstrogènes pour maintenir l'endomètre." },
    { terme: 'Fécondation', definition: "Fusion d'un spermatozoïde et d'un ovocyte II dans la trompe de Fallope, formant le zygote (2n)." },
    { terme: 'Nidation', definition: "Implantation du blastocyste dans l'endomètre utérin, vers le 7e jour après la fécondation." },
    { terme: 'hCG', definition: "Hormone chorionique gonadotrophine, sécrétée dès la nidation. Maintient le corps jaune et est détectée par les tests de grossesse." },
    { terme: 'Pilule combinée', definition: "Contraceptif hormonal combinant œstrogènes et progestérone de synthèse. Bloque l'ovulation par rétroaction négative sur l'axe hypothalamo-hypophysaire." },
    { terme: 'DIU', definition: "Dispositif intra-utérin (stérilet). En cuivre : spermicide. Hormonal : libère de la progestérone localement." },
    { terme: 'FIV', definition: "Fécondation in vitro : ovocytes fécondés en laboratoire après stimulation ovarienne, puis transfert embryonnaire." },
    { terme: 'Endomètre', definition: "Muqueuse utérine qui s'épaissit sous l'effet des œstrogènes et se détache lors des menstruations." },
    { terme: 'Blastocyste', definition: "Stade embryonnaire à J4–J5, composé d'un trophoblaste et d'une masse cellulaire interne, qui s'implante dans l'endomètre." },
    { terme: 'Rétroaction négative', definition: "Mécanisme de régulation : les hormones produites par les gonades inhibent la sécrétion de GnRH, FSH et LH." },
  ],
  quiz: [
    { question: "Quelle hormone déclenche l'ovulation ?", options: ['FSH', 'Œstradiol', 'LH', 'Progestérone'], bonneReponse: 2, explication: "Le pic de LH au 14e jour du cycle déclenche la rupture du follicule dominant et la libération de l'ovocyte." },
    { question: "Où a lieu la fécondation ?", options: ["Dans l'utérus", "Dans le vagin", "Dans la trompe de Fallope", "Dans l'ovaire"], bonneReponse: 2, explication: "La fécondation a lieu dans la trompe de Fallope, où l'ovocyte libéré peut rencontrer un spermatozoïde." },
    { question: "Quelle hormone est détectée par les tests de grossesse ?", options: ['Progestérone', 'hCG', 'FSH', 'LH'], bonneReponse: 1, explication: "L'hCG est sécrétée dès la nidation par le trophoblaste. Son taux augmente rapidement et est détectable dans les urines." },
    { question: "Comment agit la pilule contraceptive combinée ?", options: ["Elle détruit les spermatozoïdes", "Elle bloque l'ovulation par rétroaction négative", "Elle empêche uniquement la nidation", "Elle épaissit uniquement la glaire cervicale"], bonneReponse: 1, explication: "Les hormones de synthèse exercent une rétroaction négative sur l'axe hypothalamo-hypophysaire, bloquant FSH et LH, donc l'ovulation." },
    { question: "Qu'est-ce que la FIV ?", options: ["Une contraception hormonale", "Une fécondation en laboratoire", "Un test de grossesse", "Un traitement antibiotique"], bonneReponse: 1, explication: "La FIV consiste à féconder des ovocytes en laboratoire après stimulation ovarienne, puis à transférer les embryons dans l'utérus." },
  ],
  texteTrous: {
    paragraphe: "Le cycle menstruel est contrôlé par l'[axe hypothalamo-hypophysaire]. La [FSH] stimule la croissance du follicule qui sécrète des [œstrogènes]. Le pic de [LH] déclenche l'[ovulation] vers le 14e jour. Le follicule se transforme en [corps jaune] qui produit de la [progestérone]. En l'absence de fécondation, les [menstruations] surviennent. En cas de grossesse, l'[hCG] maintient le corps jaune. La [nidation] correspond à l'implantation du [blastocyste] dans l'[endomètre].",
    banqueMots: ["axe hypothalamo-hypophysaire", "FSH", "œstrogènes", "LH", "ovulation", "corps jaune", "progestérone", "menstruations", "hCG", "nidation", "blastocyste", "endomètre"]
  }
};

// ===== CHAPITRE 7 : Glycémie et diabète =====
export const chapitre7 = {
  id: 'ch7',
  titre: 'Glycémie et diabète',
  description: 'Régulation de la glycémie, rôle du pancréas et du foie, diabète de type 1 et 2.',
  cours: {
    sections: [
      {
        titre: "La glycémie et l'homéostasie",
        contenu: [
          "La glycémie est la concentration en glucose dans le sang. Sa valeur normale à jeun est de 1 g/L (5,5 mmol/L). Le glucose est la principale source d'énergie des cellules, en particulier des neurones qui en dépendent exclusivement.",
          "L'homéostasie glycémique est le maintien de la glycémie dans une plage étroite (0,7–1,1 g/L) malgré des apports et des dépenses variables. Ce mécanisme évite l'hypoglycémie (insuffisance de glucose) et l'hyperglycémie chronique, toutes deux nocives.",
          "La régulation de la glycémie est un exemple de régulation par boucle de rétroaction négative : une variation de la glycémie est détectée par les cellules des îlots de Langerhans, qui déclenchent la sécrétion d'insuline ou de glucagon pour ramener la glycémie à la normale.",
          "Après un repas riche en glucides, la glycémie monte (phase post-prandiale) : le pancréas sécrète de l'insuline. À jeun ou lors d'un effort physique, la glycémie baisse : le pancréas sécrète du glucagon pour la faire remonter.",
          "Les organes effecteurs principaux sont le foie, les muscles et le tissu adipeux. Le foie est central car il peut stocker du glucose sous forme de glycogène et en libérer selon les besoins.",
          "Points clés : 1) Glycémie normale = 1 g/L. 2) Hypoglycémie < 0,7 g/L, hyperglycémie > 1,1 g/L. 3) Régulation par rétroaction négative. 4) Les deux hormones sont l'insuline (hypoglycémiante) et le glucagon (hyperglycémiant). 5) Le foie est l'organe effecteur central. 6) Les neurones dépendent exclusivement du glucose."
        ]
      },
      {
        titre: 'Le pancréas endocrine : insuline et glucagon',
        contenu: [
          "Le pancréas est une glande mixte : exocrine (suc pancréatique pour la digestion) et endocrine (hormones). La partie endocrine est constituée des îlots de Langerhans, amas de cellules dispersées dans le pancréas.",
          "Les îlots de Langerhans contiennent deux types de cellules hormonales principales : les cellules α (alpha) qui sécrètent le glucagon, et les cellules β (bêta) qui sécrètent l'insuline.",
          "L'insuline est une hormone peptidique sécrétée par les cellules β en réponse à une élévation de la glycémie. Elle favorise l'entrée du glucose dans les cellules, stimule la glycogénogenèse hépatique et musculaire, et inhibe la glycogénolyse.",
          "Le glucagon est sécrété par les cellules α en réponse à une baisse de la glycémie. Il stimule la glycogénolyse (dégradation du glycogène hépatique) et la néoglucogenèse. Il s'oppose à l'action de l'insuline.",
          "Insuline et glucagon agissent en antagonisme : quand l'une est élevée, l'autre est basse. Ce système permet une régulation fine et rapide selon les besoins de l'organisme.",
          "Points clés : 1) Cellules α → glucagon (hyperglycémiant). 2) Cellules β → insuline (hypoglycémiante). 3) Insuline : entrée du glucose + glycogénogenèse. 4) Glucagon : glycogénolyse + néoglucogenèse. 5) Insuline et glucagon sont antagonistes. 6) La sécrétion est déclenchée par la glycémie elle-même (rétroaction)."
        ]
      },
      {
        titre: 'Le rôle central du foie',
        contenu: [
          "Le foie est l'organe effecteur central de la régulation glycémique. Il agit comme un tampon en stockant le glucose en période d'abondance et en le libérant lors des périodes de jeûne ou d'effort.",
          "La glycogénogenèse est la synthèse de glycogène (polymère de glucose) à partir du glucose sanguin, stimulée par l'insuline. Le foie peut stocker jusqu'à 100–150 g de glycogène. Les muscles stockent aussi du glycogène mais ne peuvent pas le libérer dans le sang.",
          "La glycogénolyse est la dégradation du glycogène hépatique en glucose, stimulée par le glucagon. Elle libère du glucose dans le sang pendant le jeûne ou l'effort.",
          "La néoglucogenèse est la synthèse de novo de glucose à partir de substrats non glucidiques : acides aminés, glycérol (issu des triglycérides), lactate. Elle intervient lors d'un jeûne prolongé, quand les réserves de glycogène sont épuisées.",
          "La lipogenèse est la conversion de l'excès de glucose en acides gras stockés dans le tissu adipeux, activée par l'insuline. À l'inverse, la lipolyse est stimulée par le glucagon en situation de jeûne.",
          "Points clés : 1) Glycogénogenèse = stockage de glucose (insuline). 2) Glycogénolyse = libération de glucose (glucagon). 3) Néoglucogenèse = fabrication de glucose à partir de non-glucides. 4) Seul le foie peut libérer du glucose dans le sang. 5) Lipogenèse = conversion glucose→graisse (insuline). 6) Le foie est le seul organe glucoformateur."
        ]
      },
      {
        titre: 'Diabète de type 1 : une maladie auto-immune',
        contenu: [
          "Le diabète de type 1 (DT1) est une maladie auto-immune dans laquelle les lymphocytes T cytotoxiques s'attaquent aux cellules β des îlots de Langerhans et les détruisent progressivement. Il en résulte une absence totale ou quasi-totale d'insuline.",
          "Sans insuline, le glucose ne peut entrer dans les cellules : la glycémie monte dangereusement (hyperglycémie sévère). L'organisme, privé de glucose cellulaire, mobilise les graisses et les protéines, produisant des corps cétoniques (acidocétose diabétique — urgence médicale).",
          "Le DT1 touche souvent des enfants et jeunes adultes (anciennement 'diabète juvénile'). Son origine implique une prédisposition génétique (gènes HLA) et des facteurs déclencheurs environnementaux (infection virale, microbiote intestinal).",
          "Le DT1 est un exemple classique de maladie auto-immune : le 'soi' (cellules β) est reconnu comme 'non-soi' par le système immunitaire, qui le détruit par erreur. Cela illustre un dérèglement de la tolérance immunitaire.",
          "Le traitement est l'insulinothérapie : injections pluriquotidiennes d'insuline (stylo, pompe à insuline) pour remplacer ce que le pancréas ne peut plus produire. La surveillance de la glycémie est indispensable.",
          "Points clés : 1) DT1 = destruction auto-immune des cellules β. 2) Conséquence : absence d'insuline. 3) Touche surtout les jeunes. 4) Symptômes : soif intense, polyurie, fatigue, perte de poids. 5) Traitement : insulinothérapie. 6) Complications chroniques : rétinopathie, néphropathie, neuropathie diabétique."
        ]
      },
      {
        titre: 'Diabète de type 2 : résistance à l\'insuline',
        contenu: [
          "Le diabète de type 2 (DT2) est caractérisé par une résistance à l'insuline : les cellules cibles (foie, muscles, tissu adipeux) répondent de moins en moins bien à l'insuline. Pour compenser, le pancréas sécrète davantage d'insuline, jusqu'à s'épuiser.",
          "Le DT2 est une maladie multifactorielle impliquant des facteurs génétiques et environnementaux : obésité, sédentarité, alimentation riche en glucides à index glycémique élevé, stress. Il touche principalement des adultes, mais est en progression chez les jeunes.",
          "L'hyperglycémie chronique du DT2 est souvent silencieuse pendant des années. Elle entraîne des complications vasculaires : microangiopathies (rétinopathie, néphropathie, neuropathie) et macroangiopathies (infarctus du myocarde, AVC).",
          "Le traitement du DT2 repose d'abord sur des mesures hygiéno-diététiques : activité physique régulière, alimentation équilibrée, perte de poids. Ces mesures peuvent suffire aux stades précoces. Ensuite, des médicaments oraux sont utilisés (metformine). Aux stades avancés, l'insulinothérapie peut devenir nécessaire.",
          "La différence fondamentale avec le DT1 : dans le DT2, l'insuline est présente (au moins au début) mais inefficace. Dans le DT1, l'insuline est absente. Les deux types peuvent aboutir aux mêmes complications chroniques par l'hyperglycémie.",
          "Points clés : 1) DT2 = résistance à l'insuline puis déficit de sécrétion. 2) Facteurs : obésité, sédentarité, hérédité. 3) DT2 ≠ DT1 : mécanisme et traitement initial différents. 4) Traitement : hygiène de vie d'abord, puis médicaments. 5) Complications vasculaires identiques aux deux types. 6) Épidémie mondiale : 400 millions de personnes touchées."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Glycémie', definition: 'Concentration de glucose dans le sang. Valeur normale à jeun : 1 g/L (5,5 mmol/L).' },
    { terme: 'Insuline', definition: "Hormone hypoglycémiante sécrétée par les cellules β du pancréas. Favorise l'entrée du glucose dans les cellules et la glycogénogenèse." },
    { terme: 'Glucagon', definition: 'Hormone hyperglycémiante sécrétée par les cellules α du pancréas. Stimule la glycogénolyse et la néoglucogenèse hépatiques.' },
    { terme: 'Cellules β', definition: "Cellules des îlots de Langerhans qui sécrètent l'insuline en réponse à une hyperglycémie." },
    { terme: 'Cellules α', definition: "Cellules des îlots de Langerhans qui sécrètent le glucagon en réponse à une hypoglycémie." },
    { terme: 'Îlots de Langerhans', definition: 'Amas de cellules endocrines dans le pancréas, regroupant les cellules α, β et δ. Régulent la glycémie par la sécrétion hormonale.' },
    { terme: 'Glycogénogenèse', definition: "Synthèse de glycogène à partir du glucose, dans le foie et les muscles. Stimulée par l'insuline." },
    { terme: 'Glycogénolyse', definition: 'Dégradation du glycogène hépatique en glucose libéré dans le sang. Stimulée par le glucagon en cas de jeûne.' },
    { terme: 'Néoglucogenèse', definition: 'Synthèse de glucose à partir de substrats non glucidiques (acides aminés, glycérol). Se produit dans le foie lors du jeûne prolongé.' },
    { terme: 'Diabète de type 1', definition: "Maladie auto-immune : destruction des cellules β par les lymphocytes T. Absence d'insuline. Traitement : insulinothérapie." },
    { terme: 'Diabète de type 2', definition: "Résistance des cellules cibles à l'insuline, puis déficit de sécrétion. Lié à l'obésité et la sédentarité. Traitement : hygiène de vie puis médicaments." },
    { terme: 'Hyperglycémie', definition: 'Glycémie supérieure à 1,1 g/L. Signe du diabète ; entraîne des complications vasculaires si chronique.' },
    { terme: 'Hypoglycémie', definition: 'Glycémie inférieure à 0,7 g/L. Provoque des tremblements, sueurs, confusion, voire coma si sévère.' },
    { terme: "Résistance à l'insuline", definition: "Diminution de la réponse des cellules cibles à l'insuline. Mécanisme central du diabète de type 2." },
    { terme: 'Homéostasie', definition: "Maintien des paramètres internes (glycémie, température…) dans des valeurs stables malgré les variations extérieures." },
  ],
  quiz: [
    { question: 'Quelle hormone fait baisser la glycémie ?', options: ['Glucagon', 'Insuline', 'Adrénaline', 'Cortisol'], bonneReponse: 1, explication: "L'insuline, sécrétée par les cellules β, favorise l'entrée du glucose dans les cellules et la glycogénogenèse, ce qui fait baisser la glycémie." },
    { question: 'Quelle est la valeur normale de la glycémie à jeun ?', options: ['0,5 g/L', '1 g/L', '2 g/L', '1,5 g/L'], bonneReponse: 1, explication: "La glycémie normale à jeun est d'environ 1 g/L (5,5 mmol/L). En dessous de 0,7 g/L c'est une hypoglycémie, au-dessus de 1,1 g/L une hyperglycémie." },
    { question: 'Le diabète de type 1 est causé par :', options: ["Une résistance à l'insuline", 'Une destruction auto-immune des cellules β', 'Un excès de glucagon', 'Une alimentation trop sucrée'], bonneReponse: 1, explication: "Le DT1 est une maladie auto-immune où les lymphocytes T détruisent les cellules β du pancréas, entraînant une absence d'insuline." },
    { question: 'Quel processus hépatique libère du glucose dans le sang lors du jeûne ?', options: ['Glycogénogenèse', 'Lipogenèse', 'Glycogénolyse', 'Protéosynthèse'], bonneReponse: 2, explication: "La glycogénolyse est la dégradation du glycogène hépatique en glucose, stimulée par le glucagon, qui maintient la glycémie pendant le jeûne." },
    { question: 'Quel est le traitement de base du diabète de type 2 ?', options: ['Insulinothérapie immédiate', 'Greffe du pancréas', 'Activité physique et alimentation équilibrée', 'Antibiotiques'], bonneReponse: 2, explication: "Le DT2 se traite d'abord par des mesures hygiéno-diététiques (exercice, alimentation saine, perte de poids). Des médicaments oraux (metformine) peuvent être ajoutés." },
  ],
  texteTrous: {
    paragraphe: "La [glycémie] est régulée par deux hormones antagonistes sécrétées par le [pancréas]. Après un repas, les cellules [β] sécrètent de l'[insuline], qui favorise la [glycogénogenèse] dans le foie. En cas de jeûne, les cellules [α] sécrètent du [glucagon], qui stimule la [glycogénolyse] hépatique. Le [diabète de type 1] résulte d'une destruction auto-immune des cellules β, tandis que le [diabète de type 2] est dû à une résistance à l'insuline.",
    banqueMots: ['glycémie', 'pancréas', 'β', 'insuline', 'glycogénogenèse', 'α', 'glucagon', 'glycogénolyse', 'diabète de type 1', 'diabète de type 2']
  }
};

// ===== CHAPITRE 8 : Les plantes à fleurs =====

export const chapitre8 = {
  id: 'ch8',
  titre: 'Les plantes à fleurs',
  description: 'Organisation, photosynthèse et reproduction des angiospermes.',
  cours: {
    sections: [
      {
        titre: "Organisation générale d'une plante à fleurs",
        contenu: [
          "Les angiospermes (plantes à fleurs) sont les végétaux les plus diversifiés de la planète, avec plus de 300 000 espèces répertoriées. Elles se caractérisent par la présence de fleurs et de fruits qui protègent les graines.",
          "Le plan d'organisation d'une plante à fleurs comprend deux parties principales : la partie aérienne (pousse) formée de la tige, des feuilles et des fleurs, et la partie souterraine constituée des racines. Ces deux systèmes sont en continuité vasculaire.",
          "Les racines assurent l'ancrage dans le sol et l'absorption d'eau et de sels minéraux. Elles portent des poils absorbants qui augmentent considérablement la surface d'échange. Les racines pivotantes (carotte) s'enfoncent en profondeur, les racines fasciculées (graminées) forment un réseau superficiel dense.",
          "La tige assure le soutien et le transport de la sève. Elle contient deux types de vaisseaux conducteurs : le xylème (sève brute, montante : eau + minéraux) et le phloème (sève élaborée, descendante : sucres issus de la photosynthèse). Ces deux tissus forment des faisceaux libéro-ligneux.",
          "Les feuilles sont les organes de la photosynthèse. Elles présentent un limbe aplati, traversé par des nervures (prolongements des vaisseaux conducteurs), et recouvert d'une épiderme percée de stomates. Les stomates permettent les échanges gazeux (CO₂, O₂, vapeur d'eau) et leur fermeture régule la transpiration.",
          "Points clés : 1) Les angiospermes ont des fleurs et des fruits. 2) Deux systèmes : racines (absorption) et pousse (photosynthèse + reproduction). 3) Xylème = sève brute montante. 4) Phloème = sève élaborée descendante. 5) Les stomates régulent les échanges gazeux. 6) Les poils absorbants augmentent la surface racinaire."
        ]
      },
      {
        titre: "La photosynthèse : capter et convertir l'énergie lumineuse",
        contenu: [
          "La photosynthèse est le processus par lequel les végétaux convertissent l'énergie lumineuse en énergie chimique stockée dans des molécules organiques. Elle se déroule dans les chloroplastes, organites présents dans les cellules des feuilles.",
          "La chlorophylle est le pigment principal de la photosynthèse. Elle absorbe principalement les longueurs d'onde rouge (650–700 nm) et bleue (400–500 nm) de la lumière, réfléchissant le vert (d'où la couleur des feuilles). Elle est localisée dans les membranes des thylakoïdes, empilées en grana à l'intérieur du chloroplaste.",
          "La phase lumineuse se déroule dans les membranes des thylakoïdes. L'énergie lumineuse captée par la chlorophylle est utilisée pour photolyser l'eau : H₂O → ½ O₂ + 2H⁺ + 2e⁻. Cette réaction libère l'O₂ qui est rejeté dans l'atmosphère. L'énergie est stockée sous forme d'ATP et de NADPH.",
          "Le cycle de Calvin (phase sombre) se déroule dans le stroma du chloroplaste. Il utilise l'ATP et le NADPH produits lors de la phase lumineuse pour réduire le CO₂ atmosphérique en glucoses. La réaction de carboxylation fixe le CO₂ sur le ribulose-1,5-bisphosphate (RuBP) grâce à l'enzyme RuBisCO.",
          "Équation bilan de la photosynthèse : 6 CO₂ + 6 H₂O + énergie lumineuse → C₆H₁₂O₆ (glucose) + 6 O₂. Cette réaction est l'inverse de la respiration cellulaire. La photosynthèse est à la base de la quasi-totalité des chaînes alimentaires terrestres.",
          "Points clés : 1) Photosynthèse dans les chloroplastes. 2) Chlorophylle = pigment absorbant rouge + bleu. 3) Phase lumineuse : photolyse de l'eau → O₂ + ATP + NADPH. 4) Cycle de Calvin : fixation CO₂ → glucose. 5) Équation : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. 6) La RuBisCO est l'enzyme clé de la fixation du CO₂."
        ]
      },
      {
        titre: "La production de matière organique",
        contenu: [
          "Le glucose produit par la photosynthèse est la base de la production de matière organique. Il peut être utilisé immédiatement lors de la respiration cellulaire pour produire de l'ATP, ou bien stocké sous différentes formes selon les besoins.",
          "Le stockage à court terme se fait sous forme d'amidon dans les chloroplastes (amidon transitoire) ou dans les amyloplastes des organes de réserve (graines, tubercules, racines). L'amidon est un polymère de glucose facile à mobiliser.",
          "La biomasse végétale correspond à l'ensemble de la matière organique produite par les plantes. La production primaire brute (PPB) est l'ensemble du carbone fixé par photosynthèse. La production primaire nette (PPN) est ce qui reste après soustraction des pertes par respiration : PPN = PPB − Respiration.",
          "Le rendement photosynthétique est la fraction de l'énergie lumineuse reçue réellement convertie en matière organique. Théoriquement, il peut atteindre 11 % mais en conditions naturelles il est souvent inférieur à 3 %, en raison des pertes par réflexion, transmission, chaleur et respiration.",
          "La matière organique produite circule dans la plante grâce à la sève élaborée dans le phloème. Elle est transportée des feuilles (sources) vers les organes consommateurs ou de stockage (puits) : racines, fruits, graines, méristèmes.",
          "Points clés : 1) Glucose → respiration (énergie) ou stockage (amidon). 2) PPN = PPB − Respiration. 3) Rendement photosynthétique < 3 % en conditions naturelles. 4) Sève élaborée = transport des sucres dans le phloème. 5) Sources = feuilles, puits = organes de stockage. 6) L'amidon est le principal glucide de réserve des végétaux."
        ]
      },
      {
        titre: "La reproduction sexuée des plantes à fleurs",
        contenu: [
          "La fleur est l'organe de la reproduction sexuée des angiospermes. Elle comprend généralement des sépales, des pétales, des étamines (organes mâles produisant le pollen) et un pistil (organe femelle contenant les ovules). La fleur est ainsi le siège de la formation des gamètes.",
          "La pollinisation est le transport des grains de pollen des étamines vers le pistil. Elle peut être assurée par le vent (anémophilie : grains de pollen légers et nombreux) ou par des animaux vecteurs : insectes (entomophilie), oiseaux, chauves-souris. Les fleurs à pollinisation animale ont des adaptations qui attirent les pollinisateurs (couleurs, odeurs, nectar).",
          "La fécondation chez les angiospermes est une fécondation double, unique dans le règne végétal. Un tube pollinique perce le style jusqu'à l'ovule. Deux spermatozoïdes sont libérés : l'un féconde l'oosphère → zygote (2n), l'autre fusionne avec la cellule centrale → albumen (3n, tissu nourricier).",
          "Le développement de la graine suit la fécondation. Le zygote se développe en embryon, l'ovule en graine (tégument + embryon + albumen). L'ovaire entier se transforme en fruit, qui protège les graines et favorise leur dispersion (zoochorie, anémochorie, hydrochorie…).",
          "La dispersion des graines (dissémination) est essentielle pour la colonisation de nouveaux espaces et éviter la compétition entre parents et descendants. Les fruits charnus attirent les animaux qui dispersent les graines par voie digestive ; les fruits ailés (érable, frêne) se dispersent par le vent.",
          "Points clés : 1) Fleur = organe de la reproduction. 2) Pollinisation animale ou anémophile. 3) Fécondation double : zygote + albumen. 4) Ovule → graine, ovaire → fruit. 5) Fruit = protection + dispersion des graines. 6) La fécondation double est une caractéristique exclusive des angiospermes."
        ]
      },
      {
        titre: "Les adaptations à la vie fixée",
        contenu: [
          "La vie fixée est une contrainte majeure pour les plantes : elles ne peuvent fuir les conditions défavorables et doivent s'adapter in situ. Elles ont développé des capacités de perception et de réponse à l'environnement remarquables.",
          "Les tropismes sont des croissances orientées en réponse à un stimulus directionnel. Le phototropisme est la croissance vers la lumière (tiges). Le gravitropisme permet aux racines de croître vers le bas et aux tiges vers le haut. Le thigmotropisme est la réponse au contact (vrilles des plantes grimpantes).",
          "L'auxine est la phytohormone clé du phototropisme. Elle est produite dans le méristème apical et migre vers la zone d'élongation. Quand la lumière arrive d'un côté, l'auxine se concentre du côté ombragé, stimulant davantage l'élongation de ce côté et courbant la tige vers la lumière.",
          "Les adaptations à la disponibilité en eau sont nombreuses. Les plantes xérophytes (désert) ont des feuilles réduites (épines des cactus), une cuticule épaisse, des stomates profonds ou nocturnes (métabolisme CAM). Les plantes hygrophytes ont de grandes feuilles et de nombreux stomates. Les stomates s'ouvrent (turgescence des cellules de garde, grâce aux ions K⁺) le jour et se ferment la nuit.",
          "Les symbioses mycorhiziennes associent les racines de la grande majorité des plantes terrestres (> 90 % des espèces) à des champignons du sol. Les champignons augmentent considérablement la surface d'absorption d'eau et de phosphore. En échange, la plante fournit des sucres issus de la photosynthèse. Cette symbiose est indispensable dans les sols pauvres.",
          "Points clés : 1) Tropisme = croissance orientée par un stimulus. 2) Auxine = phytohormone du phototropisme. 3) Adaptations hydriques : cuticule, stomates, réserves d'eau. 4) Mycorhizes = symbiose racine-champignon (90 % des plantes). 5) Mycorhizes : champignon reçoit sucres, plante reçoit eau + phosphore. 6) Les stomates s'ouvrent grâce aux ions K⁺ dans les cellules de garde."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Photosynthèse', definition: "Processus par lequel les végétaux convertissent l'énergie lumineuse en énergie chimique (glucose) grâce à la chlorophylle, en utilisant CO₂ et H₂O." },
    { terme: 'Chlorophylle', definition: "Pigment vert présent dans les thylakoïdes du chloroplaste. Absorbe la lumière rouge et bleue pour alimenter la photosynthèse." },
    { terme: 'Chloroplaste', definition: "Organite végétal siège de la photosynthèse. Contient les thylakoïdes (phase lumineuse) et le stroma (cycle de Calvin)." },
    { terme: 'Phase lumineuse', definition: "Première étape de la photosynthèse dans les thylakoïdes : photolyse de l'eau grâce à la lumière, production d'O₂, ATP et NADPH." },
    { terme: 'Cycle de Calvin', definition: "Phase sombre de la photosynthèse dans le stroma : fixation du CO₂ par la RuBisCO et réduction en glucose grâce à l'ATP et au NADPH." },
    { terme: 'Amidon', definition: "Polymère de glucose, principal glucide de réserve des végétaux. Stocké dans les amyloplastes des organes de réserve." },
    { terme: 'Pollinisation', definition: "Transport des grains de pollen des étamines vers le pistil, assuré par le vent ou des animaux (insectes, oiseaux)." },
    { terme: 'Fécondation double', definition: "Caractéristique exclusive des angiospermes : deux spermatozoïdes fécondent respectivement l'oosphère (→ zygote) et la cellule centrale (→ albumen)." },
    { terme: 'Graine', definition: "Structure issue de l'ovule fécondé, contenant l'embryon et l'albumen, protégée par un tégument. Assure la dissémination et la dormance." },
    { terme: 'Fruit', definition: "Organe issu de l'ovaire après fécondation, protégeant les graines et participant à leur dispersion." },
    { terme: 'Tropisme', definition: "Croissance orientée d'une plante en réponse à un stimulus directionnel : phototropisme (lumière), gravitropisme (gravité), thigmotropisme (contact)." },
    { terme: 'Auxine', definition: "Phytohormone produite dans le méristème apical. Régule la croissance en élongation et le phototropisme. Se concentre du côté ombragé." },
    { terme: 'Mycorhize', definition: "Association symbiotique entre les racines d'une plante et un champignon du sol. Le champignon améliore l'absorption d'eau et de phosphore ; la plante fournit des sucres." },
    { terme: 'Angiosperme', definition: "Plante à fleurs dont les graines sont enfermées dans un fruit (carpelle). Groupe le plus diversifié des végétaux (> 300 000 espèces)." },
    { terme: 'Stomates', definition: "Pores de l'épiderme foliaire permettant les échanges gazeux (CO₂, O₂, H₂O). Leur ouverture/fermeture régule la transpiration." },
  ],
  quiz: [
    {
      question: "Quelle est l'équation bilan de la photosynthèse ?",
      options: [
        "C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + ATP",
        "6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ + 6 O₂",
        "6 O₂ + C₆H₁₂O₆ → 6 CO₂ + énergie",
        "H₂O + CO₂ → amidon + O₃"
      ],
      bonneReponse: 1,
      explication: "La photosynthèse utilise CO₂ et H₂O en présence de lumière pour produire du glucose (C₆H₁₂O₆) et de l'O₂. C'est l'inverse de la respiration cellulaire."
    },
    {
      question: "Où se déroule le cycle de Calvin ?",
      options: ["Dans les thylakoïdes", "Dans le stroma du chloroplaste", "Dans les mitochondries", "Dans le noyau de la cellule"],
      bonneReponse: 1,
      explication: "Le cycle de Calvin (phase sombre) se déroule dans le stroma du chloroplaste. Il fixe le CO₂ et le réduit en glucose grâce à l'ATP et au NADPH produits lors de la phase lumineuse."
    },
    {
      question: "Qu'est-ce que la fécondation double chez les angiospermes ?",
      options: [
        "La plante est fécondée deux fois par deux insectes différents",
        "Un spermatozoïde féconde l'oosphère et un autre la cellule centrale",
        "Deux ovules sont fécondés par un seul grain de pollen",
        "La fécondation nécessite deux pollinisateurs"
      ],
      bonneReponse: 1,
      explication: "La fécondation double est unique aux angiospermes : un spermatozoïde féconde l'oosphère (→ zygote diploïde) et le second fusionne avec la cellule centrale (→ albumen triploïde, tissu nourricier)."
    },
    {
      question: "Quel est le rôle de l'auxine dans le phototropisme ?",
      options: [
        "Elle détruit les cellules exposées à la lumière",
        "Elle se concentre du côté ombragé et stimule l'élongation, courbant la tige vers la lumière",
        "Elle ferme les stomates pour économiser l'eau",
        "Elle stimule la floraison en réponse à la lumière"
      ],
      bonneReponse: 1,
      explication: "L'auxine migre vers le côté ombragé de la tige, stimulant davantage l'élongation cellulaire de ce côté. La tige se courbe donc vers la source lumineuse."
    },
    {
      question: "Quelle est la principale caractéristique des mycorhizes ?",
      options: [
        "Ce sont des parasites qui affaiblissent les plantes",
        "Ce sont des symbioses entre racines et champignons améliorant l'absorption d'eau et minéraux",
        "Ce sont des organes floraux spécialisés",
        "Ce sont des bactéries fixatrices d'azote dans le sol"
      ],
      bonneReponse: 1,
      explication: "Les mycorhizes sont des symbioses mutualistes entre racines de plantes et champignons du sol. Les champignons augmentent l'absorption d'eau et de phosphore ; la plante fournit des sucres issus de la photosynthèse."
    }
  ],
  texteTrous: {
    paragraphe: "Les [angiospermes] sont des plantes à fleurs qui réalisent la [photosynthèse] dans leurs [chloroplastes]. La [chlorophylle] absorbe la lumière pour déclencher la [phase lumineuse], qui produit de l'ATP et du NADPH. Le [cycle de Calvin] utilise ces molécules pour fixer le [CO₂] et synthétiser du glucose. Ce glucose peut être stocké sous forme d'[amidon] dans les organes de réserve. La reproduction sexuée implique une [pollinisation] suivie d'une [fécondation double], aboutissant à la formation d'une graine dans un [fruit].",
    banqueMots: ['angiospermes', 'photosynthèse', 'chloroplastes', 'chlorophylle', 'phase lumineuse', 'cycle de Calvin', 'CO₂', 'amidon', 'pollinisation', 'fécondation double', 'fruit']
  }
};

// ===== CHAPITRE 9 : La domestication des plantes =====

export const chapitre9 = {
  id: 'ch9',
  titre: 'La domestication des plantes',
  description: 'Sélection variétale, biodiversité cultivée et enjeux alimentaires.',
  cours: {
    sections: [
      {
        titre: "Qu'est-ce que la domestication ?",
        contenu: [
          "La domestication des plantes est le processus par lequel l'Homme a transformé des plantes sauvages en plantes cultivées en sélectionnant des individus présentant des caractères avantageux pour l'agriculture. Ce processus a débuté il y a environ 10 000 ans, lors de la révolution néolithique.",
          "Les premiers foyers de domestication se situent dans le Croissant fertile (blé, orge, lentille), en Chine (riz, millet), en Mésoamérique (maïs, haricot, courge), en Afrique subsaharienne (sorgho, mil) et en Andes (pomme de terre, quinoa).",
          "Le maïs illustre parfaitement la domestication : il descend d'une plante sauvage, la téosinte, qui lui ressemble peu (petits épis, grains enveloppés). En quelques millénaires de sélection, l'Homme a obtenu des variétés aux épis géants, avec des grains nus et facilement récoltables. Des modifications de quelques gènes clés ont entraîné des changements morphologiques spectaculaires.",
          "La sélection artificielle diffère de la sélection naturelle : c'est l'Homme qui choisit les critères de sélection (rendement, goût, résistance aux ravageurs, facilité de récolte…) et non l'environnement. Les caractères retenus peuvent même être défavorables en milieu naturel (graines incapables de se disperser seules, dépendance à l'irrigation).",
          "La domestication a profondément modifié les génomes des plantes cultivées par rapport à leurs ancêtres sauvages. On parle de 'syndrome de domestication' pour désigner l'ensemble des caractères convergents apparus chez les plantes cultivées : réduction de la dormance des graines, augmentation de la taille des graines ou des fruits, perte de mécanismes de dispersion, réduction de la toxicité, synchronisation de la floraison.",
          "Points clés : 1) Domestication = transformation de plantes sauvages par sélection artificielle. 2) Débute il y a 10 000 ans au Néolithique. 3) Foyers indépendants : Moyen-Orient, Chine, Amériques. 4) Sélection artificielle ≠ naturelle : critères imposés par l'Homme. 5) Syndrome de domestication : graines non dormantes, fruits plus gros, perte dispersion. 6) Maïs domestiqué depuis la téosinte en ~9 000 ans."
        ]
      },
      {
        titre: "La sélection variétale et ses méthodes",
        contenu: [
          "La sélection variétale est l'ensemble des techniques permettant d'améliorer les caractéristiques des plantes cultivées. Elle repose sur la variabilité génétique naturelle ou induite, que l'on exploite pour créer de nouvelles variétés.",
          "La sélection massale est la méthode la plus ancienne : on choisit, parmi une population, les individus ayant les meilleurs caractères phénotypiques et on les utilise comme parents de la génération suivante. Simple et accessible, elle est encore utilisée par les agriculteurs traditionnels. Elle ne nécessite pas de connaissance des mécanismes génétiques.",
          "L'hybridation consiste à croiser deux lignées pures génétiquement différentes pour obtenir des hybrides F1. Ces hybrides présentent souvent une vigueur supérieure aux parents (hétérosis ou vigueur hybride). Les semences hybrides sont utilisées massivement dans l'agriculture moderne (maïs hybride, tournesol, tomate), mais elles ne se reproduisent pas fidèlement et les agriculteurs doivent racheter des semences chaque année.",
          "La mutagenèse consiste à provoquer des mutations dans le génome de la plante (par rayonnements X, UV ou agents chimiques mutagènes) pour créer de nouvelles variabilités génétiques. On sélectionne ensuite les mutants intéressants. La mutagenèse n'est pas considérée comme OGM par la réglementation européenne.",
          "Les OGM (Organismes Génétiquement Modifiés) résultent de l'insertion dans le génome d'une plante d'un ou plusieurs gènes étrangers, provenant d'une autre espèce. Cette technique permet d'introduire des caractères impossibles à obtenir par hybridation classique : résistance à un herbicide (maïs Round-up Ready), production d'un insecticide naturel (maïs Bt avec gène de Bacillus thuringiensis), enrichissement nutritionnel (riz doré). La culture des OGM est très réglementée et fait l'objet de débats sociétaux intenses.",
          "Points clés : 1) Sélection massale = choix phénotypique dans la population. 2) Hybridation = croisement de lignées pures → vigueur hybride. 3) Semences hybrides : non reproductibles, achat annuel obligatoire. 4) Mutagenèse = mutations induites artificiellement. 5) OGM = insertion de gènes étrangers par transgénèse. 6) Chaque méthode a ses avantages, inconvénients et contextes réglementaires."
        ]
      },
      {
        titre: "La biodiversité cultivée et son érosion",
        contenu: [
          "La biodiversité cultivée (ou agrobiodiversité) désigne l'ensemble des variétés de plantes cultivées par l'Homme. Pendant des millénaires, les agriculteurs ont sélectionné et maintenu des milliers de variétés locales adaptées à leurs conditions climatiques et culturelles.",
          "Depuis le 20e siècle, l'agriculture intensive a entraîné une uniformisation des cultures : quelques variétés à haut rendement ont remplacé des milliers de variétés locales. Aujourd'hui, 75 % des aliments dans le monde proviennent de seulement 12 plantes et 5 espèces animales. Cette réduction de la diversité génétique accroît la vulnérabilité des cultures face aux maladies et aux changements climatiques.",
          "Les banques de graines conservent des milliers de variétés végétales pour préserver cette diversité génétique. La plus célèbre est le Svalbard Global Seed Vault, en Norvège, qui stocke plus d'un million d'échantillons de graines à −18 °C, dans la permafrost arctique. Ces banques constituent une assurance contre l'érosion génétique.",
          "L'érosion de la biodiversité cultivée est irréversible : une variété perdue est perdue pour toujours. Or, les variétés sauvages et les variétés locales (ou 'variétés de pays') sont des réservoirs de gènes de résistance aux pathogènes, à la sécheresse ou aux fortes températures, précieux pour l'amélioration variétale future.",
          "Les centres de diversité (identifiés par Vavilov au début du 20e siècle) sont des régions géographiques où la diversité génétique des plantes cultivées et de leurs ancêtres sauvages est maximale. Ces régions coïncident avec les centres d'origine de la domestication : Éthiopie pour le café, Mexique pour le maïs, Andes pour la pomme de terre.",
          "Points clés : 1) Agrobiodiversité = diversité des variétés cultivées. 2) Uniformisation = vulnérabilité accrue aux maladies et au climat. 3) Banques de graines = conservation ex situ de la diversité. 4) Svalbard = principale banque mondiale avec > 1 million d'échantillons. 5) Variétés locales = réservoirs de gènes de résistance. 6) Centres de diversité de Vavilov = zones d'origine des cultures."
        ]
      },
      {
        titre: "Les enjeux de la domestication contemporaine",
        contenu: [
          "La domestication contemporaine est confrontée à des défis sans précédent : nourrir une population mondiale de 8 milliards de personnes (estimée à 10 milliards en 2050) tout en réduisant l'impact environnemental de l'agriculture.",
          "La révolution verte (années 1960–1970) a permis de multiplier les rendements agricoles mondiaux grâce à des variétés à haut rendement, à l'irrigation généralisée et à l'utilisation massive d'engrais et de pesticides. Elle a évité des famines à grande échelle mais a aussi entraîné une déforestation massive et une forte dépendance aux intrants chimiques.",
          "La sécurité alimentaire mondiale repose sur quelques cultures majeures : blé, riz, maïs, soja. La monoculture de ces espèces sur de vastes surfaces les rend vulnérables aux crises sanitaires (épiphyties). La rouille du blé (champignon Puccinia) est un exemple de menace globale pour la sécurité alimentaire.",
          "La durabilité est l'enjeu central : l'agriculture doit produire suffisamment sans épuiser les sols, polluer l'eau, ou émettre trop de gaz à effet de serre. L'agriculture représente environ 25 % des émissions mondiales de GES (méthane des bovins, N₂O des engrais, déforestation).",
          "Les nouvelles techniques génomiques (CRISPR-Cas9, édition du génome) permettent des modifications ciblées du génome végétal sans insertion de gènes étrangers. Elles ouvrent la voie à des variétés résistantes aux maladies, aux sécheresses ou à plus fort rendement, avec un cadre réglementaire encore en définition en Europe.",
          "Points clés : 1) Défi = nourrir 10 milliards en 2050 durablement. 2) Révolution verte : hausse rendements + impacts environnementaux. 3) Sécurité alimentaire : vulnérabilité des monocultures. 4) Agriculture = 25 % des GES mondiaux. 5) CRISPR-Cas9 : édition ciblée du génome végétal. 6) Enjeux : rendement, durabilité, équité alimentaire mondiale."
        ]
      },
      {
        titre: "Les symbioses dans l'agriculture",
        contenu: [
          "L'agriculture intensive repose sur des intrants chimiques (engrais azotés, pesticides) dont la production est coûteuse en énergie et polluante. L'agroécologie propose d'exploiter les symbioses biologiques naturelles pour réduire ces dépendances.",
          "Les légumineuses (haricot, pois, lentille, soja, trèfle, luzerne) hébergent dans leurs racines des bactéries du genre Rhizobium. Cette symbiose est l'une des plus importantes de la biosphère : les bactéries fixent l'azote atmosphérique (N₂) et le convertissent en ammonium (NH₄⁺) assimilable par la plante. En échange, la plante fournit des sucres et crée un environnement anaérobie favorable grâce à la leghémoglobine.",
          "La symbiose légumineuse-Rhizobium se traduit par la formation de nodosités racinaires. Ces petits renfle­ments de couleur rosée contiennent des millions de bactéries fixatrices d'azote. La fixation peut atteindre 50 à 200 kg N/ha/an, remplaçant en partie les engrais azotés de synthèse.",
          "L'insertion de légumineuses dans les rotations culturales enrichit les sols en azote naturellement. C'est une pratique agronomique ancienne (connue depuis l'Antiquité) et très efficace. Les cultures suivantes bénéficient de cet azote résiduel, réduisant les besoins en engrais.",
          "L'agroécologie intègre ces connaissances sur les symbioses pour concevoir des systèmes agricoles plus autonomes et durables : associations culturales (maïs + haricot + courge = 'trois sœurs' des Amérindiens), cultures intercalaires, agroforesterie (association arbres + cultures). Ces systèmes maintiennent la biodiversité fonctionnelle et limitent les intrants.",
          "Points clés : 1) Légumineuses + Rhizobium = fixation de l'azote atmosphérique. 2) Nodosités = siège de la symbiose (50–200 kg N/ha/an). 3) Rotation avec légumineuses = engrais vert naturel. 4) Mycorhizes améliorent absorption eau + phosphore. 5) Agroécologie = exploitation des symbioses pour réduire intrants. 6) Les 'trois sœurs' illustrent une association agroécologique traditionnelle."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Domestication', definition: "Transformation de plantes sauvages en plantes cultivées par sélection artificielle de caractères utiles à l'Homme, débutée il y a ~10 000 ans." },
    { terme: 'Sélection artificielle', definition: "Choix par l'Homme des individus reproducteurs en fonction de caractères phénotypiques jugés intéressants, conduisant à l'évolution dirigée des variétés." },
    { terme: 'Hybridation', definition: "Croisement de deux lignées pures génétiquement différentes pour obtenir des hybrides F1 souvent plus vigoureux (hétérosis)." },
    { terme: 'OGM', definition: "Organisme Génétiquement Modifié : être vivant dont le génome a été modifié par insertion d'un ou plusieurs gènes étrangers par transgénèse." },
    { terme: 'Biodiversité cultivée', definition: "Ensemble de la diversité génétique des plantes et animaux domestiqués. En forte érosion depuis le 20e siècle du fait de l'agriculture intensive." },
    { terme: 'Sélection massale', definition: "Méthode de sélection la plus ancienne : choix des meilleurs individus phénotypiquement dans une population pour la génération suivante." },
    { terme: 'Mutagenèse', definition: "Production de mutations génétiques induites artificiellement (rayonnements, produits chimiques) pour créer de nouvelles variabilités utiles à la sélection." },
    { terme: 'Banque de graines', definition: "Infrastructure de conservation ex situ des semences de nombreuses variétés végétales. La plus importante est le Svalbard Global Seed Vault (Norvège)." },
    { terme: 'Légumineuse', definition: "Plante de la famille des Fabacées (pois, haricot, lentille, soja) capable de fixer l'azote atmosphérique via une symbiose avec Rhizobium." },
    { terme: 'Rhizobium', definition: "Genre de bactéries qui s'associent en symbiose avec les racines des légumineuses dans des nodosités pour fixer l'azote atmosphérique." },
    { terme: 'Symbiose', definition: "Association durable et intime entre deux espèces, bénéfique pour les deux partenaires (mutualisme). Ex : légumineuse-Rhizobium, plante-mycorhize." },
    { terme: 'Rendement agricole', definition: "Quantité de production (en masse ou en volume) obtenue par unité de surface cultivée. Principal objectif de l'amélioration des plantes cultivées." },
    { terme: 'Centre de diversité', definition: "Région géographique identifiée par Vavilov où la diversité génétique d'une espèce cultivée et de ses ancêtres sauvages est maximale." },
    { terme: 'Variété sauvage', definition: "Population naturelle d'une espèce végétale non domestiquée, réservoir de gènes de résistance utiles pour l'amélioration des plantes cultivées." },
    { terme: 'Agroécologie', definition: "Approche agricole qui applique les principes écologiques (symbioses, diversité, cycles) pour concevoir des systèmes de production durables et autonomes." },
  ],
  quiz: [
    {
      question: "Quelle plante sauvage est l'ancêtre du maïs moderne ?",
      options: ["Le sorgho", "La téosinte", "Le millet", "L'orge sauvage"],
      bonneReponse: 1,
      explication: "Le maïs a été domestiqué depuis la téosinte (Zea mays ssp. parviglumis), une graminée sauvage mexicaine, il y a environ 9 000 ans. Des modifications de quelques gènes clés ont transformé cette plante aux petits épis en maïs moderne."
    },
    {
      question: "Quelle est la caractéristique des semences hybrides F1 ?",
      options: [
        "Elles se reproduisent fidèlement d'une génération à l'autre",
        "Elles donnent des plantes très vigoureuses mais non reproductibles fidèlement",
        "Elles sont résistantes à tous les herbicides",
        "Elles ne nécessitent aucun engrais"
      ],
      bonneReponse: 1,
      explication: "Les hybrides F1 présentent une vigueur supérieure (hétérosis) mais ne se reproduisent pas fidèlement (ségrégation en F2). Les agriculteurs doivent donc racheter des semences hybrides chaque année."
    },
    {
      question: "Quel est le rôle de la symbiose Légumineuse-Rhizobium ?",
      options: [
        "Protéger les plantes contre les insectes ravageurs",
        "Fixer l'azote atmosphérique et le fournir à la plante sous forme assimilable",
        "Augmenter la photosynthèse en capturant plus de CO₂",
        "Protéger les racines contre les champignons parasites"
      ],
      bonneReponse: 1,
      explication: "Les bactéries Rhizobium dans les nodosités racinaires fixent l'azote atmosphérique (N₂) et le convertissent en ammonium (NH₄⁺) utilisable par la plante. En échange, la plante fournit des glucides aux bactéries."
    },
    {
      question: "Pourquoi l'érosion de la biodiversité cultivée est-elle préoccupante ?",
      options: [
        "Elle rend les plantes plus grandes et donc difficiles à récolter",
        "Elle uniformise génétiquement les cultures, les rendant plus vulnérables aux maladies",
        "Elle augmente la concurrence entre les espèces sauvages et cultivées",
        "Elle favorise la multiplication des adventices"
      ],
      bonneReponse: 1,
      explication: "L'uniformisation génétique des cultures signifie que si un pathogène s'adapte à la variété dominante, il peut dévaster des surfaces immenses. La diversité génétique est une assurance contre les épidémies agricoles."
    },
    {
      question: "Qu'est-ce que la sélection massale ?",
      options: [
        "La création d'OGM par insertion de gènes",
        "L'irradiation de graines pour provoquer des mutations",
        "Le choix des meilleurs individus phénotypiques pour servir de parents à la génération suivante",
        "Le croisement forcé entre deux espèces différentes"
      ],
      bonneReponse: 2,
      explication: "La sélection massale est la méthode la plus ancienne : l'agriculteur choisit dans sa parcelle les individus présentant les meilleurs caractères et les utilise pour produire les semences de l'année suivante."
    }
  ],
  texteTrous: {
    paragraphe: "La [domestication] des plantes a débuté au [Néolithique] il y a environ 10 000 ans. L'Homme a pratiqué une [sélection artificielle] en choisissant les individus aux meilleurs caractères pour la reproduction. Le maïs descend d'une plante sauvage appelée [téosinte]. La [sélection massale] est la méthode la plus ancienne, tandis que l'[hybridation] produit des variétés très vigoureuses. Les [légumineuses] entrent en symbiose avec des bactéries [Rhizobium] pour fixer l'[azote] atmosphérique. Les [banques de graines] conservent la [biodiversité] cultivée menacée d'érosion.",
    banqueMots: ['domestication', 'Néolithique', 'sélection artificielle', 'téosinte', 'sélection massale', 'hybridation', 'légumineuses', 'Rhizobium', 'azote', 'banques de graines', 'biodiversité']
  }
};

// ===== CHAPITRE 10 : Les variations climatiques passées =====

export const chapitre10 = {
  id: 'ch10',
  titre: 'Les variations climatiques passées',
  description: 'Méthodes de datation, indicateurs paléoclimatiques et histoire du climat.',
  cours: {
    sections: [
      {
        titre: "Les indicateurs paléoclimatiques",
        contenu: [
          "La paléoclimatologie est la science qui étudie les climats passés avant l'ère des mesures instrumentales. Elle utilise des archives naturelles qui ont enregistré les variations climatiques sous forme de signaux physiques, chimiques ou biologiques.",
          "Les carottes de glace sont des cylindres de glace extraits des grands inlandsis (Antarctique, Groenland) par forage. Elles constituent des archives climatiques exceptionnelles : on peut remonter jusqu'à 800 000 ans avec les carottes de Dôme C (Antarctica). Chaque couche annuelle de neige compactée piège des bulles d'air (archives atmosphériques) et de l'eau aux compositions isotopiques qui dépendent de la température de précipitation.",
          "Les isotopes de l'oxygène sont les indicateurs les plus utilisés. L'oxygène a deux isotopes stables : ¹⁶O (léger, abondant) et ¹⁸O (lourd, rare). En période froide, l'¹⁶O s'évapore préférentiellement et s'accumule dans les glaces continentales, laissant les océans appauvris en ¹⁶O (enrichis en ¹⁸O). Le rapport ¹⁸O/¹⁶O dans les sédiments marins ou la glace est donc un thermomètre paléoclimatique.",
          "Les pollens fossiles conservés dans les tourbières et les sédiments lacustres permettent de reconstituer la végétation passée. Comme chaque espèce végétale produit des pollens caractéristiques et présente des exigences climatiques précises, l'analyse pollinique renseigne sur les paléotempératures et les paléoprécipitations.",
          "Les coraux enregistrent la composition isotopique de l'eau de mer dans leurs squelettes calcaires. Chaque couche annuelle de croissance constitue une archive. Les foraminifères, micro-organismes calcaires fossilisés dans les sédiments marins, fournissent également des indicateurs isotopiques couvrant des millions d'années.",
          "Points clés : 1) Paléoclimatologie = étude des climats passés. 2) Carottes de glace : archives jusqu'à 800 000 ans. 3) Rapport ¹⁸O/¹⁶O = thermomètre paléoclimatique. 4) Période froide : enrichissement en ¹⁸O dans les océans. 5) Pollens fossiles = reconstitution de la végétation et du climat. 6) Coraux et foraminifères = archives marines des paléoclimats."
        ]
      },
      {
        titre: "La chronologie relative et absolue",
        contenu: [
          "Pour interpréter les archives paléoclimatiques, il faut les dater. On distingue deux types de datation : la chronologie relative (ordre des événements) et la chronologie absolue (âge en années).",
          "La stratigraphie est la base de la chronologie relative. Le principe de superposition stipule que dans une série sédimentaire non perturbée, les couches les plus profondes sont les plus anciennes. Ce principe, établi par Nicolas Sténon au 17e siècle, est fondamental en géologie. Les discontinuités stratigraphiques (lacunes, discordances) signalent des périodes d'érosion ou de non-dépôt.",
          "La biostratigraphie affine la chronologie relative en utilisant les fossiles stratigraphiques (ou fossiles guides). Ce sont des espèces ayant vécu sur une courte période géologique (haute résolution temporelle) et présentes sur de vastes zones géographiques (bonne corrélation). Ammonites, foraminifères et graptolites sont des fossiles guides classiques.",
          "La datation radiométrique permet d'obtenir des âges absolus. Elle repose sur la désintégration radioactive des isotopes instables à une vitesse constante, caractérisée par la demi-vie (T½). La demi-vie est le temps nécessaire pour que la moitié des atomes radioactifs se désintègrent.",
          "Le carbone-14 (¹⁴C, T½ = 5 730 ans) est utilisé pour dater les matières organiques jusqu'à ~50 000 ans. Il est produit dans la haute atmosphère par les rayons cosmiques et incorporé dans les êtres vivants via la photosynthèse. Après la mort, la teneur en ¹⁴C diminue selon la loi de décroissance radioactive.",
          "Points clés : 1) Chronologie relative = stratigraphie + biostratigraphie. 2) Principe de superposition = les couches profondes sont les plus vieilles. 3) Fossiles stratigraphiques = courte durée, large répartition. 4) Datation radiométrique = âge absolu par décroissance radioactive. 5) ¹⁴C : organismes jusqu'à ~50 000 ans. 6) U-Pb et K-Ar : roches magmatiques et métamorphiques, millions d'années."
        ]
      },
      {
        titre: "Les grandes variations climatiques du Quaternaire",
        contenu: [
          "Le Quaternaire (2,6 Ma à aujourd'hui) est caractérisé par une succession de périodes glaciaires (températures froides, inlandsis étendus) et de périodes interglaciaires (températures plus chaudes, comme aujourd'hui). Ces cycles ont eu une durée d'environ 41 000 ans jusqu'à il y a 1 million d'années, puis de ~100 000 ans.",
          "Lors des dernières glaciations, la calotte glaciaire recouvrait une grande partie de l'Amérique du Nord et de l'Europe du Nord. Le niveau des mers était environ 120 m plus bas qu'aujourd'hui (l'eau étant stockée dans les glaces continentales), ce qui créait des ponts terrestres (entre Alaska et Sibérie, par exemple) qui ont permis des migrations humaines.",
          "Le dernier maximum glaciaire (LGM, ~21 000 ans BP) est la période la plus froide du dernier cycle glaciaire. Les températures moyennes mondiales étaient de 5 à 7 °C inférieures aux valeurs actuelles. La végétation et les zones climatiques étaient décalées vers les tropiques.",
          "Les carottes de glace de Vostok et de Dôme C (Antarctique) montrent une corrélation remarquable entre les concentrations de CO₂ atmosphérique et la température pendant les 800 000 dernières années. Le CO₂ varie entre ~180 ppm (glaciaire) et ~280 ppm (interglaciaire), amplifiés par les rétroactions climatiques.",
          "Les extinctions de la mégafaune du Pléistocène (mammouths, rhinocéros laineux, mégacéros) sont liées à la combinaison des changements climatiques de fin de glaciation et de la chasse par les populations humaines (chasse excessive, overkill hypothesis).",
          "Points clés : 1) Quaternaire = alternance glaciaires / interglaciaires. 2) Cycles de 41 000 ans puis 100 000 ans. 3) LGM : −5 à −7 °C, niveau des mers −120 m. 4) Glaces → ponts terrestres → migrations humaines. 5) CO₂ : 180 ppm (glaciaire) ↔ 280 ppm (interglaciaire). 6) Extinctions mégafaune = climat + chasse humaine."
        ]
      },
      {
        titre: "Le rôle des facteurs astronomiques",
        contenu: [
          "L'astronome serbe Milutin Milanković (1879–1958) a démontré que les variations des paramètres orbitaux et d'orientation de la Terre autour du Soleil expliquent les cycles glaciaires-interglaciaires du Quaternaire. Ces cycles sont appelés cycles de Milanković.",
          "L'excentricité est la variation de la forme de l'orbite terrestre autour du Soleil : elle oscille entre quasi-circulaire et légèrement elliptique sur des cycles de ~100 000 et ~400 000 ans. Quand l'orbite est plus elliptique, la différence d'énergie solaire reçue entre périhélie et aphélie est plus grande.",
          "L'obliquité est la variation de l'angle d'inclinaison de l'axe de rotation terrestre sur le plan de l'orbite. Elle varie entre 22,1° et 24,5° sur un cycle de ~41 000 ans. Une obliquité plus grande accentue le contraste saisonnier (étés plus chauds, hivers plus froids aux hautes latitudes).",
          "La précession des équinoxes est la rotation lente de l'axe de rotation terrestre, comme une toupie qui tourne sur elle-même, sur un cycle de ~26 000 ans. Elle modifie la saison à laquelle la Terre est au périhélie, donc l'insolation saisonnière aux différentes latitudes.",
          "Ces paramètres astronomiques modifient la répartition saisonnière et latitudinale de l'énergie solaire reçue par la Terre (insolation), mais avec une amplitude insuffisante pour expliquer seuls les glaciations. Ce sont les rétroactions climatiques (albédo, CO₂, vapeur d'eau) qui amplifient ces forçages orbitaux.",
          "Points clés : 1) Cycles de Milanković = variations orbitales et axiales de la Terre. 2) Excentricité : ~100 000 ans (forme de l'orbite). 3) Obliquité : ~41 000 ans (inclinaison de l'axe). 4) Précession : ~26 000 ans (rotation de l'axe). 5) Ces cycles modifient l'insolation saisonnière. 6) Les rétroactions amplifient les effets astronomiques."
        ]
      },
      {
        titre: "Les rétroactions climatiques",
        contenu: [
          "Une rétroaction climatique est un mécanisme par lequel une perturbation initiale du climat est amplifiée (rétroaction positive) ou atténuée (rétroaction négative) par des effets indirects. Les rétroactions positives dominent le système climatique, ce qui explique les grands changements de climat observés.",
          "L'albédo est la fraction de l'énergie solaire réfléchie par une surface. La glace et la neige ont un albédo élevé (~0,8–0,9, réfléchissent 80–90 % de la lumière). Lors d'un refroidissement, l'extension des glaces augmente l'albédo planétaire, ce qui réduit davantage l'absorption d'énergie solaire et amplifie le refroidissement : c'est la rétroaction albédo-glace (positive).",
          "Le CO₂ joue un rôle de rétroaction positive lors des glaciations. Quand la température baisse, l'océan absorbe plus de CO₂ (solubilité plus élevée des gaz dans l'eau froide), amplifiant le refroidissement. Inversement, lors d'un réchauffement, l'océan dégazifie du CO₂, amplifiant le réchauffement.",
          "La vapeur d'eau est le plus puissant gaz à effet de serre atmosphérique. Un réchauffement initial augmente l'évaporation, donc la concentration en vapeur d'eau dans l'atmosphère, ce qui amplifie l'effet de serre et donc le réchauffement : rétroaction positive eau-température. Sans ce mécanisme, la sensibilité climatique serait beaucoup plus faible.",
          "Des rétroactions négatives existent aussi : par exemple, une augmentation des nuages peut augmenter l'albédo planétaire (refroidissement) ou amplifier l'effet de serre (réchauffement) selon leur type et altitude. Les rétroactions négatives des nuages restent les plus grandes sources d'incertitude des modèles climatiques.",
          "Points clés : 1) Rétroaction positive = amplification de la perturbation initiale. 2) Rétroaction négative = atténuation de la perturbation. 3) Albédo-glace = rétroaction positive (plus de glace → plus de réflexion → plus froid). 4) CO₂ océanique = rétroaction positive (refroidissement → absorption CO₂ → amplification). 5) Vapeur d'eau = plus fort GES, rétroaction positive. 6) Nuages = source majeure d'incertitude des modèles."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Paléoclimat', definition: "Climat passé reconstitué à partir d'archives naturelles (carottes de glace, sédiments, pollens, coraux) antérieures aux mesures instrumentales." },
    { terme: 'Carotte de glace', definition: "Cylindre de glace extrait par forage dans les inlandsis (Antarctique, Groenland). Archive climatique pouvant couvrir jusqu'à 800 000 ans de variations." },
    { terme: 'Isotope O18/O16', definition: "Rapport des isotopes stables de l'oxygène utilisé comme thermomètre paléoclimatique. En période froide, les océans s'enrichissent en ¹⁸O (lourd)." },
    { terme: 'Stratigraphie', definition: "Science de l'étude des couches sédimentaires et de leur succession dans le temps. Base de la chronologie relative des événements géologiques." },
    { terme: 'Datation radiométrique', definition: "Méthode de datation absolue basée sur la désintégration radioactive d'isotopes instables à une vitesse constante caractérisée par la demi-vie." },
    { terme: 'Cycles de Milanković', definition: "Variations périodiques des paramètres orbitaux (excentricité, obliquité, précession) qui modifient l'insolation et expliquent les cycles glaciaires-interglaciaires." },
    { terme: 'Glaciation', definition: "Période climatique froide caractérisée par l'extension des inlandsis et la baisse du niveau des mers. Alternant avec des périodes interglaciaires plus chaudes." },
    { terme: 'Période interglaciaire', definition: "Phase climatique tempérée entre deux glaciations. L'Holocène (depuis ~11 700 ans) est l'interglaciaire actuel, particulièrement stable." },
    { terme: 'Albédo', definition: "Fraction de l'énergie solaire réfléchie par une surface. La glace a un albédo élevé (~0,9). L'augmentation de l'albédo amplifie le refroidissement (rétroaction positive)." },
    { terme: 'Rétroaction climatique', definition: "Mécanisme amplifiant (rétroaction positive) ou atténuant (rétroaction négative) une perturbation climatique initiale. Déterminant pour la sensibilité climatique." },
    { terme: 'Pollen fossile', definition: "Grain de pollen conservé dans les sédiments (tourbières, lacs). Indicateur de la végétation et donc du paléoclimat de son époque de dépôt." },
    { terme: 'Excentricité', definition: "Paramètre orbital décrivant la forme (de circulaire à elliptique) de l'orbite terrestre. Cycle de ~100 000 ans. L'un des trois cycles de Milanković." },
    { terme: 'Obliquité', definition: "Angle d'inclinaison de l'axe de rotation terrestre sur le plan de l'écliptique (22,1° à 24,5°). Cycle de ~41 000 ans. Influence le contraste saisonnier." },
    { terme: 'Précession', definition: "Lente rotation de l'axe de rotation terrestre sur lui-même (cycle ~26 000 ans). Modifie la saison du périhélie et donc l'insolation saisonnière par latitude." },
    { terme: 'Quaternaire', definition: "Période géologique de 2,6 Ma à aujourd'hui. Caractérisée par les cycles glaciaires-interglaciaires et l'évolution des hominidés." },
  ],
  quiz: [
    {
      question: "Quel indicateur paléoclimatique permet de remonter jusqu'à 800 000 ans de variations climatiques ?",
      options: ["Les pollens fossiles dans les tourbières", "Les carottes de glace antarctiques", "Les cernes des arbres (dendrochronologie)", "Les coraux fossiles"],
      bonneReponse: 1,
      explication: "Les carottes de glace extraites de l'Antarctique (forages de Dôme C, Vostok) permettent de reconstituer les variations de température et de composition atmosphérique sur ~800 000 ans grâce aux bulles d'air et aux isotopes de l'oxygène."
    },
    {
      question: "Que signifie un enrichissement en ¹⁸O dans les sédiments marins ?",
      options: [
        "Une période chaude avec de nombreuses précipitations",
        "Une période froide avec des glaces continentales étendues",
        "Une augmentation du CO₂ atmosphérique",
        "Une montée du niveau des mers"
      ],
      bonneReponse: 1,
      explication: "En période froide, l'¹⁶O (léger) s'évapore préférentiellement et se stocke dans les glaces continentales. Les océans s'appauvrissent en ¹⁶O et s'enrichissent donc en ¹⁸O. Un rapport ¹⁸O/¹⁶O élevé dans les sédiments marins indique une période glaciaire."
    },
    {
      question: "Quel est le cycle de Milanković d'une durée d'environ 41 000 ans ?",
      options: ["L'excentricité de l'orbite", "L'obliquité de l'axe terrestre", "La précession des équinoxes", "La rotation de la Lune"],
      bonneReponse: 1,
      explication: "L'obliquité est la variation de l'angle d'inclinaison de l'axe terrestre (entre 22,1° et 24,5°) sur un cycle de ~41 000 ans. Elle influence le contraste saisonnier aux hautes latitudes."
    },
    {
      question: "Quelle est la définition d'une rétroaction climatique positive ?",
      options: [
        "Un mécanisme qui atténue et compense une perturbation climatique initiale",
        "Un mécanisme qui amplifie une perturbation climatique dans le même sens",
        "Une évolution bénéfique du climat pour les êtres vivants",
        "Un signal de retour d'information entre l'océan et l'atmosphère"
      ],
      bonneReponse: 1,
      explication: "Une rétroaction positive amplifie la perturbation initiale dans le même sens. Par exemple : un refroidissement → extension des glaces → augmentation de l'albédo → moins d'énergie absorbée → refroidissement supplémentaire."
    },
    {
      question: "Sur quelle propriété physique repose la datation au carbone-14 ?",
      options: [
        "La vitesse de dépôt des sédiments",
        "La désintégration radioactive à vitesse constante des atomes de ¹⁴C",
        "La variation de la densité de la glace avec le temps",
        "La fluorescence des minéraux sous lumière UV"
      ],
      bonneReponse: 1,
      explication: "Le carbone-14 est un isotope radioactif instable de demi-vie 5 730 ans. Après la mort d'un organisme, la teneur en ¹⁴C diminue selon une loi exponentielle. Mesurer ce rapport permet de calculer l'âge de l'échantillon jusqu'à ~50 000 ans."
    }
  ],
  texteTrous: {
    paragraphe: "La [paléoclimatologie] étudie les [paléoclimats] à l'aide d'archives naturelles. Les [carottes de glace] antarctiques fournissent des informations sur 800 000 ans de [variations climatiques]. Le rapport [¹⁸O/¹⁶O] dans les glaces et les sédiments est un indicateur de [température]. Les [cycles de Milanković] expliquent les alternances [glaciaires] et [interglaciaires] par des variations de l'[orbite] et de l'axe terrestre. La datation au [carbone-14] permet de dater des matières organiques jusqu'à 50 000 ans. Les rétroactions [albédo] amplifient les changements climatiques initiaux.",
    banqueMots: ['paléoclimatologie', 'paléoclimats', 'carottes de glace', 'variations climatiques', '¹⁸O/¹⁶O', 'température', 'cycles de Milanković', 'glaciaires', 'interglaciaires', 'orbite', 'carbone-14', 'albédo']
  }
};

// ===== CHAPITRE 11 : Le réchauffement climatique =====

export const chapitre11 = {
  id: 'ch11',
  titre: 'Le réchauffement climatique',
  description: "Effet de serre, causes anthropiques, conséquences et solutions.",
  cours: {
    sections: [
      {
        titre: "L'effet de serre naturel et ses gaz",
        contenu: [
          "L'effet de serre est un phénomène naturel indispensable à la vie sur Terre. Sans lui, la température moyenne de la surface terrestre serait de −18 °C au lieu de +15 °C. Il est dû à la présence dans l'atmosphère de gaz à effet de serre (GES) qui absorbent le rayonnement infrarouge émis par la Terre.",
          "Le mécanisme de l'effet de serre se déroule en deux temps : d'abord, le rayonnement solaire (visible, courtes longueurs d'onde) traverse l'atmosphère et réchauffe la surface terrestre. Ensuite, la Terre émet un rayonnement infrarouge (thermique, longues longueurs d'onde). Les GES absorbent ce rayonnement infrarouge et le réémettent dans toutes les directions, dont vers la surface, l'échauffant davantage.",
          "Les principaux gaz à effet de serre naturels sont : la vapeur d'eau (H₂O, GES le plus abondant et le plus puissant), le dioxyde de carbone (CO₂), le méthane (CH₄), le protoxyde d'azote (N₂O) et l'ozone (O₃). Chaque molécule de GES a un potentiel de réchauffement global (PRG) différent : CH₄ = 28 fois celui de CO₂ sur 100 ans, N₂O = 265 fois.",
          "La vapeur d'eau est responsable de 50 à 70 % de l'effet de serre naturel. Contrairement aux autres GES, sa concentration dans l'atmosphère est principalement contrôlée par la température (elle est une rétroaction, pas un forçage direct). Plus l'atmosphère est chaude, plus elle peut contenir de vapeur d'eau.",
          "Le CO₂ joue un rôle de régulateur du climat sur les longues échelles de temps. Il est échangé entre l'atmosphère, l'océan, la biosphère et la lithosphère via le cycle du carbone. Sa concentration naturelle avant l'ère industrielle était d'environ 280 ppm (parties par million).",
          "Points clés : 1) Effet de serre naturel = indispensable à la vie (ΔT = +33 °C). 2) GES = absorbent le rayonnement infrarouge terrestre. 3) Principaux GES : H₂O, CO₂, CH₄, N₂O. 4) Vapeur d'eau = GES le plus abondant (50–70 % de l'effet). 5) CO₂ préindustriel = ~280 ppm. 6) PRG de CH₄ = 28 × celui du CO₂ sur 100 ans."
        ]
      },
      {
        titre: "Le renforcement anthropique de l'effet de serre",
        contenu: [
          "Depuis la révolution industrielle (milieu du 18e siècle), les activités humaines ont considérablement augmenté les concentrations atmosphériques de GES. La concentration de CO₂ est passée de 280 ppm (préindustriel) à plus de 420 ppm en 2023, une concentration sans précédent depuis au moins 3 millions d'années.",
          "La combustion des énergies fossiles (charbon, pétrole, gaz naturel) est la principale source d'émissions anthropiques de CO₂. Elle libère dans l'atmosphère du carbone stocké dans la lithosphère depuis des millions d'années (carbone fossile). En 2022, les émissions mondiales liées aux combustibles fossiles ont atteint ~36 Gt CO₂.",
          "La déforestation est la deuxième source majeure d'émissions : les arbres coupés ou brûlés libèrent le carbone stocké dans leur biomasse. La déforestation réduit aussi la capacité d'absorption du CO₂ par la photosynthèse. Les forêts tropicales (Amazonie, Bassin du Congo, Asie du Sud-Est) sont les principaux enjeux.",
          "L'agriculture contribue significativement aux émissions via plusieurs sources : le méthane des rizières (fermentation anaérobie) et des ruminants (fermentation entérique des bovins), le protoxyde d'azote des engrais azotés (nitrification et dénitrification dans les sols), et le CO₂ du labour et des déforestations agricoles.",
          "L'industrie (ciment, acier, chimie, aluminium) et les transports (aviation, maritime, routier) complètent le tableau des émissions anthropiques. Le forçage radiatif est la différence entre l'énergie supplémentaire retenue et celle qui s'échapperait sans l'augmentation des GES : il est estimé à +2,72 W/m² en 2019 par rapport à 1750.",
          "Points clés : 1) CO₂ : 280 ppm (préindustriel) → 420+ ppm (2023). 2) Combustibles fossiles = principale source de CO₂ anthropique. 3) Déforestation = 2e source + réduction des puits de carbone. 4) Agriculture = CH₄ (bovins, rizières) + N₂O (engrais). 5) Forçage radiatif = +2,72 W/m² depuis 1750. 6) Carbone fossile libéré = carbone millénaire réinjecté en siècles."
        ]
      },
      {
        titre: "Les conséquences observées et projetées",
        contenu: [
          "Le réchauffement climatique est incontestable : la température moyenne mondiale a déjà augmenté de +1,1 °C par rapport à la période 1850–1900. Cette hausse est plus rapide aux pôles (amplification arctique : +3 à +4 °C), et les événements climatiques extrêmes (vagues de chaleur, précipitations intenses, sécheresses) sont déjà plus fréquents et intenses.",
          "La fonte des glaces est l'une des conséquences les plus visibles. L'Arctique a perdu environ 75 % de son volume de glace de mer estivale depuis 1979. Les glaciers de montagne reculent sur tous les continents. Les inlandsis du Groenland et de l'Antarctique perdent de la masse à un rythme accéléré.",
          "La montée du niveau des océans est due à deux facteurs : la dilatation thermique de l'eau de mer (expansion des océans qui se réchauffent) et l'apport d'eau douce issu de la fonte des glaces continentales. Le niveau moyen des mers a monté de ~20 cm depuis 1900 et s'accélère. Les projections indiquent +0,3 à +1 m d'ici 2100 selon les scénarios.",
          "Les conséquences écologiques incluent : déplacement des aires de répartition des espèces vers les pôles et les altitudes, désynchronisation des phénologies (floraison, migration, éclosion), blanchissement des coraux (mort de l'algue symbiotique par thermostress), acidification des océans (absorption de CO₂ → diminution du pH → calcification difficile pour les organismes à coquille).",
          "Les impacts humains touchent la sécurité alimentaire (sécheresses + événements extrêmes), la santé (extension des maladies à vecteurs : paludisme, dengue), les ressources en eau (fonte des glaciers = perte d'eau douce pour des milliards de personnes), et les migrations climatiques. Les pays les plus vulnérables sont souvent les moins responsables des émissions.",
          "Points clés : 1) Réchauffement observé : +1,1 °C depuis 1850. 2) Amplification arctique : +3 à +4 °C. 3) Montée des mers : +20 cm depuis 1900, +0,3–1 m attendus d'ici 2100. 4) Dilatation thermique + fonte glaces = causes de la montée des mers. 5) Acidification des océans : CO₂ dissous → carbonate diminue → calcification difficile. 6) Pays les plus vulnérables = pas les plus émetteurs (injustice climatique)."
        ]
      },
      {
        titre: "Les modèles climatiques et scénarios du GIEC",
        contenu: [
          "Le GIEC (Groupe d'experts Intergouvernemental sur l'Évolution du Climat) est une organisation internationale créée en 1988. Il évalue les connaissances scientifiques sur le changement climatique et publie des rapports d'évaluation tous les 5 à 7 ans. Ce n'est pas un organisme de recherche mais une instance de synthèse.",
          "Les modèles climatiques (General Circulation Models, GCM) simulent les interactions complexes entre l'atmosphère, les océans, la biosphère et la cryosphère. Ils reposent sur des équations physiques décrivant les transferts d'énergie et de masse. Les modèles modernes ont une résolution de quelques dizaines de kilomètres.",
          "Les scénarios RCP (Representative Concentration Pathways, du 5e rapport AR5) décrivent des trajectoires possibles des concentrations de GES selon différents niveaux d'efforts d'atténuation. RCP 2.6 correspond à une forte réduction des émissions (réchauffement < 2 °C), RCP 4.5 à une réduction modérée, RCP 8.5 à un scénario de statu quo (réchauffement > 4 °C en 2100).",
          "Le 6e rapport du GIEC (AR6, 2021–2023) a adopté de nouveaux scénarios SSP (Shared Socioeconomic Pathways) combinant des trajectoires socio-économiques et d'émissions. Les projections médiane pour +1,5 °C sont atteintes dès les années 2030 dans presque tous les scénarios.",
          "Les incertitudes des projections climatiques sont de trois types : les incertitudes scientifiques (sensibilité climatique = 2,5 à 4 °C pour un doublement de CO₂), les incertitudes des scénarios (dépendent des choix politiques futurs) et les variabilités naturelles du système climatique. Ces incertitudes n'affectent pas la certitude sur la direction du changement (réchauffement), seulement son ampleur.",
          "Points clés : 1) GIEC = synthèse internationale des connaissances climatiques (créé 1988). 2) GCM = modèles simulant les interactions atmosphère-océan-biosphère. 3) RCP 2.6 : < 2 °C / RCP 8.5 : > 4 °C en 2100. 4) AR6 : +1,5 °C atteint dès les années 2030. 5) Sensibilité climatique = 2,5–4 °C pour doublement CO₂. 6) Les incertitudes portent sur l'ampleur, pas sur le sens du changement."
        ]
      },
      {
        titre: "Les solutions : atténuation et adaptation",
        contenu: [
          "Face au réchauffement climatique, deux stratégies complémentaires sont nécessaires : l'atténuation (réduire les émissions de GES pour limiter le réchauffement) et l'adaptation (modifier les comportements et infrastructures pour s'adapter aux changements inévitables).",
          "Les énergies renouvelables (ENR) — solaire, éolien, hydraulique, géothermique, biomasse — permettent de produire de l'électricité sans émission de CO₂ fossile. Leur coût a chuté spectaculairement (le coût du solaire photovoltaïque a baissé de 90 % entre 2010 et 2020). Elles représentent la voie principale de décarbonation du secteur électrique.",
          "L'efficacité énergétique — réduction de la consommation d'énergie pour un même service — est considérée comme le premier gisement de réduction des émissions. Elle passe par l'isolation des bâtiments, les véhicules plus sobres, l'optimisation des procédés industriels. L'Agence Internationale de l'Énergie (AIE) estime qu'elle peut réduire les émissions mondiales de 40 %.",
          "La séquestration carbone englobe les solutions naturelles (reforestation, restauration des tourbières, agriculture de conservation qui stocke le carbone dans les sols) et les solutions technologiques (captage et stockage géologique du CO₂, CCS : Carbon Capture and Storage). Les solutions basées sur la nature peuvent séquestrer jusqu'à 30 % des émissions mondiales actuelles.",
          "L'adaptation inclut la conception de villes résilientes à la chaleur (espaces verts, matériaux réfléchissants, systèmes d'alerte canicule), la protection des littoraux (digues, mangroves), l'adaptation des cultures agricoles (variétés résistantes à la sécheresse), et la gestion durable de l'eau. L'adaptation ne peut se substituer à l'atténuation mais est indispensable pour les changements déjà inévitables.",
          "Points clés : 1) Atténuation = réduire les émissions de GES. 2) Adaptation = s'adapter aux changements inévitables. 3) ENR : solaire + éolien = principales solutions électriques bas-carbone. 4) Efficacité énergétique = 1er gisement de réduction (−40 % potentiel). 5) Séquestration : forêts + CCS technologique. 6) L'adaptation est nécessaire mais ne remplace pas l'atténuation."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Effet de serre', definition: "Phénomène naturel par lequel les gaz à effet de serre absorbent le rayonnement infrarouge terrestre et le réémettent vers la surface. Sans lui, T° terrestre = −18 °C." },
    { terme: 'Gaz à effet de serre', definition: "Molécule atmosphérique (CO₂, CH₄, N₂O, H₂O, O₃) capables d'absorber et de réémettre le rayonnement infrarouge, contribuant à l'effet de serre." },
    { terme: 'CO₂', definition: "Dioxyde de carbone : principal GES d'origine anthropique. Concentration passée de 280 ppm (préindustriel) à 420+ ppm (2023). Durée de vie : siècles à millénaires." },
    { terme: 'Méthane', definition: "CH₄ : GES très puissant (PRG = 28 × CO₂ sur 100 ans). Émis par l'élevage, les rizières, les décharges et l'extraction des combustibles fossiles." },
    { terme: 'Forçage radiatif', definition: "Déséquilibre entre l'énergie entrante et sortante du système climatique dû aux perturbations (GES, aérosols…). Estimé à +2,72 W/m² en 2019 par rapport à 1750." },
    { terme: 'GIEC', definition: "Groupe d'experts Intergouvernemental sur l'Évolution du Climat. Synthétise les connaissances scientifiques sur le changement climatique. Fondé en 1988." },
    { terme: 'RCP', definition: "Representative Concentration Pathways : scénarios du GIEC décrivant les trajectoires futures des concentrations de GES selon différents niveaux d'action climatique." },
    { terme: 'Scénario climatique', definition: "Description cohérente d'un futur climatique possible, dépendant d'hypothèses sur les émissions de GES et les politiques climatiques. Ex : RCP 2.6, RCP 8.5, SSP." },
    { terme: 'Montée des océans', definition: "Élévation du niveau moyen des mers due à la dilatation thermique de l'eau et à la fonte des glaces continentales. +20 cm depuis 1900, +0,3–1 m projeté d'ici 2100." },
    { terme: 'Fonte des glaces', definition: "Réduction de volume des glaciers, de l'Arctique et des inlandsis (Groenland, Antarctique) due au réchauffement climatique. Contribue à la montée des mers et à l'amplification arctique." },
    { terme: 'Énergie renouvelable', definition: "Énergie issue de sources naturelles inépuisables (soleil, vent, eau, géothermie). Principale solution de décarbonation du secteur électrique. Coûts en forte baisse." },
    { terme: 'Séquestration carbone', definition: "Stockage durable du CO₂ atmosphérique dans des réservoirs naturels (forêts, sols, océans) ou artificiels (CCS géologique). Complément indispensable à la réduction des émissions." },
    { terme: 'Atténuation', definition: "Stratégie visant à réduire les émissions de GES pour limiter l'ampleur du réchauffement climatique futur. Inclut les ENR, l'efficacité énergétique, la reforestation." },
    { terme: 'Adaptation', definition: "Stratégie visant à modifier les sociétés, infrastructures et pratiques pour réduire la vulnérabilité aux impacts du changement climatique inévitable." },
    { terme: 'Empreinte carbone', definition: "Quantité totale de GES (en équivalent CO₂) émise directement et indirectement par un individu, une organisation ou un produit tout au long de son cycle de vie." },
  ],
  quiz: [
    {
      question: "Quel est le mécanisme de l'effet de serre ?",
      options: [
        "Les GES bloquent les rayons UV du soleil avant qu'ils atteignent la Terre",
        "Les GES absorbent le rayonnement infrarouge terrestre et le réémettent vers la surface",
        "Les nuages réfléchissent la chaleur émise par la Terre vers l'espace",
        "La vapeur d'eau condense et libère de la chaleur dans l'atmosphère"
      ],
      bonneReponse: 1,
      explication: "Les GES laissent passer le rayonnement solaire visible mais absorbent le rayonnement infrarouge (chaleur) réémis par la Terre. Ils le réémettent dans toutes les directions, notamment vers la surface, augmentant sa température."
    },
    {
      question: "Quelle est la concentration actuelle de CO₂ dans l'atmosphère (2023) ?",
      options: ["~280 ppm", "~350 ppm", "~420 ppm", "~500 ppm"],
      bonneReponse: 2,
      explication: "En 2023, la concentration de CO₂ atmosphérique dépasse 420 ppm, contre ~280 ppm à l'ère préindustrielle. Cette hausse de 50 % est entièrement due aux activités humaines (combustibles fossiles, déforestation)."
    },
    {
      question: "Quelles sont les deux causes de la montée du niveau des mers ?",
      options: [
        "L'augmentation des pluies et la déforestation des côtes",
        "La dilatation thermique de l'eau et la fonte des glaces continentales",
        "La pollution des océans et la modification des courants marins",
        "L'augmentation de la salinité et la réduction de l'évaporation"
      ],
      bonneReponse: 1,
      explication: "La montée des mers a deux causes : la dilatation thermique (l'eau se dilate quand elle se réchauffe) et l'apport d'eau douce issu de la fonte des inlandsis (Groenland, Antarctique) et des glaciers de montagne."
    },
    {
      question: "Qu'est-ce que le scénario RCP 8.5 du GIEC ?",
      options: [
        "Un scénario de forte réduction des émissions avec réchauffement < 2 °C",
        "Un scénario de statu quo sans action climatique avec réchauffement > 4 °C",
        "Un scénario intermédiaire avec réchauffement de 2,5 °C",
        "Un scénario de stabilisation des émissions actuelles"
      ],
      bonneReponse: 1,
      explication: "Le RCP 8.5 correspond au scénario le plus pessimiste (business as usual) avec des émissions très élevées tout au long du 21e siècle, conduisant à un forçage radiatif de 8,5 W/m² et un réchauffement supérieur à 4 °C d'ici 2100."
    },
    {
      question: "Quelle différence existe-t-il entre atténuation et adaptation au changement climatique ?",
      options: [
        "L'atténuation concerne les pays riches, l'adaptation les pays pauvres",
        "L'atténuation vise à réduire les émissions pour limiter le réchauffement ; l'adaptation vise à s'ajuster aux changements inévitables",
        "L'atténuation est technologique, l'adaptation est politique",
        "Ce sont deux termes synonymes pour désigner la même stratégie"
      ],
      bonneReponse: 1,
      explication: "L'atténuation cherche à limiter les causes du réchauffement (réduction des GES). L'adaptation cherche à réduire la vulnérabilité aux impacts déjà inévitables. Les deux stratégies sont complémentaires et nécessaires."
    }
  ],
  texteTrous: {
    paragraphe: "L'[effet de serre] est un phénomène [naturel] indispensable à la vie. Les [gaz à effet de serre] comme le [CO₂] et le [méthane] absorbent le rayonnement [infrarouge] terrestre. Depuis la révolution industrielle, les activités humaines ont fait passer le CO₂ de 280 à plus de [420] ppm. Cela entraîne un [réchauffement] de +1,1 °C déjà observé, une [montée des océans] et une fonte des [glaces]. Le [GIEC] évalue les connaissances scientifiques et publie des [scénarios] climatiques pour guider les politiques d'[atténuation].",
    banqueMots: ['effet de serre', 'naturel', 'gaz à effet de serre', 'CO₂', 'méthane', 'infrarouge', '420', 'réchauffement', 'montée des océans', 'glaces', 'GIEC', 'scénarios', 'atténuation']
  }
};

// ===== CHAPITRE 12 : La reconstitution de l'histoire géologique =====

export const chapitre12 = {
  id: 'ch12',
  titre: "La reconstitution de l'histoire géologique",
  description: "Datation des roches, tectonique des plaques et histoire de la Terre.",
  cours: {
    sections: [
      {
        titre: "La chronologie stratigraphique",
        contenu: [
          "La stratigraphie est la science qui étudie les couches sédimentaires (strates) et leur succession dans le temps. Elle constitue le fondement de la chronologie géologique relative, permettant d'ordonner les événements sans connaître leur âge absolu.",
          "Le principe de superposition, formulé par Nicolas Sténon (1669), stipule que dans une série sédimentaire non perturbée, les couches les plus profondes sont les plus anciennes et les couches superficielles les plus récentes. Ce principe simple mais puissant est la base de la chronologie relative.",
          "Les discontinuités stratigraphiques sont des interruptions dans la sédimentation continue. Une lacune stratigraphique (hiatus) indique une période d'érosion ou de non-dépôt. Une discordance angulaire signale une période de déformation (plissement, faillage) suivie d'une érosion avant la reprise de la sédimentation.",
          "La biostratigraphie utilise les fossiles pour affiner la chronologie relative. Les fossiles stratigraphiques (ou fossiles guides) sont des espèces ayant existé sur une courte période (haute résolution temporelle) et présentes sur de vastes zones géographiques (permettant des corrélations entre bassins éloignés). Les ammonites, les graptolites, les trilobites et les foraminifères planctoniques sont des fossiles guides classiques.",
          "La corrélation stratigraphique permet de relier des couches sédimentaires géographiquement séparées en se basant sur leur contenu fossilifère et leur lithologie. Cela a permis d'établir des échelles stratigraphiques régionales puis mondiales, fondées sur la succession des faunes et des flores fossiles.",
          "Points clés : 1) Stratigraphie = science des couches sédimentaires et de leur succession. 2) Principe de superposition = couches profondes = plus anciennes. 3) Lacune = interruption de sédimentation. 4) Fossile stratigraphique = courte durée + large répartition géographique. 5) Biostratigraphie = datation relative par les fossiles. 6) Corrélation = mise en relation de couches éloignées géographiquement."
        ]
      },
      {
        titre: "La datation absolue par radiochronologie",
        contenu: [
          "La radiochronologie est la méthode de datation absolue des roches basée sur la désintégration radioactive des isotopes instables. Elle donne des âges en millions (Ma) ou milliards (Ga) d'années, avec des marges d'incertitude.",
          "Le principe repose sur la désintégration radioactive : un atome radioactif (isotope père) se transforme spontanément en un atome stable (isotope fils) à une vitesse constante, indépendante de la température, de la pression et des conditions chimiques. Cette constance en fait une horloge absolue.",
          "La demi-vie (T½) est le temps nécessaire pour que la moitié des atomes d'un isotope radioactif se désintègrent. Après n demi-vies, il reste (½)ⁿ de l'isotope initial. La demi-vie est spécifique à chaque isotope radioactif et varie de quelques secondes à plusieurs milliards d'années.",
          "La méthode uranium-plomb (U-Pb) utilise la désintégration de ²³⁸U en ²⁰⁶Pb (T½ = 4,47 Ga) et de ²³⁵U en ²⁰⁷Pb (T½ = 703 Ma). Elle est utilisée pour dater les zircons des roches magmatiques et métamorphiques et couvre toute l'histoire de la Terre (jusqu'à 4,5 Ga).",
          "La méthode potassium-argon (K-Ar) utilise la désintégration de ⁴⁰K en ⁴⁰Ar (T½ = 1,25 Ga). Elle est particulièrement utile pour les roches volcaniques et permet de dater des événements de quelques milliers à des milliards d'années. Le carbone-14 (T½ = 5 730 ans) est réservé aux matières organiques < 50 000 ans.",
          "Points clés : 1) Radiochronologie = datation absolue par désintégration radioactive. 2) Vitesse de désintégration = constante (horloge absolue). 3) Demi-vie = temps pour désintégrer 50 % des atomes. 4) U-Pb : jusqu'à 4,5 Ga (histoire totale de la Terre). 5) K-Ar : roches volcaniques (quelques ka à Ga). 6) ¹⁴C : matières organiques < 50 000 ans seulement."
        ]
      },
      {
        titre: "Les reconstitutions paléogéographiques",
        contenu: [
          "La paléogéographie reconstitue la position et la forme des continents au cours des temps géologiques. Elle est fondée sur de multiples indices convergents qui ont conduit à l'élaboration de la théorie de la tectonique des plaques.",
          "Alfred Wegener proposa en 1912 la théorie de la dérive des continents : les continents actuels étaient réunis en un supercontinent unique, la Pangée, et se sont progressivement fragmentés et déplacés. Il s'appuyait sur la complémentarité des côtes (notamment Amérique du Sud et Afrique), la similitude des faunes et flores fossiles des deux côtés de l'Atlantique, et la présence des mêmes types de roches sur des continents séparés.",
          "Le paléomagnétisme est un outil puissant de reconstitution paléogéographique. Quand une roche magmatique se solidifie, les minéraux ferromagnétiques (magnétite) s'aimantent selon la direction du champ magnétique terrestre de l'époque. Cette aimantation fossile (rémanente) constitue une boussole géologique.",
          "Les anomalies magnétiques symétriques de part et d'autre des dorsales océaniques ont permis de démontrer l'expansion des fonds océaniques (hypothèse de Hess, 1962). La croûte océanique est créée aux dorsales et enregistre les inversions du champ magnétique terrestre (qui se produit tous les centaines de milliers d'années), formant un code-barres magnétique.",
          "La comparaison des données paléomagnétiques, biostratigraphiques, géochimiques et géophysiques permet de reconstituer la position des continents et des océans à n'importe quelle époque. Ces reconstitutions montrent que les continents ont subi des déplacements de plusieurs milliers de kilomètres sur des dizaines à centaines de millions d'années.",
          "Points clés : 1) Wegener (1912) : dérive des continents, Pangée. 2) Preuves : complémentarité des côtes, fossiles, roches identiques sur continents séparés. 3) Paléomagnétisme : aimantation fossile des roches = boussole géologique. 4) Anomalies magnétiques symétriques = expansion des fonds océaniques. 5) Inversions du champ magnétique : code-barres temporel. 6) Reconstitutions paléogéographiques = convergence de multiples indicateurs."
        ]
      },
      {
        titre: "La tectonique des plaques comme moteur",
        contenu: [
          "La tectonique des plaques est la théorie unificatrice de la géologie moderne. Elle décrit la lithosphère (croûte + manteau supérieur rigide) divisée en une douzaine de grandes plaques rigides en mouvement les unes par rapport aux autres sur l'asthénosphère (manteau ductile).",
          "Les dorsales océaniques sont des reliefs sous-marins où deux plaques s'écartent (divergence). Du magma monte depuis le manteau, se solidifie et forme de la nouvelle croûte océanique basaltique. La dorsale médio-atlantique est l'exemple emblématique, avec un écartement de ~2,5 cm/an. Ce processus s'appelle l'accrétion océanique.",
          "La subduction se produit là où deux plaques convergent et où la plus dense (généralement la croûte océanique) plonge sous l'autre dans le manteau. Elle est caractérisée par des fosses océaniques (Fosse des Mariannes), un volcanisme d'arc insulaire et une intense sismicité. La croûte plongeante se réchauffe, libère de l'eau qui favorise la fusion partielle du manteau sus-jacent.",
          "La collision continentale se produit quand deux plaques portant des croûtes continentales (moins denses) convergent. Sans subduction possible, les deux croûtes se froissent et s'épaississent, formant de grandes chaînes de montagnes (orogenèse). La chaîne himalayenne résulte de la collision entre la plaque indienne et la plaque eurasiatique, débutée il y a ~50 Ma.",
          "Le cycle de Wilson décrit l'ouverture et la fermeture des océans sur des cycles de plusieurs centaines de millions d'années. Il comprend : rifting (déchirement d'un continent) → ouverture d'un océan → expansion → subduction → fermeture → collision. La Téthys (fermée), la Méditerranée (en fermeture) et l'Atlantique (en ouverture) illustrent différentes phases de ce cycle.",
          "Points clés : 1) Lithosphère divisée en ~12 plaques rigides en mouvement. 2) Dorsales = divergence = accrétion de croûte océanique. 3) Subduction = convergence + plongée de la plaque dense. 4) Collision = deux croûtes continentales → orogenèse (montagnes). 5) Cycle de Wilson = ouverture-fermeture des océans sur ~100–500 Ma. 6) L'Himalaya = collision Inde-Eurasie (depuis ~50 Ma)."
        ]
      },
      {
        titre: "L'histoire géologique de la Terre",
        contenu: [
          "La Terre s'est formée il y a 4,56 milliards d'années par accrétion de planétésimaux autour du Soleil naissant. L'histoire géologique est divisée en éons, ères, périodes et étages, formant l'échelle stratigraphique internationale.",
          "L'Archéen (4,0–2,5 Ga) est le plus ancien éon clairement documenté. La Terre était encore très différente : une atmosphère sans oxygène libre, des oceans chauds, une activité volcanique intense et la formation des premiers cratons (noyaux stables de croûte continentale). Les premières traces de vie (stromatolithes = biofilms de cyanobactéries) datent d'environ 3,5 Ga.",
          "Le Protérozoïque (2,5 Ga – 541 Ma) voit la Grande Oxydation (~2,4 Ga) : les cyanobactéries photosynthétiques enrichissent l'atmosphère en O₂, transformant radicalement la biosphère. Les eucaryotes (cellules à noyau) apparaissent vers 2 Ga, et les premiers organismes pluricellulaires vers 600 Ma (faune d'Édiacara).",
          "Le Paléozoïque (541–252 Ma) est l'ère des 'vieilles vies'. Il voit l'explosion cambrienne (apparition soudaine de la plupart des plans d'organisation animaux), la colonisation des terres émergées par les plantes (~475 Ma) puis les animaux (~375 Ma), et plusieurs extinctions de masse. Il se termine par la plus grande extinction connue (fin-Permien, ~90 % des espèces marines disparaissent).",
          "Le Mésozoïque (252–66 Ma), ou ère des reptiles, est dominé par les dinosaures. L'Atlantique s'ouvre (Trias–Jurassique), les angiospermes apparaissent au Crétacé, les premiers mammifères sont déjà présents mais discrets. Cette ère se clôt par l'extinction Crétacé-Paléogène (K-Pg), causée par l'impact de la météorite de Chicxulub, qui élimine les dinosaures non aviens.",
          "Le Cénozoïque (66 Ma – aujourd'hui) est l'ère des mammifères. La diversification explosive des mammifères et des oiseaux suit l'extinction des dinosaures. L'Himalaya se soulève, la Téthys se ferme pour former la Méditerranée, les calottes polaires se forment. L'Homo sapiens apparaît vers 300 000 ans BP et impose un impact géologique inédit (Anthropocène).",
          "Points clés : 1) Terre formée il y a 4,56 Ga. 2) Archéen : premiers cratons, vie anaérobie, stromatolithes. 3) Protérozoïque : Grande Oxydation, eucaryotes. 4) Paléozoïque : explosion cambrienne, colonisation des terres, extinction fin-Permien. 5) Mésozoïque : âge des dinosaures, ouverture Atlantique, extinction K-Pg. 6) Cénozoïque : radiation des mammifères, Himalaya, Homo sapiens."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Stratigraphie', definition: "Science étudiant les couches sédimentaires, leur succession et leur signification temporelle. Fondement de la chronologie géologique relative." },
    { terme: 'Superposition', definition: "Principe stratigraphique (Sténon, 1669) : dans une série non perturbée, les couches profondes sont plus anciennes que les couches superficielles." },
    { terme: 'Fossile stratigraphique', definition: "Espèce fossile de courte durée géologique et large répartition géographique. Sert à dater et corréler les couches sédimentaires (ex : ammonite, graptolite)." },
    { terme: 'Radiochronologie', definition: "Datation absolue des roches et minéraux par mesure du rapport entre isotopes radioactifs pères et isotopes fils stables issus de leur désintégration." },
    { terme: 'Demi-vie', definition: "Temps nécessaire pour que la moitié des atomes d'un isotope radioactif se désintègrent. Constante pour chaque isotope. Utilisée pour calculer l'âge des roches." },
    { terme: 'Paléomagnétisme', definition: "Étude de l'aimantation fossile des roches, enregistrée lors de leur formation selon le champ magnétique terrestre de l'époque. Permet des reconstitutions paléogéographiques." },
    { terme: 'Dérive des continents', definition: "Théorie de Wegener (1912) : les continents actuels étaient réunis en la Pangée et se sont déplacés. Précurseur de la tectonique des plaques." },
    { terme: 'Tectonique des plaques', definition: "Théorie unificatrice de la géologie : la lithosphère est divisée en plaques rigides en mouvement sur l'asthénosphère, entraînant séismes, volcanisme et orogenèse." },
    { terme: 'Dorsale', definition: "Relief sous-marin linéaire où deux plaques divergent. Siège de la création de croûte océanique basaltique par accrétion. Ex : dorsale médio-atlantique." },
    { terme: 'Subduction', definition: "Plongée d'une plaque lithosphérique dense (croûte océanique) sous une plaque moins dense lors d'une convergence. Génère séismes, volcans d'arc et fosses océaniques." },
    { terme: 'Cycle de Wilson', definition: "Cycle géologique d'ouverture et fermeture des océans sur ~100–500 Ma : rifting → expansion → subduction → collision → cicatrice orogénique." },
    { terme: 'Ère géologique', definition: "Division majeure de l'échelle des temps géologiques. Les quatre ères du Phanérozoïque sont : Paléozoïque, Mésozoïque, Cénozoïque (+ Précambrien)." },
    { terme: 'Archéen', definition: "Éon géologique de 4,0 à 2,5 Ga. Caractérisé par les premiers cratons continentaux, une atmosphère sans O₂ libre et les premières traces de vie (stromatolithes)." },
    { terme: 'Mésozoïque', definition: "Ère géologique de 252 à 66 Ma. Âge des dinosaures et des reptiles marins. Ouverture de l'Atlantique, apparition des angiospermes. Se termine par l'extinction K-Pg." },
    { terme: 'Cénozoïque', definition: "Ère géologique de 66 Ma à aujourd'hui. Radiation des mammifères après extinction des dinosaures. Soulèvement de l'Himalaya, glaciations, apparition d'Homo sapiens." },
  ],
  quiz: [
    {
      question: "Quel principe stratigraphique permet d'ordonner les couches sédimentaires dans le temps ?",
      options: [
        "Le principe d'actualisme",
        "Le principe de superposition",
        "Le principe de filiation",
        "Le principe d'isostasie"
      ],
      bonneReponse: 1,
      explication: "Le principe de superposition (Sténon, 1669) stipule que dans une série sédimentaire non perturbée, les couches les plus profondes sont les plus anciennes. C'est le fondement de la chronologie stratigraphique relative."
    },
    {
      question: "Quelle méthode radiométrique est utilisée pour dater des roches vieilles de plusieurs milliards d'années ?",
      options: ["Le carbone-14", "Le plomb-207", "L'uranium-plomb (U-Pb)", "Le potassium-sodium"],
      bonneReponse: 2,
      explication: "La méthode U-Pb utilise la désintégration de ²³⁸U en ²⁰⁶Pb (T½ = 4,47 Ga). Elle peut couvrir toute l'histoire de la Terre jusqu'à 4,5 Ga, contrairement au ¹⁴C limité à ~50 000 ans."
    },
    {
      question: "Qu'est-ce que la subduction ?",
      options: [
        "La création de croûte océanique aux dorsales",
        "Le glissement d'une plaque dense sous une plaque moins dense lors d'une convergence",
        "La collision de deux plaques continentales formant des montagnes",
        "L'écartement de deux plaques le long d'une faille transformante"
      ],
      bonneReponse: 1,
      explication: "La subduction se produit quand deux plaques convergent et que la plus dense (croûte océanique) plonge sous la moins dense. Elle génère des fosses océaniques, un volcanisme d'arc et une intense sismicité."
    },
    {
      question: "Qu'est-ce que le cycle de Wilson ?",
      options: [
        "Le cycle des saisons causé par la révolution de la Terre",
        "Le cycle de respiration des grands mammifères marins",
        "Le cycle d'ouverture et de fermeture des océans sur plusieurs centaines de millions d'années",
        "Le cycle de renouvellement de la croûte continentale par érosion"
      ],
      bonneReponse: 2,
      explication: "Le cycle de Wilson décrit l'ouverture (rifting, expansion) et la fermeture (subduction, collision) des bassins océaniques sur des cycles de 100 à 500 Ma. La Téthys (fermée), la Méditerranée (en fermeture) et l'Atlantique (en ouverture) illustrent ce cycle."
    },
    {
      question: "Quelle extinction de masse marque la fin du Mésozoïque ?",
      options: [
        "L'extinction fin-Permien (disparition de 90 % des espèces marines)",
        "L'extinction Ordovicien-Silurien (glaciation)",
        "L'extinction Crétacé-Paléogène (K-Pg), liée à l'impact de Chicxulub",
        "L'explosion cambrienne (apparition soudaine des phyla)"
      ],
      bonneReponse: 2,
      explication: "L'extinction K-Pg (il y a 66 Ma) marque la fin du Mésozoïque. Elle est liée à l'impact de la météorite de Chicxulub (Mexique) et aux trapps du Deccan (Inde). Elle a éliminé les dinosaures non aviens, ouvrant la voie à la radiation des mammifères."
    }
  ],
  texteTrous: {
    paragraphe: "La [stratigraphie] est la science qui étudie les couches [sédimentaires] et leur succession. Le principe de [superposition] stipule que les couches profondes sont les plus [anciennes]. Les [fossiles stratigraphiques] permettent de dater et corréler les couches. La [radiochronologie] utilise la [désintégration] radioactive pour obtenir des âges absolus. La [tectonique des plaques] explique la formation des [dorsales] (création de croûte) et la [subduction] (destruction de croûte). L'histoire de la Terre s'étend sur 4,56 milliards d'années, depuis l'[Archéen] jusqu'au [Cénozoïque].",
    banqueMots: ['stratigraphie', 'sédimentaires', 'superposition', 'anciennes', 'fossiles stratigraphiques', 'radiochronologie', 'désintégration', 'tectonique des plaques', 'dorsales', 'subduction', 'Archéen', 'Cénozoïque']
  }
};

export const chapitre13 = {
  id: 'ch13',
  titre: 'La contraction musculaire',
  description: 'Ultrastructure du muscle strié squelettique, mécanisme moléculaire de la contraction et pathologies musculaires.',
  cours: {
    sections: [
      {
        titre: "L'organisation du muscle strié squelettique",
        contenu: [
          "Le muscle strié squelettique est composé de faisceaux de fibres musculaires, elles-mêmes formées de myofibrilles. Chaque myofibrille est constituée d'une répétition régulière d'unités contractiles appelées sarcomères, délimitées par des structures protéiques appelées disques Z.",
          "Le sarcomère est l'unité fonctionnelle de la contraction musculaire. Il est composé de deux types de myofilaments : les filaments épais de myosine et les filaments fins d'actine. La myosine possède des têtes globulaires qui peuvent se lier à l'actine et hydrolyser l'ATP pour générer la force de contraction.",
          "Les filaments d'actine sont associés à deux protéines régulatrices : la tropomyosine (qui bloque les sites de liaison de l'actine au repos) et la troponine (complexe de trois protéines dont une se lie au calcium Ca²⁺). Au repos, la tropomyosine cache les sites de liaison de l'actine, empêchant la contraction.",
          "L'organisation microscopique du sarcomère donne au muscle strié son aspect strié caractéristique : les bandes sombres A (myosine + actine) alternent avec les bandes claires I (actine seule). La bande H (au centre, myosine seule) et la ligne M (protéines d'ancrage de la myosine) complètent la structure.",
          "Points clés : 1) Muscle → faisceaux → fibres → myofibrilles → sarcomères. 2) Sarcomère délimité par des disques Z. 3) Filaments épais = myosine (têtes ATPasiques). 4) Filaments fins = actine + tropomyosine + troponine. 5) La tropomyosine bloque les sites actine au repos. 6) Aspect strié = alternance bandes A et I."
        ]
      },
      {
        titre: "Le mécanisme moléculaire de la contraction",
        contenu: [
          "La théorie des filaments glissants (Huxley et Hanson, 1954) explique la contraction musculaire par le glissement des filaments d'actine entre les filaments de myosine, sans que les filaments eux-mêmes ne se raccourcissent. Ce glissement raccourcit le sarcomère et donc le muscle.",
          "Le cycle d'attachement-pivotement-détachement de la tête de myosine est le moteur moléculaire de la contraction. En présence de Ca²⁺ et d'ATP : 1) La tête de myosine se lie à l'actine (pont actomyosine). 2) Le pivot de la tête fait glisser le filament d'actine (coup de rame). 3) L'ATP se lie à la tête de myosine → détachement. 4) L'hydrolyse de l'ATP → ADP + Pi recharge la tête pour un nouveau cycle.",
          "Le calcium (Ca²⁺) joue un rôle déclencheur crucial. En réponse à un potentiel d'action, le Ca²⁺ est libéré depuis le réticulum sarcoplasmique (réseau membranaire entourant les myofibrilles) dans le cytosol. Le Ca²⁺ se lie à la troponine, qui modifie la position de la tropomyosine, démasquant les sites de liaison sur l'actine.",
          "→ ATP + H₂O → ADP + Pi + énergie (utilisée pour le pivot de la tête de myosine)",
          "La rigidité cadavérique (rigor mortis) illustre l'importance de l'ATP : après la mort, l'arrêt de la production d'ATP empêche le détachement des têtes de myosine de l'actine — les muscles restent contractés jusqu'à la décomposition des protéines.",
          "Points clés : 1) Contraction = glissement des filaments (sans raccourcissement des filaments eux-mêmes). 2) Ca²⁺ lève l'inhibition de la tropomyosine. 3) Cycle tête de myosine : liaison → pivot → détachement (nécessite ATP). 4) 1 ATP consommé par cycle. 5) Sans ATP → rigor mortis. 6) La force produite est proportionnelle au nombre de ponts actomyosine formés simultanément."
        ]
      },
      {
        titre: "La commande nerveuse de la contraction",
        contenu: [
          "La contraction musculaire est déclenchée par un signal nerveux issu d'un motoneurone. La jonction entre le motoneurone et la fibre musculaire s'appelle la plaque motrice (ou jonction neuromusculaire). C'est une synapse chimique spécialisée.",
          "Lorsqu'un potentiel d'action arrive à la terminaison du motoneurone, il déclenche la libération d'acétylcholine (ACh) dans la fente synaptique. L'ACh se lie aux récepteurs nicotiniques de la membrane musculaire, provoquant une dépolarisation locale (potentiel de plaque motrice) qui génère un potentiel d'action musculaire.",
          "Le potentiel d'action musculaire se propage le long de la membrane de la fibre musculaire et pénètre en profondeur via les tubules T (invaginations de la membrane). Cette dépolarisation atteint le réticulum sarcoplasmique et déclenche la libération du Ca²⁺ stocké dans sa lumière.",
          "Un seul potentiel d'action nerveux déclenche une seule secousse musculaire (contraction brève suivie d'un relâchement). En pratique, les motoneurones envoient des trains de potentiels d'action à haute fréquence, ce qui provoque une fusion des secousses (tétanos incomplet, puis complet) — la force développée augmente avec la fréquence de stimulation.",
          "Points clés : 1) Motoneurone → plaque motrice → fibre musculaire. 2) ACh déclenche le potentiel d'action musculaire. 3) Potentiel d'action → tubules T → réticulum sarcoplasmique → libération Ca²⁺. 4) Ca²⁺ → troponine → levée inhibition → contraction. 5) Secousse unique = 1 PA. 6) Tétanos = fusion des secousses à haute fréquence."
        ]
      },
      {
        titre: "La fatigue musculaire et la relation force-longueur",
        contenu: [
          "La force développée par un sarcomère dépend de sa longueur initiale : c'est la relation force-longueur. La force est maximale pour une longueur intermédiaire (chevauchement optimal des filaments d'actine et myosine) et diminue si le sarcomère est trop étiré (peu de chevauchement) ou trop raccourci (chevauchement excessif).",
          "La sommation spatiale des unités motrices détermine la force totale d'un muscle. Une unité motrice est l'ensemble formé d'un motoneurone et de toutes les fibres musculaires qu'il innerve. Un muscle peut moduler sa force en recrutant plus ou moins d'unités motrices.",
          "La fatigue musculaire est un phénomène complexe, multifactoriel. Lors d'un exercice prolongé ou intense : l'ATP est épuisé localement, le lactate et les ions H⁺ s'accumulent (baisse du pH intracellulaire), le Ca²⁺ devient moins bien libéré, et les réserves de phosphocréatine s'épuisent. La fatigue est aussi centrale (fatigue nerveuse).",
          "La courbature apparaît 24–48 heures après un exercice intense ou inhabituel, notamment excentrique (contractions d'allongement). Elle résulte de microlésions des sarcomères et des disques Z, suivies d'une inflammation locale. Elle n'est pas liée à l'accumulation de lactate (qui est éliminé en moins d'une heure).",
          "Points clés : 1) Force optimale = chevauchement optimal actine-myosine. 2) Force modulée par recrutement des unités motrices et fréquence de stimulation. 3) Fatigue = accumulation H⁺ + déplétion ATP + Ca²⁺ réduit. 4) Courbature = microlésions sarcomériques (24-48h après effort). 5) Courbature ≠ lactate. 6) La période réfractaire limite la fréquence maximale de stimulation."
        ]
      },
      {
        titre: "Les myopathies et pathologies musculaires",
        contenu: [
          "Les myopathies sont des maladies du muscle qui altèrent leur structure et/ou leur fonctionnement. Elles peuvent être d'origine génétique (myopathies héréditaires), auto-immune (myasthénie), inflammatoire (myosite) ou métabolique.",
          "La dystrophie musculaire de Duchenne (DMD) est la myopathie génétique la plus fréquente (1/3500 naissances masculines). Elle est due à des mutations du gène codant la dystrophine, protéine qui ancre le cytosquelette d'actine à la membrane de la fibre musculaire. Sans dystrophine, les fibres subissent des lésions mécaniques répétées lors des contractions et dégénèrent progressivement.",
          "La myasthénie grave est une maladie auto-immune où des anticorps attaquent les récepteurs à l'acétylcholine de la plaque motrice. La transmission neuromusculaire est perturbée : la force musculaire diminue progressivement au cours d'un effort répété, avec une fatigabilité anormale. Les muscles des yeux et de la déglutition sont souvent atteints en premier.",
          "Les crampes musculaires sont des contractions involontaires, douloureuses et soudaines d'un muscle. Elles surviennent lors d'un effort intense, d'une déshydratation, d'un manque d'électrolytes (Na⁺, K⁺, Mg²⁺) ou d'une position prolongée. Elles ne sont pas dangereuses mais signalent un déséquilibre hydroélectrolytique ou une fatigue musculaire.",
          "Points clés : 1) DMD = mutation gène dystrophine → dégénérescence progressive. 2) Dystrophine = lien actine-membrane. 3) Myasthénie = auto-immune → anti-récepteurs ACh. 4) Myasthénie = fatigabilité anormale à l'effort. 5) Crampe = contraction involontaire liée à l'épuisement ou aux électrolytes. 6) La thérapie génique est une piste prometteuse pour la DMD."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Sarcomère', definition: "Unité contractile du muscle strié squelettique, délimitée par deux disques Z. Formé de filaments d'actine et de myosine dont le glissement produit la contraction." },
    { terme: 'Myofibrille', definition: "Composant cylindrique de la fibre musculaire, formé d'une succession de sarcomères alignés en série. Responsable de la strie caractéristique du muscle." },
    { terme: 'Actine', definition: "Protéine du filament fin du sarcomère. Polymérisée en double hélice, elle possède des sites de liaison pour les têtes de myosine, sites bloqués au repos par la tropomyosine." },
    { terme: 'Myosine', definition: "Protéine motrice du filament épais du sarcomère. Ses têtes ATPasiques se lient à l'actine, pivotent (coup de rame) et font glisser les filaments lors de la contraction." },
    { terme: 'Théorie des filaments glissants', definition: "Modèle expliquant la contraction musculaire par le glissement des filaments d'actine entre les filaments de myosine, raccourcissant le sarcomère sans changer la longueur des filaments." },
    { terme: 'Tête de myosine', definition: "Domaine globulaire de la myosine possédant une activité ATPasique et un site de liaison à l'actine. Elle effectue un mouvement de pivot (cycle d'attachement-détachement) consommant 1 ATP par cycle." },
    { terme: 'Plaque motrice', definition: "Synapse spécialisée entre l'axone d'un motoneurone et la membrane d'une fibre musculaire. L'acétylcholine libérée déclenche un potentiel d'action musculaire." },
    { terme: 'Acétylcholine (ACh)', definition: "Neurotransmetteur libéré à la plaque motrice. Se lie aux récepteurs nicotiniques de la fibre musculaire, provoquant une dépolarisation qui déclenche la contraction." },
    { terme: 'Réticulum sarcoplasmique', definition: "Réseau de citernes membranaires entourant les myofibrilles dans la fibre musculaire. Stocke et libère le Ca²⁺ en réponse au potentiel d'action musculaire." },
    { terme: 'Calcium (Ca²⁺)', definition: "Ion déclencheur de la contraction musculaire. Libéré depuis le réticulum sarcoplasmique, il se lie à la troponine, déplaçant la tropomyosine et exposant les sites de liaison sur l'actine." },
    { terme: 'Tétanos musculaire', definition: "Fusion des secousses musculaires lors d'une stimulation à haute fréquence. Le tétanos complet donne une contraction soutenue maximale — différent du tétanos infectieux (maladie)." },
    { terme: 'Fatigue musculaire', definition: "Diminution progressive de la capacité à développer de la force lors d'un exercice prolongé. Multifactorielle : accumulation de H⁺, déplétion ATP, épuisement Ca²⁺, fatigue centrale." },
    { terme: 'Dystrophine', definition: "Protéine structurale ancrant le cytosquelette d'actine à la membrane de la fibre musculaire. Son absence (mutation) cause la dystrophie musculaire de Duchenne." },
    { terme: 'Myasthénie', definition: "Maladie auto-immune : des anticorps détruisent les récepteurs à l'acétylcholine de la plaque motrice. Provoque une fatigabilité musculaire anormale à l'effort." },
    { terme: 'Unité motrice', definition: "Ensemble d'un motoneurone et de toutes les fibres musculaires qu'il innerve. Unité de base du contrôle de la force musculaire par recrutement et fréquence." },
  ],
  quiz: [
    {
      question: "Quelle est l'unité contractile de base du muscle strié squelettique ?",
      options: ["La fibre musculaire", "La myofibrille", "Le sarcomère", "Le faisceau musculaire"],
      bonneReponse: 2,
      explication: "Le sarcomère est l'unité contractile délimitée par deux disques Z. Il contient les filaments d'actine et de myosine dont le glissement produit la contraction selon la théorie des filaments glissants."
    },
    {
      question: "Quel est le rôle du calcium (Ca²⁺) dans la contraction musculaire ?",
      options: [
        "Il hydrolyse l'ATP pour fournir l'énergie",
        "Il forme des ponts entre les filaments d'actine et les disques Z",
        "Il se lie à la troponine, déplaçant la tropomyosine et exposant les sites de liaison sur l'actine",
        "Il provoque la dépolarisation de la membrane musculaire"
      ],
      bonneReponse: 2,
      explication: "Le Ca²⁺ libéré du réticulum sarcoplasmique se lie à la troponine du filament fin. Cela provoque un déplacement de la tropomyosine qui démasque les sites de liaison de l'actine, permettant aux têtes de myosine de s'attacher et de déclencher la contraction."
    },
    {
      question: "Quelle maladie génétique est due à l'absence de dystrophine ?",
      options: ["La myasthénie grave", "La dystrophie musculaire de Duchenne", "La sclérose en plaques", "La tétanie"],
      bonneReponse: 1,
      explication: "La dystrophie musculaire de Duchenne (DMD) est causée par des mutations du gène DMD codant la dystrophine. Cette protéine assure l'ancrage du cytosquelette à la membrane — son absence provoque la dégénérescence progressive des fibres musculaires."
    },
    {
      question: "Que se passe-t-il lorsqu'un muscle est stimulé à une fréquence très élevée ?",
      options: [
        "Les fibres musculaires se rompent",
        "Le muscle produit un tétanos (fusion des secousses) avec une force maximale soutenue",
        "Le muscle entre en période réfractaire et ne répond plus",
        "La plaque motrice libère trop d'acétylcholine et provoque une paralysie"
      ],
      bonneReponse: 1,
      explication: "Quand la fréquence de stimulation est suffisamment élevée, les secousses musculaires se fusionnent (tétanos incomplet puis complet). La contraction devient soutenue et la force développée est maximale — c'est le régime de travail normal des muscles dans les activités physiques intenses."
    },
    {
      question: "Pourquoi les courbatures apparaissent-elles 24 à 48 heures après l'effort, et non pendant ?",
      options: [
        "Car l'accumulation de lactate est lente et atteint son pic après 24 h",
        "Car elles résultent de microlésions sarcomériques suivies d'une inflammation locale qui prend du temps à se développer",
        "Car les fibres musculaires mettent du temps à manquer d'ATP",
        "Car le calcium met 24 h à être recapté par le réticulum sarcoplasmique"
      ],
      bonneReponse: 1,
      explication: "Les courbatures résultent de microlésions des sarcomères et des disques Z (surtout lors de contractions excentriques), suivies d'une réponse inflammatoire locale. Cette inflammation met 24–48 h à se développer. Le lactate, souvent accusé à tort, est éliminé en moins d'une heure après l'effort."
    }
  ],
  texteTrous: {
    paragraphe: "Le [sarcomère] est l'unité contractile du muscle strié, délimité par des disques Z. Il contient des filaments épais de [myosine] et des filaments fins d'[actine]. Lors de la contraction, le [calcium] libéré depuis le [réticulum sarcoplasmique] se lie à la [troponine], déplaçant la [tropomyosine] pour exposer les sites de liaison. Les têtes de myosine se fixent à l'actine, pivotent (coup de rame) en consommant de l'[ATP], puis se détachent. Ce glissement raccourcit le sarcomère. La commande nerveuse arrive via la [plaque motrice], où l'[acétylcholine] déclenche le potentiel d'action musculaire.",
    banqueMots: ['sarcomère', 'myosine', 'actine', 'calcium', 'réticulum sarcoplasmique', 'troponine', 'tropomyosine', 'ATP', 'plaque motrice', 'acétylcholine', 'myofibrille', 'disques Z']
  }
};

export const chapitre14 = {
  id: 'ch14',
  titre: "L'énergie musculaire et le dopage",
  description: "Régénération de l'ATP, filières énergétiques, performance sportive et effets des produits dopants.",
  cours: {
    sections: [
      {
        titre: "L'ATP, monnaie universelle de l'énergie cellulaire",
        contenu: [
          "L'ATP (adénosine triphosphate) est la seule forme d'énergie directement utilisable par les protéines motrices de la cellule musculaire. Sans ATP, aucune contraction n'est possible. Cependant, les réserves d'ATP dans le muscle sont très faibles (suffisantes pour environ 1 à 2 secondes d'effort maximal) et doivent être constamment régénérées.",
          "→ ATP → ADP + Pi + énergie (utilisée pour le pivot de la tête de myosine et la recapture du Ca²⁺)",
          "La régénération de l'ATP à partir d'ADP + Pi nécessite un apport d'énergie. Trois filières énergétiques permettent cette régénération : la filière anaérobie alactique (phosphocréatine), la filière anaérobie lactique (glycolyse seule) et la filière aérobie (respiration cellulaire complète).",
          "Ces trois filières sont toujours actives simultanément, mais leur contribution relative varie selon l'intensité et la durée de l'effort. Lors d'un sprint de 10 secondes, c'est la filière alactique qui domine. Pour un effort intense de 30 à 60 secondes, la filière lactique prend le relais. Pour un effort prolongé (> 2 minutes), la filière aérobie devient prépondérante.",
          "Points clés : 1) ATP = seule forme d'énergie utilisable directement. 2) Réserves musculaires d'ATP ≈ 1-2 s d'effort maximal. 3) Trois filières de régénération de l'ATP. 4) Les filières s'activent simultanément selon l'intensité/durée. 5) Filière alactique = très court terme. 6) Filière aérobie = long terme."
        ]
      },
      {
        titre: "La filière aérobie",
        contenu: [
          "La filière aérobie (ou respiration cellulaire) est la plus efficace énergétiquement. Elle utilise le glucose (ou les lipides) et l'oxygène pour régénérer l'ATP dans la mitochondrie. Elle peut fonctionner indéfiniment tant que le substrat et l'oxygène sont disponibles.",
          "La filière aérobie se déroule en trois étapes dans la cellule musculaire : 1) La glycolyse dans le cytoplasme (dégradation du glucose en pyruvate, production nette de 2 ATP). 2) Le cycle de Krebs dans la matrice mitochondriale (oxydation du pyruvate → CO₂ + cofacteurs réduits NADH). 3) La chaîne respiratoire mitochondriale (oxydation des cofacteurs → H₂O + synthèse massive d'ATP par l'ATP synthase).",
          "→ Glucose + 6 O₂ → 6 CO₂ + 6 H₂O + ~36-38 ATP",
          "Le rendement de la filière aérobie est élevé (~36–38 ATP par glucose), mais elle a une puissance limitée par la capacité de transport de l'O₂ (débit cardiaque, capacité des poumons, hémoglobine). La VO₂max (volume maximal d'O₂ consommé par minute et par kg) est le principal indicateur de la capacité aérobie.",
          "Les lipides (acides gras) peuvent aussi alimenter la filière aérobie via la β-oxydation, produisant encore plus d'ATP par molécule mais à une vitesse inférieure. Les lipides sont le carburant privilégié pour les efforts d'endurance d'intensité modérée.",
          "Points clés : 1) Filière aérobie = glycolyse + Krebs + chaîne respiratoire. 2) Rendement ≈ 36-38 ATP/glucose. 3) Nécessite O₂ → CO₂ + H₂O. 4) Filière des efforts prolongés (> 2 min). 5) VO₂max = capacité aérobie maximale. 6) Lipides = carburant de l'endurance."
        ]
      },
      {
        titre: "Les filières anaérobies",
        contenu: [
          "La filière anaérobie alactique (ou phosphocréatine) est la plus rapide mais la plus limitée en durée. Elle utilise la phosphocréatine (PCr), une molécule stockée dans les muscles, pour régénérer instantanément l'ATP sans nécessiter d'oxygène ni produire de lactate.",
          "→ PCr + ADP → Créatine + ATP (catalysé par la créatine kinase, CK)",
          "Les réserves de phosphocréatine permettent de maintenir un effort maximal pendant environ 6 à 10 secondes (sprints, sauts, haltérophilie). La créatine peut être rechargée en phosphocréatine pendant la récupération, via la filière aérobie.",
          "La filière anaérobie lactique utilise la glycolyse seule (sans mitochondries) pour régénérer l'ATP rapidement mais avec un rendement médiocre (2 ATP/glucose). Elle produit du pyruvate qui est réduit en lactate pour régénérer le NAD⁺ (nécessaire à la poursuite de la glycolyse). Elle entre en jeu lors d'efforts intenses de 30 secondes à 2–3 minutes.",
          "Le lactate produit est souvent accusé à tort de causer la fatigue. En réalité, c'est l'accumulation d'ions H⁺ (acidose) qui inhibe les enzymes de la glycolyse et les protéines contractiles. Le lactate est rapidement éliminé par le foie (reconverti en glucose via la néoglucogenèse — cycle de Cori) et par d'autres muscles qui l'utilisent comme carburant.",
          "Points clés : 1) Alactique : PCr → ATP, ≈ 6-10 s, pas de déchet. 2) Lactique : glycolyse seule, 2 ATP/glucose, production de lactate. 3) L'acidose (H⁺) cause la fatigue, pas le lactate lui-même. 4) Lactate récupéré par le foie (cycle de Cori). 5) Alactique = sprint pur. 6) Lactique = efforts intenses 30s–3 min (400 m, 800 m)."
        ]
      },
      {
        titre: "Le dopage : types, mécanismes et risques",
        contenu: [
          "Le dopage désigne l'utilisation de substances ou méthodes interdites dans le but d'améliorer les performances sportives. L'Agence Mondiale Antidopage (AMA/WADA) publie chaque année la liste des substances et méthodes prohibées, classées par type et par sport.",
          "L'EPO (érythropoïétine) est une hormone rénale qui stimule la production de globules rouges dans la moelle osseuse. En augmentant la concentration d'hémoglobine, elle améliore le transport de l'O₂ vers les muscles et donc la VO₂max. L'EPO exogène est largement utilisée dans les sports d'endurance. Risques : augmentation de la viscosité sanguine → thromboses, AVC, mort subite (surtout au repos la nuit).",
          "Les stéroïdes anabolisants sont des dérivés synthétiques de la testostérone. Ils augmentent la synthèse protéique musculaire (anabolisme), permettant une récupération plus rapide et une hypertrophie musculaire accrue. Utilisés en musculation, sports de force et sprint. Risques : perturbations hormonales, infertilité, acné, troubles hépatiques, troubles cardiovasculaires, troubles du comportement ('rage stéroïde').",
          "Les glucocorticoïdes (cortisone, dexaméthasone) ont des effets anti-inflammatoires et peuvent améliorer la résistance à la douleur. La transfusion sanguine (autologue ou hétérologue) et la perfluorocarbone (transporteurs d'O₂ artificiels) visent aussi à augmenter la capacité de transport de l'O₂. Les amphétamines stimulent le système nerveux central, réduisant la perception de la fatigue.",
          "Points clés : 1) EPO → ↑ globules rouges → ↑ VO₂max. 2) Stéroïdes → ↑ synthèse protéique → hypertrophie. 3) Risques EPO : thromboses, mort subite. 4) Risques stéroïdes : perturbations hormonales, cardiovasculaires. 5) L'AMA surveille et sanctionne. 6) Le dopage génétique (modification génome) = prochain défi pour l'antidopage."
        ]
      },
      {
        titre: "Optimisation légale de la performance sportive",
        contenu: [
          "L'entraînement physique est la voie légale et saine pour améliorer les performances. L'entraînement aérobie prolongé augmente le nombre de mitochondries dans les fibres musculaires (mitochondriogenèse), la densité capillaire et le débit cardiaque maximal — améliorant la VO₂max.",
          "L'entraînement en force (musculation) stimule l'hypertrophie des fibres musculaires (augmentation du volume par synthèse protéique accrue) et le recrutement neural (amélioration de la coordination des unités motrices). La force augmente d'abord grâce aux adaptations nerveuses, puis grâce à l'hypertrophie.",
          "L'altitude (réelle ou simulée en tente hypoxique) stimule naturellement la production d'EPO endogène, augmentant la concentration d'hémoglobine. C'est un moyen légal d'améliorer le transport de l'O₂. Des stages en altitude sont courants dans la préparation des athlètes de haut niveau.",
          "La nutrition sportive (timing protéique, index glycémique, hydratation) et la récupération (sommeil, massage, cryothérapie) sont des leviers légaux essentiels pour optimiser l'adaptation à l'entraînement et prévenir le surentraînement.",
          "Points clés : 1) Entraînement aérobie → ↑ mitochondries, ↑ capillaires, ↑ VO₂max. 2) Musculation → hypertrophie + adaptations neurales. 3) Altitude → ↑ EPO endogène légalement. 4) Nutrition + récupération = leviers légaux. 5) La créatine (supplément) est légale et améliore les performances alactiques. 6) Surentraînement = risque si récupération insuffisante."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'ATP', definition: "Adénosine triphosphate. Seule forme d'énergie directement utilisable par les protéines motrices. Doit être constamment régénérée car les réserves musculaires sont minimes (≈ 1-2 s)." },
    { terme: 'Filière aérobie', definition: "Voie de régénération de l'ATP utilisant glucose + O₂ dans la mitochondrie (glycolyse + Krebs + chaîne respiratoire). Rendement élevé (~36 ATP/glucose). Prépondérante pour les efforts > 2 min." },
    { terme: 'Filière anaérobie lactique', definition: "Voie de régénération de l'ATP par glycolyse seule sans O₂. Rendement faible (2 ATP/glucose) mais puissance élevée. Produit du lactate. Utilisée lors d'efforts intenses de 30 s à 3 min." },
    { terme: 'Filière anaérobie alactique', definition: "Voie de régénération de l'ATP par la phosphocréatine (PCr → créatine + ATP). Instantanée, sans O₂ ni lactate. Dure ≈ 6-10 s seulement (sprints, sauts)." },
    { terme: 'Glycolyse', definition: "Dégradation du glucose en deux molécules de pyruvate dans le cytoplasme. Produit 2 ATP nets. Point de départ de toutes les filières énergétiques musculaires." },
    { terme: 'Cycle de Krebs', definition: "Cycle d'oxydation du pyruvate dans la matrice mitochondriale. Produit du CO₂ et des cofacteurs réduits (NADH, FADH₂) qui alimentent la chaîne respiratoire." },
    { terme: 'Chaîne respiratoire', definition: "Ensemble de complexes protéiques de la membrane mitochondriale interne. Oxyde les cofacteurs réduits, consomme O₂, produit H₂O et synthétise la majorité de l'ATP (par ATP synthase)." },
    { terme: 'Lactate', definition: "Produit de la glycolyse anaérobie. Longtemps accusé de causer la fatigue, c'est en réalité l'acidose (H⁺) qui est responsable. Le lactate est recyclé en glucose par le foie (cycle de Cori)." },
    { terme: 'Phosphocréatine (PCr)', definition: "Molécule de réserve d'énergie à haute énergie dans le muscle. Transfère son groupement phosphate à l'ADP pour régénérer l'ATP instantanément (filière alactique, ≈ 6-10 s)." },
    { terme: 'VO₂max', definition: "Volume maximal d'O₂ consommé par minute et par kilogramme de masse corporelle. Principal indicateur de la capacité aérobie et de l'endurance. S'améliore avec l'entraînement." },
    { terme: 'EPO', definition: "Érythropoïétine. Hormone rénale stimulant la production de globules rouges. En dopage, augmente le transport d'O₂ → ↑ VO₂max. Risques : thromboses, mort subite par hyperviscosité sanguine." },
    { terme: 'Stéroïde anabolisant', definition: "Dérivé synthétique de la testostérone favorisant la synthèse protéique musculaire (hypertrophie accrue). Dopant interdit. Risques : troubles hormonaux, hépatiques, cardiovasculaires, psychologiques." },
    { terme: 'Hypertrophie musculaire', definition: "Augmentation du volume des fibres musculaires par synthèse accrue de protéines contractiles (actine, myosine). Résulte d'un entraînement en force adapté. Base de l'adaptation musculaire." },
    { terme: 'Cycle de Cori', definition: "Cycle métabolique entre le muscle (produit du lactate par glycolyse) et le foie (reconvertit le lactate en glucose par néoglucogenèse). Permet d'éliminer le lactate après l'effort." },
    { terme: 'Mitochondriogenèse', definition: "Augmentation du nombre et du volume des mitochondries dans les fibres musculaires en réponse à l'entraînement aérobie. Améliore la capacité oxydative et la VO₂max." },
  ],
  quiz: [
    {
      question: "Quelle filière énergétique est prépondérante lors d'un sprint de 8 secondes ?",
      options: ["La filière aérobie (respiration cellulaire)", "La filière anaérobie lactique", "La filière anaérobie alactique (phosphocréatine)", "La filière lipidique"],
      bonneReponse: 2,
      explication: "La filière alactique utilise la phosphocréatine stockée dans le muscle pour régénérer l'ATP instantanément. Elle est maximale pour des efforts très courts (< 10 s) de haute intensité comme les sprints ou les sauts. Ses réserves durent ~6-10 secondes."
    },
    {
      question: "Quel est le rendement énergétique de la filière aérobie comparé à la filière anaérobie lactique ?",
      options: [
        "La filière aérobie produit ~2 ATP/glucose, comme la filière lactique",
        "La filière aérobie produit ~36-38 ATP/glucose, contre ~2 ATP/glucose pour la filière lactique",
        "La filière aérobie est moins efficace mais plus rapide",
        "Les deux filières produisent le même nombre d'ATP"
      ],
      bonneReponse: 1,
      explication: "La filière aérobie (glycolyse + Krebs + chaîne respiratoire) produit environ 36-38 ATP par glucose grâce à la phosphorylation oxydative mitochondriale. La filière anaérobie lactique (glycolyse seule) ne produit que 2 ATP nets par glucose, mais avec une puissance instantanée plus élevée."
    },
    {
      question: "Quel est le vrai responsable de la fatigue musculaire lors d'un effort intense, souvent attribué à tort au lactate ?",
      options: ["L'accumulation de CO₂", "L'acidose intracellulaire due aux ions H⁺", "Le manque de calcium dans le réticulum sarcoplasmique", "La déshydratation des fibres musculaires"],
      bonneReponse: 1,
      explication: "C'est l'accumulation d'ions H⁺ (acidose intracellulaire) qui inhibe les enzymes de la glycolyse et les protéines contractiles, provoquant la fatigue. Le lactate lui-même est rapidement recyclé par le foie (cycle de Cori) et d'autres muscles — il est éliminé en moins d'une heure après l'effort."
    },
    {
      question: "Comment l'EPO améliore-t-elle la performance sportive en endurance ?",
      options: [
        "En augmentant la synthèse protéique musculaire (hypertrophie)",
        "En stimulant la production de globules rouges pour augmenter le transport d'O₂",
        "En diminuant la perception de la douleur et de la fatigue",
        "En augmentant les réserves de phosphocréatine dans les muscles"
      ],
      bonneReponse: 1,
      explication: "L'EPO (érythropoïétine) stimule la production de globules rouges dans la moelle osseuse, augmentant la concentration d'hémoglobine et donc la capacité de transport de l'O₂ vers les muscles. Cela améliore la VO₂max et la performance en endurance. Risque majeur : hyperviscosité sanguine → thromboses."
    },
    {
      question: "Qu'est-ce que le VO₂max mesure et pourquoi est-ce un indicateur clé de la performance en endurance ?",
      options: [
        "Le volume de CO₂ produit par minute — indicateur du métabolisme basal",
        "La quantité maximale d'O₂ consommée par minute et par kg — capacité de la filière aérobie",
        "La vitesse maximale à laquelle le glucose peut être dégradé par glycolyse",
        "Le volume de lactate produit lors d'un effort maximal"
      ],
      bonneReponse: 1,
      explication: "Le VO₂max mesure la capacité maximale de l'organisme à consommer l'oxygène lors d'un effort maximal. Il reflète la performance de l'ensemble de la chaîne aérobie (poumons, cœur, sang, mitochondries). Un VO₂max élevé est indispensable pour les sports d'endurance et s'améliore significativement avec l'entraînement."
    }
  ],
  texteTrous: {
    paragraphe: "L'[ATP] est la seule molécule d'énergie directement utilisable par le muscle. Il doit être régénéré en permanence via trois filières. La filière [aérobie] utilise le glucose et l'[oxygène] et produit environ 36 [ATP] par glucose. La filière anaérobie [lactique] utilise la glycolyse seule et produit du [lactate]. La filière anaérobie [alactique] utilise la [phosphocréatine] pour les efforts très courts. La [VO₂max] mesure la capacité aérobie maximale. Le dopage à l'[EPO] augmente le nombre de globules rouges, améliorant le transport de l'[oxygène].",
    banqueMots: ['ATP', 'aérobie', 'oxygène', 'lactique', 'lactate', 'alactique', 'phosphocréatine', 'VO₂max', 'EPO', 'glycolyse', 'mitochondrie']
  }
};

export const chapitre15 = {
  id: 'ch15',
  titre: 'Le stress aigu',
  description: "Réponse de l'organisme au stress immédiat : axes nerveux sympathique et hormonal hypothalamo-hypophyso-surrénalien.",
  cours: {
    sections: [
      {
        titre: "Qu'est-ce que le stress ? Définition et utilité biologique",
        contenu: [
          "Le stress est la réponse de l'organisme à toute situation perçue comme une menace ou un défi dépassant les ressources disponibles. Cette réponse est fondamentalement adaptative : elle prépare l'organisme à faire face au danger (réponse 'fight or flight', combattre ou fuir, théorisée par Walter Cannon en 1915).",
          "Un stresseur peut être physique (bruit, douleur, effort intense, froid), psychologique (pression scolaire ou professionnelle, conflit) ou social (isolement, jugement). Ce qui détermine la réponse au stress n'est pas la nature objective du stresseur, mais la perception subjective qu'en a l'individu.",
          "La réponse au stress fait intervenir deux axes principaux en cascade temporelle : d'abord la réponse nerveuse rapide (quelques secondes), puis la réponse hormonale plus lente (quelques minutes à heures). Ces deux axes mobilisent les glandes surrénales comme organe effecteur principal.",
          "La réponse au stress aigu est utile à court terme : elle augmente les performances physiques et cognitives, mobilise les ressources énergétiques et affûte les sens. C'est une adaptation évolutive précieuse face aux prédateurs ou aux dangers physiques. Elle devient pathologique uniquement lorsqu'elle est chronique ou disproportionnée.",
          "Points clés : 1) Stress = réponse adaptative à une menace perçue. 2) Déclencheur = perception subjective du stresseur. 3) Deux axes : nerveux (rapide) + hormonal (plus lent). 4) Organe effecteur principal = glandes surrénales. 5) Stress aigu = adaptatif et protecteur. 6) Stress chronique = pathologique (voir ch16)."
        ]
      },
      {
        titre: "La réponse nerveuse rapide : le système nerveux sympathique",
        contenu: [
          "La réponse nerveuse au stress est quasi-instantanée (quelques secondes). Elle met en jeu l'hypothalamus, qui détecte le stresseur via le cortex cérébral et le système limbique (notamment l'amygdale, qui traite les émotions et évalue la menace).",
          "L'hypothalamus active le système nerveux sympathique (SNS), la branche du système nerveux autonome associée à l'action et à la dépense énergétique. Le SNS innerve directement la médulla surrénale (partie centrale de la glande surrénale), qui sécrète massivement de l'adrénaline (épinéphrine) et de la noradrénaline dans le sang.",
          "L'adrénaline est synthétisée à partir de la tyrosine dans les cellules chromaffines de la médulla surrénale. Sa sécrétion est quasi-instantanée (quelques secondes) et ses effets sont multiples et concordants : ils visent tous à préparer l'organisme à l'action physique immédiate.",
          "→ Hypothalamus → SNS → médulla surrénale → adrénaline (sang) → effets sur organes cibles",
          "Cette réponse est coordonnée et cohérente : tout concourt à maximiser la capacité d'action physique (fight or flight). L'adrénaline agit sur des récepteurs spécifiques (α et β-adrénergiques) présents sur tous les organes cibles.",
          "Points clés : 1) Hypothalamus + amygdale détectent la menace. 2) Hypothalamus → SNS → médulla surrénale. 3) Médulla surrénale → adrénaline (secondes). 4) Adrénaline = hormone d'action immédiate. 5) Récepteurs α et β-adrénergiques sur les organes cibles. 6) Réponse rapide, coordonnée, réversible."
        ]
      },
      {
        titre: "Les effets de l'adrénaline sur l'organisme",
        contenu: [
          "L'adrénaline agit sur pratiquement tous les organes de l'organisme pour le préparer à l'effort physique intense. Ses effets cardiovasculaires incluent : augmentation de la fréquence cardiaque (tachycardie), augmentation de la force des contractions cardiaques (inotropisme positif) et augmentation de la pression artérielle.",
          "Sur les voies respiratoires : l'adrénaline provoque une bronchodilatation (dilatation des bronches), augmentant la surface d'échange des gaz et facilitant l'apport d'O₂ aux muscles. C'est pourquoi l'adrénaline injectable est utilisée en urgence pour traiter les crises d'asthme sévères et le choc anaphylactique.",
          "Sur le métabolisme : l'adrénaline stimule la glycogénolyse hépatique (dégradation du glycogène en glucose → ↑ glycémie) et la lipolyse (libération d'acides gras depuis les adipocytes). Elle prépare ainsi les substrats énergétiques nécessaires à l'effort musculaire.",
          "Effets sur la vigilance et les sens : dilatation des pupilles (mydriase) pour améliorer la vision, augmentation de la vigilance et de la concentration, réduction de la sensibilité à la douleur (effet analgésique). Ces effets préparent l'individu à réagir vite et efficacement.",
          "Simultanément, certaines fonctions non essentielles à la survie immédiate sont inhibées : ralentissement de la digestion (vasoconstriction splanchnique), inhibition de la salivation (bouche sèche), réduction de la motilité intestinale. Le flux sanguin est redirigé des organes viscéraux vers les muscles squelettiques et le cerveau.",
          "Points clés : 1) ↑ FC, ↑ PA, ↑ débit cardiaque. 2) Bronchodilatation → ↑ O₂. 3) Glycogénolyse → ↑ glycémie. 4) Lipolyse → ↑ acides gras. 5) Mydriase + ↑ vigilance + analgésie. 6) Inhibition digestion = redirection flux sanguin vers muscles."
        ]
      },
      {
        titre: "La réponse hormonale secondaire : l'axe HPA",
        contenu: [
          "Si le stresseur persiste ou est intense, une deuxième vague de réponse hormonale se met en place après 15 à 30 minutes : l'axe hypothalamo-hypophyso-surrénalien (axe HPA). Cet axe mobilise plus durablement les ressources de l'organisme.",
          "L'hypothalamus sécrète la CRH (corticotropin-releasing hormone) dans les vaisseaux portes hypophysaires. La CRH stimule l'antéhypophyse qui sécrète l'ACTH (adrénocorticotropine) dans le sang. L'ACTH agit sur le cortex surrénalien (partie externe des glandes surrénales) qui sécrète le cortisol.",
          "→ Stresseur → Hypothalamus (CRH) → Antéhypophyse (ACTH) → Cortex surrénalien → Cortisol (sang)",
          "Le cortisol (hydrocortisone) est un glucocorticoïde, dérivé du cholestérol. Il circule dans le sang lié à une protéine transporteuse (CBG) et agit sur des récepteurs nucléaires intracellulaires — ses effets sont donc plus lents (h) mais plus durables que ceux de l'adrénaline.",
          "L'axe HPA est régulé par un rétrocontrôle négatif : le cortisol inhibe la sécrétion de CRH par l'hypothalamus et d'ACTH par l'hypophyse, évitant une suractivation prolongée. Ce mécanisme est essentiel pour le retour à l'homéostasie après la fin du stress.",
          "Points clés : 1) Axe HPA activé après 15-30 min (plus lent que SNS). 2) Hypothalamus → CRH → Hypophyse → ACTH → Cortex surrénalien → Cortisol. 3) Cortisol = glucocorticoïde, effets durables. 4) Rétrocontrôle négatif du cortisol sur hypothalamus + hypophyse. 5) Cortisol agit sur récepteurs nucléaires (lent mais puissant). 6) Retour à l'homéostasie via rétrocontrôle."
        ]
      },
      {
        titre: "Les effets du cortisol et retour à l'homéostasie",
        contenu: [
          "Le cortisol prépare l'organisme à un effort prolongé et aide à gérer les conséquences du stress. Ses effets métaboliques sont centraux : il stimule la néoglucogenèse hépatique (synthèse de glucose à partir d'acides aminés et de lipides), augmentant durablement la glycémie pour fournir de l'énergie aux organes vitaux.",
          "Le cortisol a des effets anti-inflammatoires et immunosuppresseurs puissants : il inhibe la production de cytokines pro-inflammatoires, réduit l'activité des cellules immunitaires et diminue la perméabilité vasculaire. Ces effets sont utiles à court terme (limiter l'inflammation excessive) mais deviennent délétères si chroniques.",
          "Le cortisol mobilise également les réserves énergétiques en stimulant la lipolyse (liberation d'acides gras) et le catabolisme protéique (dégradation des protéines musculaires en acides aminés → néoglucogenèse). C'est pourquoi un stress chronique peut entraîner une perte de masse musculaire.",
          "Le retour à l'homéostasie se fait via le rétrocontrôle négatif du cortisol sur l'hypothalamus (↓ CRH) et l'hypophyse (↓ ACTH), couplé à la disparition du stresseur. Normalement, la réponse au stress aigu s'éteint en quelques heures. Si elle persiste, elle devient un stress chronique (voir ch16).",
          "Points clés : 1) Cortisol → néoglucogenèse → ↑ glycémie durable. 2) Cortisol = anti-inflammatoire et immunosuppresseur. 3) Catabolisme protéique → acides aminés → néoglucogenèse. 4) Rétrocontrôle négatif du cortisol → retour homéostasie. 5) Effets utiles à court terme, délétères si chroniques. 6) Demi-vie du cortisol ≈ 60-90 min."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Stress', definition: "Réponse de l'organisme à toute situation perçue comme une menace dépassant ses ressources. Adaptatif à court terme (préparation à l'action), pathologique si chronique." },
    { terme: 'Réponse combat-fuite', definition: "Réponse au stress décrite par Cannon (1915) : activation du SNS et sécrétion d'adrénaline pour préparer l'organisme à combattre ou fuir. Base de la réponse au stress aigu." },
    { terme: 'Hypothalamus', definition: "Structure cérébrale de régulation des grandes fonctions homéostatiques. Centre de contrôle de la réponse au stress : active le SNS (via médulla surrénale) et l'axe HPA (via CRH)." },
    { terme: 'Système nerveux sympathique', definition: "Branche du SNA associée à l'action et à la dépense énergétique. Active lors du stress : ↑ FC, ↑ PA, bronchodilatation, glycogénolyse. Innerve la médulla surrénale." },
    { terme: 'Adrénaline', definition: "Catécholamine secrétée par la médulla surrénale en réponse au stress. Effets immédiats : ↑ FC, ↑ PA, bronchodilatation, glycogénolyse, mydriase, ↑ vigilance." },
    { terme: 'Médulla surrénale', definition: "Partie interne de la glande surrénale. Sécrète l'adrénaline et la noradrénaline sous commande du SNS. Réponse rapide (quelques secondes) lors du stress aigu." },
    { terme: 'Cortisol', definition: "Glucocorticoïde secrété par le cortex surrénalien sous l'effet de l'ACTH. Effets métaboliques (néoglucogenèse, lipolyse) et anti-inflammatoires. Hormone du stress prolongé." },
    { terme: 'Cortex surrénalien', definition: "Partie externe de la glande surrénale. Sécrète les corticostéroïdes (cortisol, aldostérone) sous contrôle de l'ACTH. Impliqué dans la réponse hormonale au stress." },
    { terme: 'ACTH', definition: "Adrénocorticotropine. Hormone sécrétée par l'antéhypophyse sous l'effet de la CRH. Stimule le cortex surrénalien pour produire du cortisol. Maillon central de l'axe HPA." },
    { terme: 'CRH', definition: "Corticotropin-releasing hormone. Sécrétée par l'hypothalamus en réponse au stress. Stimule l'hypophyse à sécréter l'ACTH. Premier maillon de l'axe HPA." },
    { terme: 'Axe HPA', definition: "Axe hypothalamo-hypophyso-surrénalien. Axe hormonal activé par le stress (délai 15-30 min) : hypothalamus (CRH) → hypophyse (ACTH) → cortex surrénalien (cortisol)." },
    { terme: 'Glycogénolyse', definition: "Dégradation du glycogène hépatique en glucose libre sous l'effet de l'adrénaline et du glucagon. Augmente rapidement la glycémie pour fournir de l'énergie lors du stress." },
    { terme: 'Néoglucogenèse', definition: "Synthèse de glucose à partir de précurseurs non glucidiques (acides aminés, lactate, glycérol) par le foie. Stimulée par le cortisol pour maintenir la glycémie lors d'un stress prolongé." },
    { terme: 'Rétrocontrôle négatif', definition: "Mécanisme de régulation où le cortisol inhibe la sécrétion de CRH (hypothalamus) et d'ACTH (hypophyse), limitant sa propre production. Permet le retour à l'homéostasie après le stress." },
    { terme: 'Homéostasie', definition: "Maintien de la stabilité du milieu intérieur (glycémie, température, pH...) face aux perturbations. Objectif physiologique auquel tend la réponse au stress après la disparition du stresseur." },
  ],
  quiz: [
    {
      question: "Quel est l'ordre correct de la réponse nerveuse rapide au stress ?",
      options: [
        "Amygdale → CRH → ACTH → Cortisol",
        "Hypothalamus → SNS → Médulla surrénale → Adrénaline",
        "Hypophyse → ACTH → Cortex surrénalien → Cortisol",
        "Cortex préfrontal → Noradrénaline → Adrénaline → Cortisol"
      ],
      bonneReponse: 1,
      explication: "La réponse nerveuse rapide suit ce chemin : l'hypothalamus (détection de la menace) active le système nerveux sympathique, qui innerve directement la médulla surrénale. Celle-ci sécrète l'adrénaline en quelques secondes dans le sang. C'est la voie rapide de la réponse au stress aigu."
    },
    {
      question: "Parmi les effets suivants, lequel n'est PAS un effet de l'adrénaline ?",
      options: [
        "Augmentation de la fréquence cardiaque",
        "Bronchodilatation",
        "Stimulation de la digestion et de l'absorption intestinale",
        "Glycogénolyse hépatique (↑ glycémie)"
      ],
      bonneReponse: 2,
      explication: "L'adrénaline inhibe la digestion (vasoconstriction splanchnique, ↓ motilité intestinale) lors du stress pour rediriger le flux sanguin vers les muscles et le cerveau. Elle ne stimule pas la digestion — c'est le système parasympathique (repos et digestion) qui assure cette fonction."
    },
    {
      question: "Quel rôle joue le rétrocontrôle négatif du cortisol dans la réponse au stress ?",
      options: [
        "Il amplifie la réponse au stress pour qu'elle soit plus efficace",
        "Il inhibe la sécrétion de CRH et d'ACTH, permettant le retour à l'homéostasie",
        "Il stimule la production d'adrénaline par la médulla surrénale",
        "Il active l'axe HPA pour maintenir une production constante de cortisol"
      ],
      bonneReponse: 1,
      explication: "Le cortisol exerce un rétrocontrôle négatif sur l'hypothalamus (↓ CRH) et l'antéhypophyse (↓ ACTH), limitant sa propre production. Ce mécanisme d'auto-régulation est essentiel pour ramener l'organisme à l'homéostasie après la disparition du stresseur."
    },
    {
      question: "Quelle est la différence principale entre la réponse de la médulla surrénale et celle du cortex surrénalien face au stress ?",
      options: [
        "La médulla sécrète du cortisol, le cortex sécrète de l'adrénaline",
        "La médulla répond en quelques secondes (adrénaline), le cortex en 15-30 min (cortisol via axe HPA)",
        "Seul le cortex répond au stress psychologique, la médulla répond uniquement au stress physique",
        "Le cortex répond plus vite car il est directement innervé par le SNS"
      ],
      bonneReponse: 1,
      explication: "La médulla surrénale est directement innervée par le SNS → sécrétion d'adrénaline en quelques secondes (réponse rapide). Le cortex surrénalien répond à l'ACTH (axe HPA), processus hormonal nécessitant 15 à 30 minutes. Ces deux bras complémentaires de la réponse au stress agissent en cascade."
    },
    {
      question: "Pourquoi l'adrénaline est-elle utilisée en injection d'urgence lors du choc anaphylactique ?",
      options: [
        "Car elle augmente la pression artérielle et la bronchodilatation, contrecarrant la vasodilatation et le bronchospasme du choc",
        "Car elle supprime la réponse immunitaire responsable du choc allergique",
        "Car elle stimule la production de cortisol anti-inflammatoire",
        "Car elle améliore la conscience du patient en agissant sur les neurones cérébraux"
      ],
      bonneReponse: 0,
      explication: "Le choc anaphylactique est caractérisé par une vasodilatation massive (↓ PA), un bronchospasme et un œdème. L'adrénaline contre directement ces effets : elle provoque une vasoconstriction (↑ PA), une bronchodilatation (↑ O₂) et réduit la perméabilité vasculaire. Son action rapide (secondes) en fait le traitement de première urgence."
    }
  ],
  texteTrous: {
    paragraphe: "Face à un stresseur, l'[hypothalamus] active d'abord le système nerveux [sympathique], qui stimule la [médulla surrénale] à sécréter de l'[adrénaline] en quelques secondes. L'adrénaline augmente la fréquence [cardiaque], provoque une [bronchodilatation] et stimule la [glycogénolyse] hépatique. En parallèle, l'hypothalamus libère la [CRH], qui stimule l'hypophyse à sécréter l'[ACTH], qui stimule le cortex surrénalien à produire du [cortisol]. Le cortisol stimule la [néoglucogenèse] et exerce un [rétrocontrôle négatif] pour ramener l'organisme à l'homéostasie.",
    banqueMots: ['hypothalamus', 'sympathique', 'médulla surrénale', 'adrénaline', 'cardiaque', 'bronchodilatation', 'glycogénolyse', 'CRH', 'ACTH', 'cortisol', 'néoglucogenèse', 'rétrocontrôle négatif', 'parasympathique']
  }
};

export const chapitre16 = {
  id: 'ch16',
  titre: 'Le stress chronique',
  description: "Conséquences biologiques et psychologiques d'un stress prolongé, maladies associées et stratégies de gestion validées.",
  cours: {
    sections: [
      {
        titre: "Du stress aigu au stress chronique",
        contenu: [
          "Le stress chronique se définit par la persistance de la réponse au stress (activation du SNS et de l'axe HPA) sur des semaines, des mois ou des années, sans retour à l'homéostasie entre les épisodes de stress. Il résulte d'une exposition prolongée à des stresseurs ou de l'incapacité à s'adapter.",
          "Le modèle général d'adaptation (Hans Selye, 1936) décrit trois phases : 1) La phase d'alarme (activation de la réponse au stress aigu). 2) La phase de résistance (adaptation, maintien de l'homéostasie au prix d'un coût biologique). 3) La phase d'épuisement (les mécanismes d'adaptation défaillent, les organes se dégradent).",
          "L'allostasie désigne la capacité de l'organisme à maintenir la stabilité par le changement (contrairement à l'homéostasie statique). La charge allostatique est le coût cumulatif des adaptations répétées au stress. Quand la charge allostatique dépasse les capacités adaptatives, des dommages apparaissent.",
          "La différence fondamentale entre stress aigu et chronique est temporelle : le stress aigu est réversible et adaptatif ; le stress chronique est cumulatif, progressif et délétère. Des niveaux de cortisol constamment élevés agissent comme une toxine lente sur de nombreux organes.",
          "Points clés : 1) Stress chronique = stress aigu sans retour à l'homéostasie. 2) Modèle de Selye : alarme → résistance → épuisement. 3) Charge allostatique = coût cumulatif des adaptations. 4) Cortisol chroniquement élevé = toxique pour l'organisme. 5) Stress chronique = facteur de risque de nombreuses maladies. 6) Prévalence élevée dans les sociétés modernes."
        ]
      },
      {
        titre: "Les conséquences biologiques du cortisol chronique",
        contenu: [
          "L'exposition prolongée au cortisol entraîne des effets délétères sur de nombreux systèmes. Sur le cerveau, et particulièrement sur l'hippocampe (impliqué dans la mémoire et la régulation du stress lui-même), le cortisol chronique provoque une atrophie dendritique et une réduction du volume hippocampique — contribuant aux troubles de la mémoire et à la dépression.",
          "Le système immunitaire est durablement affaibli par l'immunosuppression chronique liée au cortisol. La production de cytokines anti-inflammatoires (IL-10) est augmentée, tandis que les défenses contre les infections sont réduites. Paradoxalement, le stress chronique peut aussi déclencher une inflammation systémique de bas grade, facteur de risque cardiovasculaire.",
          "Le système cardiovasculaire subit les conséquences de l'activation chronique du SNS (↑ FC, ↑ PA, vasoconstriction) et du cortisol (dyslipidémie, insulinorésistance). Ces modifications augmentent le risque d'hypertension artérielle, d'athérosclérose et d'infarctus du myocarde.",
          "Le système endocrinien est perturbé : la résistance progressive à l'insuline (due à l'hyperglycémie chronique maintenue par la néoglucogenèse) favorise le développement d'un diabète de type 2. Les hormones sexuelles (testostérone, œstrogènes) sont inhibées par le cortisol chronique, perturbant fertilité et libido.",
          "Points clés : 1) Hippocampe : atrophie dendritique → ↓ mémoire. 2) Immunosuppression chronique → ↑ infections. 3) Inflammation systémique de bas grade = risque cardiovasculaire. 4) ↑ PA + dyslipidémie → athérosclérose. 5) Insulinorésistance → risque DT2. 6) Inhibition hormones sexuelles."
        ]
      },
      {
        titre: "Les conséquences psychologiques",
        contenu: [
          "Le stress chronique est un facteur causal majeur des troubles anxieux et dépressifs. L'hyperactivation prolongée de l'amygdale (traitement de la peur) et l'atrophie hippocampique (↓ régulation du stress) créent un cercle vicieux : l'organisme devient de plus en plus réactif aux stresseurs et de moins en moins capable d'y faire face.",
          "Le burnout (épuisement professionnel) est le tableau clinique caractéristique du stress chronique en contexte de travail. Il se manifeste par un épuisement émotionnel profond, une dépersonnalisation (cynisme, détachement) et une perte du sentiment d'efficacité personnelle. Il touche particulièrement les professions à forte demande émotionnelle.",
          "Les troubles du sommeil sont quasi-constants dans le stress chronique : l'hypercortisolémie nocturne perturbe les phases de sommeil profond et paradoxal. Or le sommeil est essentiel à la réparation des dommages du stress, à la consolidation mémorielle et à la régulation émotionnelle — créant là encore un cercle vicieux.",
          "Les troubles cognitifs (difficultés de concentration, troubles de la mémoire de travail, décisions impulsives) résultent de l'altération du cortex préfrontal par le cortisol chronique. Ce cortex est crucial pour les fonctions exécutives, la planification et la régulation émotionnelle.",
          "Points clés : 1) Stress chronique → troubles anxieux et dépressifs. 2) Amygdale hyperactivée + hippocampe atrophié = cercle vicieux. 3) Burnout = épuisement émotionnel + dépersonnalisation + perte d'efficacité. 4) Troubles du sommeil aggravants (cercle vicieux). 5) Cortex préfrontal atteint → troubles cognitifs. 6) Le stress chronique est un facteur de risque de dépression majeure."
        ]
      },
      {
        titre: "Les maladies liées au stress chronique",
        contenu: [
          "Le stress chronique est reconnu comme un facteur de risque majeur pour un large spectre de maladies. Les maladies cardiovasculaires (HTA, infarctus, AVC) sont associées à l'activation chronique du SNS, à l'inflammation systémique et aux dyslipidémies induites par le cortisol.",
          "Le diabète de type 2 est favorisé par l'hyperglycémie chronique (néoglucogenèse par cortisol) et l'insulinorésistance. Les maladies auto-immunes peuvent être paradoxalement aggravées par le stress chronique via des dérèglements complexes de l'immunité (malgré l'immunosuppression globale).",
          "L'obésité abdominale (viscérale) est caractéristique du syndrome métabolique lié au stress chronique. Le cortisol stimule la lipogenèse préférentiellement dans le tissu adipeux viscéral et augmente l'appétit (via la ghréline) et l'attrait pour les aliments gras et sucrés ('comfort food').",
          "Le lien entre stress chronique et cancers est probable mais complexe : l'immunosuppression chronique réduit la surveillance immunitaire anti-tumorale, et l'inflammation systémique crée un environnement favorisant la croissance tumorale. Cependant, le stress seul ne cause pas directement le cancer.",
          "Points clés : 1) Maladies CV = principal risque du stress chronique. 2) DT2 favorisé par hypercortisolémie chronique. 3) Obésité viscérale = marqueur du syndrome métabolique. 4) Immunosuppression → ↑ infections et potentiellement cancers. 5) Le stress chronique est impliqué dans >75% des consultations médicales selon l'OMS. 6) Epigénétique : le stress chronique modifie l'expression des gènes."
        ]
      },
      {
        titre: "La gestion du stress : approches validées scientifiquement",
        contenu: [
          "L'activité physique régulière est l'une des interventions les plus efficaces contre le stress chronique. Elle réduit directement les niveaux de cortisol et d'adrénaline, stimule la neurogenèse hippocampique (facteur BDNF), améliore le sommeil et libère des endorphines (opioïdes endogènes). 30 minutes d'activité modérée par jour suffisent pour des bénéfices significatifs.",
          "La cohérence cardiaque (ou respiration cardio-respiratoire) est une technique de biofeedback basée sur une respiration lente et régulière (5 secondes inspiration, 5 secondes expiration). Elle active le système nerveux parasympathique, réduisant la FC et la sécrétion de cortisol. Pratiquée 3 fois par jour, elle a des effets mesurables sur les niveaux de cortisol.",
          "La méditation de pleine conscience (mindfulness) réduit significativement le stress perçu, l'anxiété et les symptômes dépressifs selon de nombreuses études contrôlées. Elle agit en entraînant la capacité à observer ses pensées et émotions sans réactivité, réduisant l'hyperactivité amygdalienne et augmentant le volume du cortex préfrontal.",
          "Les thérapies cognitivo-comportementales (TCC) sont la référence thérapeutique pour les troubles anxieux et le burnout liés au stress chronique. Elles aident à identifier et modifier les pensées automatiques négatives et les comportements d'évitement qui entretiennent le stress. Leur efficacité est solidement établie par les essais cliniques randomisés.",
          "La qualité du sommeil et le soutien social sont des facteurs protecteurs essentiels. Un réseau social de qualité réduit la sécrétion de cortisol face aux stresseurs et augmente la production d'ocytocine (hormone de l'attachement). Le sommeil récupérateur est indispensable à la régulation du cortisol et de l'axe HPA.",
          "Points clés : 1) Activité physique = antistress le plus efficace (BDNF, endorphines, ↓ cortisol). 2) Cohérence cardiaque = activation parasympathique (3×/jour). 3) Mindfulness = ↓ réactivité amygdalienne. 4) TCC = traitement de référence des troubles anxieux liés au stress. 5) Sommeil + soutien social = facteurs protecteurs essentiels. 6) Approches combinées = meilleure efficacité."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Stress chronique', definition: "Activation persistante de la réponse au stress (SNS + axe HPA) sans retour à l'homéostasie. Résulte d'une exposition prolongée aux stresseurs ou d'une incapacité d'adaptation. Pathologique." },
    { terme: 'Allostasie', definition: "Capacité de l'organisme à maintenir la stabilité par le changement en réponse aux stresseurs. La charge allostatique est le coût cumulatif des adaptations répétées." },
    { terme: 'Charge allostatique', definition: "Coût biologique cumulatif des adaptations répétées au stress. Quand elle dépasse les capacités adaptatives, elle entraîne des dommages organiques progressifs." },
    { terme: 'Hippocampe', definition: "Structure cérébrale impliquée dans la mémoire et la régulation du stress. Particulièrement vulnérable au cortisol chronique : atrophie dendritique → troubles mnésiques et dépression." },
    { terme: 'Burnout', definition: "Épuisement professionnel : tableau clinique du stress chronique au travail. Triade : épuisement émotionnel + dépersonnalisation (cynisme) + perte d'efficacité personnelle." },
    { terme: 'Anxiété', definition: "État émotionnel caractérisé par une anticipation négative et une hypervigilance. Favorisée par le stress chronique via l'hyperactivation de l'amygdale et l'atrophie hippocampique." },
    { terme: 'Dépression', definition: "Trouble de l'humeur caractérisé par une tristesse persistante, une perte d'intérêt et une anhédonie. Étroitement liée au stress chronique et à l'hypercortisolémie prolongée." },
    { terme: 'Inflammation chronique de bas grade', definition: "Inflammation systémique persistante à faible intensité, liée au stress chronique. Facteur de risque majeur pour les maladies cardiovasculaires, le DT2 et certains cancers." },
    { terme: 'Cohérence cardiaque', definition: "Technique de biofeedback basée sur une respiration lente (5s inspiration / 5s expiration) activant le SNS parasympathique. Réduit le cortisol et la fréquence cardiaque." },
    { terme: 'Méditation de pleine conscience', definition: "Technique d'attention volontaire au moment présent sans jugement. Réduit l'activité de l'amygdale, augmente le cortex préfrontal. Efficace contre le stress et l'anxiété." },
    { terme: 'TCC', definition: "Thérapies cognitivo-comportementales. Traitements psychothérapeutiques de référence pour les troubles anxieux et le burnout. Modifient les pensées automatiques et comportements d'évitement." },
    { terme: 'BDNF', definition: "Brain-Derived Neurotrophic Factor. Facteur de croissance neuronal libéré lors de l'exercice physique. Stimule la neurogenèse hippocampique et protège contre les effets délétères du stress." },
    { terme: 'Insulinorésistance', definition: "Diminution de la sensibilité des cellules à l'insuline, favorisée par l'hypercortisolémie chronique. Facteur de risque majeur de diabète de type 2 et du syndrome métabolique." },
    { terme: 'Résilience', definition: "Capacité à s'adapter positivement face à un stress ou un traumatisme important. Peut être renforcée par l'entraînement mental, le soutien social et des stratégies de coping." },
    { terme: 'Cortisol chronique', definition: "Niveaux élevés de cortisol maintenus durablement lors du stress chronique. Entraîne atrophie hippocampique, immunosuppression, insulinorésistance, obésité viscérale et troubles CV." },
  ],
  quiz: [
    {
      question: "Selon le modèle de Selye, quelles sont les trois phases de la réponse générale d'adaptation au stress ?",
      options: [
        "Alarme → Résistance → Épuisement",
        "Tension → Adaptation → Récupération",
        "Stress → Burnout → Dépression",
        "Activation → Inhibition → Homéostasie"
      ],
      bonneReponse: 0,
      explication: "Le syndrome général d'adaptation (Hans Selye, 1936) comprend trois phases : 1) Alarme (activation de la réponse au stress). 2) Résistance (adaptation, maintien homéostasie au prix d'un coût biologique). 3) Épuisement (défaillance des mécanismes d'adaptation → dommages organiques)."
    },
    {
      question: "Pourquoi le cortisol chronique est-il particulièrement nocif pour l'hippocampe ?",
      options: [
        "Car il empêche la vascularisation de l'hippocampe",
        "Car il provoque une atrophie dendritique et une réduction du volume hippocampique, altérant la mémoire et la régulation du stress",
        "Car il bloque la synthèse de dopamine dans l'hippocampe",
        "Car il détruit les axones myélinisés de l'hippocampe"
      ],
      bonneReponse: 1,
      explication: "L'hippocampe possède une forte densité de récepteurs aux glucocorticoïdes, le rendant particulièrement vulnérable au cortisol chronique. L'exposition prolongée provoque une atrophie dendritique et une réduction du volume hippocampique, entraînant des troubles mnésiques, une réduction de la régulation du stress et favorisant la dépression."
    },
    {
      question: "Quelle est la différence entre burnout et dépression ?",
      options: [
        "Le burnout est une forme de dépression liée uniquement au travail",
        "La dépression touche toutes les sphères de la vie dès le début, tandis que le burnout est initialement limité au contexte professionnel, avec épuisement et cynisme spécifiques",
        "Le burnout ne nécessite pas de traitement, contrairement à la dépression",
        "La dépression est causée par un manque de cortisol, le burnout par un excès de cortisol"
      ],
      bonneReponse: 1,
      explication: "Le burnout est spécifique au contexte professionnel (triade : épuisement émotionnel + dépersonnalisation + perte d'efficacité) et ne se manifeste initialement pas dans la vie privée. La dépression est un trouble de l'humeur touchant toutes les sphères de vie. Le burnout peut cependant évoluer en dépression s'il n'est pas pris en charge."
    },
    {
      question: "Pourquoi l'activité physique régulière est-elle considérée comme l'un des meilleurs antidotes au stress chronique ?",
      options: [
        "Car elle augmente la production de cortisol, habitue l'organisme au stress",
        "Car elle stimule la neurogenèse hippocampique (BDNF), réduit le cortisol, améliore le sommeil et libère des endorphines",
        "Car elle réduit la pression artérielle en diminuant l'activité du système nerveux sympathique",
        "Car elle augmente l'oxytocine en favorisant les interactions sociales lors des sports collectifs"
      ],
      bonneReponse: 1,
      explication: "L'activité physique régulière agit sur plusieurs mécanismes simultanément : elle réduit les niveaux de cortisol et d'adrénaline, stimule la production de BDNF (neurogenèse hippocampique), libère des endorphines (bien-être), améliore le sommeil et réduit l'inflammation systémique. C'est l'intervention la mieux documentée contre le stress chronique."
    },
    {
      question: "Quel lien unit le stress chronique, le cortisol et le diabète de type 2 ?",
      options: [
        "Le cortisol chronique inhibe la production d'insuline par le pancréas",
        "Le stress réduit l'appétit, entraînant une hypoglycémie qui déclenche le DT2",
        "Le cortisol chronique stimule la néoglucogenèse et favorise l'insulinorésistance, augmentant le risque de DT2",
        "Le stress chronique stimule les cellules β du pancréas à surproduire de l'insuline, épuisant le pancréas"
      ],
      bonneReponse: 2,
      explication: "Le cortisol chronique maintient une hyperglycémie persistante via la néoglucogenèse et favorise le développement d'une insulinorésistance cellulaire. Ces deux mécanismes combinés augmentent significativement le risque de diabète de type 2. Le stress chronique est ainsi un facteur de risque métabolique majeur indépendant de l'alimentation."
    }
  ],
  texteTrous: {
    paragraphe: "Le stress [chronique] résulte d'une activation persistante du système de stress sans retour à l'[homéostasie]. Selon le modèle de [Selye], l'organisme passe par les phases d'alarme, de résistance et d'[épuisement]. Le [cortisol] chroniquement élevé provoque une atrophie de l'[hippocampe], une [insulinorésistance] et une inflammation de bas grade. Les conséquences psychologiques incluent l'[anxiété], la dépression et le [burnout]. La gestion du stress passe par l'[activité physique], la cohérence [cardiaque] et les thérapies cognitivo-comportementales ([TCC]).",
    banqueMots: ['chronique', 'homéostasie', 'Selye', 'épuisement', 'cortisol', 'hippocampe', 'insulinorésistance', 'anxiété', 'burnout', 'activité physique', 'cardiaque', 'TCC', 'allostasie']
  }
};

export const chapitre17 = {
  id: 'ch17',
  titre: 'Le cerveau, un organe fragile',
  description: "Organisation cérébrale, plasticité synaptique, AVC, maladies neurodégénératives et addictions.",
  cours: {
    sections: [
      {
        titre: "Organisation et cartographie du cerveau",
        contenu: [
          "Le cerveau humain est l'organe le plus complexe connu. Il pèse environ 1,4 kg et contient ~86 milliards de neurones, chacun pouvant former jusqu'à 10 000 connexions (synapses) avec d'autres neurones. L'ensemble forme un réseau d'une complexité extraordinaire.",
          "Le cortex cérébral (substance grise) est la couche externe plissée de 2–4 mm d'épaisseur. Les plissures (gyri et sulci) permettent d'augmenter la surface corticale (~2 200 cm²) dans un volume crânien limité. Le cortex est divisé en quatre lobes : frontal (planification, langage, personnalité), pariétal (somatosensorialité, intégration spatiale), temporal (mémoire, langage, audition) et occipital (vision).",
          "Sous le cortex, les structures sous-corticales jouent des rôles essentiels : les noyaux gris centraux (contrôle moteur automatisé), le système limbique (amygdale = émotions, hippocampe = mémoire), le thalamus (relais sensoriel) et l'hypothalamus (régulation homéostatique). Le cervelet coordonne les mouvements fins et l'équilibre.",
          "La cartographie fonctionnelle (ou localisation des fonctions) a été établie par des études cliniques de patients lésés (Broca en 1861 : aire du langage expressif) et par les techniques modernes d'imagerie (IRM fonctionnelle, PET-scan). Ces études montrent que les fonctions cognitives complexes impliquent des réseaux distribués, pas des zones strictement localisées.",
          "Points clés : 1) ~86 milliards de neurones, jusqu'à 10 000 synapses/neurone. 2) Cortex = 4 lobes (frontal, pariétal, temporal, occipital). 3) Structures sous-corticales : limbique, ganglions de la base, thalamus. 4) Aire de Broca = production du langage. 5) Aire de Wernicke = compréhension du langage. 6) Imagerie cérébrale = outil clé de cartographie fonctionnelle."
        ]
      },
      {
        titre: "La plasticité cérébrale",
        contenu: [
          "La plasticité cérébrale (ou neuroplasticité) est la capacité du cerveau à se modifier en réponse aux expériences, à l'apprentissage, aux lésions ou à l'environnement. Cette propriété fondamentale persiste tout au long de la vie, bien qu'elle soit maximale pendant les périodes critiques du développement.",
          "Au niveau synaptique, la plasticité se manifeste par des modifications de la force des connexions entre neurones. La potentialisation à long terme (LTP) est le mécanisme cellulaire de base de l'apprentissage et de la mémorisation : une stimulation répétée d'une synapse renforce durablement sa transmission (via l'insertion de récepteurs AMPA et la croissance de nouvelles épines dendritiques).",
          "La neurogenèse adulte (formation de nouveaux neurones chez l'adulte) a longtemps été considérée impossible. Des études depuis les années 1990 ont montré qu'elle persiste dans deux régions : l'hippocampe (mémoire) et le bulbe olfactif. L'exercice physique et l'enrichissement de l'environnement stimulent cette neurogenèse via le BDNF.",
          "La plasticité de récupération après lésion cérébrale permet à d'autres régions d'assumer partiellement les fonctions des zones endommagées. C'est le fondement de la rééducation neurologique : les exercices répétés renforcent de nouvelles connexions qui 'contournent' la lésion. Cette plasticité est maximale dans les premières semaines après la lésion.",
          "Points clés : 1) Neuroplasticité = modification du cerveau par l'expérience. 2) LTP = mécanisme synaptique de l'apprentissage (AMPA, épines dendritiques). 3) Neurogenèse adulte : hippocampe + bulbe olfactif. 4) BDNF stimule neurogenèse (exercice, environnement enrichi). 5) Plasticité de récupération = base de la rééducation neuro. 6) Plasticité maximale pendant les périodes critiques du développement."
        ]
      },
      {
        titre: "Les accidents vasculaires cérébraux (AVC)",
        contenu: [
          "L'AVC est la 2ème cause de mortalité et la 1ère cause de handicap acquis dans les pays développés. Il survient lorsque l'apport sanguin (et donc en O₂ et glucose) à une région cérébrale est brutalement interrompu. Le neurone peut survivre quelques minutes seulement sans oxygène.",
          "L'AVC ischémique (80 % des cas) résulte de l'obstruction d'une artère cérébrale par un caillot (thrombus formé localement ou embolie venant d'ailleurs). Les facteurs de risque principaux sont : HTA, fibrillation auriculaire, athérosclérose, diabète, tabagisme, obésité. La zone centrale (core) est rapidement détruite ; la zone de pénombre (autour) peut être sauvée si le traitement est rapide.",
          "L'AVC hémorragique (20 % des cas) résulte de la rupture d'une artère cérébrale, entraînant un hématome comprimant les tissus environnants. Principal facteur de risque : HTA non contrôlée. Plus souvent mortel que l'ischémique.",
          "Les signes FAST permettent de reconnaître un AVC : Face (asymétrie faciale), Arm (faiblesse d'un bras), Speech (trouble de la parole), Time (appeler le 15 immédiatement). Chaque minute compte : on perd environ 1,9 million de neurones par minute lors d'un AVC ischémique.",
          "Le traitement de l'AVC ischémique repose sur la thrombolyse (dissolution du caillot par rt-PA intraveineux, jusqu'à 4h30) ou la thrombectomie mécanique (ablation du caillot par cathéter intraartériel, jusqu'à 24h dans certains cas). La rééducation neurologique intensive dans les semaines suivantes exploite la plasticité cérébrale pour récupérer les fonctions perdues.",
          "Points clés : 1) AVC = interruption brutale de l'apport sanguin cérébral. 2) Ischémique (80 %) = obstruction d'artère. 3) Hémorragique (20 %) = rupture d'artère. 4) FAST = Face, Arm, Speech, Time (appel 15). 5) 1,9 million de neurones perdus/min → urgence absolue. 6) Thrombolyse / thrombectomie = traitements en urgence."
        ]
      },
      {
        titre: "Les maladies neurodégénératives",
        contenu: [
          "Les maladies neurodégénératives sont caractérisées par la mort progressive de populations neuronales spécifiques. Elles sont incurables à ce jour, mais leurs mécanismes sont de mieux en mieux compris, ouvrant des pistes thérapeutiques.",
          "La maladie d'Alzheimer est la plus fréquente (2/3 des démences). Elle se caractérise par deux lésions histologiques : les plaques séniles (dépôts extracellulaires de peptide β-amyloïde, issu du clivage aberrant de la protéine APP) et les dégénérescences neurofibrillaires (accumulation intraneuronale de protéine Tau hyperphosphorylée). Ces lésions débutent dans l'hippocampe (troubles de la mémoire épisodique) et s'étendent progressivement.",
          "La maladie de Parkinson résulte de la dégénérescence des neurones dopaminergiques de la substance noire (mésencéphale). La perte de dopamine dans le striatum (ganglions de la base) perturbe le contrôle moteur automatisé : tremblement au repos, rigidité, akinésie (lenteur), instabilité posturale. Des corps de Lewy (inclusions d'α-synucléine) sont la signature histologique de la maladie.",
          "La sclérose latérale amyotrophique (SLA ou maladie de Charcot) est une dégénérescence des motoneurones centraux et périphériques, conduisant à une paralysie progressive. La maladie de Huntington est génétique (mutation du gène HTT avec expansion de répétitions CAG), affectant les neurones des ganglions de la base.",
          "Points clés : 1) Alzheimer = plaques β-amyloïde + dégénérescences neurofibrillaires (Tau). 2) Débute hippocampe → troubles mémoire épisodique. 3) Parkinson = perte neurones dopaminergiques substance noire. 4) Parkinson : tremblement + rigidité + akinésie. 5) Corps de Lewy = dépôts α-synucléine. 6) SLA = dégénérescence motoneurones → paralysie progressive."
        ]
      },
      {
        titre: "Les addictions et le circuit de récompense",
        contenu: [
          "L'addiction est une pathologie cérébrale chronique caractérisée par une consommation compulsive d'une substance (drogues, alcool, tabac) ou un comportement (jeux, réseaux sociaux) malgré des conséquences négatives, avec une perte du contrôle sur la consommation.",
          "Le circuit de récompense est le substrat neurobiologique de l'addiction. Il relie le striatum ventral (noyau accumbens), le cortex préfrontal et l'aire tegmentale ventrale (ATV). En situation de récompense naturelle (nourriture, sexualité), la dopamine libérée par les neurones de l'ATV dans le noyau accumbens génère la sensation de plaisir et renforce le comportement.",
          "Toutes les drogues d'addiction (alcool, cocaïne, héroïne, cannabis, nicotine) augmentent la concentration de dopamine dans le noyau accumbens par des mécanismes différents : la cocaïne bloque le recaptage de la dopamine, l'héroïne lève l'inhibition des neurones dopaminergiques, la nicotine stimule les récepteurs nicotiniques présynaptiques.",
          "La tolérance se développe par neuroadaptation : le cerveau réduit le nombre ou la sensibilité de ses récepteurs dopaminergiques pour compenser l'excès de dopamine. L'individu doit consommer des doses croissantes pour obtenir le même effet. La dépendance physique est l'adaptation homéostatique à la présence chronique de la drogue — le sevrage en l'absence de la substance provoque des symptômes opposés aux effets de la drogue.",
          "Le cortex préfrontal (siège du contrôle inhibiteur et des décisions rationnelles) est progressivement altéré par l'addiction. Sa connexion avec le noyau accumbens s'affaiblit, réduisant la capacité à résister aux pulsions liées à la drogue. C'est le substrat neurobiologique de la perte de contrôle.",
          "Points clés : 1) Circuit de récompense : ATV → noyau accumbens (dopamine). 2) Toutes les drogues ↑ dopamine dans le noyau accumbens. 3) Tolérance = neuroadaptation → ↑ doses pour même effet. 4) Dépendance physique = adaptation homéostatique → syndrome de sevrage. 5) Cortex préfrontal altéré = ↓ contrôle inhibiteur. 6) Addiction = maladie chronique, pas un manque de volonté."
        ]
      }
    ]
  },
  flashcards: [
    { terme: 'Cortex cérébral', definition: "Couche de substance grise plissée à la surface du cerveau (~2 mm). Siège des fonctions cognitives supérieures. Divisé en 4 lobes : frontal, pariétal, temporal, occipital." },
    { terme: 'Lobe frontal', definition: "Région antérieure du cortex cérébral. Siège de la personnalité, des fonctions exécutives (planification, prise de décision), du contrôle moteur volontaire et de la production du langage (aire de Broca)." },
    { terme: 'Plasticité synaptique', definition: "Capacité des synapses à modifier leur efficacité de transmission en réponse à l'activité neuronale. Base cellulaire de l'apprentissage et de la mémoire. Comprend LTP (renforcement) et LTD (affaiblissement)." },
    { terme: 'Potentialisation LTP', definition: "Long-term potentiation. Renforcement durable d'une synapse après stimulation répétée. Mécanisme cellulaire de l'apprentissage : insertion de récepteurs AMPA et croissance d'épines dendritiques." },
    { terme: 'AVC', definition: "Accident vasculaire cérébral. Interruption brutale de l'apport sanguin à une région cérébrale. Ischémique (80 %, obstruction) ou hémorragique (20 %, rupture). Urgence absolue : appeler le 15." },
    { terme: 'Ischémie cérébrale', definition: "Interruption de l'apport sanguin (donc d'O₂ et de glucose) à une région du cerveau par obstruction d'une artère. Provoque la mort des neurones en quelques minutes. Cause principale d'AVC." },
    { terme: 'Thrombolyse', definition: "Traitement de l'AVC ischémique par injection d'un médicament (rt-PA) qui dissout le caillot sanguin. Efficace si administré dans les 4h30 suivant les premiers symptômes." },
    { terme: 'Alzheimer', definition: "Maladie neurodégénérative la plus fréquente. Lésions : plaques β-amyloïdes + dégénérescences neurofibrillaires (Tau). Début hippocampique → troubles mémoire épisodique → évolution vers démence." },
    { terme: 'Parkinson', definition: "Maladie neurodégénérative due à la perte des neurones dopaminergiques de la substance noire. Triade clinique : tremblement au repos, rigidité, akinésie (lenteur des mouvements). Traitement : L-DOPA." },
    { terme: 'Dopamine', definition: "Neurotransmetteur du système mésolimbique (circuit de récompense). Libérée lors des expériences plaisantes. Sa dérégulation est centrale dans les addictions, la maladie de Parkinson et la schizophrénie." },
    { terme: 'Circuit de récompense', definition: "Réseau neuronal (ATV → noyau accumbens → cortex préfrontal) libérant de la dopamine lors des expériences plaisantes. Détourné par toutes les drogues d'addiction." },
    { terme: 'Addiction', definition: "Pathologie cérébrale chronique : consommation compulsive malgré les conséquences négatives, avec perte de contrôle. Résulte d'une neuroadaptation du circuit de récompense et d'une altération du cortex préfrontal." },
    { terme: 'Tolérance', definition: "Neuroadaptation à une substance psychoactive : réduction des récepteurs dopaminergiques → nécessité d'augmenter les doses pour obtenir le même effet. Premier signe de dépendance." },
    { terme: 'Neurogenèse adulte', definition: "Formation de nouveaux neurones chez l'adulte, principalement dans l'hippocampe et le bulbe olfactif. Stimulée par l'exercice physique et le BDNF. Base de certaines formes de plasticité." },
    { terme: 'BDNF', definition: "Brain-Derived Neurotrophic Factor. Facteur trophique neuronal stimulant la neurogenèse, la plasticité synaptique et la survie neuronale. Libéré lors de l'exercice physique et de l'enrichissement de l'environnement." },
  ],
  quiz: [
    {
      question: "Quel est le mécanisme cellulaire de base de l'apprentissage et de la mémorisation ?",
      options: [
        "La myélinisation accélérée des axones fréquemment utilisés",
        "La potentialisation à long terme (LTP) qui renforce durablement les synapses stimulées répétitivement",
        "La formation de nouveaux neurones dans le cortex cérébral",
        "L'augmentation de la sécrétion de dopamine dans l'hippocampe"
      ],
      bonneReponse: 1,
      explication: "La LTP (long-term potentiation) est le mécanisme synaptique fondamental de l'apprentissage. Une stimulation répétée d'une synapse entraîne l'insertion de récepteurs AMPA supplémentaires et la croissance d'épines dendritiques, renforçant durablement la transmission synaptique — illustrant le principe 'les neurones qui s'activent ensemble se connectent ensemble'."
    },
    {
      question: "Quels sont les signes FAST permettant de reconnaître un AVC ?",
      options: [
        "Fatigue, Agressivité, Somnolence, Tremblements",
        "Face (asymétrie faciale), Arm (faiblesse bras), Speech (trouble parole), Time (appeler le 15 immédiatement)",
        "Fièvre, Amnésie, Spasmes, Tension artérielle élevée",
        "Fourmillements, Anxiété, Sueurs, Tachycardie"
      ],
      bonneReponse: 1,
      explication: "L'acronyme FAST aide à reconnaître rapidement un AVC : Face (asymétrie du visage, sourire dévié), Arm (faiblesse ou paralysie d'un bras), Speech (troubles de la parole ou de la compréhension), Time (appeler immédiatement le 15). Chaque minute compte : on perd ~1,9 million de neurones/minute lors d'un AVC ischémique."
    },
    {
      question: "Quelle est la signature histologique de la maladie d'Alzheimer ?",
      options: [
        "Dépôts de protéine α-synucléine (corps de Lewy) et perte de neurones dopaminergiques",
        "Plaques séniles (β-amyloïde) et dégénérescences neurofibrillaires (protéine Tau hyperphosphorylée)",
        "Démyélinisation des axones et inflammation de la substance blanche",
        "Perte des neurones cholinergiques du striatum et des ganglions de la base"
      ],
      bonneReponse: 1,
      explication: "La maladie d'Alzheimer se caractérise par deux lésions histologiques pathognomoniques : les plaques séniles (dépôts extracellulaires de peptide β-amyloïde) et les dégénérescences neurofibrillaires (accumulation intraneuronale de protéine Tau hyperphosphorylée). Ces lésions débutent dans l'hippocampe, expliquant les troubles précoces de la mémoire épisodique."
    },
    {
      question: "Comment toutes les drogues d'addiction agissent-elles sur le circuit de récompense, malgré leurs mécanismes différents ?",
      options: [
        "Elles augmentent toutes la sécrétion de sérotonine dans l'amygdale",
        "Elles augmentent toutes la concentration de dopamine dans le noyau accumbens, détournant le circuit de récompense",
        "Elles inhibent toutes le cortex préfrontal, supprimant le contrôle inhibiteur",
        "Elles mimient toutes l'action de l'endorphine sur les récepteurs opioïdes"
      ],
      bonneReponse: 1,
      explication: "Malgré des mécanismes moléculaires très différents (cocaïne : bloque recaptage DA ; héroïne : opioïdes ; nicotine : récepteurs nicotiniques ; alcool : GABA + DA), toutes les drogues d'addiction convergent vers le même résultat : une augmentation de la dopamine dans le noyau accumbens. Ce 'final common pathway' est le substrat neurobiologique de l'addiction."
    },
    {
      question: "Quelle structure cérébrale est particulièrement vulnérable à l'ischémie lors d'un AVC et pourquoi ?",
      options: [
        "Le cervelet, car il est mal vascularisé et consomme beaucoup d'O₂",
        "L'hippocampe, car ses neurones pyramidaux sont extrêmement sensibles à l'hypoxie et à l'excitotoxicité au glutamate",
        "Le cortex occipital, car il est la zone la plus active métaboliquement",
        "Les ganglions de la base, car ils n'ont pas de circulation collatérale"
      ],
      bonneReponse: 1,
      explication: "L'hippocampe est particulièrement vulnérable à l'ischémie car ses neurones pyramidaux (couche CA1) sont très sensibles à l'excitotoxicité : lors d'une ischémie, le glutamate s'accumule dans les synapses et suractive les récepteurs NMDA, entraînant une entrée massive de Ca²⁺ qui déclenche la mort neuronale même après des ischémies brèves."
    }
  ],
  texteTrous: {
    paragraphe: "Le [cortex cérébral] est divisé en quatre lobes dont le lobe [frontal] qui contrôle le langage et la personnalité. La [plasticité] cérébrale permet au cerveau de se modifier par l'expérience, grâce à la potentialisation à long terme ([LTP]). Un [AVC] ischémique résulte de l'obstruction d'une artère cérébrale ; l'acronyme [FAST] aide à le reconnaître. La maladie d'[Alzheimer] se caractérise par des plaques de [bêta-amyloïde] et des dégénérescences neurofibrillaires. La maladie de [Parkinson] résulte de la perte des neurones à [dopamine]. Les addictions détournent le circuit de [récompense] en augmentant la dopamine dans le noyau [accumbens].",
    banqueMots: ['cortex cérébral', 'frontal', 'plasticité', 'LTP', 'AVC', 'FAST', 'Alzheimer', 'bêta-amyloïde', 'Parkinson', 'dopamine', 'récompense', 'accumbens', 'hippocampe']
  }
};

export const svtChapitres = [chapitre1, chapitre2, chapitre3, chapitre4, chapitre5, chapitre6, chapitre7, chapitre8, chapitre9, chapitre10, chapitre11, chapitre12, chapitre13, chapitre14, chapitre15, chapitre16, chapitre17];
