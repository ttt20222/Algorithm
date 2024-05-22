select b.INGREDIENT_TYPE, sum(a.total_order) as TOTAL_ORDER
from FIRST_HALF a join ICECREAM_INFO b
on a.flavor = b.flavor
group by b.INGREDIENT_TYPE
order by TOTAL_ORDER