-- with board as(
--     select writer_id, sum(price) tprice
--     from used_goods_board
--     where status = 'DONE'
--     group by writer_id
--     having sum(price)>=700000)
-- select u.user_id, u.nickname, tprice as total_sales
-- from board b inner join used_goods_user u
-- on b.writer_id = u.user_id
-- order by total_sales


select b.user_id, b.nickname, a.total_price
from (select writer_id, sum(price) as total_price
    from USED_GOODS_BOARD
    where 1=1
    and status = 'DONE'
    group by writer_id
    having sum(price) >= 700000) a inner join USED_GOODS_USER b
on a.writer_id = b.user_id
order by total_price asc;