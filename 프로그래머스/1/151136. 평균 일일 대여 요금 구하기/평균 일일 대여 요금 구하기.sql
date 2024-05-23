-- 코드를 입력하세요
SELECT round(sum(daily_fee)/count(car_id),0) as average_fee
from CAR_RENTAL_COMPANY_CAR
where 1=1
and car_type = 'SUV'