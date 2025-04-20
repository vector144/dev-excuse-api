// index.js
import express from 'express';
import cors from 'cors';
import excuses from './excuses.js'; // Importing the excuses array
const app = express();
const PORT = 3000;
app.use(cors()); // Enable CORS for all routes

// Route to get a random excuse 
app.get("/excuse", (req, res) => {
  const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)];
  res.json({ excuse: randomExcuse });
});

// Basic route
app.get("/", (req, res) => {
  res.send(
    "Welcome to Developer Excuse Generator API! Use /excuse to get an excuse."
  );
});

app.listen(PORT, () => {
  // console.log(`Server is running at http://localhost:${PORT}`);
});
