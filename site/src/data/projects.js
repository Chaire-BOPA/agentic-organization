// Shared with innovations.astro (renders every phase/project as cards).
// Structure validated by the owner 2026-08-27: order, grouping, and the
// exact project list below are hers, not to be reorganized/renamed/
// added-to on our own initiative. Titles/descriptions are the V3
// editorial pass (2026-08-27, later same day) - these ARE the current
// real copy now, not placeholders; see source/content/projets.md for
// the fuller sourced background on each project.
export const phases = [
  {
    id: 'preoperatoire',
    label: 'Préopératoire',
    tagline: 'Mieux comprendre pour mieux planifier',
    icon: 'target',
    projects: [
      {
        name: 'LiverSight',
        description: "Un logiciel développé par BOPA pour faciliter les échanges entre le chirurgien et son patient avant une chirurgie du foie, mieux comprendre l'intervention et rendre le patient acteur de sa prise en charge.",
        image: '/images/projets-v2/liversight.png',
        action: { label: 'En vidéo!', href: 'https://www.youtube.com/watch?v=MF1ysshoNVM', type: 'video' },
      },
      {
        name: 'PancreasSight',
        description: "Un logiciel développé par BOPA pour faciliter les échanges entre le chirurgien et son patient avant une chirurgie du pancréas, mieux comprendre l'intervention et rendre le patient acteur de sa prise en charge.",
        image: '/images/innovations-v2/pancreassight.svg',
      },
      {
        name: 'LiverMatch',
        description: 'Développer de nouveaux outils pour mieux évaluer la situation des patients en attente de transplantation et accompagner la décision médicale.',
        image: '/images/innovations-v2/optimiser-allocation-greffons.svg',
      },
    ],
  },
  {
    id: 'peroperatoire',
    label: 'Peropératoire',
    tagline: 'Mieux voir, mieux décider, mieux opérer',
    icon: 'pulse',
    projects: [
      {
        name: 'BOPCAM',
        description: 'Un dispositif « made in BOPA » pour filmer au plus près les mains et les gestes du chirurgien en chirurgie ouverte.',
        image: '/images/projets-v2/bopcam.png',
      },
      {
        name: 'Henri',
        description: "Un assistant vocal pour accompagner le chirurgien pendant l'intervention, sans interrompre son geste.",
        image: '/images/innovations-v2/henri.svg',
      },
      {
        name: 'Goldfinger',
        description: 'Interagir simplement et à distance avec les images médicales, sans jamais rompre la stérilité.',
        image: '/images/projets-v2/goldfinger.png',
      },
      {
        name: 'Le compte rendu opératoire augmenté',
        description: 'Transformer automatiquement les vidéos de chirurgie en comptes rendus opératoires. Une thématique qui a donné naissance à Uncovr.',
        image: '/images/innovations-v2/compte-rendu-operatoire-augmente.svg',
        action: { label: 'Découvrir Uncovr', href: 'https://uncovr.ai/', type: 'external' },
      },
      {
        name: 'Évaluer la charge cognitive du chirurgien',
        description: 'Mieux comprendre la charge mentale du chirurgien et ses liens avec les erreurs et événements indésirables, pour contribuer à sécuriser le geste chirurgical.',
        image: '/images/innovations-v2/charge-cognitive-chirurgien.svg',
      },
    ],
  },
  {
    id: 'postoperatoire',
    label: 'Postopératoire',
    tagline: 'Mieux suivre pour mieux guérir',
    icon: 'chart',
    projects: [
      {
        name: 'Colette',
        description: 'Une IA conversationnelle pour accompagner le patient greffé 24 h/24 et 7 j/7.',
        image: '/images/projets-v2/colette.png',
      },
      {
        name: 'BOPA Value',
        description: 'Utiliser des solutions numériques pour évaluer le devenir du patient dans le temps : sa récupération, sa qualité de vie et son vécu.',
        image: '/images/innovations-v2/value-based-health-care.svg',
      },
      {
        name: 'Le ressenti du chirurgien face aux résultats cliniques',
        description: 'Comprendre comment le chirurgien perçoit les résultats de ses patients et comment cette perception influence sa pratique.',
        image: '/images/innovations-v2/ressenti-chirurgien.svg',
      },
      {
        name: 'Masterclass patients experts',
        description: "Transformer l'expérience d'anciens patients en expertise pour accompagner les patients d'aujourd'hui.",
        image: '/images/innovations-v2/master-class-patients-experts.svg',
      },
    ],
  },
  {
    id: 'medico-economique',
    label: 'Médico-économique',
    tagline: 'Mieux évaluer pour mieux allouer les ressources',
    icon: 'euro',
    projects: [
      {
        name: 'MesGardes',
        description: 'Simplifier la création des plannings de garde pour réduire le temps administratif et préserver le temps médical.',
        image: '/images/innovations-v2/mesgardes.svg',
      },
      {
        name: 'HepatGreen',
        description: "Mesurer l'empreinte environnementale de la chirurgie du foie pour construire une chirurgie plus durable.",
        image: '/images/innovations-v2/hepatgreen.svg',
      },
    ],
  },
];
