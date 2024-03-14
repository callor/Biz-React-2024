"use client";

import React, { useState, useEffect } from "react";
import styles from "./game.module.css"; // 스타일 파일 경로는 상황에 맞게 조정해주세요
import { useRouter } from "next/navigation";

export default () => {
  const [narrations, setNarrations] = useState([
    "아슬아슬하게 문을 지나쳐 나오면 정말 마지막 처럼 생긴 거대한 문이 눈앞에 보입니다.",
    "당신이 그 문을 열고 들어가면, 길다란 복도 안에 당신이 열고 들어온 것과 똑같은 거대한 문 수십개가 벽면에 보입니다.",
    "그리고 그 복도의 가운데에는 편지가 덩그러니 하나 있습니다.",
  ]);
  const [currentNarrationIndex, setCurrentNarrationIndex] =
    useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const router = useRouter();

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
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentNarrationIndex, narrations.length]);

  useEffect(() => {
    if (gameStarted) {
      // 게임이 시작되면 /test 페이지로 리다이렉트
      router.push("/letter");
    }
  }, [gameStarted, router]);

  if (!gameStarted) {
    return (
      <div className={styles.narration}>
        <p>{narrations[currentNarrationIndex]}</p>
      </div>
    );
  }
};
