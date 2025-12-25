# Activity News App

A modern, responsive News Application built with React, TypeScript, and Redux Toolkit. This application demonstrates a "Premium" UI with advanced state management and internationalization.

## Features

- **News Feed**: Fetches posts and authors from JSONPlaceholder using RTK Query.
- **Dynamic Theming**: Light and Dark mode support with persistent preferences.
- **Localization**: Full English (LTR) and Arabic (RTL) language support.
- **Optimized UI**: 
  - Skeleton loading states.
  - Glassmorphism design elements.
  - Smooth animations for theme/language switching.
  - Fallback handling for images.
- **Routing**: Seamless navigation between the news feed and post details.

## Tech Stack

- **Framework**: React 18+ (Vite)
- **Language**: TypeScript
- **State Management**: Redux Toolkit & RTK Query
- **Styling**: CSS Modules & CSS Variables
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd news
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## Project Structure

```
src/
├── app/            # Redux store and hooks
├── components/     # Reusable UI components (Navbar, NewsCard, Skeleton)
├── features/       # Redux slices (newsApi, theme, language)
├── layouts/        # Layout wrappers
├── pages/          # Page components (HomePage, PostPage)
└── index.css       # Global styles and theme variables
```

## License

MIT
