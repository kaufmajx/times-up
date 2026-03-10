import React from 'react';

const UNITS = ['minute', 'hour', 'day', 'week', 'month', 'year'];

function IntervalItem({ interval, onUpdate, onRemove }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 50px',
        gap: '8px',
        marginBottom: '12px',
        padding: '12px',
        background: '#f9f9f9',
        borderRadius: '8px',
        alignItems: 'center',
      }}
    >
      <div className="form-group" style={{ marginBottom: 0 }}>
        <input
          type="number"
          min="1"
          value={interval.quantity}
          onChange={(e) => onUpdate(interval.id, e.target.value, interval.unit)}
          placeholder="Qty"
          style={{ width: '100%' }}
        />
      </div>
      <div className="form-group" style={{ marginBottom: 0 }}>
        <select
          value={interval.unit}
          onChange={(e) => onUpdate(interval.id, interval.quantity, e.target.value)}
          style={{ width: '100%' }}
        >
          {UNITS.map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={() => onRemove(interval.id)}
        className="secondary"
        style={{ padding: '8px 12px', width: '100%', margin: 0 }}
      >
        ✕
      </button>
    </div>
  );
}

export default IntervalItem;
