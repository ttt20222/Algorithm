-- 코드를 입력하세요
SELECT animal_id, name,
    case
        when sex_upon_intake like 'Neutered%' then 'O'
        when sex_upon_intake like 'Spayed%' then 'O'
        when sex_upon_intake like 'Intact%' then 'X'
    end as "중성화"
FROM ANIMAL_INS
order by animal_id;