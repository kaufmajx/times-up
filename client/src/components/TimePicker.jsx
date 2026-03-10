import React from 'react';
import { formatDateTime } from '../utils/timeFormatter';

function TimePicker({ startTime, setStartTime }) {
  const handleDateChange = (e) => {
    const [year, month, day] = e.target.value.split('-');
    const newDate = new Date(startTime);
    newDate.setFullYear(parseInt(year), parseInt(month) - 1, parseInt(day));
    setStartTime(newDate);
  };

  const handleTimeChange = (e) => {
    const [hours, minutes] = e.target.value.split(':');
    const newDate = new Date(startTime);
    newDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);
    setStartTime(newDate);
  };

  const formatDateForInput = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatTimeForInput = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <h2 style={{ fontSize: '18px', marginBottom: '16px', color: '#333' }}>
        Starting Time
      </h2>
      <div className="input-group">
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={formatDateForInput(startTime)}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            value={formatTimeForInput(startTime)}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <p style={{ fontSize: '12px', color: '#999', marginTop: '8px' }}>
        Current: {formatDateTime(startTime)}
      </p>
    </div>
  );
}

export default TimePicker;
