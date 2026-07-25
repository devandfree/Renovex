import { ServiceItem, ProjectItem, BlogPost } from '../types';

export const HERO_ENGINEERS_IMAGE = 'https://www.hebergeur-image.com/upload/129.0.60.37-6a64c3f24cf3b.jpg';
export const ABOUT_BLUEPRINTS_IMAGE = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'building-renovation',
    iconName: 'Wrench',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    category: 'renovation',
    title: {
      fr: 'Rénovation de Bâtiment',
      en: 'Building Renovation'
    },
    description: {
      fr: 'Transformation d\'espaces anciens en environnements modernes, fonctionnels et esthétiques.',
      en: 'Transforming outdated spaces into modern, functional, and aesthetically pleasing environments.'
    },
    isDark: true,
    fullDetails: {
      fr: {
        overview: 'Notre service de rénovation globale prend en charge la réhabilitation de bâtiments résidentiels et tertiaires, de la démolition aux finitions.',
        features: [
          'Réaménagement structurel et cloisons',
          'Mise aux normes électriques et plomberie',
          'Isolation thermique et acoustique renforcée',
          'Rénovation énergétique avec aides d\'État'
        ],
        typicalTimeline: '3 à 12 semaines selon la surface',
        startingPrice: 'A partir de 850 € / m²'
      },
      en: {
        overview: 'Our comprehensive renovation service manages residential and commercial building rehabilitation from selective demolition to pristine final touches.',
        features: [
          'Structural re-layout and partition walls',
          'Electrical and plumbing code compliance',
          'Enhanced thermal and acoustic insulation',
          'Energy efficiency retrofitting'
        ],
        typicalTimeline: '3 to 12 weeks depending on area',
        startingPrice: 'Starting from €850 / sq.m'
      }
    },
    extendedDetails: {
      fr: {
        tagline: 'Rénovation lourde & réhabilitation thermique tout-en-un avec maître d\'œuvre dédié',
        technicalSpecs: [
          { label: 'Délai Moyen d\'Exécution', value: '3 à 12 semaines selon la surface' },
          { label: 'Tarification Indicative', value: 'À partir de 850 € / m²' },
          { label: 'Garanties Légales', value: 'Garantie Décennale AXA (10 ans)' },
          { label: 'Normes Appliquées', value: 'Conformité RE2020, DTU BTP, Qualibat RGE' },
          { label: 'Conducteur de Travaux', value: 'Ingénieur BTP dédié présent sur le chantier' },
          { label: 'Éligibilité Subventions', value: 'MaPrimeRénov\', CEE, Éco-PTZ à taux zéro' }
        ],
        processSteps: [
          { step: '01', title: 'Diagnostic & Relevé 3D', desc: 'Analyse de structure, contrôle énergétique et numérisation des volumes au scanner laser 3D.' },
          { step: '02', title: 'Chiffrage & Permis', desc: 'Dépôt du devis ferme sous 48h, rédaction des pièces administratives et permis de construire.' },
          { step: '03', title: 'Gros Œuvre & Fluides', desc: 'Démolition sélective, renfort IPN, réfection totale de l\'électricité, plomberie et isolation.' },
          { step: '04', title: 'Finitions & Livrable', desc: 'Revêtements de sols, peinture, contrôle qualité strict et remise des clés avec PV de réception.' }
        ],
        faqs: [
          { question: 'Proposez-vous une assistance pour les aides d\'État (MaPrimeRénov\') ?', answer: 'Oui, nos certifications Qualibat RGE vous ouvrent le droit aux subventions énergétiques d\'État. Nous préparons les dossiers techniques pour simplifier vos démarches.' },
          { question: 'Puis-je vivre dans mon logement pendant les travaux de rénovation ?', answer: 'Pour des rénovations lourdes comprenant la réfection des pièces d\'eau et de l\'électricité, nous conseillons une libération des lieux. Pour des rénovations légères, nous organisons un chantier en phase occupée.' },
          { question: 'Comment garantissez-vous le respect du budget initial ?', answer: 'Nous établissons un devis descriptif et quantitatif détaillé (DQE). Aucun coût supplémentaire n\'est engagé sans un avenant formellement validé par vos soins.' }
        ]
      },
      en: {
        tagline: 'Comprehensive structural renovation & thermal retrofitting with a dedicated project manager',
        technicalSpecs: [
          { label: 'Average Timeline', value: '3 to 12 weeks depending on area' },
          { label: 'Starting Rate', value: 'From €850 / sq.m' },
          { label: 'Legal Warranties', value: '10-Year AXA Warranty' },
          { label: 'Compliance Standards', value: 'RE2020, DTU regulations, Qualibat RGE' },
          { label: 'Project Management', value: 'Dedicated BTP Engineer on site' },
          { label: 'Subsidy Eligibility', value: 'Government Green retrofitting grants' }
        ],
        processSteps: [
          { step: '01', title: '3D Survey & Diagnostic', desc: 'Structural assessment, energy audit, and 3D laser scanner volume capture.' },
          { step: '02', title: 'Permits & Final Quote', desc: 'Itemized estimate within 48h, building permit filing, and administrative paperwork.' },
          { step: '03', title: 'Structural & Utilities', desc: 'Selective demolition, steel beam reinforcement, complete re-wiring and plumbing.' },
          { step: '04', title: 'Finishes & Handover', desc: 'Flooring, painting, rigorous quality check, and key handover with formal sign-off.' }
        ],
        faqs: [
          { question: 'Do you assist with government energy retrofitting grants?', answer: 'Yes, our Qualibat RGE certification ensures your eligibility for federal energy efficiency subsidies. We prepare technical documentation for your applications.' },
          { question: 'Can I remain in the building during renovation works?', answer: 'For major structural renovations, temporary relocation is recommended for safety and speed. For partial renovations, we set up phased work zones.' },
          { question: 'How do you guarantee strict budget adherence?', answer: 'We issue a fixed itemized bill of quantities. No additional work or fee is incurred without your prior written approval.' }
        ]
      }
    }
  },
  {
    id: 'interior-finishing',
    iconName: 'Home',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'residential',
    title: {
      fr: 'Finition Intérieure',
      en: 'Interior Finishing'
    },
    description: {
      fr: 'Un savoir-faire d\'exception pour sublimer la beauté et le confort de vos intérieurs.',
      en: 'Delivering impeccable craftsmanship to enhance the beauty, comfort of your spaces.'
    },
    isDark: false,
    fullDetails: {
      fr: {
        overview: 'Pose de revêtements haut de gamme, plâtrerie sur-mesure, faux plafonds acoustiques et peintures dépolluantes.',
        features: [
          'Parquets massifs, carrelage grand format, bétons cirés',
          'Menuiseries intérieures et agencements sur-mesure',
          'Éclairage architectural et intégration LED',
          'Peintures écologiques et stucs décoratifs'
        ],
        typicalTimeline: '1 à 4 semaines',
        startingPrice: 'A partir de 350 € / m²'
      },
      en: {
        overview: 'High-end floorings, bespoke plasterwork, acoustic false ceilings, and eco-friendly premium paints.',
        features: [
          'Hardwood flooring, large-format tiles, micro-cement',
          'Custom interior carpentry and joinery',
          'Architectural lighting and LED integration',
          'Ecological non-toxic paint finishes'
        ],
        typicalTimeline: '1 to 4 weeks',
        startingPrice: 'Starting from €350 / sq.m'
      }
    },
    extendedDetails: {
      fr: {
        tagline: 'Agencement d\'art, revêtements nobles & intégration domotique soignée',
        technicalSpecs: [
          { label: 'Délai Moyen d\'Exécution', value: '1 à 4 semaines' },
          { label: 'Tarification Indicative', value: 'À partir de 350 € / m²' },
          { label: 'Garanties Légales', value: 'Garantie Biennale & Décennale AXA' },
          { label: 'Qualité de l\'Air', value: 'Peintures A+ à très faible émission COV' },
          { label: 'Menuiserie', value: 'Agencements sur-mesure en bois certifié PEFC' },
          { label: 'Revêtements', value: 'Carrelages XXL (120x120), parquets Point de Hongrie' }
        ],
        processSteps: [
          { step: '01', title: 'Conseil & Matériauthèque', desc: 'Sélection d\'échantillons, visuels 3D des textures et harmonisation des couleurs.' },
          { step: '02', title: 'Préparation des Supports', desc: 'Ponçage d\'assainissement, ragréage fibré et traitement étanche des sous-couches.' },
          { step: '03', title: 'Pose Spécialisée', desc: 'Pose par des compagnons parqueteurs, carreleurs et peintres décorateurs qualifiés.' },
          { step: '04', title: 'Finitions de Précision', desc: 'Jointoiement étanche, pose des plinthes techniques et nettoyage fin de chantier.' }
        ],
        faqs: [
          { question: 'Les peintures utilisées sont-elles adaptées aux enfants et personnes allergiques ?', answer: 'Oui. Nous appliquons exclusivement des peintures dépolluantes sans COV et sans solvants toxiques certifiées Écolabel Européen.' },
          { question: 'Proposez-vous la pose de carrelage grand format XXL ?', answer: 'Tout à fait. Nos équipes possèdent l\'outillage spécifique à la manipulation et à la coupe de dalles de carrelage de très grand format jusqu\'à 120x280 cm.' }
        ]
      },
      en: {
        tagline: 'Artisanal interior joinery, luxury floorings & architectural lighting design',
        technicalSpecs: [
          { label: 'Average Timeline', value: '1 to 4 weeks' },
          { label: 'Starting Rate', value: 'From €350 / sq.m' },
          { label: 'Warranties', value: '2-Year & 10-Year AXA Warranties' },
          { label: 'Air Quality Grade', value: 'A+ Non-toxic VOC-free paints' },
          { label: 'Custom Carpentry', value: 'Bespoke joinery with PEFC certified timber' },
          { label: 'Flooring Specs', value: 'XXL porcelain slabs, Chevron oak parquet' }
        ],
        processSteps: [
          { step: '01', title: 'Material Selection', desc: 'Samples review, 3D texture visualizations, and architectural palette selection.' },
          { step: '02', title: 'Surface Preparation', desc: 'Leveling, sanding, and acoustic underlayment sealing.' },
          { step: '03', title: 'Expert Installation', desc: 'Precision installation by master plasterers, carpenters, and painters.' },
          { step: '04', title: 'Detailing & Delivery', desc: 'Sealing, baseboards fitting, and deep clean handover.' }
        ],
        faqs: [
          { question: 'Are the paints safe for children and sensitive individuals?', answer: 'Yes. We exclusively use A+ non-toxic eco-labeled paint systems with zero VOC emissions.' },
          { question: 'Can you install large format porcelain slabs?', answer: 'Yes, our tiling specialists are equipped with specialized suction frames and diamond cutters for XXL tiles up to 120x280 cm.' }
        ]
      }
    }
  },
  {
    id: 'roofing-solutions',
    iconName: 'HomeCheck',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    category: 'roofing',
    title: {
      fr: 'Solutions de Toiture',
      en: 'Roofing Solutions'
    },
    description: {
      fr: 'Installation et réfection de systèmes de toiture durables et étanches pour protéger vos structures.',
      en: 'Providing durable and innovative roofing systems designed to protect.'
    },
    isDark: false,
    fullDetails: {
      fr: {
        overview: 'Couverture traditionnelle et contemporaine, toitures-terrasses végétalisées, et étanchéité haute performance.',
        features: [
          'Tuiles, ardoises, bac acier et zinc à joint debout',
          'Étanchéité bitumineuse et membranes EPDM',
          'Isolation du toit par l\'extérieur (Sarking)',
          'Pose de fenêtres de toit Velux et puits de lumière'
        ],
        typicalTimeline: '1 à 3 semaines',
        startingPrice: 'A partir de 180 € / m²'
      },
      en: {
        overview: 'Traditional and modern roofing, green rooftop terraces, and high-performance waterproofing systems.',
        features: [
          'Tiles, slate, standing seam zinc and steel roofings',
          'Bituminous and EPDM waterproofing membranes',
          'Exterior roof insulation (Sarking system)',
          'Skylight installation and daylighting solutions'
        ],
        typicalTimeline: '1 to 3 weeks',
        startingPrice: 'Starting from €180 / sq.m'
      }
    },
    extendedDetails: {
      fr: {
        tagline: 'Étanchéité garantie 10 ans, isolation extérieure Sarking & toitures végétalisées',
        technicalSpecs: [
          { label: 'Délai Moyen d\'Exécution', value: '1 à 3 semaines' },
          { label: 'Tarification Indicative', value: 'À partir de 180 € / m²' },
          { label: 'Garanties Légales', value: 'Garantie Décennale Couverture & Étanchéité AXA' },
          { label: 'Performances Thermiques', value: 'R > 7.0 m².K/W (Éligible MaPrimeRénov\')' },
          { label: 'Matériaux Couverture', value: 'Ardoise naturelle, Zinc à joint debout, Tuiles terre cuite, EPDM' },
          { label: 'Zinguerie & Évacuations', value: 'Gouttières nantaises ou pendantes sur-mesure' }
        ],
        processSteps: [
          { step: '01', title: 'Inspection & Sécurité', desc: 'Mise en place des échafaudages de sécurité, étude de charge et examen des chevrons.' },
          { step: '02', title: 'Dépose & Isolation Sarking', desc: 'Enlèvement de l\'ancienne couverture et pose d\'isolant rigide par l\'extérieur.' },
          { step: '03', title: 'Pose de Couverture & Zinc', desc: 'Fixation des littaux, pose du matériau de couverture et façonnage des noues en zinc.' },
          { step: '04', title: 'Épreuves d\'Étanchéité', desc: 'Test d\'étanchéité à l\'eau, pose des fenêtres Velux et nettoyage des gouttières.' }
        ],
        faqs: [
          { question: 'Qu\'est-ce que l\'isolation Sarking et quel est son avantage ?', answer: 'Le Sarking consiste à isoler le toit par l\'extérieur en posant des panneaux isolants sur les charpentes. Cela préserve 100% de votre espace habitable intérieur sans réduire la hauteur sous plafond.' },
          { question: 'Intervenez-vous en urgence pour les fuites de toiture ?', answer: 'Absolument. Nous mettons à disposition une équipe d\'intervention rapide pour le bâchage d\'urgence et la mise hors d\'eau sous 24h.' }
        ]
      },
      en: {
        tagline: '10-Year leakproof guarantee, Sarking insulation & green terrace roofing',
        technicalSpecs: [
          { label: 'Average Timeline', value: '1 to 3 weeks' },
          { label: 'Starting Rate', value: 'From €180 / sq.m' },
          { label: 'Legal Warranties', value: '10-Year AXA Waterproofing Guarantee' },
          { label: 'Thermal Rating', value: 'R > 7.0 m².K/W (Subsidies eligible)' },
          { label: 'Roofing Materials', value: 'Natural slate, standing seam zinc, clay tiles, EPDM' },
          { label: 'Drainage & Gutters', value: 'Bespoke zinc and aluminum rain gutters' }
        ],
        processSteps: [
          { step: '01', title: 'Safety & Site Prep', desc: 'Erecting safety scaffolding, load calculations, and rafter structural assessment.' },
          { step: '02', title: 'Stripping & Sarking Insulation', desc: 'Old roof membrane removal and exterior rigid board insulation laying.' },
          { step: '03', title: 'Roofing & Zinc Flashing', desc: 'Battening, tile/slate placement, and custom zinc flashing craftsmanship.' },
          { step: '04', title: 'Water Testing & Handover', desc: 'Water tightness testing, skylight fitting, and site clean-up.' }
        ],
        faqs: [
          { question: 'What is Sarking roof insulation and its main benefit?', answer: 'Sarking is continuous exterior roof insulation applied above rafters. It prevents cold bridges while preserving 100% of your indoor attic living space.' },
          { question: 'Do you offer emergency leak repair services?', answer: 'Yes, our rapid response team provides emergency tarping and temporary leak mitigation within 24 hours.' }
        ]
      }
    }
  },
  {
    id: 'foundation-repair',
    iconName: 'Layers',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    category: 'commercial',
    title: {
      fr: 'Réparation de Fondations',
      en: 'Foundation Repair'
    },
    description: {
      fr: 'Garantie de la stabilité structurelle et sécurité avec nos solutions d\'expert pour fondations.',
      en: 'Ensuring structural stability and safety with expert solutions for foundation.'
    },
    isDark: false,
    fullDetails: {
      fr: {
        overview: 'Reprise en sous-œuvre, injection de résine expansive et consolidation contre les mouvements de terrain et fissures.',
        features: [
          'Diagnostic géotechnique et étude de structure',
          'Injections de résine polyuréthane expansive',
          'Micro-pieux et longrines de renfort',
          'Drainage périphérique et cuvelage de sous-sol'
        ],
        typicalTimeline: '1 à 2 semaines',
        startingPrice: 'Sur devis technique après diagnostic'
      },
      en: {
        overview: 'Underpinning, expanding resin injections, and structural stabilization against soil settlement.',
        features: [
          'Geotechnical diagnostic and structural assessment',
          'Expanding polyurethane resin injections',
          'Micropiles and reinforcing tie beams',
          'Peripheral drainage and basement tanking'
        ],
        typicalTimeline: '1 to 2 weeks',
        startingPrice: 'Upon technical diagnosis survey'
      }
    },
    extendedDetails: {
      fr: {
        tagline: 'Stabilisation des structures, traitement définitif des fissures & reprise sous-œuvre',
        technicalSpecs: [
          { label: 'Délai Moyen d\'Exécution', value: '1 à 2 semaines' },
          { label: 'Diagnostic Initial', value: 'Étude géotechnique G2 AVP réalisée par ingénieur' },
          { label: 'Technologie Principale', value: 'Injections de résines polyuréthane expansives' },
          { label: 'Garanties Légales', value: 'Garantie Décennale Consolidation AXA' },
          { label: 'Procédés Complémentaires', value: 'Micro-pieux béton, longrines et cuvelage' },
          { label: 'Niveau d\'Invasivité', value: 'Très faible (sans terrassement lourd)' }
        ],
        processSteps: [
          { step: '01', title: 'Étude & Radar de Sol', desc: 'Sondage géotechnique, cartographie des cavités et mesure du degré de compaction.' },
          { step: '02', title: 'Forages Millimétriques', desc: 'Perçage de trous discrets de 12 mm au pied de la fondation sans démolition.' },
          { step: '03', title: 'Injection Expansive', desc: 'Injection contrôlée de résine haute densité compactant le sol sous contrôle laser.' },
          { step: '04', title: 'Contrôle & Certificat', desc: 'Test de pénétromètre dynamique final et remise du certificat d\'expert en stabilité.' }
        ],
        faqs: [
          { question: 'Faut-il déménager pendant le traitement des fondations par injection ?', answer: 'Non. Les interventions par injection de résine expansive sont rapides, silencieuses et non invasives. Vous pouvez continuer d\'habiter les lieux normalement.' },
          { question: 'Les fissures dans les murs vont-elles disparaître ?', answer: 'L\'injection bloque définitivement le tassement du sol et remet la structure sous tension. Après la phase de stabilisation, nous rebouchons les fissures extérieures et intérieures.' }
        ]
      },
      en: {
        tagline: 'Structural underpinning, soil consolidation & permanent crack resolution',
        technicalSpecs: [
          { label: 'Average Timeline', value: '1 to 2 weeks' },
          { label: 'Initial Survey', value: 'G2 geotechnical soil analysis by structural engineers' },
          { label: 'Core Technology', value: 'High-expansion polyurethane resin injection' },
          { label: 'Legal Warranties', value: '10-Year AXA Structural Warranty' },
          { label: 'Complementary Methods', value: 'Concrete micropiles, tie beams, and basement tanking' },
          { label: 'Impact Level', value: 'Low impact (no heavy excavation required)' }
        ],
        processSteps: [
          { step: '01', title: 'Geotechnical Soil Survey', desc: 'Subsurface radar scanning, cavity mapping, and soil density measuring.' },
          { step: '02', title: 'Micro Drilling', desc: 'Discreet 12mm holes drilled through foundation footings without demolition.' },
          { step: '03', title: 'Controlled Injection', desc: 'Polyurethane resin expanding deep into the soil monitored by millimetric laser.' },
          { step: '04', title: 'Validation & Certificate', desc: 'Final penetrometer load testing and issuance of engineer stability certificate.' }
        ],
        faqs: [
          { question: 'Do I need to vacate my property during foundation injection?', answer: 'No. Resin injection operations are quiet, clean, and completed entirely from the exterior. You can remain comfortably in your home.' },
          { question: 'Will wall cracks be permanently resolved?', answer: 'Resin injections lock the foundation solid and stop structural movement. Once stabilized, our masons stitch and repair all cosmetic cracks.' }
        ]
      }
    }
  },
  {
    id: 'modular-construction',
    iconName: 'Building2',
    heroImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    category: 'commercial',
    title: {
      fr: 'Construction Modulaire & BTP',
      en: 'Modular & Commercial BTP'
    },
    description: {
      fr: 'Bâtiments modulaires hors-site et structures commerciales à faible empreinte carbone.',
      en: 'Off-site modular construction and commercial buildings with low carbon footprint.'
    },
    isDark: false,
    fullDetails: {
      fr: {
        overview: 'Construction rapide hors-site en ossature bois ou acier pour bureaux, logements collectifs et équipements publics.',
        features: [
          'Assemblage en usine et pose rapide sur site',
          'Réduction de 50% de la durée de chantier',
          'Conformité environnementale RE2020',
          'Modularité et évolutivité des espaces'
        ],
        typicalTimeline: '4 à 8 semaines',
        startingPrice: 'A partir de 1 200 € / m²'
      },
      en: {
        overview: 'Fast off-site timber or steel frame construction for offices, residential buildings, and public facilities.',
        features: [
          'Factory assembly and rapid site installation',
          '50% reduction in construction site timeline',
          'Strict compliance with RE2020 green standards',
          'Modular space scalability and reconfigurability'
        ],
        typicalTimeline: '4 to 8 weeks',
        startingPrice: 'Starting from €1,200 / sq.m'
      }
    },
    extendedDetails: {
      fr: {
        tagline: 'Préfabrication industrielle hors-site, bilan carbone neutre & montage express en 48h',
        technicalSpecs: [
          { label: 'Délai Moyen d\'Exécution', value: '4 à 8 semaines (Usine + Pose)' },
          { label: 'Tarification Indicative', value: 'À partir de 1 200 € / m²' },
          { label: 'Durée de Chantier Site', value: 'Division par 2 des délais d\'installation' },
          { label: 'Matériaux Structurels', value: 'Ossature bois PEFC / Acier bas carbone' },
          { label: 'Label Écologique', value: 'Conforme RE2020 & Bâtiment Bas Carbone (BBCA)' },
          { label: 'Garanties Légales', value: 'Garantie Constructeur & Décennale 10 ans' }
        ],
        processSteps: [
          { step: '01', title: 'Modélisation BIM 3D', desc: 'Conception architecturale personnalisée, calculs de structure et permis de construire.' },
          { step: '02', title: 'Fabrication en Usine', desc: 'Assemblage automatisé à l\'abri des intempéries avec contrôle qualité permanent.' },
          { step: '03', title: 'Livraison & Grutage', desc: 'Acheminement par convoi exceptionnel et assemblage des modules sur site en 48h.' },
          { step: '04', title: 'Connexions & Clé en Main', desc: 'Raccordements fluides/fibre, aménagement intérieur et livraison immédiatement opérationnelle.' }
        ],
        faqs: [
          { question: 'Quelle est la durée de vie d\'un bâtiment modulaire BTP ?', answer: 'Nos structures modulaires ont une durabilité rigoureusement identique aux constructions traditionnelles en béton (plus de 50 ans), avec un confort acoustique et thermique supérieur.' },
          { question: 'Le bâtiment peut-il être agrandi ou déplacé à l\'avenir ?', answer: 'C\'est le grand avantage de la construction modulaire : des modules supplémentaires peuvent être empilés ou accolés plus tard, ou l\'ensemble peut être démonté et réinstallé sur un autre site.' }
        ]
      },
      en: {
        tagline: 'Off-site industrial prefabrication, carbon-neutral footprint & 48-hour site assembly',
        technicalSpecs: [
          { label: 'Average Timeline', value: '4 to 8 weeks (Factory + Assembly)' },
          { label: 'Starting Rate', value: 'From €1,200 / sq.m' },
          { label: 'On-Site Worktime', value: '50% reduction in site disturbance' },
          { label: 'Structural Framework', value: 'PEFC Certified Timber / Low-carbon Steel' },
          { label: 'Eco Certifications', value: 'RE2020 compliant & Low Carbon Building certified' },
          { label: 'Warranties', value: '10-Year AXA Construction Warranty' }
        ],
        processSteps: [
          { step: '01', title: 'BIM 3D Modeling', desc: 'Custom architectural design, structural calculations, and permit processing.' },
          { step: '02', title: 'Factory Production', desc: 'Precision automated assembly in weather-controlled factory environments.' },
          { step: '03', title: 'Transport & Crane Fitting', desc: 'Conveyance and module crane positioning on lightweight footings within 48h.' },
          { step: '04', title: 'Utility Hookup & Handover', desc: 'Plumbing, electrical, network connections, and immediate turnkey handover.' }
        ],
        faqs: [
          { question: 'What is the lifespan of a modern modular building?', answer: 'Our engineered modular buildings feature an identical structural lifespan to traditional reinforced concrete (50+ years), with superior thermal and acoustic performance.' },
          { question: 'Can the modular building be expanded or relocated later?', answer: 'Yes, modular architecture is inherently flexible. Extra modules can be added horizontally or vertically, or relocated to a new site as your business grows.' }
        ]
      }
    }
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    title: {
      fr: 'Rénovation Résidence Haussmannienne',
      en: 'Haussmannian Residence Renovation'
    },
    category: 'renovation',
    location: 'Paris 8e, France',
    area: '280 m²',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: {
      fr: 'Restauration complète d\'un appartement haussmannien avec intégration de technologies domotiques et isolation phonique renforcée.',
      en: 'Full restoration of a Haussmannian apartment integrating smart home tech and high acoustic insulation.'
    },
    highlights: ['Moulures restaurées', 'Parquet Point de Hongrie', 'Bilan énergétique A', 'Domotique KNX']
  },
  {
    id: 'proj-2',
    title: {
      fr: 'Siège Social Éco-Conçu Renovex',
      en: 'Renovex Eco-Friendly Headquarters'
    },
    category: 'commercial',
    location: 'Lyon Confluence, France',
    area: '1 450 m²',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    description: {
      fr: 'Bâtiment tertiaire en ossature bois certifié BREEAM Excellent avec panneaux photovoltaïques en toiture.',
      en: 'Timber frame commercial building BREEAM Excellent certified featuring rooftop solar panels.'
    },
    highlights: ['Certifié BREEAM', 'Structure bois certifié PEFC', 'Toiture solaire 80kWp']
  },
  {
    id: 'proj-3',
    title: {
      fr: 'Villa Contemporaine Bioclimatique',
      en: 'Modern Bioclimatic Villa'
    },
    category: 'residential',
    location: 'Aix-en-Provence, France',
    area: '340 m²',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: {
      fr: 'Construction d\'une villa contemporaine à énergie positive avec piscine à débordement et grande baie vitrée motorisée.',
      en: 'Positive-energy modern villa construction with an infinity pool and motorized glass facade.'
    },
    highlights: ['Pompe à chaleur géothermique', 'Baies vitrées invisibles', 'Piscine naturelle']
  },
  {
    id: 'proj-4',
    title: {
      fr: 'Réfection & Végétalisation de Toiture Industrial Park',
      en: 'Industrial Park Roof Waterproofing & Green Terrace'
    },
    category: 'roofing',
    location: 'Bordeaux, France',
    area: '3 200 m²',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    description: {
      fr: 'Étanchéité EPDM et végétalisation intensive de toiture terrasse d\'un complexe logistique.',
      en: 'EPDM waterproofing and intensive green roof terrace installation for a logistics hub.'
    },
    highlights: ['Membrane EPDM Firestone', 'Rétention d\'eau pluviale', 'Isolation 200mm PIR']
  },
  {
    id: 'proj-5',
    title: {
      fr: 'Restauration de Domaine & Pierres de Taille',
      en: 'Historic Estate & Stone Masonry Restoration'
    },
    category: 'renovation',
    location: 'Val de Loire, France',
    area: '850 m²',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: {
      fr: 'Restauration de façades historiques en pierre de taille, confortement de charpente et rénovation énergétique globale.',
      en: 'Historical stone facade restoration, timber frame reinforcement, and complete thermal retrofit.'
    },
    highlights: ['Taille de pierre artisanale', 'Charpente traditionnelle', 'Enduits à la chaux naturelle']
  },
  {
    id: 'proj-6',
    title: {
      fr: 'Extension Modulaire Centre Médical',
      en: 'Medical Center Modular Extension'
    },
    category: 'commercial',
    location: 'Nantes, France',
    area: '620 m²',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    description: {
      fr: 'Conception et pose hors-site d\'une extension modulaire médicale préfabriquée installée en seulement 3 semaines.',
      en: 'Design and off-site installation of a prefabricated medical modular wing erected in 3 weeks.'
    },
    highlights: ['Livraison en 3 semaines', 'Normes d\'hygiène hospitalière', 'Isolation acoustique 52dB']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: {
      fr: 'L\'Impression 3D Béton : Révolution dans le BTP',
      en: '3D Concrete Printing: Revolutionizing Modern Construction'
    },
    excerpt: {
      fr: 'Découvrez comment nous intégrons la fabrication additive pour réduire les délais de gros œuvre de 40%.',
      en: 'Discover how we leverage additive manufacturing to cut structural lead times by 40%.'
    },
    category: 'Innovation BTP',
    date: '18 Fév 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    author: 'Marc Dubois, Dir. Innovation'
  },
  {
    id: 'blog-2',
    title: {
      fr: 'Rénovation Énergétique 2026 : Réglementations et Aides',
      en: 'Energy Efficiency Retrofit 2026: Standards and Subsidies'
    },
    excerpt: {
      fr: 'Guide complet pour valoriser votre patrimoine immobilier grâce aux nouvelles normes RE2020.',
      en: 'Complete guide to boosting property value through the latest RE2020 energy efficiency standards.'
    },
    category: 'Réglementation',
    date: '02 Fév 2026',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    author: 'Sophie Laurent, Ingénieure Bâtiment'
  },
  {
    id: 'blog-3',
    title: {
      fr: 'Drones et Scan 3D : L\'Inspection de Structure Haute Précision',
      en: 'Drones and 3D Laser Scanning: Precision Structural Audits'
    },
    excerpt: {
      fr: 'Comment les jumeaux numériques permettent de détecter les micro-fissures de fondations avant dégradation.',
      en: 'How digital twins enable detecting microscopic foundation stress prior to structural damage.'
    },
    category: 'Technologie',
    date: '24 Jan 2026',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=800&q=80',
    author: 'Antoine Moreau, Expert Géomètre'
  },
  {
    id: 'blog-4',
    title: {
      fr: 'Matériaux Biosourcés : Utiliser le Bois et le Chanvre dans le Tertiaire',
      en: 'Bio-Sourced Materials: Timber and Hemp in Commercial Buildings'
    },
    excerpt: {
      fr: 'Analyse comparative du bilan carbone entre construction béton traditionnelle et structures mixtes bois-paille.',
      en: 'Comparative carbon footprint analysis between classic concrete construction and mass timber structures.'
    },
    category: 'Éco-Construction',
    date: '12 Jan 2026',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    author: 'Éléonore Vasseur, Resp. RSE'
  },
  {
    id: 'blog-5',
    title: {
      fr: 'Étanchéité EPDM vs Bitume : Quel Choix pour Votre Toiture Terrasse ?',
      en: 'EPDM Waterproofing vs Bitumen: Choosing Roof Terrace Protection'
    },
    excerpt: {
      fr: 'Comparatif technique sur la longévité, la résistance UV et l\'impact écologique des membranes de couvercle.',
      en: 'Technical comparison covering durability, UV exposure, and environmental life-cycle costs.'
    },
    category: 'Gros Œuvre',
    date: '05 Jan 2026',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    author: 'Jean-Marc Perrin, Chef de Chantier Toitures'
  },
  {
    id: 'blog-6',
    title: {
      fr: 'L\'Isolation Acoustique dans les Réhabilitations Haussmanniennes',
      en: 'Acoustic Insulation in Historic Haussmann Renovations'
    },
    excerpt: {
      fr: 'Les techniques avancées de désolidarisation des planchers en bois sans dénaturer le charme d\'époque.',
      en: 'Advanced floor decoupling methods to suppress impact sound while preserving original period moldings.'
    },
    category: 'Architecture',
    date: '18 Déc 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    author: 'Sophie Laurent, Ingénieure Bâtiment'
  },
  {
    id: 'blog-7',
    title: {
      fr: 'Conception Bioclimatique : Optimiser l\'Insolation des Bâtiments',
      en: 'Bioclimatic Design: Optimizing Building Solar Gain'
    },
    excerpt: {
      fr: 'Comment l\'orientation des vitrages et les brise-soleil orientables réduisent la consommation de climatisation de 60%.',
      en: 'How glazing orientation and adjustable sunshades cut cooling demand by 60%.'
    },
    category: 'Éco-Construction',
    date: '02 Déc 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    author: 'Marc Dubois, Dir. Innovation'
  },
  {
    id: 'blog-8',
    title: {
      fr: 'Gros Œuvre & Micro-Pieux : Stabiliser les Sols Argileux',
      en: 'Structural Engineering: Micropiles in Clay Soils'
    },
    excerpt: {
      fr: 'Solutions techniques de reprenage sous-œuvre face au phénomène de retrait-gonflement des argiles (RGA).',
      en: 'Underpinning engineering solutions addressing clay soil swelling and shrinkage.'
    },
    category: 'Gros Œuvre',
    date: '20 Nov 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    author: 'Antoine Moreau, Expert Géomètre'
  }
];

export const TEAM_AVATARS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
];
