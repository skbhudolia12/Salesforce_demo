const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/feedback', (req, res) => {
  const { text } = req.body;
  // Mock Hugging Face API response based on text length (simple heuristic)
  const feedback = text.length > 20 ? 'Great effort! Try adding more details next time.' : 'Good start! Expand your answer.';
  res.json({ feedback });
});

app.listen(3000, () => console.log('Server running on port 3000'));