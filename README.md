# Guitar Practice App

A simple web application to help guitarists practice note recognition by displaying random notes (A through G) at a specified tempo.

## Features

- Random note generation (A through G)
- Adjustable BPM (30-240)
- Start/Stop control
- Clean, modern UI with Tailwind CSS

## Technologies

- React 18
- TypeScript
- Vite
- TailwindCSS
- ESLint

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start development server:
```bash
pnpm dev
```

3. Build for production:
```bash
pnpm build
```

4. Preview production build:
```bash
pnpm preview
```

## Usage

1. Adjust the BPM using the slider (30-240 BPM)
2. Click "Start" to begin displaying random notes
3. Notes will change at the specified tempo
4. Click "Stop" to pause the note display

## Development

- `src/components/GuitarPractice.tsx`: Main component with note generation logic
- `src/App.tsx`: Root component
- `src/main.tsx`: Entry point
- TailwindCSS is used for styling
- ESLint is configured for code quality

## License

MIT