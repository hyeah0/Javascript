-- 텍스트 값 앞 뒤에  " " 
-- 숫자 값은 to_char

with bestTable as (
    select o.book_num as book_num
         , o.order_month as order_month
         , '"'|| b.cgy_num || '"' as cgy_num
         , '"'|| b.book_name || '"' as book_name
         , b.book_price as book_price
         , b.book_qty as book_qty
         , '"'||b.book_cont || '"' as book_cont
         , '"'||b.book_img || '"'  as book_img
      from (select book_num
                 , sum(order_qty) as order_month
              from book_order
             where sysdate - order_date <30
             group by book_num
             order by order_month desc) o
      join book b 
        on o.book_num = b.book_num
     where rownum >=1 and rownum <=5
)
select JSON_OBJECT( KEY 'book_num' IS to_char(book_num) FORMAT JSON,      
                    KEY 'order_month' IS to_char(order_month) FORMAT JSON,
                    KEY 'cgy_num' IS cgy_num FORMAT JSON, 
                    KEY 'book_name' IS book_name FORMAT JSON,
                    KEY 'book_price' IS to_char(book_price) FORMAT JSON,
                    KEY 'book_qty' IS to_char(book_qty) FORMAT JSON, 
                    KEY 'book_cont' IS book_cont FORMAT JSON,
                    KEY 'book_img' IS book_img FORMAT JSON
                    ) AS bestBooksBest5Json
  from bestTable;