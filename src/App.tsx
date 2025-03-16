import { useState } from 'react';
import { CodeQuiz } from './components/CodeQuiz';

function App() {
  const [bpm, setBpm] = useState(60);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-4 left-4 z-10">
        <input
          type="range"
          min="30"
          max="240"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className="w-48"
        />
      </div>
      <CodeQuiz bpm={bpm} />
    </div>
  );
}

export default App;