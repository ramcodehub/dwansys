# Dwansys

<div align="center">

![Project Badge](https://img.shields.io/badge/status-production-ready-success) ![Node.js](https://img.shields.io/badge/Node.js-v18+-green) ![React](https://img.shields.io/badge/React-19-blue) ![Express](https://img.shields.io/badge/Express-4.19+-red) ![Supabase](https://img.shields.io/badge/Supabase-2.46+-green) ![License](https://img.shields.io/badge/license-MIT-blue)

**Enterprise-Grade AI & Data Solutions Platform**

*Transforming businesses through intelligent data management and AI-powered solutions*

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [💡 Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [🏗️ Architecture](#️-architecture)
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Configuration](#️-configuration)
- [🔧 Development](#-development)
- [📡 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [📊 Monitoring & Logging](#-monitoring--logging)
- [🔒 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Support](#-support)

---

## 🎯 Overview

**Dwansys** is a comprehensive, enterprise-grade platform that delivers cutting-edge AI and data management solutions across multiple industries. Built with modern web technologies, it provides a scalable, secure, and maintainable architecture for businesses looking to leverage artificial intelligence and advanced data analytics.

### 🎯 Mission
To democratize AI and data science by providing accessible, powerful, and industry-specific solutions that drive digital transformation and business growth.

### 🌟 Value Proposition
- **Industry-Specific Solutions**: Tailored AI applications for Banking, Healthcare, Insurance, and Sustainability sectors
- **Scalable Architecture**: Built to handle enterprise-level workloads with microservices architecture
- **Security-First Design**: Enterprise-grade security with comprehensive data protection
- **Developer-Friendly**: Modern tooling, comprehensive documentation, and CI/CD ready

---

## 🏗️ Architecture

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   (React 19)    │◄──►│   (Express.js)  │◄──►│   (Supabase)    │
│   Port: 3000    │    │   Port: 5000    │    │   PostgreSQL    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN/Static    │    │   Email Service │    │   File Storage  │
│   Assets        │    │   (Nodemailer)  │    │   (Supabase)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Component Architecture
- **Frontend**: React 19 with Vite bundler, React Router for navigation
- **Backend**: Express.js REST API with middleware-based architecture
- **Database**: Supabase (PostgreSQL) with Row Level Security (RLS)
- **Email Service**: Nodemailer with SMTP integration
- **Authentication**: Supabase Auth with JWT tokens
- **File Storage**: Supabase Storage for media assets

---

## ✨ Key Features

### 🎨 Frontend Features
- **Modern React 19**: Latest React features with concurrent rendering
- **Responsive Design**: Mobile-first approach with Bootstrap 5.3
- **Theme System**: Light/Dark/System theme support with Context API
- **Dynamic Routing**: 50+ pages covering AI solutions and use cases
- **Component Library**: Reusable, modular components
- **Performance Optimized**: Vite bundler with code splitting
- **SEO Ready**: Meta tags, structured data, and semantic HTML

### 🔧 Backend Features
- **RESTful API**: Well-structured endpoints with proper HTTP methods
- **Security Middleware**: Helmet, CORS, rate limiting, input validation
- **Logging System**: Structured logging with Pino
- **Error Handling**: Centralized error handling with custom error classes
- **Data Validation**: Joi schema validation for all inputs
- **Email Integration**: Transactional email service with templates
- **Database Integration**: Supabase client with connection pooling

### 🏢 Industry Solutions

#### 🏦 Banking & Financial Services
- Fraud Detection & Prevention
- AI-Powered Risk Assessment
- Algorithmic Trading
- Compliance & Anti-Money Laundering
- Investment Optimization
- Loan Approval Automation

#### 🏥 Healthcare & Life Sciences
- Medical Diagnosis & Imaging Analysis
- Drug Discovery & Development
- Genomics & Precision Medicine
- Mental Health AI Applications
- Hospital Operations Optimization
- Wearable Health Tech Integration

#### 🛡️ Insurance
- AI-Powered Pricing & Personalization
- Risk Assessment & Underwriting
- Claims Management Analytics
- Regulatory Compliance Processing
- Auto/Health/Property Insurance AI

#### 🌱 Sustainability
- Climate Risk Modeling
- Carbon Emissions Monitoring
- Resource Efficiency Optimization
- Social Sentiment Analysis
- Workplace Safety Monitoring
- Fraud & Ethics Monitoring

---

## 🛠️ Tech Stack

### Frontend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI Framework |
| **Vite** | 7.1.2 | Build Tool & Dev Server |
| **React Router** | 7.8.2 | Client-side Routing |
| **Bootstrap** | 5.3.7 | CSS Framework |
| **Swiper** | 12.0.1 | Touch Slider |
| **ESLint** | 9.33.0 | Code Linting |
| **Prettier** | 3.6.2 | Code Formatting |

### Backend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18+ | Runtime Environment |
| **Express.js** | 4.19.2 | Web Framework |
| **Supabase** | 2.46.1 | Database & Auth |
| **Nodemailer** | 6.9.14 | Email Service |
| **Joi** | 17.13.3 | Data Validation |
| **Pino** | 9.4.0 | Logging |
| **Helmet** | 7.1.0 | Security Headers |
| **CORS** | 2.8.5 | Cross-Origin Resource Sharing |

### Development Tools
- **Nodemon**: Hot reloading for backend development
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Git**: Version control
- **npm**: Package management

---

## 📁 Project Structure

```
Dwansys/
├── 📁 frontend/                    # React frontend application
│   ├── 📁 public/                  # Static assets
│   ├── 📁 src/
│   │   ├── 📁 components/          # Reusable UI components
│   │   │   ├── 📁 Header/         # Navigation header
│   │   │   ├── 📁 Footer/         # Site footer
│   │   │   ├── 📁 Hero/           # Landing hero section
│   │   │   ├── 📁 Card/           # Card components
│   │   │   └── ...                 # 20+ other components
│   │   ├── 📁 pages/              # Page components
│   │   │   ├── 📁 Home/           # Landing page
│   │   │   ├── 📁 AI_Solutions/   # AI solution pages
│   │   │   ├── 📁 DataSolutions/  # Data solution pages
│   │   │   ├── 📁 UseCases/       # Industry use cases
│   │   │   └── ...                 # Other pages
│   │   ├── 📁 config/             # Configuration files
│   │   │   ├── 📁 Capabilities/   # Capability configurations
│   │   │   ├── 📁 UseCases/       # Use case data
│   │   │   └── navLinks.js        # Navigation configuration
│   │   ├── 📁 contexts/           # React contexts
│   │   ├── 📁 utils/              # Utility functions
│   │   └── 📁 Styles/             # Global styles
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite configuration
│   └── eslint.config.js           # ESLint configuration
├── 📁 backend/                     # Express.js backend API
│   ├── 📁 src/
│   │   ├── 📁 routes/             # API route handlers
│   │   │   ├── email.js           # Email endpoints
│   │   │   ├── contacts.js        # Contact management
│   │   │   └── subscribers.js     # Newsletter subscribers
│   │   ├── 📁 services/           # Business logic
│   │   │   ├── emailService.js    # Email service
│   │   │   └── supabase.js        # Database service
│   │   ├── 📁 middleware/         # Express middleware
│   │   │   └── errorHandler.js    # Error handling
│   │   └── 📁 utils/              # Utility functions
│   │       └── validator.js       # Joi validation schemas
│   ├── 📁 sql/                    # Database schemas
│   │   ├── contacts.sql           # Contacts table schema
│   │   ├── subscribers.sql        # Subscribers table schema
│   │   └── rls_policies.sql       # Row Level Security policies
│   ├── server.js                  # Main server file
│   └── package.json               # Backend dependencies
└── README.md                      # This file
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher
- **Git** for version control
- **Supabase account** for database and authentication

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/dwansys.git
cd dwansys
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 3. Environment Setup
Create environment files for both frontend and backend:

**Backend (.env)**
```env
# Server Configuration
NODE_ENV=development
PORT=5000
LOG_LEVEL=info

# Supabase Configuration
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Email Configuration
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
FROM_EMAIL=noreply@dwansys.com

# CORS Configuration
CORS_ORIGIN=http://localhost:3000,http://localhost:5173
```

**Frontend (.env)**
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Database Setup
1. Create a new Supabase project
2. Run the SQL scripts in `backend/sql/` directory
3. Configure Row Level Security policies
4. Set up email templates in Supabase

### 5. Start Development Servers
```bash
# Terminal 1: Start backend server
cd backend
npm run dev

# Terminal 2: Start frontend development server
cd frontend
npm run dev
```

### 6. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Health Check**: http://localhost:5000/health

---

## ⚙️ Configuration

### Environment Variables

#### Backend Configuration
| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NODE_ENV` | Environment mode | `development` | No |
| `PORT` | Server port | `5000` | No |
| `LOG_LEVEL` | Logging level | `info` | No |
| `SUPABASE_URL` | Supabase project URL | - | Yes |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | - | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | - | Yes |
| `SMTP_HOST` | SMTP server host | - | Yes |
| `SMTP_PORT` | SMTP server port | `587` | No |
| `SMTP_USER` | SMTP username | - | Yes |
| `SMTP_PASS` | SMTP password | - | Yes |
| `FROM_EMAIL` | Default sender email | - | Yes |
| `CORS_ORIGIN` | Allowed CORS origins | `*` | No |

#### Frontend Configuration
| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_API_BASE_URL` | Backend API base URL | - | Yes |
| `VITE_SUPABASE_URL` | Supabase project URL | - | Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | - | Yes |

### Database Configuration
The application uses Supabase (PostgreSQL) with the following key tables:
- **contacts**: Store contact form submissions
- **subscribers**: Newsletter subscription management
- **RLS Policies**: Row Level Security for data protection

---

## 🔧 Development

### Available Scripts

#### Frontend Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

#### Backend Scripts
```bash
npm start            # Start production server
npm run dev          # Start development server with nodemon
```

### Development Workflow
1. **Feature Development**: Create feature branches from `main`
2. **Code Quality**: Run linting and formatting before commits
3. **Testing**: Write tests for new features
4. **Documentation**: Update documentation for API changes
5. **Pull Request**: Submit PR with detailed description

### Code Style Guidelines
- **ESLint**: Follow the configured ESLint rules
- **Prettier**: Use Prettier for consistent formatting
- **Naming**: Use descriptive variable and function names
- **Comments**: Document complex logic and business rules
- **Components**: Keep components small and focused

---

## 📡 API Documentation

### Base URL
```
Development: http://localhost:5000/api
Production: https://api.dwansys.com/api
```

### Authentication
The API uses Supabase authentication with JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### Endpoints

#### Health Check
```http
GET /health
```
**Response:**
```json
{
  "ok": true
}
```

#### Email Service
```http
POST /send-email
```
**Request Body:**
```json
{
  "to": "user@example.com",
  "subject": "Email Subject",
  "message": "Email content",
  "name": "Sender Name"
}
```

#### Contact Management
```http
POST /contacts
GET /contacts
PUT /contacts/:id
DELETE /contacts/:id
```

#### Newsletter Subscribers
```http
POST /subscribers
GET /subscribers
DELETE /subscribers/:id
```

### Error Responses
All error responses follow this format:
```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": "Additional error details"
  }
}
```

### Rate Limiting
- **Global Limit**: 120 requests per minute
- **Email Endpoint**: 10 requests per minute
- **Contact Endpoint**: 20 requests per minute

---

## 🧪 Testing

### Test Structure
```
tests/
├── unit/           # Unit tests
├── integration/    # Integration tests
├── e2e/           # End-to-end tests
└── fixtures/      # Test data
```

### Running Tests
```bash
# Run all tests
npm test

# Run unit tests only
npm run test:unit

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

### Test Coverage
- **Frontend**: Jest + React Testing Library
- **Backend**: Jest + Supertest
- **E2E**: Playwright or Cypress
- **Coverage Target**: >80%

---

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd frontend
npm run build

# Start backend
cd ../backend
npm start
```

### Docker Deployment
```dockerfile
# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Environment-Specific Configurations

#### Development
- Hot reloading enabled
- Detailed error messages
- Debug logging
- CORS allows localhost

#### Production
- Minified assets
- Error logging only
- Security headers enabled
- CORS restricted to production domains

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates installed
- [ ] Domain DNS configured
- [ ] CDN setup for static assets
- [ ] Monitoring and logging configured
- [ ] Backup strategy implemented

---

## 📊 Monitoring & Logging

### Logging Strategy
- **Structured Logging**: JSON format with Pino
- **Log Levels**: error, warn, info, debug
- **Log Aggregation**: Centralized logging system
- **Log Retention**: 30 days for info, 90 days for errors

### Monitoring Metrics
- **Performance**: Response times, throughput
- **Errors**: Error rates, error types
- **Business**: Email sends, contact submissions
- **Infrastructure**: CPU, memory, disk usage

### Health Checks
- **Application Health**: `/health` endpoint
- **Database Health**: Connection status
- **External Services**: Email service status

---

## 🔒 Security

### Security Measures
- **Helmet.js**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: Request throttling
- **Input Validation**: Joi schema validation
- **SQL Injection**: Parameterized queries
- **XSS Protection**: Content Security Policy
- **CSRF Protection**: CSRF tokens

### Data Protection
- **Encryption**: Data encrypted in transit and at rest
- **RLS**: Row Level Security in database
- **Access Control**: Role-based access control
- **Audit Logging**: Security event logging

### Security Best Practices
- Regular dependency updates
- Security headers implementation
- Input sanitization
- Error message sanitization
- Secure session management

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Contribution Process
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- Follow existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation
- Ensure all tests pass

### Issue Reporting
When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses
- React: MIT License
- Express.js: MIT License
- Supabase: Apache 2.0 License
- Bootstrap: MIT License

---

## 📞 Support

### Getting Help
- **Documentation**: Check this README and inline code comments
- **Issues**: Create a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: support@dwansys.com

### Community
- **GitHub**: [@dwansys](https://github.com/dwansys)
- **Twitter**: [@dwansys](https://twitter.com/dwansys)
- **LinkedIn**: [Dwansys](https://linkedin.com/company/dwansys)

### Professional Support
For enterprise support, custom development, or consulting services, please contact us at:
- **Email**: enterprise@dwansys.com
- **Phone**: +1 (555) 123-4567
- **Website**: https://dwansys.com

---

<div align="center">

**Made with ❤️ by the Dwansys Team**

[Website](https://dwansys.com) • [Documentation](https://docs.dwansys.com) • [Support](mailto:support@dwansys.com)

</div>
