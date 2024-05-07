-- 코드를 입력하세요
SELECT to_number(to_char(datetime, 'hh24')) as HOUR, count(ANIMAL_ID) as COUNT
from ANIMAL_OUTS
where to_char(DATETIME,'hh24:mi') between '09:00' and '19:59'
group by to_char(datetime, 'hh24')
order by HOUR;