// pages/game.escape.js

"use client";

import React, { useState } from "react";
import styles from "./game.module.css";
import { useRouter } from "next/navigation";
import Inventory from "../inventory/Inventory";
import { createInven } from "@/app/api/inven"; // 올바른 함수 이름 사용

const scenarios = {
  start: {
    description:
      "깨어난 당신은 넓은 들판의 하늘을 바라보고 있습니다.",
    options: [
      {
        text: "갑자기?",
        nextScene: "dumy",
      },
      {
        text: "웬 들판?",
        nextScene: "dumy",
      },
      {
        text: "무슨 소릴 하는거야",
        nextScene: "dumy",
      },
    ],
  },
  dumy: {
    description: "아.",
    options: [
      {
        text: "아?",
        nextScene: "dumy2",
      },
    ],
  },
  dumy2: {
    description:
      "잘못말했습니다. 당신은 꽉 막힌 지하 독방에서 일어납니다.",
    options: [
      {
        text: "주변을 둘러본다.",
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
    ],
  },
  bed: {
    description: "푹신푹신한 침대입니다. 아무것도 없네요.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  desk: {
    description: "책상에는 종이가 있습니다.",
    options: [
      {
        text: "종이를 살펴본다",
        nextScene: "paper",
      },
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  desk2: {
    description: "책상에는 아무것도 없습니다.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  phone: {
    description:
      "붉은 색의 전화기입니다. 입력 할 수 있을 것 같습니다.",
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
    description:
      "종이를 살펴보니 숫자가 적혀있습니다. '010 - 9462 - 5221' - 전화해♥ ",
    options: [
      {
        text: "가져간다",
        nextScene: "take",
      },
    ],
  },
  dial: {
    description: "전화",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("start");
  const [paperTaken, setPaperTaken] = useState(false); // 종이를 가져갔는지 여부를 나타내는 상태
  const router = useRouter();

  const handleOptionClick = async (nextScene) => {
    // 종이를 가져가는 조건
    if (nextScene === "take") {
      setPaperTaken(true); // 종이를 가져감

      // 인벤토리 아이템 추가 로직 수정 및 실행
      const invenData = {
        i_seq: 1,
        i_item: "종이",
        i_description: "010-9462-5221 이라고 적혀있다.",
      };

      try {
        await createInven(invenData); // 수정된 함수 호출
      } catch (error) {
        console.error("인벤토리 아이템 추가 중 오류 발생:", error);
      }

      setCurrentScene("cell");
      return; // 추가 처리를 방지하기 위해 여기서 함수 실행 종료
    }

    // 책상을 보는 조건
    if (nextScene === "desk") {
      if (paperTaken) {
        // 종이를 가져갔다면 desk2 씬으로 변경
        setCurrentScene("desk2");
      } else {
        // 종이를 가져가지 않았다면 desk 씬 유지
        setCurrentScene("desk");
      }
      return; // 추가 처리를 방지하기 위해 여기서 함수 실행 종료
    }

    // 전화를 입력하는 조건
    if (nextScene === "dial") {
      router.push("/puzzle1"); // 다이얼 씬으로 이동
      return; // 추가 처리를 방지하기 위해 여기서 함수 실행 종료
    }

    // 기타 모든 씬에 대한 처리
    setCurrentScene(nextScene);
  };
  const title =
    currentScene === "start" || currentScene === "dumy"
      ? "넓은 들판"
      : "지하 독방";
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>{title}</h1>
        </header>
        <div className={styles.description}>
          {scenarios[currentScene].description}
        </div>
        <div className={styles.options}>
          {scenarios[currentScene].options.map((option, index) => (
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
