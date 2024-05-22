select ANIMAL_ID, name, SEX_UPON_INTAKE
from ANIMAL_INS
where 1=1
and name in ('Lucy','Ella','Pickle','Rogan','Sabrina','Mitty')
order by animal_id