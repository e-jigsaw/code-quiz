import { useEffect, useState } from 'react';

interface GuitarPracticeProps {
  bpm: number;
}

const NOTES = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

export const GuitarPractice: React.FC<GuitarPracticeProps> = ({ bpm }) => {
  const [currentNote, setCurrentNote] = useState<string>('A');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying || bpm <= 0) return;

    const intervalMs = (60 / bpm) * 1000;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * NOTES.length);
      setCurrentNote(NOTES[randomIndex]);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [bpm, isPlaying]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <div className="text-9xl font-bold mb-8 text-center text-blue-600">
          {currentNote}
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-6 py-2 rounded-lg font-semibold ${
              isPlaying
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isPlaying ? 'Stop' : 'Start'}
          </button>
        </div>
        <div className="mt-4 text-center text-gray-600">
          Current BPM: {bpm}
        </div>
      </div>
    </div>
  );
};