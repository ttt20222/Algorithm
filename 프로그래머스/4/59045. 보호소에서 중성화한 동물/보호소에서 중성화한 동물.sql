-- 코드를 입력하세요
SELECT a.animal_id, a.animal_type, a.name
from ANIMAL_INS a join ANIMAL_OUTS b
on a.animal_id = b.animal_id
where 1=1
and a.SEX_UPON_INTAKE like 'Intact%'
and b.sex_upon_outcome not like 'Intact%'
order by a.animal_id