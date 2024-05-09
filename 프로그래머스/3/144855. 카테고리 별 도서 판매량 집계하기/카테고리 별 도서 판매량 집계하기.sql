-- 코드를 입력하세요
select a.category, sum(sales) as total_sales
from BOOK a join BOOK_SALES b
on a.book_id = b.book_id
where 1=1
and to_char(b.sales_date, 'yyyymm') = '202201'
group by a.category
order by a.category