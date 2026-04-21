export const grandOralThemes = [
  {
    id: 1,
    titre: "Le vivant et l'identité",
    description: "En quoi le patrimoine génétique définit-il (ou non) notre identité ? Regards croisés SVT–philosophie.",
    tags: ["SVT", "Philosophie"]
  },
  {
    id: 2,
    titre: "Sciences et éthique",
    description: "Les avancées en biologie moléculaire (OGM, CRISPR, thérapie génique) soulèvent-elles des questions morales ? Quelle est la responsabilité du scientifique ?",
    tags: ["SVT", "HLP"]
  },
  {
    id: 3,
    titre: "La liberté biologique existe-t-elle ?",
    description: "Notre comportement est-il déterminé par nos gènes ? Peut-on concilier liberté philosophique et déterminisme génétique ?",
    tags: ["SVT", "Philosophie"]
  },
  {
    id: 4,
    titre: "L'évolution : hasard ou nécessité ?",
    description: "La sélection naturelle et la dérive génétique sont-elles compatibles avec l'idée d'une finalité dans le vivant ? Quel rapport entre contingence et nécessité ?",
    tags: ["SVT", "Philosophie"]
  },
  {
    id: 5,
    titre: "Connaissance du vivant et limites du savoir",
    description: "La science peut-elle tout expliquer du vivant ? Quelles sont les frontières épistémologiques de la biologie ?",
    tags: ["SVT", "Philosophie"]
  },
  {
    id: 6,
    titre: "L'immunité : soi et l'autre",
    description: "Comment le système immunitaire distingue-t-il le soi du non-soi ? Cette distinction a-t-elle un sens philosophique (altérité, identité) ?",
    tags: ["SVT", "Philosophie"]
  },
  {
    id: 7,
    titre: "Maladie, vulnérabilité et condition humaine",
    description: "La maladie (VIH, cancers) révèle-t-elle notre vulnérabilité fondamentale ? Comment la littérature et la philosophie ont-elles pensé la souffrance ?",
    tags: ["SVT", "Littérature", "Philosophie"]
  },
  {
    id: 8,
    titre: "Bonheur et biologie",
    description: "Le bonheur est-il réductible à des mécanismes biologiques (hormones, neurosciences) ? Peut-on être heureux contre sa nature ?",
    tags: ["Philosophie", "SVT"]
  },
  {
    id: 9,
    titre: "La biodiversité : une valeur en soi ?",
    description: "A-t-on des devoirs envers les autres espèces ? La diversité du vivant a-t-elle une valeur intrinsèque ou seulement instrumentale ?",
    tags: ["SVT", "Philosophie", "HLP"]
  },
  {
    id: 10,
    titre: "Argumentation scientifique et rhétorique",
    description: "La démonstration scientifique est-elle une forme de rhétorique ? Comment convaincre avec des données biologiques ?",
    tags: ["Littérature", "SVT"]
  }
];

export const oralTemplate = [
  {
    etape: 1,
    titre: "Introduction",
    duree: "~1 minute",
    consignes: [
      "Accrocher le jury avec une citation, un exemple concret ou une question rhétorique.",
      "Présenter clairement le sujet et sa pertinence (pourquoi ce sujet vous intéresse).",
      "Formuler une problématique précise sous forme de question.",
      "Annoncer le plan en 2 parties."
    ],
    exemple: "Ex. : « En 1953, Watson et Crick découvrent la structure de l'ADN. Depuis, les avancées en biologie moléculaire n'ont cessé d'accélérer. Mais jusqu'où peut-on aller ? C'est ce que nous interroge la question de la liberté biologique… »"
  },
  {
    etape: 2,
    titre: "Partie 1",
    duree: "~3-4 minutes",
    consignes: [
      "Présenter votre premier angle d'approche (souvent l'angle scientifique).",
      "Appuyer chaque argument sur des connaissances précises du cours.",
      "Utiliser des exemples concrets (une expérience, un mécanisme biologique, un cas historique).",
      "Conclure la partie par une transition vers la partie 2."
    ],
    exemple: "Angle suggéré : les faits biologiques / scientifiques (ce que la SVT nous apprend sur le sujet)."
  },
  {
    etape: 3,
    titre: "Partie 2",
    duree: "~3-4 minutes",
    consignes: [
      "Présenter votre deuxième angle (souvent philosophique, littéraire ou éthique).",
      "Mettre en dialogue les deux disciplines : en quoi s'éclairent-elles mutuellement ?",
      "Nuancer votre propos : montrez que la question est complexe.",
      "Ne pas rester en surface — le jury valorise la profondeur de réflexion."
    ],
    exemple: "Angle suggéré : les enjeux philosophiques, éthiques ou littéraires soulevés par le sujet scientifique."
  },
  {
    etape: 4,
    titre: "Conclusion",
    duree: "~1 minute",
    consignes: [
      "Répondre à la problématique de manière claire et assumée.",
      "Synthétiser les deux parties sans simplement les résumer.",
      "Ouvrir sur une perspective plus large ou une question nouvelle.",
      "Terminer sur une phrase forte et mémorable."
    ],
    exemple: "Ex. : « Ainsi, si la biologie dessine les contours de notre nature, la philosophie nous rappelle que la liberté réside peut-être dans la conscience que nous en avons. »"
  }
];
