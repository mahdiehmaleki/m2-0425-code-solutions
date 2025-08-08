import express from 'express';
import pg from 'pg';
import { errorMiddleware } from './lib/error-middleware.js';
import { ClientError } from './lib/client-error.js';

const app = express();
app.use(express.json()); // Not necessary for GET but good practice

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: { rejectUnauthorized: false },
});

app.get('/api/countries', async (req, res, next) => {
  try {
    console.log('GET /api/countries hit');
    const sql = `
      SELECT countries."countryId",
            countries."name" AS "countryName",
             COUNT (cities."cityId") AS "cityCount"
        FROM countries
    JOIN cities USING ("countryId")
    GROUP BY countries."countryId", countries."name"
    ORDER BY countries."name";
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/cities/:cityId', async (req, res, next) => {
  try {
    const cityId = Number(req.params.cityId);
    if (!Number.isInteger(cityId)) {
      throw new ClientError(400, 'cityId must be an integer');
    }

    const sql = `
      SELECT cities."cityId",
             cities."name" AS "cityName",
             countries."name" as "countryName"
        FROM cities
        JOIN countries USING ("countryId")
       WHERE cities."cityId" = $1;
    `;
    const result = await db.query(sql, [cityId]);
    const city = result.rows[0];

    if (!city) {
      throw new ClientError(404, `cityId ${cityId} not found`);
    }

    res.json(city);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
