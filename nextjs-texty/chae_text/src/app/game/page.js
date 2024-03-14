"use client";

import React, { useState, useEffect } from "react";
import styles from "./game.module.css"; // 스타일 파일 경로는 상황에 맞게 조정해주세요
import { useRouter } from "next/navigation";

export default function Game() {
  const [narrations, setNarrations] = useState([
    "반갑습니다, 임상 실험에 참여해주신 여러분.",
    "여러분이 해주실 일은 아주 간단합니다.",
    "지금부터 제가 드리는 질문지에 답을 해주시기만 하면 됩니다.",
    "보수는 질문이 다 끝나고 나가실 때 받을 수 있습니다.",
    "준비는 되셨나요?",
    "그럼 시작하도록 하죠.",
    "참. 시작하기 앞서 이름 먼저 알려주시겠어요?",
  ]);
  const [currentNarrationIndex, setCurrentNarrationIndex] =
    useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [name, setName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false); // 이름 입력 상태 관리
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        if (
          currentNarrationIndex === narrations.length - 1 &&
          name &&
          !isNameEntered
        ) {
          // 이름 입력 후, 추가 나레이션 진행
          setNarrations((prev) => [
            ...prev,
            `${name} 씨, 확인 되셨습니다. 그럼 진행해주세요.`,
          ]);
          setCurrentNarrationIndex((prev) => prev + 1);
          localStorage.setItem("userName", name); // 이름을 로컬 스토리지에 저장
          setIsNameEntered(true); // 이름이 입력되었음을 표시
        } else if (
          currentNarrationIndex < narrations.length - 1 ||
          (currentNarrationIndex === narrations.length - 1 &&
            isNameEntered)
        ) {
          const nextIndex = currentNarrationIndex + 1;
          if (nextIndex <= narrations.length) {
            setCurrentNarrationIndex(nextIndex);
          }
          if (nextIndex === narrations.length) {
            setGameStarted(true); // 모든 나레이션이 끝나면 게임 시작
          }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentNarrationIndex, narrations.length, name, isNameEntered]);
  useEffect(() => {
    if (gameStarted) {
      // 게임이 시작되면 /test 페이지로 리다이렉트
      router.push("/test");
    }
  }, [gameStarted, router]);

  if (!gameStarted) {
    return (
      <div className={styles.narration}>
        {currentNarrationIndex === narrations.length - 1 &&
        !isNameEntered ? (
          <>
            <p>{narrations[currentNarrationIndex]}</p>
            <input
              className={styles.sss}
              type="text"
              placeholder="서명해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && name) {
                  // 이름 입력 처리
                  e.preventDefault();
                }
              }}
            />
          </>
        ) : (
          <p>{narrations[currentNarrationIndex]}</p>
        )}
      </div>
    );
  }

  // 실제 게임 시작 시 /test로 리다이렉트
}
