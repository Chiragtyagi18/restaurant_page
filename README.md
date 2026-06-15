<div align="center">

# 🔥 Flavors & Fire

### Premium Fine Dining Restaurant Website

A full-stack restaurant website built with **Next.js 16**, featuring a modern UI, admin dashboard, reservation system, and order management.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.x-47A248?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](#)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Pages & Routes](#-pages--routes)
- [API Routes](#-api-routes)
- [Database Models](#-database-models)
- [Authentication](#-authentication)
- [Theming](#-theming)

---

## ✨ Features

### Customer-Facing
- 🏠 **Home Page** — Hero section, featured dishes with modal details, stats counter, and guest reviews
- 📋 **Interactive Menu** — Browse dishes with search, category filters, vegetarian toggle, and a floating cart bar
- 🛒 **Order Tracking** — View current orders and order history with status badges
- 📅 **Reservation System** — Book tables with form validation (date, time, guests, special requests)
- 🖼️ **Photo Gallery** — Hover-to-reveal image gallery with captions
- 📖 **About Page** — Restaurant story, philosophy, awards, and team section
- 📞 **Contact Page** — Contact form with business info and hours of operation
- 🌙 **Dark/Light Theme** — Toggle between light, dark, and system themes
- 🎨 **Smooth Animations** — Scroll-triggered animations powered by Framer Motion

### Admin Dashboard (Protected)
- 📊 **Analytics Dashboard** — KPI cards, monthly revenue line chart, menu distribution pie chart
- 🍽️ **Menu Management** — Add, view, and delete menu items with form validation
- 📆 **Reservation Management** — Filter, confirm, cancel, and delete reservations
- ⭐ **Testimonial Management** — Publish/unpublish and delete customer reviews

### Technical
- 🔐 **Authentication** — Clerk-based auth with protected admin routes via middleware
- 🗄️ **MongoDB Integration** — Mongoose models with connection caching
- ✅ **Form Validation** — Zod schemas + React Hook Form for type-safe validation
- 📱 **Fully Responsive** — Mobile-first design across all pages
- 📈 **Vercel Analytics** — Production analytics integration

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS 4.2 |
| **Component Library** | shadcn/ui (base-nova style) |
| **Authentication** | Clerk (@clerk/nextjs 7.5) |
| **Database** | MongoDB (Mongoose 9.7) |
| **Form Handling** | React Hook Form 7 + @hookform/resolvers |
| **Schema Validation** | Zod 4 |
| **Animations** | Framer Motion 12 |
| **Icons** | Lucide React |
| **Charts** | Recharts 3 |
| **Notifications** | Sonner (toast) |
| **CSS Utilities** | class-variance-authority, clsx, tailwind-merge |

---

## 📁 Project Structure

```
Restaurant/
├── app/                          # Next.js App Router pages
│   ├── (auth)/                   # Authentication route group
│   │   ├── sign-in/[[...sign-in]]/page.tsx
│   │   └── sign-up/[[...sign-up]]/page.tsx
│   ├── (public)/page.tsx         # Public home page
│   ├── about/page.tsx            # About page
│   ├── admin/                    # Admin dashboard (protected)
│   │   ├── layout.tsx            # Admin sidebar layout
│   │   ├── page.tsx              # Dashboard with charts & KPIs
│   │   ├── menu/page.tsx         # Menu item management
│   │   ├── reservations/page.tsx # Reservation management
│   │   └── testimonials/page.tsx # Testimonial management
│   ├── api/                      # API routes
│   │   ├── contact/route.ts      # POST: Submit contact message
│   │   └── reservations/route.ts # POST: Create reservation
│   ├── contact/page.tsx          # Contact form page
│   ├── gallery/page.tsx          # Photo gallery page
│   ├── menu/page.tsx             # Menu with search, filters & cart
│   ├── orders/page.tsx           # Order tracking page
│   ├── reservations/page.tsx     # Reservation booking form
│   ├── globals.css               # Global styles & theme variables
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── animations/index.tsx      # Reusable animation wrappers
│   ├── home/
│   │   ├── featured-dishes.tsx   # Featured dishes with modal
│   │   ├── hero.tsx              # Hero section
│   │   ├── reviews.tsx           # Guest reviews
│   │   └── stats.tsx             # Statistics counter
│   ├── shared/
│   │   ├── footer.tsx            # Site-wide footer
│   │   ├── navbar.tsx            # Navigation bar
│   │   └── theme-toggle.tsx      # Theme toggle button
│   └── ui/button.tsx             # shadcn/ui Button
├── lib/
│   ├── models.ts                 # Mongoose models
│   ├── mongodb.ts                # MongoDB connection
│   ├── theme-provider.tsx        # Theme context provider
│   ├── utils.ts                  # cn() utility
│   └── validations.ts            # Zod validation schemas
├── public/
│   ├── gallery/                  # Gallery images (img1-9.jpeg)
│   └── apple-icon.png            # Favicon
├── proxy.ts                      # Clerk middleware
├── .env                          # Environment variables
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies & scripts
└── tsconfig.json                 # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** or **pnpm** package manager
- **MongoDB** instance (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- **Clerk** account for authentication ([clerk.com](https://clerk.com))

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Chiragtyagi18/restaurant_page.git
   cd Restaurant
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables** (see [Environment Variables](#-environment-variables)).

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser** at [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

Create a `.env` file in the project root:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/
```

| Variable | How to Obtain |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | [Clerk Dashboard](https://dashboard.clerk.com) → API Keys |
| `CLERK_SECRET_KEY` | [Clerk Dashboard](https://dashboard.clerk.com) → API Keys |
| `MONGODB_URI` | [MongoDB Atlas](https://cloud.mongodb.com) → Cluster → Connect |

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## 📄 Pages & Routes

| Route | Description | Auth |
|---|---|---|
| `/` | Home page with hero, featured dishes, stats, reviews | No |
| `/menu` | Full menu with search, filters, and cart | No |
| `/orders` | Order tracking and history | No |
| `/reservations` | Table reservation form | No |
| `/gallery` | Photo gallery with hover effects | No |
| `/about` | Restaurant story, philosophy, awards, team | No |
| `/contact` | Contact form and business information | No |
| `/sign-in` | Clerk sign-in page | No |
| `/sign-up` | Clerk sign-up page | No |
| `/admin` | Admin dashboard with analytics | ✅ Yes |
| `/admin/menu` | Menu item CRUD management | ✅ Yes |
| `/admin/reservations` | Reservation management | ✅ Yes |
| `/admin/testimonials` | Testimonial management | ✅ Yes |

---

## 🔌 API Routes

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/contact` | Submit a contact message |
| `POST` | `/api/reservations` | Create a new reservation |

Both endpoints validate request bodies using **Zod** schemas before persisting to MongoDB.

---

## 🗄️ Database Models

| Model | Key Fields | Description |
|---|---|---|
| **MenuItem** | name, description, price, category, image, spicy, vegetarian | Restaurant menu items (appetizer, main, dessert, beverage) |
| **Reservation** | name, email, phone, date, time, guests, specialRequests, status | Table reservations (pending/confirmed/cancelled) |
| **Contact** | name, email, subject, message, read | Contact form submissions |
| **Testimonial** | name, role, message, rating, image, published | Customer reviews and ratings |

All models use Mongoose with `timestamps: true` for automatic `createdAt`/`updatedAt`.

---

## 🔐 Authentication

- **Provider**: [Clerk](https://clerk.com) (`@clerk/nextjs` 7.5)
- **Middleware**: `proxy.ts` — protects `/admin(.*)` routes
- **Public Routes**: `/sign-in`, `/sign-up`, `/api/*`
- **UserButton**: Displayed in the navbar for signed-in users
- **Admin Access**: Admin link appears only for authenticated users

---

## 🌗 Theming

Three theme modes: **Light**, **Dark**, and **System** (follows OS preference).

| Token | Light | Dark |
|---|---|---|
| Primary | `#C0392B` | `#E74C3C` |
| Accent | `#D4AF37` | `#D4AF37` |
| Background | `#FFFFFF` | `#0F0F0F` |
| Foreground | `#1A1A1A` | `#F5F5F5` |

Theme is persisted in `localStorage` and toggled via the navbar button.

---

## 📧 Contact

**Chirag Tyagi** — tyagichirag009@gmail.com

Project: [https://github.com/Chiragtyagi18/restaurant_page](https://github.com/Chiragtyagi18/restaurant_page)

---

<div align="center">

Made with ❤️ and 🔥

</div>