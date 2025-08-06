"use client"

import { motion } from 'framer-motion'
import { Brain, Code, Database, Cloud, Star } from 'lucide-react'

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    color: 'text-purple-500',
    skills: [
      { name: 'Python', proficiency: 95, years: 5 },
      { name: 'TensorFlow', proficiency: 90, years: 4 },
      { name: 'PyTorch', proficiency: 85, years: 3 },
      { name: 'Scikit-learn', proficiency: 90, years: 4 },
      { name: 'OpenCV', proficiency: 80, years: 3 },
      { name: 'Pandas', proficiency: 95, years: 5 },
      { name: 'NumPy', proficiency: 95, years: 5 },
      { name: 'Matplotlib', proficiency: 85, years: 4 },
    ]
  },
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'text-blue-500',
    skills: [
      { name: 'React', proficiency: 90, years: 4 },
      { name: 'Next.js', proficiency: 85, years: 3 },
      { name: 'TypeScript', proficiency: 85, years: 3 },
      { name: 'JavaScript', proficiency: 90, years: 5 },
      { name: 'Tailwind CSS', proficiency: 80, years: 2 },
      { name: 'HTML/CSS', proficiency: 90, years: 5 },
      { name: 'Framer Motion', proficiency: 75, years: 2 },
      { name: 'Vue.js', proficiency: 70, years: 2 },
    ]
  },
  {
    title: 'Backend & Database',
    icon: Database,
    color: 'text-green-500',
    skills: [
      { name: 'Node.js', proficiency: 85, years: 4 },
      { name: 'Express.js', proficiency: 85, years: 4 },
      { name: 'FastAPI', proficiency: 90, years: 3 },
      { name: 'Flask', proficiency: 85, years: 3 },
      { name: 'PostgreSQL', proficiency: 80, years: 3 },
      { name: 'MongoDB', proficiency: 75, years: 3 },
      { name: 'Redis', proficiency: 70, years: 2 },
      { name: 'GraphQL', proficiency: 65, years: 2 },
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-orange-500',
    skills: [
      { name: 'AWS', proficiency: 80, years: 3 },
      { name: 'Docker', proficiency: 85, years: 3 },
      { name: 'Kubernetes', proficiency: 70, years: 2 },
      { name: 'CI/CD', proficiency: 75, years: 3 },
      { name: 'Linux', proficiency: 85, years: 4 },
      { name: 'Git', proficiency: 90, years: 5 },
      { name: 'Terraform', proficiency: 60, years: 1 },
      { name: 'Jenkins', proficiency: 65, years: 2 },
    ]
  }
]

const certifications = [
  {
    name: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services',
    year: '2023',
    level: 'Professional'
  },
  {
    name: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2022',
    level: 'Professional'
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera (deeplearning.ai)',
    year: '2021',
    level: 'Specialization'
  },
  {
    name: 'Microsoft Azure AI Engineer Associate',
    issuer: 'Microsoft',
    year: '2023',
    level: 'Associate'
  }
]

const SkillBar = ({ skill, index }: { skill: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm">{skill.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{skill.years}y</span>
          <span className="text-xs font-bold">{skill.proficiency}%</span>
        </div>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-primary h-2 rounded-full relative"
        >
          <div className="absolute right-0 top-0 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

const ProficiencyLevel = ({ level }: { level: number }) => {
  const stars = Math.floor(level / 20)
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Skills() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of 
            software development and artificial intelligence.
          </p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const avgProficiency = Math.round(
              category.skills.reduce((sum, skill) => sum + skill.proficiency, 0) / category.skills.length
            )
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-6 border shadow-sm text-center"
              >
                <Icon className={`w-12 h-12 ${category.color} mx-auto mb-4`} />
                <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{avgProficiency}%</div>
                <ProficiencyLevel level={avgProficiency} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Detailed Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{cert.name}</h3>
                    <p className="text-primary font-semibold mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.level}</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {cert.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Learning Philosophy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-muted/50 rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Continuous Learning</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Technology evolves rapidly, and I believe in staying ahead of the curve. 
            I continuously update my skills through hands-on projects, online courses, 
            research papers, and community contributions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Online Courses Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Research Papers Read</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Open Source Contributions</div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}