# Overview

This is a birthday game application built with React and TypeScript, featuring an interactive heart-catching game that unlocks special content. The application is a romantic birthday surprise where users collect floating hearts to reveal a personal message and voice player. It uses a modern full-stack architecture with React frontend, Express backend, and PostgreSQL database with Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **Styling**: Tailwind CSS with shadcn/ui component library for modern, accessible UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management and React hooks for local state
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives for accessibility

## Backend Architecture
- **Framework**: Express.js with TypeScript for REST API
- **Development**: TSX for TypeScript execution and hot reloading
- **Build Process**: ESBuild for production bundling with external packages support
- **Error Handling**: Centralized error middleware with proper HTTP status codes

## Data Storage
- **Database**: PostgreSQL with Neon serverless database provider
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: User management with username/password authentication
- **Migrations**: Drizzle Kit for database schema management
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple

## Development & Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Strict type checking across frontend, backend, and shared modules
- **Module System**: ESM modules throughout the stack
- **Path Mapping**: Absolute imports with @ aliases for clean import statements

## Game Architecture
- **Interactive Elements**: Heart generation system with random positioning and animations
- **Progress Tracking**: Game state management for heart collection progress
- **Content Unlocking**: Progressive revelation of birthday message and voice player
- **Responsive Design**: Mobile-first approach with touch-friendly interactions

## Authentication & Security
- **User Model**: Basic username/password authentication setup
- **Session Management**: Express session handling with PostgreSQL storage
- **Type Safety**: Zod schemas for runtime validation and type inference

# External Dependencies

## Database
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Modern TypeScript ORM for database operations

## UI & Styling
- **shadcn/ui**: Complete component library built on Radix UI primitives
- **Radix UI**: Headless, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Vite**: Frontend build tool and development server
- **TSX**: TypeScript execution for Node.js development
- **ESBuild**: Fast JavaScript bundler for production builds

## Frontend Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Wouter**: Lightweight routing for React
- **date-fns**: Date manipulation utilities

## Animation & Interaction
- **Class Variance Authority**: Utility for managing component variants
- **Embla Carousel**: Touch-friendly carousel component
- **CSS Animations**: Custom keyframe animations for floating hearts

## Fonts & Assets
- **Google Fonts**: Inter, Playfair Display, and JetBrains Mono typography
- **Custom CSS Variables**: Consistent theming system with CSS custom properties