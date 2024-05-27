-- SELECT CASE WHEN PRICE <10000 THEN 0
--        ELSE SUBSTR(PRICE,1,1)*10000 END AS "PRICE_FROUP" , 
--        COUNT(*) AS "PRODUCTS"
-- FROM PRODUCT
-- GROUP BY CASE WHEN PRICE <10000 THEN 0
--        ELSE SUBSTR(PRICE,1,1)*10000 END
-- ORDER BY 1 ASC;


-- select case when price < 10000 then 0
--         else substr(price,1,1)*10000 end as "PRICE_GROUP",
--         count(*) as "PRODUCTS"
-- from product
-- group by case when price < 10000 then 0
--          else substr(price,1,1)*10000 end
-- order by PRICE_GROUP;


select case when price < 10000 then 0
         else substr(price, 1,1) * 10000 
         end as price_group, count(*) as products
from product
group by case when price < 10000 then 0
         else substr(price, 1,1) * 10000 
         end
order by price_group;