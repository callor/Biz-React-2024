"use client";

import React, { useState } from "react";
import styles from "./Test.module.css"; // 스타일링을 위한 CSS 모듈 파일
import { selectAll } from "../api/quest";

// const questions = [
// {
// question: "질문 1",
// answers: ["답변 1", "답변 2", "답변 3"],
// },
// {
// question: "질문 2",
// answers: ["답변 1", "답변 2", "답변 3"],
// },

// // 추가 질문들...
// ];

export default async () => {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

const questList = await selectAll();
const questions = questList.map((item) => ({
seq: `${item.q_seq}`,
question: `${item.q_quest}`,
answers: [
`${item.q_answer1}`,
`${item.q_answer2}`,
`${item.q_answer3}`,
],
}));

const handleAnswerClick = (index) => {
// 마지막 질문이 아니라면 다음 질문으로 이동
if (currentQuestionIndex < questions.length - 1) {
setCurrentQuestionIndex(index + 1);
} else {
// 마지막 질문에 답변한 경우 결과 처리 로직 구현
// 예: 결과 페이지로 이동
}
};

return (

<div className={styles.container}>
<main className={styles.main}>
<header className={styles.title}>
<h1>심리테스트</h1>
</header>
<div className="name">
<span>플레이어 이름</span>
</div>
<div className={styles.quizSub}>
<h2 className={styles.question}>
{questions[currentQuestionIndex].question}
</h2>
</div>
<div className={styles.quizCard}>
<div className={styles.answers}>
{questions[currentQuestionIndex].answers.map(
(answer, index) => (
<button
key={index}
className={styles.answerButton}
onClick={() => handleAnswerClick(index)} >
{answer}
</button>
)
)}
</div>
</div>
</main>
</div>
);
};

// const questList = await selectAll();
// const questions = questList.map((item) => ({
// seq: `${item.q_seq}`,
// question: `${item.q_quest}`,
// answers: [
// `${item.q_answer1}`,
// `${item.q_answer2}`,
// `${item.q_answer3}`,
// ],
// }));

// import { selectAll } from "../api/quest.js";

// const questions = [
// {
// question: "새로운 도전에 대한 태도는\n어떠신가요?",
// answers: ["두렵다", "설렌다", "두렵고도 설렌다"],
// },
// {
// question: "어떤 상황에서 가장 스트레스를\n받는 경향이 있나요?",
// answers: [
// "사람이 많은 곳",
// "계획이 틀어졌을 때",
// "스스로의 기대치에 못미쳤을 때",
// ],
// },
// {
// question: "다른 사람들의 감정에\n민감한 편인가요?",
// answers: ["예", "아마도", "아니오"],
// },
// // 추가 질문들...
// {
// question: "어떤 종류의 취미나 관심사를\n가지고 있나요?",
// answers: [
// "혼자 즐길 수 있는 취미",
// "여러명과 함께할 수 있는 취미",
// "취미가 없다",
// ],
// },
// {
// question:
// "여행 좋아하세요? 만약\n여행을 떠난다면 어디로 가고 싶나요?",
// answers: ["바다", "산", "여행을 좋아하지 않음."],
// },
// {
// question: "당신이 가장 중요하게 생각하는\n가치관은 무엇인가요?",
// answers: ["재산", "권력", "명예"],
// },
// {
// question: "세상엔 없어져야 할 사람이\n있다 생각하나요?",
// answers: ["예", "아니오", "예?"],
// },
// {
// question: "뭔가 새로운 걸 한 번\n해보고 싶지 않나요?",
// answers: ["예", "아니오", "뭐를?"],
// },
// {
// question: "마지막 질문입니다.\n조금 더 협력해주시겠습니까?",
// answers: ["예", "아니오", "그니까 뭐를?"],
// },
// {
// question: "아주 좋아요!\n당신이 그렇게 말할 줄 알고 있었어요.",
// answers: ["...", "...", "..."],
// },
// {
// question:
// "저희는 당신의 협력에 늘 감사드릴겁니다.\n행운을 빌어요!",
// answers: ["...", "...", "..."],
// },
// ];
