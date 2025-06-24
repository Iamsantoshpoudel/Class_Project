// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Simple backend demo with express ');
});

// Sample API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
