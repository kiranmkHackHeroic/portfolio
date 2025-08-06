# AI Engineer Portfolio

A modern, full-stack personal portfolio website showcasing cutting-edge technologies and AI integration. Built with Next.js 14, TypeScript, and advanced AI features.

![Portfolio Preview](https://github.com/user-attachments/assets/b8d39224-ba8f-4f73-b455-bbe37cd81ead)

## 🚀 Features

### Core Pages
- **Home**: Animated hero section with gradient text and social links
- **About**: Comprehensive profile with skills, experience, and education
- **Projects**: Portfolio showcase with filtering and search capabilities
- **Skills**: Technical skills with proficiency levels and certifications
- **Resume Builder**: AI-powered resume editor with real-time preview
- **Contact**: Professional contact form with validation
- **Blog**: Article listing with search and tagging system
- **Admin Dashboard**: Content management and analytics

### AI Integration
- **AI Chat Assistant**: Interactive chatbot for visitor inquiries
- **Smart Resume Builder**: AI-powered content suggestions and editing
- **Intelligent Contact Processing**: Automated form handling and responses
- **Content Generation**: Dynamic content creation capabilities

### Technical Features
- **Responsive Design**: Works seamlessly on all devices
- **Dark/Light Mode**: System-aware theme switching
- **Performance Optimized**: Lazy loading and efficient animations
- **SEO Optimized**: Comprehensive meta tags and sitemap
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Framer Motion animations and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **Lucide React** for icons

### Backend & Database
- **Next.js API Routes** for backend functionality
- **Prisma ORM** with SQLite database
- **Zod** for data validation

### AI Integration
- **OpenAI GPT** integration for chat and content generation
- **Real-time AI responses** for interactive features
- **Contextual AI suggestions** for resume building

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kiranmkHackHeroic/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="your-openai-api-key"
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"
```

4. Initialize the database:
```bash
npx prisma generate
npx prisma db push
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── about/          # About page
│   ├── admin/          # Admin dashboard
│   ├── api/            # API routes
│   ├── blog/           # Blog section
│   ├── contact/        # Contact page
│   ├── projects/       # Projects showcase
│   ├── resume/         # AI Resume Builder
│   ├── skills/         # Skills page
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── layout/         # Layout components
│   ├── ui/             # UI components
│   └── forms/          # Form components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── prisma/             # Database schema
```

## 🎨 Key Components

### AI Chat Widget
```typescript
import { AIChatWidget } from '@/components/ai-chat-widget'

// Floating chat assistant for visitor interaction
<AIChatWidget />
```

### Resume Builder
```typescript
// AI-powered resume editing with real-time preview
// Located at /resume with intelligent content suggestions
```

### Theme Provider
```typescript
import { ThemeProvider } from '@/components/theme-provider'

// System-aware dark/light mode switching
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Manual Deployment
1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

## 🔧 Configuration

### Database
The portfolio uses Prisma with SQLite for development. For production, update the database URL in `.env.local` to use PostgreSQL or another production database.

### AI Features
Configure OpenAI API key in environment variables for AI chat and content generation features.

### Theme Customization
Modify the Tailwind CSS configuration in `tailwind.config.js` and global styles in `src/app/globals.css`.

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with dynamic imports and lazy loading
- **SEO**: Comprehensive meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Kiran MK - [kiran@example.com](mailto:kiran@example.com)

Project Link: [https://github.com/kiranmkHackHeroic/portfolio](https://github.com/kiranmkHackHeroic/portfolio)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Prisma](https://www.prisma.io/) for database management
- [OpenAI](https://openai.com/) for AI capabilities
- [Lucide](https://lucide.dev/) for beautiful icons

---

**Built with ❤️ by Kiran MK**
