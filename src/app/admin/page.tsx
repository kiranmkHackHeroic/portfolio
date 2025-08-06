"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, MessageSquare, Mail, BarChart3, Settings, Eye, Filter } from 'lucide-react'

interface Contact {
  id: string
  name: string
  email: string
  subject?: string
  message: string
  status: 'new' | 'read' | 'replied'
  createdAt: string
}

interface ChatMessage {
  id: string
  sessionId: string
  message: string
  response?: string
  isUser: boolean
  createdAt: string
}

const statCards = [
  {
    title: 'Total Contacts',
    value: '24',
    change: '+12%',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'Chat Sessions',
    value: '156',
    change: '+23%',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    title: 'New Messages',
    value: '8',
    change: '+5%',
    icon: Mail,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    title: 'Response Rate',
    value: '98%',
    change: '+2%',
    icon: BarChart3,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('contacts')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      // In a real app, these would be actual API calls
      // Simulating data for demo purposes
      const mockContacts: Contact[] = [
        {
          id: '1',
          name: 'Sarah Johnson',
          email: 'sarah@company.com',
          subject: 'AI Project Collaboration',
          message: 'Hi Kiran, I came across your portfolio and I\'m impressed with your AI work. We have an exciting project that might interest you.',
          status: 'new',
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Mike Chen',
          email: 'mike.chen@startup.io',
          subject: 'Machine Learning Consultation',
          message: 'We need help implementing a recommendation system for our e-commerce platform. Your experience looks perfect for our needs.',
          status: 'read',
          createdAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: '3',
          name: 'Emily Rodriguez',
          email: 'emily@techcorp.com',
          subject: 'Speaking Opportunity',
          message: 'Would you be interested in speaking at our AI conference next month? We\'d love to have you share your expertise.',
          status: 'replied',
          createdAt: new Date(Date.now() - 172800000).toISOString()
        }
      ]

      const mockChatMessages: ChatMessage[] = [
        {
          id: '1',
          sessionId: 'session1',
          message: 'Hello, tell me about Kiran\'s projects',
          response: 'Kiran has worked on several exciting AI projects...',
          isUser: true,
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          sessionId: 'session2',
          message: 'What are his technical skills?',
          response: 'Kiran specializes in Python, TensorFlow, PyTorch...',
          isUser: true,
          createdAt: new Date(Date.now() - 3600000).toISOString()
        }
      ]

      setContacts(mockContacts)
      setChatMessages(mockChatMessages)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = (contactId: string, newStatus: Contact['status']) => {
    setContacts(prev => 
      prev.map(contact => 
        contact.id === contactId 
          ? { ...contact, status: newStatus }
          : contact
      )
    )
  }

  const filteredContacts = contacts.filter(contact => 
    statusFilter === 'all' || contact.status === statusFilter
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg border border-border hover:bg-accent">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statCards.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`${stat.bgColor} rounded-xl p-6 border`}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                  <span className="text-sm font-semibold text-green-600">
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex gap-4 border-b">
            {[
              { id: 'contacts', label: 'Contact Messages', icon: Mail },
              { id: 'chat', label: 'Chat Sessions', icon: MessageSquare },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 'contacts' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="flex items-center gap-4">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-border rounded-lg bg-background"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
              </div>

              {/* Contacts List */}
              <div className="space-y-4">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="bg-card rounded-xl p-6 border shadow-sm"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{contact.name}</h3>
                        <p className="text-muted-foreground">{contact.email}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatDate(contact.createdAt)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={contact.status}
                          onChange={(e) => updateContactStatus(contact.id, e.target.value as Contact['status'])}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                            contact.status === 'new'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : contact.status === 'read'
                              ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                              : 'bg-green-50 text-green-700 border-green-200'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                        <button className="p-2 text-muted-foreground hover:text-foreground">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {contact.subject && (
                      <h4 className="font-medium mb-2">{contact.subject}</h4>
                    )}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {contact.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'chat' && (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Recent AI chat interactions from website visitors.
              </p>
              {chatMessages.map((chat) => (
                <div
                  key={chat.id}
                  className="bg-card rounded-xl p-6 border shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm bg-secondary px-3 py-1 rounded">
                      Session: {chat.sessionId}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(chat.createdAt)}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                        User Question:
                      </p>
                      <p className="text-sm">{chat.message}</p>
                    </div>
                    {chat.response && (
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                        <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-1">
                          AI Response:
                        </p>
                        <p className="text-sm">{chat.response}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}