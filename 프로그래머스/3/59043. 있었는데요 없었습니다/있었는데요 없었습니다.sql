select a.animal_id, a.name
from ANIMAL_INS a join ANIMAL_OUTS b
on a.animal_id = b.animal_id
where 1=1
and a.datetime > b.datetime
order by a.datetime

