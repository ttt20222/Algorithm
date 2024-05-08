select PT_NAME, PT_NO , GEND_CD, AGE, nvl(TLNO,'NONE') "TLNO"
from PATIENT
where 1=1
and age <= 12
and gend_cd = 'W'
ORDER BY AGE DESC, PT_NAME ASC
