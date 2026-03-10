import React from 'react';
import { formatDateTime } from '../utils/timeFormatter';

function ResultDisplay({ startTime, endTime }) {
  return (
    <div>
      <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#333' }}>
        Result
      </h2>

      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '16px',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <p style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px' }}>
            Starting Time
          </p>
          <p style={{ fontSize: '18px', fontWeight: '600' }}>
            {formatDateTime(startTime)}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '16px' }}>
          <p style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px' }}>
            Ending Time
          </p>
          <p style={{ fontSize: '20px', fontWeight: '700' }}>
            {endTime ? formatDateTime(endTime) : 'No intervals added'}
          </p>
        </div>
      </div>

      {endTime && (
        <div style={{ fontSize: '13px', color: '#666', textAlign: 'center' }}>
          <p>
            Total duration:{' '}
            <strong>
              {Math.floor((endTime - startTime) / 60000)} minutes
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultDisplay;
