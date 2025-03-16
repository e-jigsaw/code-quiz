import { useState, useEffect } from 'react';

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

interface CodeQuizProps {
  bpm: number;
}

export const CodeQuiz = ({ bpm }: CodeQuizProps) => {
  const [currentNote, setCurrentNote] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const getRandomNote = () => {
    const randomIndex = Math.floor(Math.random() * notes.length);
    return notes[randomIndex];
  };

  useEffect(() => {
    let interval: number | undefined;

    if (isPlaying) {
      setCurrentNote(getRandomNote());
      interval = window.setInterval(() => {
        setCurrentNote(getRandomNote());
      }, (60 / bpm) * 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, bpm]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Code Quiz</h1>
        <div className="flex flex-col items-center gap-6">
          <div className="text-9xl font-bold text-blue-600 h-40 flex items-center">
            {currentNote || '-'}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xl">BPM: {bpm}</span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-6 py-2 rounded-lg text-white font-semibold ${
                isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isPlaying ? 'Stop' : 'Start'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};