select
co.name as "country_name",
count(*) as "number_of_cities"
from "countries" as "co"
join "cities" using ("countryId")
group by "co"."countryId"
