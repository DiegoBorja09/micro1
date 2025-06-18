import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.get('/api/mock', (req, res) => {
  res.json({ message: 'Respuesta mock satisfactoria', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Mock service running on port ${PORT}`);
});
