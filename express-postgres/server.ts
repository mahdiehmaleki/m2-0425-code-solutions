import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/index.js';

const app = express();
app.use(express.json());

pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);

const db = new pg.Pool({
  connectionString: 'postgres://dev@localhost/pagila',
  ssl: { rejectUnauthorized: false },
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      SELECT
        "filmId",
        "title",
        "description",
        "replacementCost"
      FROM "films"
      ORDER BY "replacementCost" DESC;
    `;
    const result = await db.query(sql);
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const sql = `
      SELECT
        "filmId",
        "title",
        "description",
        "replacementCost"
      FROM "films"
      WHERE "filmId" = $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      res.status(404).json({ error: `Film ${filmId} not found` });
      return;
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    const { title } = req.query;

    if (!title) {
      res.status(400).json({ error: 'title query parameter is required' });
      return;
    }

    const sql = `
      UPDATE "films"
      SET "title" = $1
      WHERE "filmId" = $2
      RETURNING
        "filmId",
        "title",
        "description",
        "replacementCost";
    `;
    const params = [title, filmId];
    const result = await db.query(sql, params);
    const updatedFilm = result.rows[0];

    if (!updatedFilm) {
      res.status(404).json({ error: `Film ${filmId} not found` });
      return;
    }

    res.send(updatedFilm);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
