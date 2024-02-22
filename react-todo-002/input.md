# React 의 독특한 input 설정(코딩)

- input box(tag)에 어떤 문자열을 입력하면, 입력된 문자열을 즉시 다른곳에 보여주는 반응(Reactive)가 필요할때가 있다.
- 입력하는 값을 특정한 영역에 보여주는 반응
- 입력하는 값에 따라 리스트를 실시간으로 검색하는 반응
- input box에 입력되는 문자열을 실시간으로 감시하는 이벤트 핸들러가 필요하다
- 다른곳에서 생성된, 입력된 값을 input box 에 실시간으로 표시해야하는 반등도 필요할때가 있다

## input box(tag)에 입력되는 문자열에 반응하는 이벤트 설정

- `<input onChange={onChangeHandler}>` 를 설정하여 input box 에 입력되는 문자열에 반응하도록 이벤트를 설정한다
- `input box(tag)`를 핸들링 할때는 `value` 속성과 `onChange` 속성을 매우 잘 활용해야 한다.

### React 에세 event 핸들러

- `React` 에서는 `document.querySelector()`, `target.addEventListener()` 등과 같은 표준 `HTML JS` 에서 사용하는 함수들을 사용하지 않는다
- `React` 에서는 직접 `tag(Component)`에 `onEvent` 핸들러를 직접 사용한다.

## React 의 `선언형` 코딩

- 만약 어떤 va 라는 변수에 저장된 값에 따라 LED 를 켜는 코드를 작성한다고 가정
- 보통 코드에서는 va 라는 변수에 값이 변경되는지 감시(event)하고 있다가 변수의 값이 변경되면 LED 를 `찾아서` LED 의 `상태`를 `변경(ON/OFF)` 한다. 이러한 코딩를 `명령형 코딩`라고 한다
- `React` 에서는 `미리` LED 에게 va 변수의 값이 원하는 값이 되면 `LED 의 상태`를 변경하라 라고 `선언`해 놓는다.
- 그러면 LED 는 va 변수의 `상태`를 감시하고 있다가 `상태`가 변하면 그 값에 따라 `반응`을 하게 된다.
- `React` 에서는 누군가가 `상태`를 감시해야할 필요가 있는 변수를 `state`라는 type 의 변수로 선언한다.
- `state` type 으로 선언된 변수는 `React` 시스템에 의해 자동으로 event 가 선언되는 것과 같다.
