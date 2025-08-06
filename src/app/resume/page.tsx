"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Edit, Sparkles, Save, Eye, Plus, X } from 'lucide-react'

interface ResumeSection {
  id: string
  title: string
  content: string
  editable: boolean
}

const initialSections: ResumeSection[] = [
  {
    id: 'header',
    title: 'Header',
    content: `KIRAN MK
AI Engineer & Machine Learning Specialist
kiran@example.com | +91 9876543210 | Bangalore, India
GitHub: github.com/kiranmk | LinkedIn: linkedin.com/in/kiranmk`,
    editable: true
  },
  {
    id: 'summary',
    title: 'Professional Summary',
    content: `Passionate AI Engineer with 5+ years of experience developing intelligent systems that solve real-world problems. Specialized in machine learning, natural language processing, and computer vision with a proven track record of delivering scalable AI solutions from research to production.`,
    editable: true
  },
  {
    id: 'experience',
    title: 'Experience',
    content: `Senior AI Engineer | AI Innovations Inc. | 2022 - Present
• Leading AI initiatives and developing scalable machine learning solutions for enterprise clients
• Architected and deployed computer vision models processing 1M+ images daily
• Mentored junior engineers and established ML best practices across the organization

Machine Learning Engineer | TechCorp Solutions | 2020 - 2022
• Developed and deployed computer vision models for real-time image processing applications
• Improved model accuracy by 15% through advanced data augmentation techniques
• Collaborated with cross-functional teams to integrate ML solutions into production systems

Full Stack Developer | StartupXYZ | 2019 - 2020
• Built end-to-end web applications with focus on AI-powered features and user experience
• Implemented recommendation systems that increased user engagement by 25%
• Developed RESTful APIs and integrated third-party AI services`,
    editable: true
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    content: `Programming Languages: Python, JavaScript, TypeScript, SQL
ML/AI Frameworks: TensorFlow, PyTorch, Scikit-learn, OpenCV, Pandas, NumPy
Web Technologies: React, Next.js, Node.js, Express, FastAPI, Flask
Cloud & DevOps: AWS, Docker, Kubernetes, CI/CD, Linux, Git
Databases: PostgreSQL, MongoDB, Redis
Specializations: Computer Vision, NLP, Deep Learning, MLOps`,
    editable: true
  },
  {
    id: 'education',
    title: 'Education',
    content: `Master of Science in Computer Science | University of Technology | 2017 - 2019
Focus: Artificial Intelligence and Machine Learning
Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, NLP

Bachelor of Technology in Computer Engineering | Engineering College | 2013 - 2017
Focus: Software Development and Algorithms
GPA: 8.5/10`,
    editable: true
  }
]

export default function ResumeBuilder() {
  const [sections, setSections] = useState<ResumeSection[]>(initialSections)
  const [editingSection, setEditingSection] = useState<string | null>(null)
  const [isGeneratingContent, setIsGeneratingContent] = useState(false)

  const handleEdit = (sectionId: string) => {
    setEditingSection(sectionId)
  }

  const handleSave = (sectionId: string, newContent: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, content: newContent }
        : section
    ))
    setEditingSection(null)
  }

  const handleCancel = () => {
    setEditingSection(null)
  }

  const generateAIContent = async (sectionId: string) => {
    setIsGeneratingContent(true)
    
    // Simulate AI content generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const aiSuggestions = {
      summary: `Dynamic AI Engineer with expertise in developing cutting-edge machine learning solutions. Proven ability to transform complex business requirements into intelligent systems that drive measurable results. Passionate about leveraging AI to solve real-world challenges and create meaningful impact.`,
      experience: `Senior AI Engineer | AI Innovations Inc. | 2022 - Present
• Spearheaded development of enterprise-grade ML pipelines serving 10M+ daily requests
• Implemented advanced deep learning models achieving 95%+ accuracy in production
• Led cross-functional AI initiatives resulting in $2M+ annual cost savings
• Established MLOps practices reducing deployment time by 60%

Machine Learning Engineer | TechCorp Solutions | 2020 - 2022
• Pioneered computer vision solutions for autonomous vehicle navigation systems
• Developed real-time object detection models with sub-100ms latency requirements
• Optimized existing ML workflows improving processing speed by 40%
• Published 3 research papers on computer vision applications in top-tier conferences`,
      skills: `Core Technologies: Python, TensorFlow 2.x, PyTorch, Scikit-learn, OpenCV, Pandas
Advanced ML: Deep Learning, Computer Vision, NLP, Reinforcement Learning, MLOps
Cloud Platforms: AWS (SageMaker, EC2, S3), Google Cloud Platform, Azure ML
Development: React, Next.js, Node.js, FastAPI, Flask, Docker, Kubernetes
Data Engineering: Apache Spark, Kafka, Elasticsearch, PostgreSQL, MongoDB
Certifications: AWS ML Specialty, TensorFlow Developer, Azure AI Engineer`
    }

    const suggestion = aiSuggestions[sectionId as keyof typeof aiSuggestions]
    if (suggestion) {
      setSections(prev => prev.map(section => 
        section.id === sectionId 
          ? { ...section, content: suggestion }
          : section
      ))
    }
    
    setIsGeneratingContent(false)
  }

  const addNewSection = () => {
    const newSection: ResumeSection = {
      id: `custom_${Date.now()}`,
      title: 'New Section',
      content: 'Enter your content here...',
      editable: true
    }
    setSections(prev => [...prev, newSection])
    setEditingSection(newSection.id)
  }

  const deleteSection = (sectionId: string) => {
    setSections(prev => prev.filter(section => section.id !== sectionId))
  }

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Resume Builder</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create and customize your professional resume with AI-powered suggestions and real-time editing.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors">
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button 
            onClick={addNewSection}
            className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Section
          </button>
        </motion.div>

        {/* Resume Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Edit Resume</h2>
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-6 border shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => generateAIContent(section.id)}
                      disabled={isGeneratingContent}
                      className="p-2 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors disabled:opacity-50"
                      title="Generate AI suggestions"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleEdit(section.id)}
                      className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                      title="Edit section"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    {section.id.startsWith('custom_') && (
                      <button
                        onClick={() => deleteSection(section.id)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                        title="Delete section"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {editingSection === section.id ? (
                  <div className="space-y-4">
                    <textarea
                      defaultValue={section.content}
                      rows={8}
                      className="w-full p-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      id={`edit-${section.id}`}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          const textarea = document.getElementById(`edit-${section.id}`) as HTMLTextAreaElement
                          handleSave(section.id, textarea.value)
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground">
                      {section.content}
                    </pre>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Preview Column */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Preview</h2>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white text-black p-8 rounded-xl shadow-lg border min-h-[800px]"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              {sections.map((section) => (
                <div key={section.id} className="mb-8">
                  {section.id === 'header' ? (
                    <div className="text-center mb-8 pb-4 border-b-2 border-gray-800">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                        {section.content}
                      </pre>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-bold mb-3 text-gray-800 uppercase tracking-wide">
                        {section.title}
                      </h3>
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 mb-4">
                        {section.content}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* AI Features Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-2xl border"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">AI-Powered Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Smart Suggestions</h4>
              <p className="text-sm text-muted-foreground">
                Get AI-powered content suggestions tailored to your experience and industry.
              </p>
            </div>
            <div>
              <Edit className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Real-time Editing</h4>
              <p className="text-sm text-muted-foreground">
                Edit any section with instant preview and professional formatting.
              </p>
            </div>
            <div>
              <Download className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Professional Export</h4>
              <p className="text-sm text-muted-foreground">
                Export your resume as a professionally formatted PDF document.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}