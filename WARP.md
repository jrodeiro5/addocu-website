# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js SaaS starter template with authentication, Stripe payments, and team management. It uses PostgreSQL with Drizzle ORM, shadcn/ui components, and JWT-based authentication stored in cookies.

## Development Commands

### Initial Setup
```bash
# Install dependencies
pnpm install

# Set up environment variables (interactive)
pnpm db:setup

# Run database migrations
pnpm db:migrate

# Seed database with test user (test@test.com / admin123)
pnpm db:seed
```

### Development Workflow
```bash
# Start development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Database Operations
```bash
# Generate new migration files
pnpm db:generate

# Run pending migrations
pnpm db:migrate

# Open Drizzle Studio (database GUI)
pnpm db:studio

# Re-seed database
pnpm db:seed
```

### Stripe Development
```bash
# Listen for webhooks locally (separate terminal)
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Architecture Overview

### Authentication System
- **Session Management**: JWT tokens stored in HTTP-only cookies with automatic refresh
- **Middleware Protection**: Global middleware (`middleware.ts`) protects `/dashboard` routes
- **Role-Based Access**: Users have roles (member/owner) within teams

### Database Schema
The application uses a multi-tenant architecture with these core entities:
- **Users**: Individual user accounts with email/password authentication
- **Teams**: Organizations that users can belong to
- **TeamMembers**: Join table connecting users to teams with roles
- **Invitations**: Email-based team invitations system
- **ActivityLogs**: Audit trail for user actions

### Payment Integration
- **Stripe Integration**: Customer portal, subscriptions, and checkout
- **Webhook Handling**: Processes subscription events at `/api/stripe/webhook`
- **Team Billing**: Each team has associated Stripe customer/subscription IDs

### Application Structure
```
app/
├── (dashboard)/          # Protected dashboard routes
├── (login)/             # Authentication pages  
├── layout.tsx           # Root layout with SWR configuration
└── globals.css          # Global styles with Tailwind

lib/
├── auth/               # Session management and JWT utilities
├── db/                 # Database schema, queries, and migrations
└── payments/           # Stripe integration and payment actions

components/ui/          # shadcn/ui components
middleware.ts           # Route protection and session refresh
```

### Key Configuration Files
- **`drizzle.config.ts`**: Database connection and migration settings
- **`next.config.ts`**: Next.js configuration with experimental features (PPR, clientSegmentCache)
- **`middleware.ts`**: Authentication middleware with automatic session refresh
- **`.env`**: Required environment variables (see `.env.example`)

## Environment Variables

Required environment variables (create with `pnpm db:setup`):
- `POSTGRES_URL`: PostgreSQL connection string
- `STRIPE_SECRET_KEY`: Stripe secret key for payments
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook endpoint secret
- `BASE_URL`: Application base URL (http://localhost:3000 for dev)
- `AUTH_SECRET`: Secret for JWT signing (generate with `openssl rand -base64 32`)

## Development Notes

### Database Workflow
1. Modify schema in `lib/db/schema.ts`
2. Generate migration: `pnpm db:generate`
3. Apply migration: `pnpm db:migrate`
4. Use Drizzle Studio for visual database management: `pnpm db:studio`

### Authentication Flow
- Login/signup creates JWT stored in HTTP-only cookie
- Middleware automatically refreshes sessions on GET requests
- Protected routes redirect to `/sign-in` if unauthenticated
- Session data is available via SWR at `/api/user` and `/api/team`

### Stripe Testing
- Use test card: `4242 4242 4242 4242`
- Run webhook listener during development for subscription events
- Access Customer Portal through dashboard for subscription management

### Code Patterns
- Server Actions for form handling and data mutations
- SWR for client-side data fetching with SSR fallbacks
- Zod for schema validation
- Activity logging for audit trails using `ActivityType` enum