-- 코드를 입력하세요
select a.product_code, sum(a.price*b.sales_amount) as totalprice
from product a join OFFLINE_SALE b
on a.product_id = b.product_id
group by a.product_code
order by totalprice desc, a.product_code asc