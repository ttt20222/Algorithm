select a.book_id, b.author_name, to_char(a.published_date, 'yyyy-mm-dd')
from book a join AUTHOR b
on a.AUTHOR_ID = b.AUTHOR_ID
where 1=1
and a.category = '경제'
order by a.published_date

