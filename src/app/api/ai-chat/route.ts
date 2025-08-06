import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai'
import { prisma } from '@/lib/prisma'

// Initialize OpenAI (in a real app, use environment variable)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'demo-key'
})

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Save user message to database
    await prisma.aIChat.create({
      data: {
        sessionId: sessionId || 'anonymous',
        message,
        isUser: true,
      },
    })

    // For demo purposes, provide pre-built responses instead of calling OpenAI
    // In production, you would use: const completion = await openai.chat.completions.create(...)
    
    const demoResponses = {
      'hello': "Hello! I'm Kiran's AI assistant. I can help you learn more about his experience, projects, and skills. What would you like to know?",
      'projects': "Kiran has worked on several exciting AI projects including an AI-powered chat assistant, computer vision analytics platform, and NLP document processing suite. Would you like details about any specific project?",
      'skills': "Kiran specializes in Python, TensorFlow, PyTorch, machine learning, computer vision, and NLP. He also has strong full-stack development skills with React, Next.js, and cloud technologies.",
      'experience': "Kiran has 5+ years of experience as an AI Engineer, having worked at AI Innovations Inc., TechCorp Solutions, and StartupXYZ. He's led AI initiatives and developed scalable ML solutions.",
      'contact': "You can reach Kiran through the contact form on this website, or connect with him on GitHub and LinkedIn. He's currently available for new projects and collaborations!",
      'default': "That's an interesting question! Kiran has extensive experience in AI and machine learning. Feel free to ask about his projects, skills, experience, or how to get in touch with him."
    }

    // Simple keyword matching for demo
    const lowerMessage = message.toLowerCase()
    let response = demoResponses.default

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      response = demoResponses.hello
    } else if (lowerMessage.includes('project')) {
      response = demoResponses.projects
    } else if (lowerMessage.includes('skill')) {
      response = demoResponses.skills
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      response = demoResponses.experience
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      response = demoResponses.contact
    }

    // Save AI response to database
    await prisma.aIChat.create({
      data: {
        sessionId: sessionId || 'anonymous',
        message,
        response,
        isUser: false,
      },
    })

    return NextResponse.json({ response })

  } catch (error) {
    console.error('AI Chat Error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Session ID is required' },
        { status: 400 }
      )
    }

    const messages = await prisma.aIChat.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'asc' },
    })

    return NextResponse.json({ messages })

  } catch (error) {
    console.error('Get Chat History Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch chat history' },
      { status: 500 }
    )
  }
}