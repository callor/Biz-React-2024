"use client";

import React, { useState, useEffect } from "react";
import styles from "./game.module.css"; // 스타일 파일 경로는 상황에 맞게 조정해주세요
import TEST from "../test/page";
import { redirect } from "next/navigation";

export default function Game() {
  const narrations = [
    "반갑습니다, 임상 실험에 참여해주신 여러분.",
    "여러분이 해주실 일은 아주 간단합니다.",
    "지금부터 제가 드리는 질문지에 답을 해주시기만 하면 됩니다.",
    "보수는 질문이 다 끝나고 나가실 때 받을 수 있습니다.",
    "준비는 되셨나요?",
    "그럼 시작하도록 하죠.",
    // 여기에 추가 나레이션을 넣을 수 있습니다.
  ];

  const [currentNarrationIndex, setCurrentNarrationIndex] =
    useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        const nextIndex = currentNarrationIndex + 1;
        if (nextIndex < narrations.length) {
          setCurrentNarrationIndex(nextIndex);
        } else {
          setGameStarted(true); // 모든 나레이션이 끝나면 게임 시작
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentNarrationIndex, narrations.length]);

  if (!gameStarted) {
    return (
      <div className={styles.narration}>
        <p>{narrations[currentNarrationIndex]}</p>
      </div>
    );
  }
  return redirect(`/test`);
}
