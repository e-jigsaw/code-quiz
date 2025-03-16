---
name: repo
type: repo
agent: CodeActAgent
---

Repository: e-jigsaw/code-quiz

Description: A web application that displays random notes (A-G) at a specified BPM to help with code memorization and practice.

Directory Structure:

- src/: Main application source code
- docs/: Session summaries stored

Setup:
- To set up the project, run pnpm install to install the dependencies.
- `pnpm dev` for development.

Commands:

- `pnpm install`: Installs project dependencies
- `pnpm dev`: Starts the development server (uses port from runtime info)
- `pnpm build`: Creates optimized production build
- `pnpm preview`: Serves the production build locally
- `pnpm lint`: Runs ESLint to check code quality
- `pnpm format`: Formats code using Prettier

Technologies:

- React 18
- TypeScript
- Vite
- TailwindCSS
- ESLint
- Prettier

Features:

- Random note generation (A through G)
- Adjustable BPM (Beats Per Minute)
- Visual metronome with note display
- Start/Stop control
- Responsive design

Guidelines:
- The project uses TypeScript for type safety.
- TailwindCSS is used for styling.
- ESLint is configured for code quality.
- When running `pnpm dev`, use the specified port from the runtime information.
- Before creating a pull request, document session changes in `docs/sessions/` following the format in `docs/instruction.md`.
