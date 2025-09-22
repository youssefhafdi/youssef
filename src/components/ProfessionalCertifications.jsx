import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'

const ProfessionalCertifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certifications = [
    {
      id: 1,
      title: "Cybersecurity Essentials",
      issuer: "Cisco Networking Academy",
      image: "/certificates/HAFDIYOUSSEF-Cybersecurity Es-certificate_page-0001.jpg",
      date: "2023",
      description: "Fundamentals of cybersecurity principles, tactics, and countermeasures"
    },
    {
      id: 2,
      title: "Documentary Research",
      issuer: "École Polytechnique",
      image: "/certificates/Coursera RBPZYLXZNKHY_page-0001.jpg",
      date: "2024",
      description: "Advanced research methodologies and academic documentation techniques"
    },
    {
      id: 3,
      title: "Web Design Capstone",
      issuer: "University of Michigan",
      image: "/certificates/Coursera RABKDQZTDJPN_page-0001.jpg",
      date: "2024",
      description: "Comprehensive web design project demonstrating full-stack development skills"
    },
    {
      id: 4,
      title: "JavaScript Interactivity",
      issuer: "University of Michigan",
      image: "/certificates/Coursera QKTX7F8YQ8UG_page-0001.jpg",
      date: "2024",
      description: "Interactive web development using JavaScript and modern web technologies"
    },
    {
      id: 5,
      title: "React Basics",
      issuer: "Meta",
      image: "/certificates/Coursera FT8IDVW5UCJV_page-0001.jpg",
      date: "2025",
      description: "Fundamental React development concepts and component-based architecture"
    },
    {
      id: 6,
      title: "Software Engineering & Project Management",
      issuer: "Hong Kong University of Science and Technology",
      image: "/certificates/Coursera 62BXZNXMJ6G8_page-0001.jpg",
      date: "2024",
      description: "Software design principles, project management, and engineering best practices"
    },
    {
      id: 7,
      title: "The Unix Workbench",
      issuer: "Johns Hopkins University",
      image: "/certificates/Coursera 28ARXLEYYQXV_page-0001.jpg",
      date: "2024",
      description: "Unix command line tools, shell scripting, and system administration"
    },
    {
      id: 8,
      title: "Python Web Data Access",
      issuer: "University of Michigan",
      image: "/certificates/Coursera 9TG5383FVUQE_page-0001.jpg",
      date: "2025",
      description: "Using Python for web scraping, API integration, and data extraction"
    },
    {
      id: 9,
      title: "Virtual Networks in Azure",
      issuer: "Whizlabs",
      image: "/certificates/Coursera 8G1H9UXBYM8S_page-0001.jpg",
      date: "2025",
      description: "Azure networking fundamentals and virtual network configuration"
    },
    {
      id: 10,
      title: "React Native",
      issuer: "Meta",
      image: "/certificates/Coursera 0JMHD2ET8TR4_page-0001.jpg",
      date: "2025",
      description: "Cross-platform mobile development using React Native framework"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-800/50 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Certificate Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700" style={{ display: 'none' }}>
                  <div className="text-4xl opacity-50">📜</div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-primary-600 dark:text-primary-400">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">10</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Universities</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Programming Languages</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {selectedCert.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default ProfessionalCertifications
