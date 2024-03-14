// pages/game.escape.js

"use client";

import React, { useState } from "react";
import styles from "./game.module.css"; // 스타일링을 위한 CSS 모듈 파일
import { useRouter } from "next/navigation";

const scenarios = {
  start: {
    description: "전화음이 연결됩니다. 뚜르르르... 달칵.",
    options: [
      {
        text: "여보세요?",
        nextScene: "start2",
      },
    ],
  },
  start2: {
    description:
      " ' 천장을 확인해 ' 전화 속 상대는 이 말만을 하더니 뚝, 전화를 끊어버립니다.",
    options: [
      {
        text: "뭐야?",
        nextScene: "cell",
      },
    ],
  },
  cell: {
    description: "주변을 둘러본다.",
    options: [
      {
        text: "침대를 본다",
        nextScene: "bed",
      },
      {
        text: "책상을 본다",
        nextScene: "desk",
      },
      {
        text: "전화기를 살펴본다",
        nextScene: "phone",
      },
      {
        text: "천장을 본다",
        nextScene: "up",
      },
    ],
  },
  bed: {
    description: "여전히 푹신푹신한 침대입니다. 아무것도 없네요.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  desk: {
    description: "책상 위는 깔끔합니다.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  phone: {
    description: "붉은 색의 전화기입니다. 또 입력 할 필요는 없겠죠?",
    options: [
      {
        text: "전화를 입력해본다",
        nextScene: "dial",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  paper: {
    description: "종이를 살펴보니 아무런 정보도 없습니다.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  dial: {
    description: "다시 누를 필요 없대도요!",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  up: {
    description:
      "천장을 보니 달력이 하나 보입니다. 평범한 달력입니다.",
    options: [
      {
        text: "자세히 본다",
        nextScene: "up2",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  up2: {
    description:
      "평범한 달력입니다... 작게 적혀있는 글자들만 뺀다면 말이죠. 달력 상단엔 ★★비밀번호!!★★ 라는 메모가 있습니다. 독방 문의 비밀번호일까요?",
    options: [
      {
        text: "달력을 들여다본다.",
        nextScene: "go",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("start");
  const router = useRouter();

  const handleOptionClick = (nextScene) => {
    if (nextScene === "go") {
      router.push("/puzzle2");
    }
    setCurrentScene(nextScene);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>지하 독방</h1>
        </header>
        <div className={styles.description}>
          {scenarios[currentScene]?.description}
        </div>
        <div className={styles.options}>
          {scenarios[currentScene]?.options.map((option, index) => (
            <button
              key={index}
              className={styles.optionButton}
              onClick={() => handleOptionClick(option.nextScene)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};
