import express from 'express';

const app = express();

app.use((req, res, next) => {
  const currentDate = new Date().toISOString();
  console.log(`[${currentDate}] ${req.method} ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the home page');
});

app.get('/notes', (req, res) => {
  res.send('Here are your notes');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`You posted notes with ID: ${noteId}`);
});

app.use((req, res) => {
  res.status(404).send('404 NOT FOUND');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
