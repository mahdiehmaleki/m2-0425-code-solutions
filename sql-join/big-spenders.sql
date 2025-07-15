select
"c"."firstName" as "customer first_name" ,
"c"."lastName" as "customer last_name" ,
"p"."amount" as "payment amount"
from "payments" as "p"
join "customers" as "c" using ("customerId")
order by "p"."amount" desc
limit 10;
