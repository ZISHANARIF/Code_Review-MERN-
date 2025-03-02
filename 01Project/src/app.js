const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// Allow frontend requests
app.use(cors({
    origin: ["http://localhost:5173", "https://code-athnsujdc-zishans-projects-56428ae3.vercel.app"], // Update this if your React frontend runs on a different port
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('running');
});

app.use('/ai', aiRoutes);

module.exports = app;
