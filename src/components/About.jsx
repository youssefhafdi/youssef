import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase, 
  FaGitAlt, 
  FaDocker,
  FaFigma,
  FaAws
} from "react-icons/fa"
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si"

const About = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
    { name: 'Figma', icon: FaFigma, color: 'text-purple-600' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
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
      opacity: 1
    }
  }

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About  <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover my journey, my skills, and my passion for development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get to Know Me</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I started my IT journey at ISMONTIC, where I earned a diploma as a Specialized Technician in Digital Infrastructure, Systems, and Networks.
              </p>
              <p>
                Later, I joined EMSI to pursue an engineering degree in Computer Science and Networks.
              </p>
              <p>
                I am currently in my final year of the program, eager to showcase my skills and projects while preparing for new professional opportunities.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">+2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Degrees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">+10</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Technologies Mastered</div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-3 md:grid-cols-4 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <skill.icon className={`text-3xl mb-2 ${skill.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 