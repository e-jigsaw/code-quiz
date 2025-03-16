import { useState } from 'react';
import { GuitarPractice } from './components/GuitarPractice';
import { BPMControl } from './components/BPMControl';

function App() {
  const [bpm, setBpm] = useState(60);

  return (
    <div className="relative">
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10">
        <BPMControl bpm={bpm} onChange={setBpm} />
      </div>
      <GuitarPractice bpm={bpm} />
    </div>
  );
}

export default App;