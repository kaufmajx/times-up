# Times Up - MERN Stack App

A modern time picker and interval calculator app built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- 🕐 **Time Picker**: Select a starting time with default to current date and time
- ⏱️ **Interval Calculator**: Add multiple time intervals (minutes, hours, days, weeks, months, years)
- 📊 **Real-time Calculation**: Instantly see the calculated end time as you adjust intervals
- ⚡ **Quick Presets**: Common intervals like "15 min", "30 min", "1 hour", "1 day", "1 week"
- 🎨 **Responsive Design**: Beautiful UI that works on desktop and mobile
- 📱 **Smooth UX**: Intuitive controls for managing intervals

## Tech Stack

**Frontend:**
- React 18+ with Hooks
- Vite (fast build tool)
- CSS3 for responsive styling

**Backend:**
- Node.js
- Express.js
- MongoDB (optional, for future sessions/persistence)
- CORS enabled for frontend communication

## Project Structure

```
copilot-project/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # React components (TimePicker, IntervalList, ResultDisplay)
│   │   ├── utils/          # Utility functions (time calculation, formatting)
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # React entry point
│   │   └── App.css         # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                 # Express backend
│   ├── server.js           # Main server (API endpoints)
│   ├── .env                # Environment variables
│   └── package.json
│
├── package.json            # Root monorepo config
└── README.md               # This file
```

## Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### 1. Install Dependencies

```bash
# From project root
npm install-all
```

This installs dependencies for root, client, and server.

### 2. Run Development Servers

```bash
npm run dev
```

This starts:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### 3. Open in Browser

Go to http://localhost:3000 and start using the app!

## Available Scripts

### From Root Directory

```bash
npm run dev          # Start both frontend and backend
npm run client       # Start React dev server only (port 3000)
npm run server       # Start Express server only (port 5000)
npm run build        # Build React app for production
npm install-all      # Install all dependencies
```

### From client/ Directory

```bash
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### From server/ Directory

```bash
npm run start        # Start server
npm run dev          # Start with auto-reload (--watch)
```

## API Endpoints

### Health Check
```http
GET /api/health
```

Returns: `{ status: "Server is running" }`

### Calculate End Time
```http
POST /api/calculate
Content-Type: application/json

{
  "startTime": "2026-03-10T18:40:21Z",
  "intervals": [
    { "quantity": 30, "unit": "minute" },
    { "quantity": 2, "unit": "hour" }
  ]
}
```

Returns:
```json
{
  "startTime": "2026-03-10T18:40:21Z",
  "endTime": "2026-03-10T21:10:21Z",
  "durationMinutes": 150
}
```

## Features Explained

### Time Picker
- Set starting date and time
- Defaults to current date/time (mm-dd-yyyy hh-mm-ss)
- Format: MM-DD-YYYY HH:MM:SS

### Interval Management
- Add multiple intervals (no limit)
- Supported units: minute, hour, day, week, month, year
- Quick presets: 15min, 30min, 1hr, 2hrs, 1 day, 1 week
- Easily remove intervals with ✕ button
- Real-time calculation updates

### Results Display
- Shows starting and ending times
- Displays total duration in minutes
- Clean, easy-to-read format

## Supported Units

| Unit  | Example       |
|-------|---------------|
| Minute| 15 minutes    |
| Hour  | 2 hours       |
| Day   | 3 days        |
| Week  | 1 week        |
| Month | 2 months      |
| Year  | 1 year        |

## Time Format

The app uses the format: **MM-DD-YYYY HH:MM:SS**

Example: `03-10-2026 18:40:21`

## Future Enhancements

- [ ] User authentication
- [ ] Save calculation history to MongoDB
- [ ] Dark mode support
- [ ] Timezone support
- [ ] Export to PDF/CSV
- [ ] Mobile app version
- [ ] Calendar view

## Troubleshooting

### Port Already in Use

If you get "Address already in use" error:

```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Kill process on port 5000
lsof -i :5000 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### Clear Dependencies and Reinstall

```bash
rm -rf node_modules client/node_modules server/node_modules
npm install-all
```

### CORS Issues

Make sure backend server is running on port 5000 and frontend proxy is configured in `client/vite.config.js`

## Development Notes

- Frontend: React with Vite (fast HMR)
- Backend: Express with ES6 modules
- Calculations done on both client (instant) and server (API for future persistence)
- No database required for MVP (all data is client-side state)

## License

MIT

## Author

Built as a CS480 course project at James Madison University.
