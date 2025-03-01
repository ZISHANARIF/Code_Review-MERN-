const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

// Allow frontend requests
app.use(cors({
    origin: "http://localhost:5173", // Update this if your React frontend runs on a different port
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;
