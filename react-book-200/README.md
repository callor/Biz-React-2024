# React Front Project

- `React Front Project` 는 순수하게 client(web Browser) 환경에서 작동하는 UI 애플리케이션
- 서버와 연동은 보통 `NodeJS` 등을 사용하고 `fetch`, `axios`, `ajax` 등을 사용한다.
- `React Front Project`는 단순한 DB 연결도 현재 시점에서는 할수 없다.

## `React` Front `Router` 설정하기

- `React` 프로젝트는 `SPA(Single Page Application)` 방식으로 사용한다. 여기에 `Routing` 기능을 추가하여 마치 `Multy Page Application` 처럼 동작하도록 할 수 있다.
- `React` `Routing`을 사용하기 위한 Dependency

```bash
npm install react-router-dom
```

## `ContextProvider` 를 이용한 Global State 관리
