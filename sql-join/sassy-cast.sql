SELECT
  a."firstName" AS actor_first_name,
  a."lastName" AS actor_last_name
FROM actors AS a
JOIN "castMembers" AS cm using("actorId")
JOIN films AS f using("filmId")
WHERE f.title = 'Jersey Sassy';
