import { motion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Network Security Monitoring (NSM) with SELKS",
      description: "Comprehensive network security monitoring system using SELKS stack for threat detection, analysis, and incident response.",
      longDescription: "A complete Network Security Monitoring (NSM) solution built with SELKS (Suricata, Elasticsearch, Logstash, Kibana, and Scirius) stack. This project demonstrates advanced cybersecurity monitoring capabilities including real-time threat detection, network traffic analysis, and security incident management.",
      technologies: ["SELKS", "Suricata", "Elasticsearch", "Kibana", "Logstash", "Scirius", "Evebox", "CyberChef", "Linux"],
      status: "Completed",
      date: "2024",
      github: "https://github.com/youssefhafdi/nsm-selks",
      demo: null,
      images: [
        "/projects/nsm/Stamus Dashboard.png",
        "/projects/nsm/Alert Activity.png",
        "/projects/nsm/architecture SELKS.png",
        "/projects/nsm/Kibana(elastic).png",
        "/projects/nsm/Suricata Interface.png",
        "/projects/nsm/Evebox.png",
        "/projects/nsm/Events.png",
        "/projects/nsm/Detection Methods.png",
        "/projects/nsm/Policies.png",
        "/projects/nsm/Rulesets.png",
        "/projects/nsm/Sources.png",
        "/projects/nsm/Users.png",
        "/projects/nsm/History.png",
        "/projects/nsm/Cyberchef.png"
      ],
      features: [
        "Real-time network traffic monitoring and analysis",
        "Advanced threat detection using Suricata IDS/IPS",
        "Comprehensive security dashboard with Stamus Network",
        "Elasticsearch-based log storage and indexing",
        "Kibana visualization for security analytics",
        "Evebox for alert management and investigation",
        "CyberChef integration for data analysis",
        "Custom rule sets and detection policies",
        "Multi-user access control and management",
        "Historical data analysis and reporting"
      ],
      challenges: [
        "Configuring Suricata for optimal performance while maintaining detection accuracy",
        "Managing large volumes of network data in Elasticsearch",
        "Creating effective detection rules to minimize false positives",
        "Integrating multiple security tools into a cohesive monitoring platform",
        "Optimizing system resources for real-time processing"
      ]
    },
    {
      id: 2,
      title: "IZI Wheel SaaS Platform",
      description: "SaaS prize-wheel platform that helps companies run marketing campaigns with branded wheels, tracking, and analytics.",
      longDescription: "IZI Wheel is a comprehensive SaaS platform that enables companies to create and manage marketing campaigns through branded prize wheels. The platform features dedicated public routes for player experience, authenticated dashboards for company-wide KPIs, operational consoles for wheel lifecycle management, and a robust Express API for integrations.",
      technologies: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Shadcn UI", "React Query", "Chart.js", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "JWT", "Cloudinary", "Nodemailer"],
      status: "Completed",
      date: "2024",
      github: "https://github.com/youssefhafdi/iziwheel-app",
      demo: null,
      images: [
        "/projects/iziwheel/image.png",
        "/projects/iziwheel/image copy.png",
        "/projects/iziwheel/image copy 2.png",
        "/projects/iziwheel/image copy 3.png",
        "/projects/iziwheel/image copy 4.png",
        "/projects/iziwheel/image copy 5.png",
        "/projects/iziwheel/image copy 6.png",
        "/projects/iziwheel/image copy 7.png",
        "/projects/iziwheel/image copy 8.png"
      ],
      features: [
        "Dedicated public routes for player experience with wheel domain",
        "Real-time spin animations with confetti and winner celebrations",
        "Winner claim forms with QR/PIN redemption flows",
        "Authenticated dashboards with company-wide KPIs and analytics",
        "Date filtering for plays, wins, claim rates, and top wheels",
        "Searchable play logs with export tools for compliance",
        "Wheel lifecycle management with filters and status toggles",
        "Prize validation queues with PIN search and instant redemption",
        "SUPER/ADMIN/SUB role-based governance system",
        "Email traceability and notification system",
        "Company CRUD operations and invitation workflows",
        "Express API for external integrations and future clients"
      ],
      challenges: [
        "Building real-time spin animations with smooth confetti effects",
        "Implementing role-based access control (SUPER/ADMIN/SUB) system",
        "Creating scalable wheel configuration system with on-demand loading",
        "Developing robust prize validation and redemption workflows",
        "Optimizing performance with Redis-based throttling and caching",
        "Managing complex state with React Query for real-time updates",
        "Building comprehensive analytics dashboard with Chart.js",
        "Implementing secure JWT authentication across multiple domains",
        "Creating monorepo architecture with pnpm and Docker",
        "Setting up CI/CD pipeline for Render and Vercel deployments"
      ]
    },
    {
      id: 3,
      title: "Van Life Mobile App",
      description: "Mobile application for van life enthusiasts with trip planning, location sharing, and community features.",
      longDescription: "A comprehensive mobile application designed for van life enthusiasts and travelers. The app provides trip planning tools, location sharing, community features, and essential utilities for life on the road. Built with React Native for cross-platform compatibility.",
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Firebase", "Expo"],
      status: "Completed",
      date: "2024",
      github: "https://github.com/youssefhafdi/van-life-app",
      demo: null,
      images: [
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.02_0ab87e1f.jpg",
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.02_25e98d13.jpg",
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.02_48051fc8.jpg",
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.02_c6a120c7.jpg",
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.03_44a6d398.jpg",
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.03_5030b81e.jpg",
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.03_880891b2.jpg",
        "/projects/van/WhatsApp Image 2025-09-21 at 20.02.03_91442315.jpg"
      ],
      features: [
        "Interactive trip planning and route optimization",
        "Real-time location sharing with friends and family",
        "Community features for van life enthusiasts",
        "Offline maps and navigation capabilities",
        "Camping spot recommendations and reviews",
        "Weather integration for trip planning",
        "Expense tracking for road trips",
        "Photo sharing and travel journal",
        "Emergency contacts and safety features",
        "Push notifications for weather alerts and updates"
      ],
      challenges: [
        "Implementing offline functionality for areas with poor connectivity",
        "Optimizing map performance with large datasets of locations",
        "Creating intuitive user interface for complex trip planning features",
        "Managing real-time location sharing while preserving user privacy",
        "Integrating multiple APIs (maps, weather, social) seamlessly"
      ]
    },
    {
      id: 4,
      title: "Ingenieu'seLand Website",
      description: "Plateforme web inspirante pour promouvoir la présence des femmes dans l'ingénierie avec des ressources spécialisées et des parcours de carrière.",
      longDescription: "Ingenieu'seLand est une plateforme web complète dédiée à l'empowerment des femmes dans l'ingénierie. Le site combine un héro inspirant, des statistiques clés sur la présence des femmes dans l'ingénierie, des cartes interactives vers sept domaines spécialisés, des fiches de carrière détaillées avec grilles salariales, un espace podcasts intégrant Spotify, et un eBook téléchargeable 'Mra w 9ada'.",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Radix UI", "Shadcn UI", "Lucide React", "React Hook Form", "Zod", "Next Themes", "Turbopack"],
      status: "Completed",
      date: "2024",
      github: "https://github.com/youssefhafdi/ingenieuseland",
      demo: null,
      images: [
        "/projects/inge/image.png",
        "/projects/inge/image copy.png",
        "/projects/inge/image copy 2.png",
        "/projects/inge/image copy 3.png",
        "/projects/inge/image copy 4.png",
        "/projects/inge/image copy 5.png",
        "/projects/inge/image copy 6.png",
        "/projects/inge/image copy 7.png",
        "/projects/inge/image copy 8.png",
        "/projects/inge/image copy 9.png"
      ],
      features: [
        "Page d'accueil avec héro inspirant et statistiques clés",
        "Cartes interactives vers 7 domaines d'ingénierie spécialisés",
        "Fiches de carrière détaillées avec grilles salariales",
        "Parcours de formation interactifs avec RoadmapTimeline",
        "Espace podcasts intégrant des lectures Spotify",
        "eBook téléchargeable 'Mra w 9ada' avec badges thématiques",
        "Système de routage dynamique /domaine/[slug]",
        "Formulaire de contact moderne avec retours toast",
        "Thème clair/sombre complet avec Next Themes",
        "Design responsive et interface utilisateur moderne"
      ],
      challenges: [
        "Intégration complexe de données métiers centralisées dans fieldsData",
        "Développement d'un système de routage dynamique /domaine/[slug]",
        "Création d'une frise chronologique interactive RoadmapTimeline",
        "Intégration de l'API Spotify pour l'espace podcasts",
        "Mise en place d'un système de thème clair/sombre complet",
        "Optimisation des performances avec Next.js 15 et Turbopack",
        "Validation de formulaires avec React Hook Form et Zod",
        "Gestion des notifications toast avec Radix UI et sonner"
      ]
    },
    {
      id: 5,
      title: "H&HBook",
      description: "Booking platform for H&HBook.",
      longDescription: "A comprehensive booking platform for H&HBook. Built with vanilla JavaScript and modern APIs.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      status: "Completed",
      date: "2023",
      github: "https://github.com/votre-username/weather-dashboard",
      demo: null,
      images: [
        "/projects/book/WhatsApp Image 2025-09-21 at 02.29.52_f55faaea.jpg",
        "/projects/book/WhatsApp Image 2025-09-21 at 02.29.52_8d4ec255.jpg"
      ],
      features: [
        "Booking platform for H&HBook",
        "Interactive booking system",
        "Geolocation-based booking",
        "Multiple city support",
        "Booking alerts and warnings",
        "Responsive design"
      ],
      challenges: [
        "Handling API rate limits and error states gracefully",
        "Creating smooth animations for weather data transitions",
        "Implementing accurate geolocation with fallback options"
      ]
    },
    {
      id: 6,
      title: "Haya - Courtier d'Assurance",
      description: "Site web professionnel pour courtier d'assurance avec interface moderne et fonctionnalités complètes de gestion des clients.",
      longDescription: "Haya est une plateforme web complète dédiée aux courtiers d'assurance, offrant une interface moderne et intuitive pour la gestion des clients, des polices d'assurance et des devis. Le site intègre des fonctionnalités avancées de CRM, de génération de devis automatisés, et de suivi des dossiers clients.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
      status: "Completed",
      date: "2024",
      github: "https://github.com/youssefhafdi/haya-assurance",
      demo: null,
      images: [
        "/projects/haya/WhatsApp Video 2025-09-21 at 02.32.04_22d35733.mp4"
      ],
      features: [
        "Interface moderne et responsive pour courtiers d'assurance",
        "Gestion complète des clients et de leurs dossiers",
        "Génération automatique de devis personnalisés",
        "Système de suivi des polices et échéances",
        "Tableau de bord avec statistiques et KPIs",
        "Système de notifications pour les renouvellements",
        "Gestion des documents et contrats",
        "Interface d'administration pour la gestion des produits",
        "Système de rendez-vous et planning",
        "Intégration avec les compagnies d'assurance"
      ],
      challenges: [
        "Création d'une interface intuitive pour les courtiers non-techniques",
        "Intégration complexe avec les APIs des compagnies d'assurance",
        "Gestion sécurisée des données sensibles des clients",
        "Optimisation des performances pour la gestion de gros volumes de données",
        "Mise en place d'un système de notifications temps réel"
      ]
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore a selection of my recent projects, from complete web applications to specialized tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={{ ...project, github: null, demo: null }} // Removed GitHub and Demo buttons
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in a collaboration or a similar project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary"
          >
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  )
}

export default Projects