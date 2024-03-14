"use client";

import React, { useState } from "react";
import styles from "../styles/game.module.css"; // 스타일링을 위한 CSS 모듈 파일
import { useRouter } from "next/navigation";
import Inventory from "../inventory/Inventory";

const scenarios = {
  start: {
    description:
      "당신은 달력을 보고 알아낸 숫자들을 독방 문에 입력해봅니다. 삐리릭- 문은 손쉽게 열렸네요. 문을 열고 밖으로 나가면 위로 이어진 계단이 나옵니다.",
    options: [
      {
        text: "올라간다",
        nextScene: "start2",
      },
    ],
  },
  start2: {
    description:
      "망설임 없이 당신은 계단을 오릅니다. 얼마나 올랐을까, 당신은 바닥에 떨어진 종이를 발견했습니다.",
    options: [
      {
        text: "줍는다",
        nextScene: "door",
      },
    ],
  },
  door: {
    description:
      "당신은 종이를 줍고 쭉 올라갑니다. 계단의 끝에 다다르면 또 다시 문이네요.",
    options: [
      {
        text: "또?",
        nextScene: "door2",
      },
      {
        text: "지겹다",
        nextScene: "door2",
      },
    ],
  },

  door2: {
    description:
      "너무 그러지 마세요. 이 문은 잠겨있지 않습니다. 그냥 열고 가시면 됩니다.",
    options: [
      {
        text: "... (문을 연다)",
        nextScene: "room",
      },
    ],
  },
  room: {
    description:
      "문을 열자 사면이 하얀 방이 보입니다. 방 한가운데는 동그란 탁자만이 자리하고 있습니다. 둘러보는게 좋겠어요.",
    options: [
      {
        text: "둘러본다",
        nextScene: "cell",
      },
    ],
  },
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
    description: "그냥 벽입니다. 사방이 벽으로 꽉 막혀있습니다.",
    options: [
      {
        text: "다시 돌아간다",
        nextScene: "cell",
      },
    ],
  },
  desk: {
    description:
      "둥그런 탁자. 탁자 위에는 작은 찻잔 세트와 함께 작은 쪽지가 하나 남겨져 있습니다. ",
    options: [
      {
        text: "자세히 본다",
        nextScene: "cup",
      },
      {
        text: "다시 돌아간다.",
        nextScene: "cell",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("start");
  const router = useRouter();

  const handleOptionClick = (nextScene) => {
    if (nextScene === "cup") {
      router.push("/puzzle3");
    }
    setCurrentScene(nextScene);
  };

  return (
    <div className={styles.container}>
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
