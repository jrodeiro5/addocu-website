# Addocu Website

This is the official website for Addocu, a free and open-source Google Sheets Add-on for digital marketers. Built with Next.js and deployed on Vercel.

**Live Site: [addocu.com](https://addocu.com)**

## About Addocu

Addocu automates the painful process of documenting and auditing your entire Google marketing ecosystem, pulling detailed metadata from Google Analytics 4, Google Tag Manager, and Looker Studio directly into your spreadsheet.

### Key Features

- **Google Analytics 4 Complete Audit**: Properties, data streams, custom dimensions, conversion events, and more
- **Google Tag Manager Deep Dive**: Container inventory, tags, triggers, variables with firing status
- **Looker Studio Census**: Report inventory with owners, sharing settings, and usage statistics
- **Interactive Dashboard**: Visual summary and health checks
- **100% Free & Open Source**: Available on Google Workspace Marketplace

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: JWT with secure session management
- **Payments**: [Stripe](https://stripe.com/) integration
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jrodeiro5/addocu-website
   cd addocu-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your database URL, Stripe keys, and other configuration.

4. **Set up the database**
   ```bash
   pnpm db:migrate
   pnpm db:seed
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Database Setup

The project uses PostgreSQL with Drizzle ORM. You can use:
- Local PostgreSQL with Docker
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Supabase](https://supabase.com/)
- [Neon](https://neon.tech/)

### Stripe Setup

For payment processing:
1. Create a [Stripe account](https://stripe.com/)
2. Get your API keys from the Stripe Dashboard
3. Set up webhook endpoints for subscription management

## Deployment

### Deploy to Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   vercel
   ```

2. **Set environment variables** in Vercel Dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Environment Variables

Make sure to set these in your Vercel project settings:

- `POSTGRES_URL`: Your database connection string
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret
- `BASE_URL`: Your production URL
- `AUTH_SECRET`: Random string for JWT signing

## Project Structure

```
addocu-website/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # Public pages (landing, pricing)
│   ├── (login)/          # Authentication pages
│   └── api/              # API routes
├── components/           # Reusable UI components
├── lib/                 # Utilities and configurations
│   ├── auth/           # Authentication logic
│   ├── db/             # Database schema and queries
│   └── payments/       # Stripe integration
└── public/             # Static assets
```

## Related Projects

- **[Addocu Add-on](https://github.com/jrodeiro5/addocu)**: The main Google Sheets Add-on
- **[Google Workspace Marketplace](https://workspace.google.com/marketplace)**: Install the Add-on

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Write meaningful commit messages
- Test your changes thoroughly

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Documentation**: [Addocu Docs](https://addocu.com/docs)
- **Issues**: [GitHub Issues](https://github.com/jrodeiro5/addocu-website/issues)
- **Email**: [hola@addocu.com](mailto:hola@addocu.com)

---

**Made with ❤️ for the digital marketing community**

*Addocu is not affiliated with Google LLC. Google Analytics, Google Tag Manager, Looker Studio, and Google Workspace are trademarks of Google LLC.*
