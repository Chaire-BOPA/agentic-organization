// Shared with index.astro (hero stat: total project count must always
// match what's actually listed here, never a hand-typed number) and
// innovations.astro (renders every phase/project as cards).
export const phases = [
  {
    id: 'pre',
    label: 'Préopératoire',
    subtitle: 'Communiquer',
    step: 'var(--color-step-1)',
    projects: [
      {
        name: 'LiverSight',
        text: "Communication médecin-patient en 3D avant l'opération. En partenariat avec Toys Films, sous la supervision du Dr Oriana Ciacio et du Pr Éric Vibert.",
        videoId: 'MF1ysshoNVM',
      },
      {
        name: 'PancreasSight',
        text: 'La même approche appliquée à la chirurgie pancréatique, en partenariat avec Toys Films et le Dr Gabriella Pittau.',
        photo: { src: '/images/projets/pancreasight.jpg', alt: 'Modélisation 3D interactive PancreasSight' },
      },
      {
        name: "Optimiser l'allocation des greffons grâce à l'IA",
        text: "Utiliser l'intelligence artificielle pour optimiser l'allocation des greffons, au bénéfice des patients en attente de transplantation.",
        photo: { src: '/images/projets/greffons.png', alt: 'Main gantée tenant des modèles de greffons (cœur, poumons, reins)' },
      },
    ],
  },
  {
    id: 'per',
    label: 'Peropératoire',
    subtitle: 'Assister le chirurgien',
    step: 'var(--color-step-2)',
    projects: [
      {
        name: 'BOPCAM',
        text: "Un casque qui filme les mains du chirurgien en chirurgie ouverte : analyse d'images en direct, compte-rendu opératoire augmenté, télé-expertise.",
        photo: { src: '/images/projets/bopcam.jpg', alt: 'Casque BOPCAM porté par un chirurgien au bloc opératoire' },
      },
      {
        name: 'Henri',
        text: "Un assistant conçu pour accompagner le chirurgien pendant l'opération : informations fiables sur le patient, checklist, antécédents.",
        photo: { src: '/images/projets/henri.png', alt: "Illustration d'Henri, l'assistant IA du chirurgien, aux côtés de l'équipe au bloc opératoire." },
      },
      {
        name: 'Goldfinger',
        text: 'Un outil intra-opératoire pour manipuler un modèle 3D de foie sans contact, sans jamais compromettre la stérilité du bloc - un geste en l\'air suffit à guider le chirurgien.',
        photo: { src: '/images/projets/goldfinger.png', alt: 'Chirurgien manipulant sans contact un modèle 3D de foie affiché à l\'écran, en salle d\'opération.' },
      },
      {
        name: 'Compte rendu opératoire augmenté',
        text: "Le travail sur l'analyse d'images au bloc opératoire a donné naissance à Uncovr, une start-up née d'un besoin de terrain identifié par les équipes.",
        href: 'https://uncovr.ai/',
        photo: { src: '/images/projets/compterendu.png', alt: 'Illustration du compte-rendu opératoire augmenté : tableau de bord numérique avec graphiques et indicateurs cliniques.' },
      },
    ],
  },
  {
    id: 'post',
    label: 'Postopératoire',
    subtitle: 'Suivre les patients',
    step: 'var(--color-step-3)',
    projects: [
      {
        name: 'Colette',
        text: 'Un chatbot qui accompagne 24h/24 les patients transplantés du foie, né d\'un besoin identifié directement par les soignants.',
        photo: { src: '/images/projets/colette.jpg', alt: 'Le chatbot Colette sur un téléphone' },
      },
      {
        name: 'Suivi longitudinal et valeur en santé',
        text: "Aligné sur l'axe VBHC de l'AP-HP : évaluer la qualité de vie du patient via des questionnaires PROM et PREM, pour identifier des leviers d'amélioration des soins.",
      },
      {
        name: 'Quelle place pour le ressenti du chirurgien ?',
        text: "Corréler l'état émotionnel du chirurgien au résultat clinique et au ressenti du patient, pour en faire un levier d'action à part entière.",
      },
      {
        name: 'Masterclass patient pair-aidance',
        text: "Formation d'anciens patients transplantés en « patients experts », pour accompagner et conseiller les nouveaux patients pendant leur parcours.",
      },
    ],
  },
  {
    id: 'medico-eco',
    label: 'Médico-économique',
    subtitle: 'Mesurer la valeur',
    step: 'var(--color-step-4)',
    projects: [
      {
        name: 'Hepatgreen',
        text: 'Projet médico-économique en cours - description à venir.',
        photo: { src: '/images/projets/coutenv.png', alt: "Foie stylisé composé de végétation, symbolisant le coût environnemental de l'hépatectomie" },
      },
      {
        name: 'MESGARDES',
        text: 'Projet médico-économique en cours - description à venir.',
        photo: { src: '/images/projets/mesgardes.png', alt: 'Calendrier et stéthoscope, symbolisant le suivi médico-économique du projet MESGARDES' },
      },
      {
        name: "Coût de l'hépatectomie",
        text: 'Projet médico-économique en cours - description à venir.',
        photo: { src: '/images/projets/coutfinancier.png', alt: "Illustration du coût financier de l'hépatectomie : courbe de croissance, pièces empilées et symbole euro" },
      },
    ],
  },
];
