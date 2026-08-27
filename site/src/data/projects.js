// Shared with innovations.astro (renders every phase/project as cards).
// Structure validated by the owner 2026-08-27: order, grouping, and the
// exact project list below are hers, not to be reorganized/renamed/
// added-to on our own initiative - see source/content/projets.md for
// the fuller sourced descriptions this file's `description` fields are
// drawn from.
export const phases = [
  {
    id: 'preoperatoire',
    label: 'Préopératoire',
    tagline: 'Mieux comprendre pour mieux planifier',
    icon: 'target',
    projects: [
      {
        name: 'LiverSight',
        description: "Communication médecin-patient en 3D avant l'opération. En partenariat avec Toys Films, sous la supervision du Dr Oriana Ciacio et du Pr Éric Vibert.",
        image: '/images/projets-v2/liversight.png',
        href: 'https://www.youtube.com/watch?v=MF1ysshoNVM',
      },
      {
        name: 'PancreasSight',
        description: 'La même approche appliquée à la chirurgie pancréatique, en partenariat avec Toys Films et le Dr Gabriella Pittau.',
        image: '/images/innovations-v2/pancreassight.svg',
      },
      {
        name: "Optimiser l'allocation des greffons",
        description: "Utiliser l'intelligence artificielle pour optimiser l'allocation des greffons, au bénéfice des patients en attente de transplantation.",
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
        description: "Un casque qui filme les mains du chirurgien en chirurgie ouverte : analyse d'images en direct, compte-rendu opératoire augmenté, télé-expertise.",
        image: '/images/projets-v2/bopcam.png',
      },
      {
        name: 'Henri',
        description: "Un assistant conçu pour accompagner le chirurgien pendant l'opération : informations fiables sur le patient, checklist, antécédents.",
        image: '/images/innovations-v2/henri.svg',
      },
      {
        name: 'Goldfinger',
        description: "Un outil intra-opératoire pour manipuler un modèle 3D de foie sans contact, sans jamais compromettre la stérilité du bloc - un geste en l'air suffit à guider le chirurgien.",
        image: '/images/projets-v2/goldfinger.png',
      },
      {
        name: 'Le compte rendu opératoire augmenté',
        description: "Le travail sur l'analyse d'images au bloc opératoire a donné naissance à Uncovr, une start-up née d'un besoin de terrain identifié par les équipes.",
        image: '/images/innovations-v2/compte-rendu-operatoire-augmente.svg',
        href: 'https://uncovr.ai/',
      },
      {
        name: "L'évaluation de la charge cognitive du chirurgien",
        // <!-- verify: pas encore de description réelle, texte du pack
        //      BOPA-Innovations-V2 conservé en placeholder pour cette
        //      étape de forme (2026-08-27). -->
        description: 'Mesurer la charge cognitive pendant la chirurgie.',
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
        description: "Un chatbot qui accompagne 24h/24 les patients transplantés du foie, né d'un besoin identifié directement par les soignants.",
        image: '/images/projets-v2/colette.png',
      },
      {
        name: 'Le projet Value-Based Health Care pour suivre l\'évolution des patients après chirurgies',
        description: "Aligné sur l'axe VBHC de l'AP-HP : évaluer la qualité de vie du patient via des questionnaires PROM et PREM, pour identifier des leviers d'amélioration des soins.",
        image: '/images/innovations-v2/value-based-health-care.svg',
      },
      {
        name: 'Le ressenti du chirurgien face aux résultats cliniques',
        description: "Corréler l'état émotionnel du chirurgien au résultat clinique et au ressenti du patient, pour en faire un levier d'action à part entière.",
        image: '/images/innovations-v2/ressenti-chirurgien.svg',
      },
      {
        name: 'La Master Class pour former des patients experts',
        description: "Formation d'anciens patients transplantés en « patients experts », pour accompagner et conseiller les nouveaux patients pendant leur parcours.",
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
        description: 'Faciliter la mise en place et l\'optimisation des plannings de garde.',
        image: '/images/innovations-v2/mesgardes.svg',
      },
      {
        name: 'HepatGreen',
        description: 'Mesurer le coût environnemental de la chirurgie du foie.',
        image: '/images/innovations-v2/hepatgreen.svg',
      },
    ],
  },
];
