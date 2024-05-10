-- 코드를 입력하세요
select animal_id, name
from (
    SELECT a.animal_id, a.name
    from ANIMAL_INS a join ANIMAL_OUTS b
    on a.animal_id = b.animal_id
    order by b.datetime - a.datetime desc)
where ROWNUM < 3



