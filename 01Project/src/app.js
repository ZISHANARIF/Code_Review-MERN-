const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express();

// Read environment variables
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Allow frontend requests
app.use(cors({
    origin: [FRONTEND_URL, "http://localhost:5173"], // Allow both local and production frontend
    credentials: true,
}));

// Middleware
app.use(express.json());

// Root API test
app.get('/', (req, res) => {
    res.send('Server is running 🚀');
});

// AI Routes
app.use('/ai', aiRoutes);

// Handle errors gracefully
app.use((err, req, res, next) => {
    console.error("❌ Server Error:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app;
