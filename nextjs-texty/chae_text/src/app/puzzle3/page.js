"use client";
import React, { useState, useEffect } from "react";
import "./puzzle3.css"; // 스타일 파일
import { useRouter } from "next/navigation";

export default function CupPuzzle() {
  const [cups, setCups] = useState([
    { id: 1, volume: 0.3, fixedTransferAmount: 0.2 },
    { id: 2, volume: 0.4, fixedTransferAmount: 0.5 },
    { id: 3, volume: 0.8, fixedTransferAmount: 0.3 },
  ]);
  const [selectedCup, setSelectedCup] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const allEqual = cups.every(
      (cup) => Math.abs(cup.volume - cups[0].volume) < 0.01
    );
    if (allEqual && cups.length > 0) {
      setTimeout(() => {
        confirm("쿵. 어디선가 큰 소리가 들렸는데? 살펴봐야겠다.");
        router.push("/escape2-sub");
      }, 500); // 3초 후에 실행
    }
  }, [cups]);

  const handleCupClick = (id) => {
    if (selectedCup && selectedCup !== id) {
      const sourceCup = cups.find((cup) => cup.id === selectedCup);
      const targetCup = cups.find((cup) => cup.id === id);

      // 소스 컵에서 이동 가능한 최대 양을 계산
      const maxTransferableAmount = Math.min(
        sourceCup.fixedTransferAmount,
        sourceCup.volume
      );
      // 타겟 컵이 받을 수 있는 최대 양을 계산
      const maxReceivableAmount = 1 - targetCup.volume;
      // 실제 이동할 양은 이동 가능한 최대 양과 타겟 컵이 받을 수 있는 최대 양 중 작은 값
      const transferAmount = Math.min(
        maxTransferableAmount,
        maxReceivableAmount
      );

      setCups(
        cups.map((cup) => {
          if (cup.id === selectedCup) {
            return { ...cup, volume: cup.volume - transferAmount };
          } else if (cup.id === id) {
            return { ...cup, volume: cup.volume + transferAmount };
          }
          return cup;
        })
      );
      setSelectedCup(null);
    } else {
      setSelectedCup(id);
    }
  };

  return (
    <div className="cup-puzzle">
      <h1>컵들의 비율을 맞춰야 할 것 같다.</h1>
      <div className="cups-container">
        {cups.map((cup) => (
          <div
            key={cup.id}
            className={`cup ${
              selectedCup === cup.id ? "selected" : ""
            }`}
            onClick={() => handleCupClick(cup.id)}
          >
            <div
              className="water"
              style={{ height: `${cup.volume * 100}%` }}
            ></div>
            {/* <p>
              컵 {cup.id}: {cup.volume.toFixed(2)}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
