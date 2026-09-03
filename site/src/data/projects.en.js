// English mirror of projects.js (pack "Version-Anglaise-Switch-FR-EN-V1",
// 2026-09-03). Same structure, same order, same ids/icons/images/action
// hrefs as the French source - only label/tagline/name-kept-as-is/
// description/action.label are translated. projects.js itself is never
// imported or edited by this file: a future FR wording change here has no
// way to leak into the French site, and vice versa.
export const phases = [
  {
    id: 'preoperatoire',
    label: 'Preoperative',
    tagline: 'Better understanding for better planning',
    icon: 'target',
    projects: [
      {
        name: 'LiverSight',
        description: 'Software developed by BOPA to facilitate communication between surgeon and patient before liver surgery, helping the patient better understand the procedure and take an active role in their own care.',
        image: '/images/projets-v2/liversight.png',
        action: { label: 'Discover LiverSight', href: 'https://www.youtube.com/watch?v=MF1ysshoNVM', type: 'external' },
      },
      {
        name: 'PancreasSight',
        description: 'Software developed by BOPA to facilitate communication between surgeon and patient before pancreatic surgery, helping the patient better understand the procedure and take an active role in their own care.',
        image: '/images/innovations-v2/pancreassight.svg',
      },
      {
        name: 'LiverMatch',
        description: 'Developing new tools to better assess the situation of patients awaiting transplantation and support medical decision-making.',
        image: '/images/innovations-v2/optimiser-allocation-greffons.svg',
      },
    ],
  },
  {
    id: 'peroperatoire',
    label: 'Intraoperative',
    tagline: 'Better vision, better decisions, better surgery',
    icon: 'pulse',
    projects: [
      {
        name: 'BOPCAM',
        description: 'A "made in BOPA" device to film the surgeon\'s hands and movements up close during open surgery.',
        image: '/images/projets-v2/bopcam.png',
      },
      {
        name: 'Henri',
        description: "A voice assistant that supports the surgeon during the procedure, without interrupting their hands.",
        image: '/images/innovations-v2/henri.svg',
      },
      {
        name: 'Goldfinger',
        description: 'Interacting simply and remotely with medical images, without ever breaking sterility.',
        image: '/images/projets-v2/goldfinger.png',
      },
      {
        name: 'The augmented operative report',
        description: 'Automatically turning surgical videos into operative reports. A research theme that gave rise to Uncovr.',
        image: '/images/innovations-v2/compte-rendu-operatoire-augmente.svg',
        action: { label: 'Discover Uncovr', href: 'https://uncovr.ai/', type: 'external' },
      },
      {
        name: "Assessing the surgeon's cognitive load",
        description: "Better understanding the surgeon's mental workload and its links with errors and adverse events, to help make surgical procedures safer.",
        image: '/images/innovations-v2/charge-cognitive-chirurgien.svg',
      },
    ],
  },
  {
    id: 'postoperatoire',
    label: 'Postoperative',
    tagline: 'Better follow-up for better recovery',
    icon: 'chart',
    projects: [
      {
        name: 'Colette',
        description: 'A conversational AI that supports transplant patients around the clock.',
        image: '/images/projets-v2/colette.png',
      },
      {
        name: 'BOPA Value',
        description: "Using digital solutions to track patient outcomes over time: recovery, quality of life and experience.",
        image: '/images/innovations-v2/value-based-health-care.svg',
      },
      {
        name: 'How surgeons experience clinical outcomes',
        description: "Understanding how surgeons perceive their patients' outcomes and how that perception shapes their practice.",
        image: '/images/innovations-v2/ressenti-chirurgien.svg',
      },
      {
        name: 'Expert patients masterclass',
        description: "Turning former patients' experience into expertise to support today's patients.",
        image: '/images/innovations-v2/master-class-patients-experts.svg',
      },
    ],
  },
  {
    id: 'medico-economique',
    label: 'Health economics',
    tagline: 'Better assessment for better resource allocation',
    icon: 'euro',
    projects: [
      {
        name: 'MesGardes',
        description: 'Simplifying on-call schedule creation to cut administrative time and protect time for patient care.',
        image: '/images/innovations-v2/mesgardes.svg',
      },
      {
        name: 'HepatGreen',
        description: 'Measuring the environmental footprint of liver surgery to build more sustainable surgical care.',
        image: '/images/innovations-v2/hepatgreen.svg',
      },
    ],
  },
];
