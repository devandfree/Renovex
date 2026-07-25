import { ServiceItem, ProjectItem, BlogPost } from '../types';

export const HERO_ENGINEERS_IMAGE = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80';
export const ABOUT_BLUEPRINTS_IMAGE = 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'building-renovation',
    iconName: 'Wrench',
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
    }
  },
  {
    id: 'interior-finishing',
    iconName: 'Home',
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
    }
  },
  {
    id: 'roofing-solutions',
    iconName: 'HomeCheck',
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
    }
  },
  {
    id: 'foundation-repair',
    iconName: 'Layers',
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
    }
  },
  {
    id: 'modular-construction',
    iconName: 'Building2',
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
