import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { X, ExternalLink, Github, Calendar, User, Tag, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react'

const ProjectDetails = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  useEffect(() => {
    // Keyboard navigation
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false)
        } else {
          onClose()
        }
      } else if (e.key === 'f' || e.key === 'F') {
        setIsFullscreen(!isFullscreen)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [onClose, isFullscreen])

  if (!project) return null

  const nextImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl max-w-6xl max-h-[95vh] overflow-hidden w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
              <div className="text-2xl">🚀</div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {project.date}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : project.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-120px)]">
          <div className={`grid gap-8 p-6 ${
            isFullscreen ? 'lg:grid-cols-1' : 'lg:grid-cols-2'
          }`}>
            {/* Images Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Project Screenshots
                </h3>
                {project.technologies.some(tech => tech.includes('React Native') || tech.includes('Mobile')) && (
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full flex items-center gap-1">
                    📱 Mobile App
                  </span>
                )}
              </div>
              
              {project.images && project.images.length > 0 ? (
                <div className="relative">
                  <div className={`relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden ${
                    isFullscreen ? 'h-[70vh]' : 'h-96'
                  }`}>
                    {project.title === "Haya - Courtier d'Assurance" && currentImageIndex === 0 ? (
                      <video
                        controls
                        className={`w-full ${isFullscreen ? 'h-[70vh]' : 'h-96'} object-cover rounded-lg`}
                      >
                        <source src="/projects/haya/WhatsApp Video 2025-09-21 at 02.32.04_22d35733.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={encodeURI(project.images[currentImageIndex])}
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                        loading="lazy"
                        decoding="async"
                        className={`w-full h-full ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                      />
                    )}
                    
                    {/* Fullscreen toggle button */}
                    <motion.button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-black/80 transition-all duration-300 shadow-lg"
                    >
                      {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                    </motion.button>

                    {/* Navigation arrows */}
                    {project.images.length > 1 && (
                      <>
                        <motion.button
                          onClick={prevImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 shadow-lg"
                        >
                          <ChevronLeft size={24} />
                        </motion.button>
                        <motion.button
                          onClick={nextImage}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 shadow-lg"
                        >
                          <ChevronRight size={24} />
                        </motion.button>
                      </>
                    )}
                  </div>
                  
                  {/* Progress Bar */}
                  {project.images.length > 1 && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          Image {currentImageIndex + 1} of {project.images.length}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-500">
                          {project.technologies.some(tech => tech.includes('React Native') || tech.includes('Mobile')) 
                            ? 'Press F or click fullscreen button for better mobile view • Use arrow keys or click thumbnails to navigate'
                            : 'Use arrow keys or click thumbnails to navigate'
                          }
                        </span>
                      </div>
                      
                      {/* Modern Progress Bar */}
                      <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-sm"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${((currentImageIndex + 1) / project.images.length) * 100}%` 
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        />
                        
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Progress Dots */}
                        <div className="absolute inset-0 flex items-center justify-between px-1">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index <= currentImageIndex
                                  ? 'bg-white shadow-sm'
                                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Image thumbnails */}
                  {project.images.length > 1 && (
                    <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                      {project.images.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentImageIndex 
                              ? 'border-primary-500 ring-2 ring-primary-200 dark:ring-primary-800' 
                              : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                          }`}
                        >
                          <img
                            src={encodeURI(image)}
                            alt={`Thumbnail ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="text-4xl mb-2">📱</div>
                    <p>No images available</p>
                  </div>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Project Description
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              {project.features && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <span className="text-primary-500 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Challenges & Solutions
                  </h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {challenge}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 pt-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </motion.a>
                )}
                
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>

          {/* Video Section */}
          {project.title === "Haya - Courtier d'Assurance" && (
            <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
              <video
                controls
                className={`w-full ${isFullscreen ? 'h-[70vh]' : 'h-96'} object-cover rounded-lg`}
              >
                <source src="/projects/haya/WhatsApp Video 2025-09-21 at 02.32.04_22d35733.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetails
