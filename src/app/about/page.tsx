"use client"

import { motion } from 'framer-motion'
import { Download, MapPin, Calendar, Code, Brain, Zap } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const skills = [
    { category: 'AI/ML', items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Flask', 'GraphQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Cloud/DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'MongoDB'] },
  ]

  const experience = [
    {
      company: 'AI Innovations Inc.',
      position: 'Senior AI Engineer',
      period: '2022 - Present',
      description: 'Leading AI initiatives and developing scalable machine learning solutions for enterprise clients.',
    },
    {
      company: 'TechCorp Solutions',
      position: 'Machine Learning Engineer',
      period: '2020 - 2022',
      description: 'Developed and deployed computer vision models for real-time image processing applications.',
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2019 - 2020',
      description: 'Built end-to-end web applications with focus on AI-powered features and user experience.',
    },
  ]

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      period: '2017 - 2019',
      focus: 'Artificial Intelligence and Machine Learning',
    },
    {
      degree: 'Bachelor of Technology in Computer Engineering',
      institution: 'Engineering College',
      period: '2013 - 2017',
      focus: 'Software Development and Algorithms',
    },
  ]

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate AI Engineer with a mission to bridge the gap between cutting-edge research 
            and real-world applications.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-card rounded-2xl p-8 border shadow-sm">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  KM
                </div>
                <h2 className="text-2xl font-bold mb-2">Kiran MK</h2>
                <p className="text-primary font-semibold mb-4">AI Engineer</p>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bangalore, India</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>5+ Years Experience</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="space-y-8">
              {/* Bio */}
              <div className="bg-card rounded-2xl p-8 border shadow-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="w-6 h-6 text-primary" />
                  My Story
                </h3>
                <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate AI Engineer with over 5 years of experience in developing intelligent 
                    systems that solve real-world problems. My journey began with a fascination for how 
                    machines can learn and make decisions, leading me to specialize in machine learning, 
                    natural language processing, and computer vision.
                  </p>
                  <p>
                    Throughout my career, I've had the privilege of working on diverse projects ranging 
                    from building recommendation systems for e-commerce platforms to developing computer 
                    vision solutions for autonomous vehicles. I believe in the power of AI to transform 
                    industries and improve lives.
                  </p>
                  <p>
                    When I'm not coding, you'll find me contributing to open-source projects, writing 
                    technical articles, or exploring the latest research papers in AI. I'm always eager 
                    to collaborate on innovative projects that push the boundaries of what's possible.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Code Commits</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Code className="w-8 h-8 text-primary" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border shadow-sm"
              >
                <h3 className="font-bold text-lg mb-4 text-primary">{skillCategory.category}</h3>
                <div className="space-y-2">
                  {skillCategory.items.map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Zap className="w-8 h-8 text-primary" />
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border shadow-sm"
              >
                <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>
                <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                <p className="text-sm text-muted-foreground">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}