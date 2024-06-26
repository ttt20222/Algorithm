select order_id, product_id, to_char(out_date, 'yyyy-mm-dd'), 
        case when to_char(out_date, 'yyyy-mm-dd') <= '2022-05-01' then '출고완료'
             when to_char(out_date, 'yyyy-mm-dd') > '2022-05-01' then '출고대기'
             else '출고미정'
            end as "출고여부"
from FOOD_ORDER
order by order_id
