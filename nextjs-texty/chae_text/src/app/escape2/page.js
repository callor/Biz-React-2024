"use client";

import React, { useState, useEffect } from "react";
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
    description: "망설임 없이 당신은 계단을 오릅니다. ",
    options: [
      {
        text: "...",
        nextScene: "door",
      },
    ],
  },
  door: {
    description:
      "얼마나 올랐을까, 계단의 끝에 다다르면 또 다시 문이네요.",
    options: [
      {
        text: "또야?",
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
      "너무 그러지 마세요 이 문은 잠겨있지 않습니다. 그냥 열고 가시면 됩니다.",
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
        text: "쪽지",
        nextScene: "memo",
      },
      {
        text: "컵",
        nextScene: "cup",
      },
      {
        text: "다시 돌아간다.",
        nextScene: "cell",
      },
    ],
  },
  desk2: {
    description:
      "둥그런 탁자. 탁자 위에는 작은 찻잔 세트가 있습니다. ",
    options: [
      {
        text: "컵",
        nextScene: "cup",
      },
      {
        text: "다시 돌아간다.",
        nextScene: "cell",
      },
    ],
  },
  memo: {
    description:
      "*갑자기 이런 부탁 미안한데, 내가 일이 생겨서 말이야... 분배 좀 대신 해줄 수 있어?\n꼭!! 정확히 같은 비율이어야 해. 해줄거지? 고마워! 나중에 갚을게*\n..이라는 내용의 쪽지입니다.",
    options: [
      {
        text: "가져간다",
        nextScene: "take",
      },
    ],
  },
};
export default () => {
  const [currentScene, setCurrentScene] = useState("start");
  const [paperTaken, setPaperTaken] = useState(false); // 종이를 가져갔는지 여부를 나타내는 상태
  const router = useRouter();

  const handleOptionClick = (nextScene) => {
    // 종이를 가져가는 조건
    if (nextScene === "take") {
      setPaperTaken(true); // 종이를 가져감

      const newItem = {
        name: "쪽지",
        description:
          "*정말 미안! 고마워! 컵은 옆에 있으니까 편하게 해!!*",
      };
      const inventoryItems =
        JSON.parse(localStorage.getItem("inventory")) || [];
      inventoryItems.push(newItem);
      localStorage.setItem(
        "inventory",
        JSON.stringify(inventoryItems)
      );
      window.dispatchEvent(new CustomEvent("inventoryUpdate"));

      // 여기에서 인벤토리 컴포넌트의 상태를 업데이트하는 이벤트를 발생시키거나,
      // 인벤토리 상태 관리를 위한 전역 상태 관리 솔루션(예: Context API, Redux)의 상태를 업데이트할 수 있습니다.
      setCurrentScene("desk2");
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

    if (nextScene === "cup") {
      router.push("/puzzle3");
    }
    setCurrentScene(nextScene);
  };

  const title =
    currentScene.startsWith("start") ||
    currentScene.startsWith("door")
      ? "계단"
      : "하얀 방";

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <header className={styles.title}>
          <h1>{title}</h1>
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
