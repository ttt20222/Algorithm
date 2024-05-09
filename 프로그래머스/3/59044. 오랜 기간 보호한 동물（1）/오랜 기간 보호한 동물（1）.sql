-- 코드를 입력하세요
select name, datetime
from (select * from ANIMAL_INS order by datetime)
where 1=1
and animal_id not in (select animal_id from ANIMAL_OUTS)
and rownum <= 3