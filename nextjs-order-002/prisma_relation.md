# 다중 table 구조의 project 에서 JOIN 실행하기

- 다중 table 간의 relation 을 설정해야 한다.
- tbl_order_product 에 relation 설정하기
- 어떤 모델에 relation 을 설정할 것인가
- 첫번째 1:N 의 관계일때 N 인 table
- 두번째 엄밀한 1:1 의 관계일때 연관되는 칼럼이 PK 칼럼이 아닌 table

```schema.prisma
    model tbl_order_product {
    op_onum  String @db.VarChar(6)
    op_pcode String @db.VarChar(6)

    orders tbl_orders @relation(field:[op_onum], reference:[o_num])
    product tbl_product @relation(field:[op_pcode], reference:[p_code])

    @@id([op_onum, op_pcode])
    @@index([op_pcode], map: "fk_p")
    }

```
