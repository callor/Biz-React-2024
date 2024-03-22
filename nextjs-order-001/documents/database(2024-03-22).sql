-- 주문서 데이터 정규화
CREATE DATABASE orderDB;
USE orderDB;
CREATE TABLE tbl_tmp_order (
	o_num	VARCHAR(6),
	o_date	VARCHAR(10),
	o_ccode	VARCHAR(5),
	o_cname	VARCHAR(20),
	o_ctel	VARCHAR(20),
	o_pcode1	VARCHAR(6),
	o_pcode2	VARCHAR(6),
	o_pcode3	VARCHAR(6)
);
SELECT COUNT(*) FROM tbl_tmp_order;

-- 주문-고객 Relation 생성
SELECT o_num, o_ccode FROM tbl_tmp_order;

-- 주문-상품 Relation 생성

SELECT * FROM
(
	SELECT o_num, o_pcode1 AS 상품코드 FROM tbl_tmp_order
	UNION
	SELECT o_num, o_pcode2 AS 상품코드 FROM tbl_tmp_order
	UNION
	SELECT o_num, o_pcode3 AS 상품코드 FROM tbl_tmp_order
) AS M WHERE M.상품코드 <> ''
ORDER BY M.o_num;

-- 생성한 Relation 데이터를 저장할 Relation Table 생성
CREATE TABLE tbl_order_customer (
	oc_onum	VARCHAR(6)	NOT NULL,
	oc_ccode	VARCHAR(5)	NOT NULL,
	PRIMARY KEY(oc_onum, oc_ccode)	
);
CREATE TABLE tbl_order_product (
	op_onum	VARCHAR(6)	NOT NULL,
	op_pcode	VARCHAR(6)	NOT NULL,
	PRIMARY KEY(op_onum,op_pcode)	
);

CREATE TABLE tbl_orders (
	o_num	VARCHAR(6)		PRIMARY KEY,
	o_date	VARCHAR(10)	NOT NULL	
);

-- 주문원장, 주문-고객, 주문-상품 의 참조관계를 설정하기
-- 참조관계(FK)설정이 될수 있는지 유효성 검사를 수행
/*
주문원장 : 주문-고객 테이블의 관계는 1:N 의 관계이다
주문원장은 Master Table 이며, 주문-고객은 Relation Table 이다
주문원장에 있는 코드는 주문-고객에 있을 수도 있다 : 0..N
만악 주문-고객에 코드가 있는데 주문원장에 없다 : 있을수 없다
주문-고객을 기준으로 주문번호가 주문원장에 있는지 확인하기
*/
-- 다음 SQL 의 결과에서 데이터가 한개라도 나오면
-- FK 설정이 불가능하다
SELECT * 
	FROM tbl_order_customer C
		LEFT JOIN tbl_orders O
			ON C.oc_onum = O.o_num
WHERE O.o_num IS NULL;            

SELECT * 
	FROM tbl_order_product P
		LEFT JOIN tbl_orders O
			ON P.op_onum = O.o_num
WHERE O.o_num IS NULL;            

-- 3개의 Table 간의 참조무결성을 확인했으므로 FK 설정이 가능

-- 주문원장, 주문-고객 간의 FK 설정
-- CONSTRAINT 이름(fk_oc)를 지정하는 위치 주의!!!
ALTER TABLE tbl_order_customer
ADD CONSTRAINT fk_oc FOREIGN KEY 여기아님  (oc_onum) 
REFERENCES tbl_orders(o_num);

ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_op FOREIGN KEY 여기아님  (op_onum) 
REFERENCES tbl_orders(o_num);

ALTER TABLE tbl_order_customer
DROP CONSTRAINT tbl_order_customer_ibfk_5;

-- 고객정보, 상품정보 테이블 생성, 데이터 import
CREATE TABLE tbl_customer (
	c_code	VARCHAR(5)		PRIMARY KEY,
	c_name	VARCHAR(25)	NOT NULL,	
	c_tel	VARCHAR(15)	NOT NULL	
);
DROP TABLE tbl_product;
CREATE TABLE tbl_product (
	p_code	VARCHAR(6)		PRIMARY KEY,
	p_name	VARCHAR(25)	NOT NULL,	
	p_item	VARCHAR(25)	NOT NULL,	
	p_price	int	NOT NULL	
);

