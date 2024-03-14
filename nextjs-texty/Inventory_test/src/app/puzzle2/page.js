"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./puzzle2.css";
import Inventory from "../inventory/Inventory";

export default function puzzle2() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue === "0412") {
      router.push("/escape2"); // 정답을 입력하면 다음 페이지로 이동
    } else {
      alert("번호가 맞지 않습니다.");
    }
  };

  return (
    <section className="puzzle2">
      <div className="calendar">
        <div className="header">
          <h2>2024</h2>
          <h4>04</h4>
        </div>

        <div className="grid dateHead">
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>

        <div className="grid dateBoard">
          <div>　</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div>22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
        </div>
      </div>
      <div>
        <ul className="hint">
          <li>- 그녀석은 6보다 밑에 있어</li>
          <li>- 10 보다는 오른쪽에 있어</li>
          <li>- 나는 휴일이 싫어.</li>
          <li>- 6 번째 요일이 내 자리야.</li>
          <li>- 나는 3 번째 행보다 밑이 아니야.</li>
        </ul>
      </div>
      <ul className="hint">
        <li className="text">* 4자리 숫자로 입력해주세요. *</li>
      </ul>
      <div className="input">
        <input
          className="input text_box"
          placeholder="정답을 입력하세요."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="button" onClick={handleSubmit}>
          입력
        </button>
      </div>
      <Inventory />
    </section>
  );
}
