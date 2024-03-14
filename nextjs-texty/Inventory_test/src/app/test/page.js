"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Test.module.css";
import { selectAll } from "../api/quest.js";

const questions = [
  {
    question: "새로운 도전에 대한 태도는\n어떠신가요?",
    answers: ["두렵다", "설렌다", "두렵고도 설렌다"],
  },
  {
    question: "어떤 상황에서 가장 스트레스를\n받는 경향이 있나요?",
    answers: [
      "사람이 많은 곳",
      "계획이 틀어졌을 때",
      "스스로의 기대치에 못미쳤을 때",
    ],
  },
  {
    question: "다른 사람들의 감정에\n민감한 편인가요?",
    answers: ["예", "아마도", "아니오"],
  },
  // 추가 질문들...
  {
    question: "어떤 종류의 취미나 관심사를\n가지고 있나요?",
    answers: [
      "혼자 즐길 수 있는 취미",
      "여러명과 함께할 수 있는 취미",
      "취미가 없다",
    ],
  },
  {
    question:
      "여행 좋아하세요? 만약\n여행을 떠난다면 어디로 가고 싶나요?",
    answers: ["바다", "산", "여행을 좋아하지 않음."],
  },
  {
    question: "당신이 가장 중요하게 생각하는\n가치관은 무엇인가요?",
    answers: ["재산", "권력", "명예"],
  },
  {
    question:
      "당신은 지금 당신의 등 뒤에 누군가\n서 있음을 느낄 수 있나요?",
    answers: ["예", "아니오", "예?"],
  },
  {
    question:
      "당신은 이 실험이 단순히 관찰만을 목적\n으로 하는 것이 아니라고 생각하나요?",
    answers: ["예", "아니오", "뭐?"],
  },
  {
    question: "마지막 질문입니다.\n조금 더 협력해주시겠습니까?",
    answers: ["예", "아니오", "그니까 뭐를?"],
  },
  {
    question: "아주 좋아요!\n당신이 그렇게 말할 줄 알고 있었어요.",
    answers: ["...", "...", "..."],
  },
  {
    question:
      "저희는 당신의 협력에 늘\n감사드릴겁니다. 행운을 빌어요!",
    answers: ["...", "...", "..."],
  },
];

// export default function Test() {
export default () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const router = useRouter();

  // const [questions, setQuestions] = useState([]);
  // console.log("TEST");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("SELECT");
  //       const questList = await selectAll();
  //       console.log(questList);
  //       if (questList) {
  //         const result = questList.map((item) => ({
  //           question: `${item.q_quest}`,
  //           answers: [
  //             `${item.q_answer1}`,
  //             `${item.q_answer2}`,
  //             `${item.q_answer3}`,
  //           ],
  //         }));
  //         setQuestions([...result]);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching questions:", error);
  //       setQuestions([]);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const handleAnswerClick = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverExit = () => {
    setHoveredIndex(-1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      router.push("/escape");
    }
  }, [currentQuestionIndex, questions.length, router]);

  return (
    <div className={styles.container}>
      <main className={styles.maina}>
        <header className={styles.title}>
          <h1>설문지</h1>
        </header>
        <div className={`${styles.quizSub} ${styles.dotSeparated}`}>
          <h2 className={styles.question}>
            {currentQuestion && currentQuestion.question}{" "}
          </h2>
        </div>
        <div className={styles.quizCard}>
          <div className={styles.answers}>
            {currentQuestion &&
              currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  className={
                    (currentQuestionIndex === 6 ||
                      currentQuestionIndex === 7 ||
                      currentQuestionIndex === 8) &&
                    hoveredIndex === index
                      ? `${styles.hoverEffect}`
                      : styles.answerButton
                  }
                  onClick={handleAnswerClick}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={handleHoverExit}
                >
                  <span className={styles.hiddenText}>
                    {hoveredIndex === index &&
                    (currentQuestionIndex === 6 ||
                      currentQuestionIndex === 7 ||
                      currentQuestionIndex === 8)
                      ? "예"
                      : answer}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};
