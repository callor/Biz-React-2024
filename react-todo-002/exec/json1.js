const json1 = { seq: 1, name: "홍길동" };
console.log(json1);

// JSON 객체의 깊은 복사
// json1 의 모든 요소를 json2 로 복사하고
// name 속성의 값을 "이몽룡"으로 변경하기
const json2 = { ...json1, name: "이몽룡" };
console.log(json2);

// json1 의 모든 요소를 json3 로 복사하고
// age 요소가 있으면 33으로 값을 변경하고
// 없으면 새로 생성하여 저장하라
const json3 = { ...json1, age: 33 };
console.log(json3);

// 객체의 구조분해(객체의 각요소를 분해하여 별도의 변수로 생성하기)
// const seq = json3.seq
// const name = json3.name
// const age = json.age
const { seq, name, age } = json3;
