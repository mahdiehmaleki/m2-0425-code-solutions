SELECT
  c."firstName" AS customer_first_name,
  c."lastName" AS customer_last_name
FROM customers AS c
JOIN rentals AS r using("customerId")
JOIN inventory AS i using ("inventoryId")
JOIN films AS f using("filmId")
WHERE "f".title = 'Magic Mallrats';
