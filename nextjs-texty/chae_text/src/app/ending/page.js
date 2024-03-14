"use client";

import React, { useEffect, useState } from "react";
import "./ending.css";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // 로컬 스토리지에서 사용자 이름 가져오기
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록
    const handleScroll = () => {
      // 페이지의 높이와 스크롤 위치 가져오기
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;
      // 페이지의 맨 아래로 스크롤되었는지 확인
      if (scrollTop + clientHeight >= scrollHeight) {
        // 맨 아래로 스크롤되었을 때 인덱스 페이지로 이동
        router.push("/");
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/"); // 엔딩이 끝나면 '/' 경로로 이동
    }, 13000); // 15초 후에 이동

    return () => clearTimeout(timer);
  }, []); // 처음 한 번만 실행

  return (
    <div className="scroll">
      <main className="ending">
        <h1>TEXTY</h1>
        <br />
        <h2>스토리 스크립트 / 로컬 스토리지 / 컵비율 맞추기</h2>
        <h4>채민선</h4>
        <h2>
          다이얼 퍼즐 / 달력 퍼즐 / 문 색깔 맞추기 퍼즐 / 인벤토리
        </h2>
        <h4>김선아</h4>
        <h2>스토리 구상</h2>
        <h4>채민선 / 김선아</h4>
        <h2>고마운 사람들</h2>
        <h4>{userName}</h4>
      </main>
    </div>
  );
};
