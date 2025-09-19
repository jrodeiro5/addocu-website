# Addocu Website

This is the official website for **Addocu** - a free and open-source Google Sheets™ Add-on designed for digital marketers, analysts, and agencies.

**Live Site: [https://addocu.com](https://addocu.com)**

## About Addocu

Addocu automates the painful process of documenting and auditing your entire Google ecosystem, pulling detailed metadata from Google Analytics 4, Google Tag Manager, and Looker Studio directly into your spreadsheet.

### Key Features

- **Google Analytics 4 Complete Audit**: Properties, data streams, custom dimensions, conversion events, and audiences
- **Google Tag Manager Deep Dive**: Complete mapping of containers, tags, triggers, and variables
- **Looker Studio Census**: Report inventory with owners, sharing settings, and data sources
- **Interactive Dashboard**: Visual summary and health checks
- **Advanced Features**: Detailed logging, connectivity diagnostics, and multi-account support

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

```bash
git clone https://github.com/jrodeiro5/addocu-website
cd addocu-website
pnpm install
```

## Running Locally

Set up your environment variables:

```bash
cp .env.example .env
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

This website is built on the [Next.js SaaS Starter](https://github.com/nextjs/saas-starter) template and adapted for Addocu's specific needs.

## Contributing

We welcome contributions! Please see our [main repository](https://github.com/jrodeiro5/addocu) for the Google Sheets Add-on and contribution guidelines.

## License

This website is based on the MIT-licensed Next.js SaaS Starter template. The Addocu project itself is distributed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License**.

---

**Made with ❤️ for the digital marketing community**

*Addocu is not affiliated with Google LLC. Google Analytics, Google Tag Manager, Looker Studio, and Google Workspace are trademarks of Google LLC.*
