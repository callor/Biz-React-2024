"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./puzzle4.css";

const colors = ["red", "green", "blue", "yellow"];
const options = ["red", "green", "blue", "yellow"];
const timeLimit = 5; // 초 단위
const totalStages = 5;

function TimeAttackGame() {
  const [currentStage, setCurrentStage] = useState(1);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [remainingTime, setRemainingTime] = useState(timeLimit);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const router = useRouter(); // Next.js에서 useRouter 사용

  useEffect(() => {
    let timer;
    if (!paused) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime === 0) {
            handleGameOver();
            return timeLimit;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    if (remainingTime === timeLimit) {
      setCurrentColorIndex(Math.floor(Math.random() * colors.length));
    }
  }, [remainingTime]);

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    if (choice === options[currentColorIndex]) {
      setScore((prevScore) => prevScore + 1);
      if (currentStage >= totalStages) {
        router.push("/escape-sub"); // 다음 페이지로 이동
      } else {
        setCurrentStage((prevStage) => prevStage + 1); // 스테이지 증가
        setRemainingTime(timeLimit); // 시간 초기화
      }
    } else {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
    setPaused(true); // 게임 오버 시 일시 정지
  };

  const restartGame = () => {
    setCurrentStage(1);
    setCurrentColorIndex(Math.floor(Math.random() * colors.length));
    setUserChoice("");
    setRemainingTime(timeLimit);
    setScore(0);
    setGameOver(false);
    setPaused(false); // 재시작 시 일시 정지 해제
  };

  return (
    <div className="color_text">
      <h1 className="text">알맞는 색의 문으로 들어가세요</h1>
      {gameOver ? (
        <div>
          <h2>게임 종료!</h2>
          <button onClick={restartGame}>다시 시작</button>
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
            {options.map((option, index) => (
              <button
                className="color button"
                key={index}
                onClick={() => handleUserChoice(option)}
                disabled={paused}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TimeAttackGame;
