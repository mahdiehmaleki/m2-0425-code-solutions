select
c."firstName" as "first_name",
c."lastName" as "last_name",
sum(p."amount") as "total_paid"
from customers as "c"
join payments as p using("customerId")
group by c."firstName", c."lastName"
order by "total_paid" desc
