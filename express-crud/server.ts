import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js'; // adjust path if needed

const app = express();
app.use(express.json());

// Only create ONE pool
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: { rejectUnauthorized: false },
});

// Utility function for validation
function validateGrade(grade: any): boolean {
  const { name, course, score } = grade;
  if (typeof name !== 'string' || name.trim() === '') return false;
  if (typeof course !== 'string' || course.trim() === '') return false;
  if (!Number.isInteger(score) || score < 0 || score > 100) return false;
  return true;
}

// 1. GET all grades
app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      SELECT "gradeId", "name", "course", "score"
      FROM "grades"
      ORDER BY "gradeId";
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

// 2. GET grade by ID
app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }

    const sql = `
      SELECT "gradeId", "name", "course", "score"
      FROM "grades"
      WHERE "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, `Grade ${gradeId} not found`);
    }
    res.status(200).json(grade);
  } catch (err) {
    next(err);
  }
});

// 3. POST create grade
app.post('/api/grades', async (req, res, next) => {
  try {
    if (!validateGrade(req.body)) {
      throw new ClientError(
        400,
        'Invalid grade: name, course, and score (0–100) are required'
      );
    }

    const { name, course, score } = req.body;
    const sql = `
      INSERT INTO "grades" ("name", "course", "score")
      VALUES ($1, $2, $3)
      RETURNING "gradeId", "name", "course", "score";
    `;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

// 4. PUT update grade
app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }
    if (!validateGrade(req.body)) {
      throw new ClientError(
        400,
        'Invalid grade: name, course, and score (0–100) are required'
      );
    }

    const { name, course, score } = req.body;
    const sql = `
      UPDATE "grades"
      SET "name" = $1, "course" = $2, "score" = $3
      WHERE "gradeId" = $4
      RETURNING "gradeId", "name", "course", "score";
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updated = result.rows[0];
    if (!updated) {
      throw new ClientError(404, `Grade ${gradeId} not found`);
    }
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
});

// 5. DELETE grade
app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId <= 0) {
      throw new ClientError(400, 'gradeId must be a positive integer');
    }

    const sql = `
      DELETE FROM "grades"
      WHERE "gradeId" = $1
      RETURNING "gradeId";
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    if (result.rowCount === 0) {
      throw new ClientError(404, `Grade ${gradeId} not found`);
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Error handler (provided in lib)
app.use(errorMiddleware);

// Start server
app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
