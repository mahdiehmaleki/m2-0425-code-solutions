SELECT
  "f"."releaseYear" AS release_year,
  "g"."name" AS genre_name
FROM "films" AS "f"
JOIN "filmGenre" AS "fg" using("filmId")
JOIN "genres" AS "g" using ("genreId")
WHERE f.title = 'Boogie Amelie';
