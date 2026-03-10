import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.post('/api/calculate', (req, res) => {
  const { startTime, intervals } = req.body;

  if (!startTime || !intervals) {
    return res.status(400).json({ error: 'Missing startTime or intervals' });
  }

  try {
    const start = new Date(startTime);
    let end = new Date(start);

    intervals.forEach(({ quantity, unit }) => {
      const qty = Number(quantity) || 0;

      switch (unit) {
        case 'minute':
          end.setMinutes(end.getMinutes() + qty);
          break;
        case 'hour':
          end.setHours(end.getHours() + qty);
          break;
        case 'day':
          end.setDate(end.getDate() + qty);
          break;
        case 'week':
          end.setDate(end.getDate() + qty * 7);
          break;
        case 'month':
          end.setMonth(end.getMonth() + qty);
          break;
        case 'year':
          end.setFullYear(end.getFullYear() + qty);
          break;
        default:
          break;
      }
    });

    res.json({
      startTime: start.toISOString(),
      endTime: end.toISOString(),
      durationMinutes: Math.floor((end - start) / 60000),
    });
  } catch (error) {
    res.status(500).json({ error: 'Calculation error', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
