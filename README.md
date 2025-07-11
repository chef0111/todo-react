# KampfPortal - React Todo Application

A modern, responsive Todo application built with React, TypeScript, and Tailwind CSS. This application provides a clean and intuitive interface for managing your daily tasks.

## Features

- ✅ Add, edit, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Clean, modern UI with Tailwind CSS
- ✅ Responsive design for all devices
- ✅ Local storage persistence
- ✅ TypeScript for type safety
- ✅ Component-based architecture

## Tech Stack

- **Framework**: React 19.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.0.0
- **UI Components**: Shadcn UI
- **Icons**: Lucide React & React Icons

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)

### Check Your Node.js Version

```bash
node --version
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/chef0111/todo-react.git
cd todo-react
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

## Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

### Production Build

To build the application for production:

```bash
npm run build
```

This will:
- Compile TypeScript
- Bundle and optimize your code
- Create a `dist` folder with production-ready files

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
todo-react/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── TodoApp.tsx    # Main todo application
│   │   └── TodoItem.tsx   # Individual todo item
│   ├── hooks/             # Custom React hooks
│   │   └── useLocalStorage.ts
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   ├── assets/            # Images and icons
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
```

Enjoy building with KampfPortal! 🚀