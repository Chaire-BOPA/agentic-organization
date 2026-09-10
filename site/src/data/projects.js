// Shared with InnovationsContent.astro (renders every phase/project as
// cards, for both /nos_innovations/ and /en/our-innovations/). Structure
// validated by the owner 2026-08-27: order, grouping, and the project
// list are hers, not to be reorganized/renamed/added-to on our own
// initiative. FR titles/descriptions are the V3 editorial pass
// (2026-08-27) - these ARE the current real copy, not placeholders; see
// source/content/projets.md for sourced background on each project.
// Merged FR/EN into one file 2026-09-08 (pack "Unification-Architecture-
// FR-EN-V1"): each phase/project now carries an `fr` and (when a
// validated translation exists) an `en` sub-object instead of living in
// two separate files (projects.js/projects.en.js). A project with no
// `en` key yet (e.g. a newly-added FR project awaiting translation)
// simply never renders on the EN page - InnovationsContent.astro skips
// it - never invent/guess its English text.
export const phases = [
  {
    id: 'preoperatoire',
    icon: 'target',
    fr: { label: 'Préopératoire', tagline: 'Mieux comprendre pour mieux planifier' },
    en: { label: 'Preoperative', tagline: 'Better understanding for better planning' },
    projects: [
      {
        // Visuel remplace 2026-09-09 (pack "Nos-Innovations-Remplacement-
        // Images-LiverSight-Metatron-PancreasSight-V1") - fourni par
        // l'owner via source/inbox, jamais genere/recherche. Original :
        // source/brand/assets/projets-v2/liversight.png. La Home
        // (HomeContent.astro) garde volontairement l'ANCIEN visuel
        // liversight.png dans son rail "Nos innovations" phares - hors
        // perimetre explicite de cette passe (page /nos_innovations/
        // uniquement), a confirmer avec l'owner si un alignement est voulu.
        image: '/images/projets-v2/liversight.jpg',
        action: {
          href: 'https://www.youtube.com/watch?v=MF1ysshoNVM',
          type: 'external',
          fr: { label: 'Découvrir LiverSight' },
          en: { label: 'Discover LiverSight' },
        },
        fr: {
          name: 'LiverSight',
          description: "Un logiciel développé par BOPA pour faciliter les échanges entre le chirurgien et son patient avant une chirurgie du foie, mieux comprendre l'intervention et rendre le patient acteur de sa prise en charge.",
        },
        en: {
          name: 'LiverSight',
          description: 'Software developed by BOPA to facilitate communication between surgeon and patient before liver surgery, helping the patient better understand the procedure and take an active role in their own care.',
        },
      },
      {
        // Visuel remplace le 2026-09-10 (nouvelle photo "PancreasSight V2"
        // fournie par l'owner via source/inbox) : cadrage natif proche du
        // ratio de la carte, aucun object-position necessaire. Ancien
        // visuel (et ses recadrages successifs) archive dans
        // source/brand/assets/projets-v2/pancreassight-v1.jpg. Original :
        // source/brand/assets/projets-v2/pancreassight.png.
        image: '/images/projets-v2/pancreassight.jpg',
        fr: {
          name: 'PancreasSight',
          description: "Un logiciel développé par BOPA pour faciliter les échanges entre le chirurgien et son patient avant une chirurgie du pancréas, mieux comprendre l'intervention et rendre le patient acteur de sa prise en charge.",
        },
        en: {
          name: 'PancreasSight',
          description: 'Software developed by BOPA to facilitate communication between surgeon and patient before pancreatic surgery, helping the patient better understand the procedure and take an active role in their own care.',
        },
      },
      {
        // Visuel remplace 2026-09-09 (pack "Nos-Innovations-Remplacement-
        // 7-Visuels-Projets-V1") - fourni par l'owner via source/inbox.
        // Original : source/brand/assets/projets-v2/livermatch.png.
        image: '/images/projets-v2/livermatch.jpg',
        fr: {
          name: 'LiverMatch',
          description: 'Développer de nouveaux outils pour mieux évaluer la situation des patients en attente de transplantation et accompagner la décision médicale.',
        },
        en: {
          name: 'LiverMatch',
          description: 'Developing new tools to better assess the situation of patients awaiting transplantation and support medical decision-making.',
        },
      },
      {
        // Ajouté 2026-09-08 (pack "Nos-Innovations-Ajout-Metatron-FluoGuide-
        // V1"). Traduction EN ajoutée 2026-09-09 à la demande explicite de
        // l'owner (traduction humaine, pas machine - voir voice.md). Visuel
        // ajouté le même jour (pack "Nos-Innovations-Remplacement-Images-
        // LiverSight-Metatron-PancreasSight-V1"), fourni par l'owner via
        // source/inbox. Original : source/brand/assets/projets-v2/metatron.png.
        image: '/images/projets-v2/metatron.jpg',
        fr: {
          name: 'Metatron',
          description: "Développer un outil d'IA d'aide à la décision thérapeutique pour les patients atteints de métastases hépatiques d'un cancer colorectal.",
        },
        en: {
          name: 'Metatron',
          description: 'Developing an AI tool to support therapeutic decision-making for patients with colorectal cancer liver metastases.',
        },
      },
    ],
  },
  {
    id: 'peroperatoire',
    icon: 'pulse',
    fr: { label: 'Peropératoire', tagline: 'Mieux voir, mieux décider, mieux opérer' },
    en: { label: 'Intraoperative', tagline: 'Better vision, better decisions, better surgery' },
    projects: [
      {
        image: '/images/projets-v2/bopcam.png',
        fr: {
          name: 'BOPCAM',
          description: 'Un dispositif « made in BOPA » pour filmer au plus près les mains et les gestes du chirurgien en chirurgie ouverte.',
        },
        en: {
          name: 'BOPCAM',
          description: "A \"made in BOPA\" device to film the surgeon's hands and movements up close during open surgery.",
        },
      },
      {
        // Visuel remplace 2026-09-09 (pack "Nos-Innovations-Remplacement-
        // 6-Visuels-Projets-V1"). Original :
        // source/brand/assets/projets-v2/compte-rendu-operatoire-augmente.png.
        // Photo plus large que le cadre (ratio 1.5) : la coupe cover
        // standard rognait les deux ecrans sur les bords, l'owner l'a
        // trouve "trop rapproche". imageFit:'contain' montre la photo
        // entiere (les deux ecrans + la fleche), fines marges marine
        // haut/bas (~16px).
        image: '/images/projets-v2/compte-rendu-operatoire-augmente.jpg',
        imageFit: 'contain',
        action: {
          href: 'https://uncovr.ai/',
          type: 'external',
          fr: { label: 'Découvrir Uncovr' },
          en: { label: 'Discover Uncovr' },
        },
        fr: {
          name: 'Le compte rendu opératoire augmenté',
          description: 'Transformer automatiquement les vidéos de chirurgie en comptes rendus opératoires. Une thématique qui a donné naissance à Uncovr.',
        },
        en: {
          name: 'The augmented operative report',
          description: 'Automatically turning surgical videos into operative reports. A research theme that gave rise to Uncovr.',
        },
      },
      {
        // Visuel remplace 2026-09-09 (pack "Nos-Innovations-Remplacement-
        // 6-Visuels-Projets-V1") - nouvelle illustration, remplace l'ancienne
        // photo. Original : source/brand/assets/projets-v2/goldfinger-innovations.png.
        // Illustration large (ratio 1.775) : deux allers-retours
        // d'object-position (droite puis encore plus a gauche) n'ont
        // jamais permis de montrer a la fois le titre "GOLDFINGER" (a
        // gauche) ET la personne assise a l'ordinateur (a droite) - une
        // coupe cover ne peut montrer que l'un ou l'autre. imageFit:
        // 'contain' montre l'illustration entiere, fines marges marine
        // haut/bas (~28px).
        image: '/images/projets-v2/goldfinger-innovations.jpg',
        imageFit: 'contain',
        fr: {
          name: 'Goldfinger',
          description: 'Interagir simplement et à distance avec les images médicales, sans jamais rompre la stérilité.',
        },
        en: {
          name: 'Goldfinger',
          description: 'Interacting simply and remotely with medical images, without ever breaking sterility.',
        },
      },
      {
        // Visuel remplace 2026-09-09 (meme pack que LiverMatch ci-dessus).
        // Original : source/brand/assets/projets-v2/henri.png.
        image: '/images/projets-v2/henri.jpg',
        // Cadrage vertical remonte (owner: object-position specifique
        // autorise pour ameliorer le cadrage) - un centrage par defaut
        // coupait le haut de la charlotte du chirurgien, le sujet
        // principal de la photo.
        imagePosition: 'center top',
        fr: {
          name: 'Henri',
          description: "Un assistant vocal pour accompagner le chirurgien pendant l'intervention, sans interrompre son geste.",
        },
        en: {
          name: 'Henri',
          description: 'A voice assistant that supports the surgeon during the procedure, without interrupting their hands.',
        },
      },
      {
        // Ajoute 2026-09-09 a la demande de l'owner : carte placeholder,
        // juste le nom pour l'instant (pas de visuel ni de description),
        // meme principe que FluoGuide avant d'avoir son texte. Nom propre,
        // inchange FR/EN (comme Henri, Goldfinger, BOPCAM).
        fr: {
          name: 'Jacky',
          description: '',
        },
        en: {
          name: 'Jacky',
          description: '',
        },
      },
      {
        // Ajouté 2026-09-08 (pack "Nos-Innovations-Ajout-Metatron-FluoGuide-
        // V1"). Traduction EN ajoutée 2026-09-09 à la demande explicite de
        // l'owner (traduction humaine, pas machine - voir voice.md). Visuel
        // ajouté 2026-09-09 (pack "Nos-Innovations-Remplacement-6-Visuels-
        // Projets-V1"). Original : source/brand/assets/projets-v2/fluoguide.png.
        image: '/images/projets-v2/fluoguide.jpg',
        fr: {
          name: 'FluoGuide',
          description: "Développer une méthode d'assistance en temps réel pour ajuster les marges de résection grâce à l'imagerie par fluorescence.",
        },
        en: {
          name: 'FluoGuide',
          description: 'Developing a real-time assistance method to adjust resection margins using fluorescence imaging.',
        },
      },
      {
        // Visuel remplace 2026-09-09 (pack "Nos-Innovations-Remplacement-
        // 6-Visuels-Projets-V1") : nouvelle photo au format paysage.
        // Original : source/brand/assets/projets-v2/charge-cognitive-chirurgien.png.
        // Allers-retours dezoom/rezoom le meme jour : imageFit:'contain'
        // (photo entiere, fines marges marine haut/bas) puis retour a
        // object-fit:cover standard (remplit tout le cadre, owner : "il
        // faut remplir tout l'espace") - avec ce ratio (image plus large
        // que le cadre), cover ne coupe que les cotes gauche/droite, la
        // hauteur entiere reste visible (rien perdu en haut ni en bas :
        // ni les scialytiques, ni le pc portable). imagePosition:'center
        // top' documente le sens voulu par l'owner si jamais le ratio
        // changeait un jour.
        image: '/images/projets-v2/charge-cognitive-chirurgien.jpg',
        imagePosition: 'center top',
        fr: {
          name: 'Évaluer la charge cognitive du chirurgien',
          description: 'Mieux comprendre la charge mentale du chirurgien et ses liens avec les erreurs et événements indésirables, pour contribuer à sécuriser le geste chirurgical.',
        },
        en: {
          name: "Assessing the surgeon's cognitive load",
          description: "Better understanding the surgeon's mental workload and its links with errors and adverse events, to help make surgical procedures safer.",
        },
      },
    ],
  },
  {
    id: 'postoperatoire',
    icon: 'chart',
    fr: { label: 'Postopératoire', tagline: 'Mieux suivre pour mieux guérir' },
    en: { label: 'Postoperative', tagline: 'Better follow-up for better recovery' },
    projects: [
      {
        // Visuel remplace 2026-09-09 (meme pack que LiverMatch ci-dessus) -
        // nouveau fichier distinct (colette-innovations.jpg) : l'ancien
        // colette.png reste utilise tel quel par la Home (HomeContent.astro,
        // rail "Nos innovations" phares), hors perimetre explicite de cette
        // passe (page /nos_innovations/ uniquement), jamais touche. Original :
        // source/brand/assets/projets-v2/colette-innovations-original.jpeg.
        image: '/images/projets-v2/colette-innovations.jpg',
        fr: {
          name: 'Colette',
          description: 'Une IA conversationnelle pour accompagner le patient greffé 24 h/24 et 7 j/7.',
        },
        en: {
          name: 'Colette',
          description: 'A conversational AI that supports transplant patients around the clock.',
        },
      },
      {
        // Visuel remplace 2026-09-09 (pack "Nos-Innovations-Remplacement-
        // 6-Visuels-Projets-V1"). Original : source/brand/assets/projets-v2/bopa-value.png.
        image: '/images/projets-v2/bopa-value.jpg',
        fr: {
          name: 'BOPA Value',
          description: 'Utiliser des solutions numériques pour évaluer le devenir du patient dans le temps : sa récupération, sa qualité de vie et son vécu.',
        },
        en: {
          name: 'BOPA Value',
          description: 'Using digital solutions to track patient outcomes over time: recovery, quality of life and experience.',
        },
      },
      {
        // Visuel remplace 2026-09-09 (pack "Nos-Innovations-Remplacement-
        // 6-Visuels-Projets-V1"). Original : source/brand/assets/projets-v2/ressenti-chirurgien.png.
        image: '/images/projets-v2/ressenti-chirurgien.jpg',
        fr: {
          name: 'Le ressenti du chirurgien face aux résultats cliniques',
          description: 'Comprendre comment le chirurgien perçoit les résultats de ses patients et comment cette perception influence sa pratique.',
        },
        en: {
          name: 'How surgeons experience clinical outcomes',
          description: "Understanding how surgeons perceive their patients' outcomes and how that perception shapes their practice.",
        },
      },
      {
        image: '/images/innovations-v2/master-class-patients-experts.svg',
        fr: {
          name: 'Masterclass patients experts',
          description: "Transformer l'expérience d'anciens patients en expertise pour accompagner les patients d'aujourd'hui.",
        },
        en: {
          name: 'Expert patients masterclass',
          description: "Turning former patients' experience into expertise to support today's patients.",
        },
      },
    ],
  },
  {
    id: 'medico-economique',
    icon: 'euro',
    fr: { label: 'Médico-économique', tagline: 'Mieux évaluer pour mieux allouer les ressources' },
    en: { label: 'Health economics', tagline: 'Better assessment for better resource allocation' },
    projects: [
      {
        // Visuel remplace 2026-09-09 (meme pack que LiverMatch ci-dessus).
        // Original : source/brand/assets/projets-v2/mesgardes-original.jpeg.
        image: '/images/projets-v2/mesgardes.jpg',
        fr: {
          name: 'MesGardes',
          description: 'Simplifier la création des plannings de garde pour réduire le temps administratif et préserver le temps médical.',
        },
        en: {
          name: 'MesGardes',
          description: 'Simplifying on-call schedule creation to cut administrative time and protect time for patient care.',
        },
      },
      {
        // Visuel remplace 2026-09-09 (meme pack que LiverMatch ci-dessus).
        // Original : source/brand/assets/projets-v2/hepatgreen-original.jpeg.
        image: '/images/projets-v2/hepatgreen.jpg',
        fr: {
          name: 'HepatGreen',
          description: "Mesurer l'empreinte environnementale de la chirurgie du foie pour construire une chirurgie plus durable.",
        },
        en: {
          name: 'HepatGreen',
          description: 'Measuring the environmental footprint of liver surgery to build more sustainable surgical care.',
        },
      },
    ],
  },
];
