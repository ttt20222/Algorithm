select book_id, to_char(published_date, 'yyyy-mm-dd') as PUBLISHED_DATE
from book
where 1=1
and category = '인문'
and to_char(published_date, 'yyyy') = '2021'
order by PUBLISHED_DATE

