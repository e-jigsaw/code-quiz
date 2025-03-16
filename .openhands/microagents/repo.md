---
name: repo
type: repo
agent: CodeActAgent
---

Repository: e-jigsaw/code-quiz

Description: A web application that displays random notes (A-G) at a specified BPM to help with code memorization and practice.

Directory Structure:

- src/: Main application source code
  - components/: React components
    - CodeQuiz.tsx: Main component with note generation logic
  - App.tsx: Root component with BPM control
  - main.tsx: Application entry point
  - vite-env.d.ts: Vite type declarations

Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/e-jigsaw/code-quiz.git
   cd code-quiz
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start development server:
   ```bash
   pnpm dev
   ```

Commands:

- `pnpm install`: Installs project dependencies
- `pnpm dev`: Starts the development server (uses port from runtime info)
- `pnpm build`: Creates optimized production build
- `pnpm preview`: Serves the production build locally
- `pnpm lint`: Runs ESLint to check code quality
- `pnpm format`: Formats code using Prettier

Technologies:

- React 18: Modern UI library for building interactive interfaces
- TypeScript: Adds static typing to JavaScript for better development experience
- Vite: Fast and modern build tool and development server
- TailwindCSS: Utility-first CSS framework for rapid UI development
- ESLint: Code linting for maintaining code quality
- Prettier: Code formatting tool

Features:

- Random note generation (A through G)
- Adjustable BPM (Beats Per Minute)
- Visual metronome with note display
- Start/Stop control
- Responsive design

Development Guidelines:

1. Code Quality:
   - Use TypeScript for all new code
   - Follow ESLint rules for consistent code style
   - Format code using Prettier before committing

2. UI Development:
   - Use TailwindCSS utility classes for styling
   - Ensure responsive design works on all screen sizes
   - Follow accessibility best practices

3. Git Workflow:
   - Create feature branches for new work
   - Write clear commit messages
   - Document changes in `docs/sessions/` before creating PRs
   - Follow PR template guidelines

4. Server Configuration:
   - When running `pnpm dev`, use the port from runtime information
   - Enable CORS and iframe access when needed
   - Allow connections from any host (0.0.0.0)
