# Session 001: Guitar Practice App

This session implements a guitar practice app that displays random notes (A-G) at a specified BPM.

## Features

- Random note generation from A to G
- Adjustable BPM (30-240)
- Visual display of notes
- React + TypeScript implementation
- TailwindCSS styling

## Implementation Details

The app consists of two main components:

1. `App.tsx`: Main component that handles BPM state and provides a slider for BPM control
2. `CodeQuiz.tsx`: Component that displays random notes at the specified BPM

The app uses React's `useState` and `useEffect` hooks to manage state and side effects.

## Future Improvements

- Add support for sharps and flats
- Add different practice modes (scales, chords, etc.)
- Add visual metronome
- Add sound feedback
- Add practice statistics