/*
Table 관계설정
	상품정보, 주문-상품
    고객정보, 주문-고객
*/
-- 각 테이블간에 무결성 검증
-- 1:N 관계의 Table 에서 
-- N Table 에 있는  코드가
-- 1 Table 에 없는지 검사하기

-- 주문-상품 테이블에는 있는 상품코드가
-- 상품정보 테이블에 없는 것이 있는가 검사
-- 여기에서 NULL 데이터가 있으면 안됨
SELECT *
FROM tbl_order_product OP
	LEFT JOIN tbl_product P
		ON OP.op_pcode = P.p_code
WHERE P.p_code IS NULL;        

SELECT *
FROM tbl_order_customer OC
	LEFT JOIN tbl_customer C
		ON OC.oc_ccode = C.c_code
WHERE C.c_code IS NULL;        

-- 테이블간에 FK 설정하기
-- 주문-상품과 상품정보
-- 주문-고객과 고객정보
ALTER TABLE tbl_order_customer 
ADD CONSTRAINT fk_c FOREIGN KEY (oc_ccode)
REFERENCES tbl_customer(c_code);

ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_p FOREIGN KEY (op_pcode)
REFERENCES tbl_product(p_code);

/*
주문원장, 주문-상품, 주문-고객, 상품정보, 고객정보의 형식으로
각 테이블을 분리하고 Relation 을 설정했다. 
여기까지 제3정규화 또는  BCNF(보이스코드 정규화)까지 완성되었다
하지만 실제 사용하려고 하면 다중의 Table 이 서로 JOIN 되어야 하는
불편함이 발생하였다.

이런 상황이 되면, 과연 Table 을 다수로 쪼개는 것이 꼭 좋은 상황인지
살펴보고, Table 간에 통합을 하여 Table 의 개수를 줄이는 것을 고민해야 한다
이처럼 분리된 테이블을 다시 통합 하는 것을 제4정규화, 제5정구화 과정이라고 한ㄷ

tbl_order_product, tbl_order_customer Relation 을 제거하고
주문원장과 고객정보, 주문원장과 상품정보를 연결할수 있는   방법을
모색한다.

1. 한개의 주문에는 반드시 고객은 한명 뿐이다
2. 한개의 주문에는 여러개의 상품이 포함될수 있다
단,  한개의 주문에 같은 상품이 중복될수 없다
*/
-- 기존의 Relation(FK)를 제거
ALTER TABLE tbl_order_customer
DROP CONSTRAINT fk_c;
ALTER TABLE tbl_order_customer
DROP CONSTRAINT fk_oc;

ALTER TABLE tbl_order_product
DROP CONSTRAINT fk_p;
ALTER TABLE tbl_order_product
DROP CONSTRAINT fk_op;

-- 주문원장에 다시 고객코드와 상품코드를 추가하기
/*
주문원장에 고객코드와 상품코드를 추가하는 통합을
하려고 했더니
고객은 한 주문에 한명의 고객만 포함되는 원칙이 있어
문제가 없으나
상품은 한 주문에 다수의 상품이 포함되는 원칙이 있다
이럴때 어떻게 주문원장을 처리할 것인가?
이러한 상황이 되면 tbl_order_product Relation table 은
그대로 유지하는 것이 유리하겠다
*/
-- 주문-상품과 상품정보, 주문-상품과 주문정보 
-- Relation(FK)는 그대로 유지하자(복원하자)
ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_p FOREIGN KEY (op_pcode)
REFERENCES tbl_product(p_code);
ALTER TABLE tbl_order_product
ADD CONSTRAINT fk_op FOREIGN KEY 여기아님  (op_onum) 
REFERENCES tbl_orders(o_num);

-- 주문원장, 고객코드를 연결하기 위한 조치





