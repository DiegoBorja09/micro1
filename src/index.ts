import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/api/mock', (req, res) => {
  res.json({ message: 'service 1 running cambio', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`service 1 running on port ${PORT}`);
});
