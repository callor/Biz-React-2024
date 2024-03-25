# 주문서 관리 프로젝트

## Prisma 설정

- `npx prisma init`
- `prisma/schema.prisma` 파일과 `.env` 파일 확인
- `.env` 파일에 DB 연결 정보 설정

```.env
DATABASE_URL="mysql://root:!Biz8080@localhost:3365/orderDB"
```

- `prisma/schma.prisma` 파일에서 다음 항목 확인. provider `mysql` 로 변경

```schema.prisma
    datasource db {
        provider = "mysql"
        url      = env("DATABASE_URL")
    }
```

- 이미 적용된 DB schema import : `npx prisma db pull`

- prisma 설정 적용 : `npx prisma generate` 실행
- `schema.prisma` 파일과 `package.json` 파일 확인

## prisma 에서 WHERE 절에 Like 연산 수행하기

- prisma 를 통하여 Like 연산을 수행할때는 일반적인 `WHERE LIKE`연산과는 다소 다른 방식으로 진행된다
- prisma 의 Like 연산은 `FULL TEXT SEARCH` 라는 방식을 사용한다
- MySQL 에서는 table 에 `Full Text Search`를 지원하지 않는다.
- MySQL 에 `Full Text Search`를 On 해주어야 한다.

```sql
ALTER TABLE tbl_customer
ADD FULLTEXT(c_name);

ALTER TABLE tbl_customer
ADD FULLTEXT(c_tel);
```

- `schema.prisma` 파일에 `previewFeatures` 항목을 추가하기

```schema.prisma
    generator client {
        provider = "prisma-client-js"
        previewFeatures = ["fullTextSearch", "fullTextIndex"]
    }
```

- prisma model 에 FullText 선언하기
- c_name 칼럼과 c_tel 칼럼에 FullText 검색을 할수 있도록 선언

```schema.prisma
    model tbl_customer {
    c_code String @id @db.VarChar(5)
    c_name String @db.VarChar(25)
    c_tel  String @db.VarChar(15)
    @@fulltext([c_name,c_tel])
    }
```

- Prisma 개발환경 재 설정하기

```bash
npx prisma generate
```

## API 에서 FullText 검색 실행하기

- where 절 내에 `search`, `contains` 키워드를 사용하여 검색하기

```js
const result = await prisma.tbl_customer.findMany({
  where: {
    c_name: {
      contains: key,
    },
  },
});
```

- search 키워드의 옵션

```js
// c_name 칼럼에 "이몽룡" 문자열이 포함된경우
where : {
    c_name : {
        search : "이몽룡"
    }
}

// c_name 칼럼에 "이몽룡 이가" 문자열이 포함된경우
// c_name 칼럼의 문자열이 `이몽룡 이가` 인경우
where : {
    c_name : {
        search : "이몽룡 이가"
    }
}

// c_name = '이몽룡' AND c_name='성춘향'
where : {
    c_name : {
        search : "+이몽룡 +성춘향"
    }
}

// c_name = '이몽룡' AND c_name <> '성춘향'
where : {
    c_name : {
        search : "+이몽룡 -성춘향"
    }
}

// c_name = '이몽룡' OR c_name <> '성춘향'
where : {
    c_name : {
        search : "이몽룡 성춘향"
    }
}

// c_name LIKE '이몽%'
where : {
    c_name : {
        search : "이몽*"
    }
}

// c_name 의 중간에 이몽 문자열이 포함된 경우
where : {
    c_name : {
        contains : "이몽"
    }
}

// c_name 의 중간에 이몽 문자열이 포함되고
// 전화번호에 9019 문자열이 포함된경우
where : {
    c_name : {
        contains : "이몽"
    },
    c_tel : {
        contains : "9019"
    }
}




```
