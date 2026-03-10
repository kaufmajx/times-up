export function calculateEndTime(startTime, intervals) {
  if (!intervals || intervals.length === 0) {
    return startTime;
  }

  const endDate = new Date(startTime);

  intervals.forEach(({ quantity, unit }) => {
    const qty = Number(quantity) || 0;

    switch (unit) {
      case 'minute':
        endDate.setMinutes(endDate.getMinutes() + qty);
        break;
      case 'hour':
        endDate.setHours(endDate.getHours() + qty);
        break;
      case 'day':
        endDate.setDate(endDate.getDate() + qty);
        break;
      case 'week':
        endDate.setDate(endDate.getDate() + qty * 7);
        break;
      case 'month':
        endDate.setMonth(endDate.getMonth() + qty);
        break;
      case 'year':
        endDate.setFullYear(endDate.getFullYear() + qty);
        break;
      default:
        break;
    }
  });

  return endDate;
}
