import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'High School Diploma in Science, Physics specialization',
      school: 'Al ayoubi 2 high school',
      period: '2020- 2021',
      location: 'Tanger, Morocco',
      description: 'A high school diploma in Science with a focus on Physics, offering solid foundations in math, physics, and analytical skills.',
      technologies: ['Physics', 'Mathematics', 'Chemistry', 'Biology', 'English', 'Arabic', 'French']
    },
    {
      type: 'education',
      title: 'Digital Infrastructure',
      company: 'ISMONTIC',
      period: '2021 - 2023',
      location: 'Tanger, Morocco',
      description: 'Specialized in Digital Infrastructure (Systems and Networks), focusing on the management and maintenance of IT systems, servers, and networks for optimal performance and security..',
      technologies: ['IT', 'Networking', 'Servers', 'Security', 'Linux', 'Windows', 'MacOS']
    },
    {
      type: 'internship',
      title: 'IT Infrastructure Technician (Systems and Networks)',
      company: 'HAYA ASSURANCE',
      period: '1month',
      location: 'Casablanca, Morocco',
      description: 'Internship experience in managing and restructuring the company’s digital infrastructure, configuring servers (ADDS) and network devices, and optimizing IT systems for better performance and security.',
      technologies: ['Computer', 'Network', 'ADDS', 'Linux', 'Windows', 'firewall']
    },
    {
      type: 'education',
      title: 'Engineering Degree in Computer and Network Engineering',
      company: 'Ecole Marocaine des Sciences de l\'ingenieur',    
      period: '2023 - present',
      location: 'Tanger, Morocco',
      description: 'General computer science training with focus on algorithms, data structures and object-oriented programming.',
      technologies: ['Computer', 'Network', 'Programming', 'SQL', 'Windows', 'Security']
    },
    {
      type: 'internship',
      title: 'Network Security monitoring',
      company: 'Tanger Med port authority',
      period: '2 months',
      location: 'Tanger, Morocco',
      description: 'NSM focuses on monitoring network traffic to detect and respond to security threats, ensuring systems remain secure and reliable.',
       technologies: ['Network', 'Security', 'Monitoring', 'SELKS', 'ZEEK', 'Elasticsearch']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover my professional and academic journey, 
            from my beginnings in programming to my current experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-600 transform md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 bg-primary-500 transform md:-translate-x-1/2 z-10 ${
                  exp.type === 'formation' ? 'bg-purple-500' : 'bg-primary-500'
                }`}></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                    {/* Type Badge */}
                    <div className="mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.type === 'education' || exp.type === 'internship'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                          : 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                      }`}>
                        {exp.type === 'education' ? 'Education' : exp.type === 'internship' ? 'Internship' : 'Experience'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>

                    {/* Company & Period */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      📍 {exp.location}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                      >
                        <ExternalLink size={14} />
                        View Website
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 