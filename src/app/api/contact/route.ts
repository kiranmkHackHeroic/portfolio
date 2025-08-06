import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        ...validatedData,
        status: 'new',
      },
    })

    // In a real application, you might want to:
    // 1. Send an email notification
    // 2. Add to a CRM system
    // 3. Send auto-reply to the user

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: contact.id 
      },
      { status: 201 }
    )

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors 
        },
        { status: 400 }
      )
    }

    console.error('Contact Form Error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // This would typically be protected and only accessible to admins
    const contacts = await prisma.contact.findMany({
      orderBy: { createdAt: 'desc' },
      take: 10, // Limit to recent 10 for demo
    })

    return NextResponse.json({ contacts })

  } catch (error) {
    console.error('Get Contacts Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}