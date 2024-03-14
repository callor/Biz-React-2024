"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./puzzle3.css";

export default () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  useEffect(() => {
    // 로컬 스토리지에서 사용자 이름 가져오기
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, [router]);
  const buttonHandler = () => {
    router.push("/ending");
  };

  return (
    <div className="puzzle3">
      <section className="letter">
        <h3>존경하는 {userName},</h3>
        <br />
        <p className="text">
          부디 당신이 이 글을 읽기 바라며... 놀라셨나요?
        </p>
        <br />
        <p className="text">
          현재 이 실험은 피실험자의 뇌파 반응을 연구하며 꿈이라는
          공간을 확장하여 사용자가 원하는 꿈을 보여준다는 의의를 가진
          채로 진행하던 실험이었습니다.
        </p>
        <br />
        <p className="text">
          하지만 실험 도중 저희가 발견하지 못한 오류가 발생하였고,
          현재 당신은 가사상태에서 깨어나지 못하고 있습니다.
        </p>
        <br />
        <p className="text">
          저희는 최선을 다해 당신을 현실 세계로 돌려보내기 위해
          노력하고 있다는 사실을 전하고 싶습니다.
          <br />
          이제와서 밝힌다고 생각하실 수 있겠지만, 아닙니다.
        </p>
        <p className="text">
          끊임없이 저희 연구진은 당신에게 이 사실을 알리고 있으나,
          어째선지 계속하여 이 사실을 잊고 어떠한 실험 이라는 것을
          반복하고 있습니다.
        </p>
        <br />
        <p className="text">
          이게 마지막이길 바라지만, 아마 아니겠죠.
          <br />
          <br />
          저희는 마지막까지 당신의 복귀를 위해 노력할 것입니다.
          <br />
          당신에게 행운이 있기를...
        </p>
        <br />
        <br />
        <br />

        <button className="button" onClick={buttonHandler}>
          {" "}
          다음&#8811;{" "}
        </button>
      </section>
    </div>
  );
};
