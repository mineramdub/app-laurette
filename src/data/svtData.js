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

export const svtChapitres = [chapitre1, chapitre2, chapitre3, chapitre4, chapitre5, chapitre6];
