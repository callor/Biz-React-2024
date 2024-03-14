"use client";

import React, { useState } from "react";
import styles from "./game.module.css"; // 스타일링을 위한 CSS 모듈 파일
import { useRouter } from "next/navigation";
import Inventory from "../inventory/Inventory";

const scenarios = {
  cell: {
    description: "주변을 둘러본다.",
    options: [
      {
        text: "벽",
        nextScene: "wall",
      },
      {
        text: "탁자",
        nextScene: "desk",
      },
    ],
  },
  wall: {
    description: "하얀 벽.",
    options: [
      {
        text: "벽의 구멍",
        nextScene: "wall2",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  wall2: {
    description:
      "벽에는 구멍이 나있습니다. 안을 보니 버튼 하나가 보이네요.",
    options: [
      {
        text: "누른다.",
        nextScene: "wall3",
      },
    ],
  },
  wall3: {
    description: "버튼을 누르자 벽이 열리고 사이렌이 울립니다.",
    options: [
      {
        text: "뭐...뭐야?",
        nextScene: "wall4",
      },
    ],
  },
  wall4: {
    description: "달리세요!",
    options: [
      {
        text: "달린다",
        nextScene: "run",
      },
      {
        text: "달린다",
        nextScene: "run",
      },
      {
        text: "달린다",
        nextScene: "run",
      },
    ],
  },
  desk: {
    description: "더 이상의 볼 일은 없습니다.",
    options: [
      {
        text: "다시 돌아간다.",
        nextScene: "cell",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("cell");
  const [isShaking, setIsShaking] = useState(false); // 애니메이션 상태 추가
  const router = useRouter();

  const handleOptionClick = (nextScene) => {
    if (nextScene === "wall3") {
      setIsShaking(true); // 버튼을 눌렀을 때 애니메이션 시작
      setTimeout(() => setIsShaking(false), 10000); // 애니메이션 지속 시간 후에 상태 초기화
    }
    if (nextScene === "run") {
      router.push("/puzzle4");
    }
    setCurrentScene(nextScene);
  };

  return (
    <div
      className={`${styles.container} ${
        isShaking ? styles.shakeAnimation : ""
      }`}
    >
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>하얀 방</h1>
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
        <div>
          <Inventory />
        </div>
      </main>
    </div>
  );
};
