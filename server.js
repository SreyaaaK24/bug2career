// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to submit scores
app.post('/api/submit-scores', (req, res) => {
    const { totalScore, percentage } = req.body;

    // Check if user qualifies for the certificate
    if (percentage >= 70) {
        res.json({ message: "Congratulations! You have earned your Java Certificate." });
        // Here you can add logic to generate and send the certificate.
    } else {
        res.json({ message: "You did not qualify for the Java Certificate. Keep trying!" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});