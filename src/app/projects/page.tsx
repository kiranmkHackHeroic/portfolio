"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: '1',
    title: 'AI-Powered Chat Assistant',
    description: 'Intelligent chatbot using GPT-4 and custom training for customer support automation.',
    longDescription: 'Built a sophisticated chatbot that can handle complex customer queries, integrate with CRM systems, and provide personalized responses. Features include sentiment analysis, intent recognition, and seamless handoff to human agents.',
    technologies: ['Python', 'OpenAI GPT-4', 'FastAPI', 'React', 'PostgreSQL'],
    githubUrl: 'https://github.com/example/ai-chat',
    liveUrl: 'https://ai-chat-demo.com',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'AI/ML',
    featured: true,
    status: 'completed'
  },
  {
    id: '2',
    title: 'Computer Vision Analytics Platform',
    description: 'Real-time object detection and tracking system for retail analytics and security.',
    longDescription: 'Developed a comprehensive computer vision platform that processes video feeds in real-time to detect objects, track movements, and generate analytics insights. Used in retail stores for customer behavior analysis and security monitoring.',
    technologies: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/example/cv-analytics',
    liveUrl: 'https://cv-analytics-demo.com',
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop',
    category: 'Computer Vision',
    featured: true,
    status: 'completed'
  },
  {
    id: '3',
    title: 'NLP Document Processing Suite',
    description: 'Automated document analysis and information extraction using advanced NLP techniques.',
    longDescription: 'Created a document processing pipeline that can extract key information from various document types, classify content, and generate summaries. Includes support for multiple languages and custom entity recognition.',
    technologies: ['Python', 'spaCy', 'BERT', 'Elasticsearch', 'Django', 'Celery'],
    githubUrl: 'https://github.com/example/nlp-docs',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    category: 'NLP',
    featured: false,
    status: 'completed'
  },
  {
    id: '4',
    title: 'Predictive Analytics Dashboard',
    description: 'Machine learning-powered dashboard for business forecasting and trend analysis.',
    longDescription: 'Built an interactive dashboard that uses machine learning algorithms to predict business metrics, identify trends, and provide actionable insights. Features real-time data processing and customizable visualizations.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Streamlit', 'AWS'],
    githubUrl: 'https://github.com/example/ml-dashboard',
    liveUrl: 'https://ml-dashboard-demo.com',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Data Science',
    featured: false,
    status: 'completed'
  },
  {
    id: '5',
    title: 'Smart Recommendation Engine',
    description: 'Advanced recommendation system using collaborative and content-based filtering.',
    longDescription: 'Developed a hybrid recommendation engine that combines multiple algorithms to provide personalized recommendations. Includes real-time learning capabilities and A/B testing framework.',
    technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Redis', 'MongoDB', 'Kafka'],
    githubUrl: 'https://github.com/example/recommendation-engine',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    category: 'AI/ML',
    featured: false,
    status: 'in-progress'
  },
  {
    id: '6',
    title: 'AI-Enhanced Portfolio Website',
    description: 'This very portfolio website with integrated AI features and modern design.',
    longDescription: 'A full-stack portfolio website built with Next.js 14, featuring AI chat assistant, content generation, and resume builder. Showcases modern web development practices with TypeScript, Tailwind CSS, and Framer Motion.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'OpenAI', 'Framer Motion'],
    githubUrl: 'https://github.com/example/portfolio',
    liveUrl: 'https://kiranmk.dev',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    category: 'Web Development',
    featured: true,
    status: 'completed'
  }
]

const categories = ['All', 'AI/ML', 'Computer Vision', 'NLP', 'Data Science', 'Web Development']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI, machine learning, and software development. 
            Each project represents a journey of learning and innovation.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  className="group bg-card rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </Link>
                        )}
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="group bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.status === 'in-progress' && (
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                          In Progress
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-1">
                        {project.githubUrl && (
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            <Github className="w-3 h-3" />
                          </Link>
                        )}
                        {project.liveUrl && (
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded border border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or selected category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}