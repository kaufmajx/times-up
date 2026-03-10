import React, { useState, useEffect } from 'react';
import './App.css';
import TimePicker from './components/TimePicker';
import IntervalList from './components/IntervalList';
import ResultDisplay from './components/ResultDisplay';
import { calculateEndTime } from './utils/timeCalculator';
import { formatDateTime } from './utils/timeFormatter';

function App() {
  const [startTime, setStartTime] = useState(() => new Date());
  const [intervals, setIntervals] = useState([]);
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    const calculated = calculateEndTime(startTime, intervals);
    setEndTime(calculated);
  }, [startTime, intervals]);

  const addInterval = () => {
    setIntervals([
      ...intervals,
      { id: Date.now(), quantity: 1, unit: 'minute' }
    ]);
  };

  const removeInterval = (id) => {
    setIntervals(intervals.filter(i => i.id !== id));
  };

  const updateInterval = (id, quantity, unit) => {
    setIntervals(
      intervals.map(i => 
        i.id === id ? { ...i, quantity: Number(quantity), unit } : i
      )
    );
  };

  return (
    <div className="app-container">
      <div className="app-card">
        <h1>⏱️ Times Up</h1>
        <p className="subtitle">Calculate future times with ease</p>

        <TimePicker startTime={startTime} setStartTime={setStartTime} />

        <div className="divider"></div>

        <IntervalList 
          intervals={intervals} 
          onAddInterval={addInterval}
          onRemoveInterval={removeInterval}
          onUpdateInterval={updateInterval}
        />

        <div className="divider"></div>

        <ResultDisplay startTime={startTime} endTime={endTime} />
      </div>
    </div>
  );
}

export default App;
