-- 코드를 입력하세요
SELECT count(*)
from USER_INFO
where 1=1
and to_char(JOINED,'yyyy-mm-dd') like '2021%'
and age between 20 and 29;

