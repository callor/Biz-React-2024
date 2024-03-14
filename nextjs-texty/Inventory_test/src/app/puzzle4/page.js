"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./puzzle4.css";

const colors = ["red", "green", "blue", "yellow"];
const totalStages = 5;

export default function puzzle4() {
  const router = useRouter();

  const [currentStage, setCurrentStage] = useState(1);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(5); // 초 단위
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          handleGameOver();
          return 5; // timeLimit 값을 하드코딩하여 삭제
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (remainingTime === 5) {
      // timeLimit 값을 하드코딩하여 삭제
      setCurrentColorIndex(Math.floor(Math.random() * colors.length));
    }
  }, [remainingTime]);

  const handleUserChoice = (choice) => {
    if (choice === colors[currentColorIndex]) {
      if (currentStage >= totalStages) {
        router.push("/escape-sub"); // 다음 페이지로 이동
      } else {
        setCurrentStage((prevStage) => prevStage + 1); // 스테이지 증가
        setRemainingTime(5); // timeLimit 값을 하드코딩하여 삭제
      }
    } else {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const restartGame = () => {
    setCurrentStage(1);
    setCurrentColorIndex(Math.floor(Math.random() * colors.length));
    setRemainingTime(5); // timeLimit 값을 하드코딩하여 삭제
    setGameOver(false);
  };

  return (
    <div className="color_text">
      <h1 className="text">알맞는 색의 문으로 들어가세요</h1>
      {gameOver ? (
        <div>
          <h2>당신은 죽었습니다.</h2>
          <button className="restartGame" onClick={restartGame}>
            다시 시작
          </button>
        </div>
      ) : (
        <>
          <p>
            현재 스테이지: {currentStage}/{totalStages}
          </p>
          <p>남은 시간: {remainingTime}초</p>
          <div
            className="color-box"
            style={{ backgroundColor: colors[currentColorIndex] }}
          ></div>
          <div>
            {colors.map((color, index) => (
              <button
                className="color button"
                key={index}
                onClick={() => handleUserChoice(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
