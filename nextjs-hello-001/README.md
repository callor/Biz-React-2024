# React, NextJS 프로젝트

- 프로젝트 개발환경 시작 : `npm run dev`

## NextJS 를 이용한 페이지 Routing

- `React`는 화면전체 페이지 중에서 `state` 가 적용되거나, `필요한 부분`만 rendering 되는 구조이다.
- 페이지 전체 새로고침되지 않고, 필요한 부분만 rendering 이 되기 때문에 화면에 보이는 부분이 빠르게 변화를 줄수 있다.
- `React` 에서 이러한 것을 구현하기 위하여 `가상DOM(Virtual DOM)`이라는 이중 구조의 DOM 을 사용한다
- `React` 는 어떤 요청(Request, Routing)이 발생하면, 서버에 요청을 하고, 응답을 받은 후에 화면을 갱신한 `표준 HTML` 과는 다르다
- 현재 보고 있는 화면을 최대한 유지하면서 변화되는 부분만 갱신하는 구조의 화면구현이다.
- `React` 에서 사용하는 이러한 구조를 `Client Side Rendering` 이라고 한다.

- `NextJS`는 `React`의 부분랜더링을 지원하고, 여기에 `Server Side Rendering`을 동시에 지원하는 `Framework` 이다. 기본적인 부분은 `React`의 철학을 따르면서 좀 색다른 방법으로 서버와 연동되는 화면을 구현한다.

## NextJS 를 서버처럼 구동하기, DB 와 연동하기

- 순수 `React` 프로젝트에서는 서버, DB, 다른 서버와 연동하기 위해서는 별도의 서버가 필요하다.
- 보통은 `React` front-end 와 `NodeJS` back-end 를 연동하여 full stack project 를 구현한다.
- `NextJS` 를 사용하면 `Back-end` 서버가 없어도 `React` 프로젝트에 서버를 연동하여 구현 할 수 있다.
- `NextJS` 프로젝트를 DB(MySQL)과 연동하기 위하여 `Prisma` 라는 도구를 사용한다.

## 프로젝트에 Prima 와 MySQL 연동하기

```bash

npm install prisma --save-dev
npm install @prisma/client

npm install prisma --save-dev @prisma/client

```

## MySQL 연동하기

- 프로젝트에 prisma 환경 설정하기

```bash
npx prisma init --datasource-provider mysql
```

- MySQL 연결 URL 설정하기
- 프로젝트 폴더에 `.env` 파일을 만들거나 이미 있으면 다음 내용을 추가하기
- `DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"`
- DB 연결 초기화 하기 :

```bash
npx prisma generate
```

- Table 생성하기 :

```bash
npx prisma migrate dev --name init
```
