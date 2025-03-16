import { ChangeEvent } from 'react';

interface BPMControlProps {
  bpm: number;
  onChange: (bpm: number) => void;
}

export const BPMControl: React.FC<BPMControlProps> = ({ bpm, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    onChange(value);
  };

  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm">
      <label htmlFor="bpm-slider" className="text-lg font-semibold text-gray-700">
        Tempo (BPM)
      </label>
      <input
        id="bpm-slider"
        type="range"
        min="30"
        max="240"
        value={bpm}
        onChange={handleChange}
        className="w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-2xl font-bold text-blue-600">{bpm}</div>
    </div>
  );
};