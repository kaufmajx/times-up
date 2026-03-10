import React from 'react';
import IntervalItem from './IntervalItem';

const COMMON_INTERVALS = [
  { label: '15 min', quantity: 15, unit: 'minute' },
  { label: '30 min', quantity: 30, unit: 'minute' },
  { label: '1 hour', quantity: 1, unit: 'hour' },
  { label: '2 hours', quantity: 2, unit: 'hour' },
  { label: '1 day', quantity: 1, unit: 'day' },
  { label: '1 week', quantity: 1, unit: 'week' },
];

function IntervalList({
  intervals,
  onAddInterval,
  onRemoveInterval,
  onUpdateInterval,
}) {
  return (
    <div>
      <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#333' }}>
        Add Intervals
      </h2>

      {intervals.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          {intervals.map((interval) => (
            <IntervalItem
              key={interval.id}
              interval={interval}
              onUpdate={onUpdateInterval}
              onRemove={onRemoveInterval}
            />
          ))}
        </div>
      )}

      {intervals.length === 0 && (
        <p style={{ color: '#999', fontSize: '14px', marginBottom: '16px' }}>
          No intervals added yet. Use the buttons below to add one.
        </p>
      )}

      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontSize: '12px', fontWeight: '600', color: '#666', marginBottom: '8px' }}>
          Quick Add:
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
          gap: '8px',
        }}>
          {COMMON_INTERVALS.map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                const newInterval = {
                  id: Date.now(),
                  quantity: preset.quantity,
                  unit: preset.unit,
                };
                onAddInterval();
                setTimeout(() => {
                  const lastId = Date.now();
                  onUpdateInterval(lastId, preset.quantity, preset.unit);
                }, 0);
              }}
              style={{
                background: '#f0f0f0',
                color: '#333',
                fontSize: '12px',
                padding: '8px 12px',
              }}
            >
              +{preset.label}
            </button>
          ))}
        </div>
      </div>

      <button onClick={onAddInterval} style={{ width: '100%' }}>
        + Add Custom Interval
      </button>
    </div>
  );
}

export default IntervalList;
