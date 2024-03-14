"use client";
import Inventory from "../comps/Inventory";
import { useRouter } from "next/navigation";
import "./puzzle3.css";

export default () => {
  const router = useRouter();
  const buttonHandler = () => {
    router.push("/main");
  };
  return (
    <div className="puzzle3">
      <section className="letter">
        <h3>존경하는 플레이어,</h3>
        <p className="text">
          부디 당신이 이 글을 읽기 바라며... 놀라셨나요?
        </p>
        <p className="text">
          이건 저희가 준비한 테스트 중 하나입니다.
          <br />
          우리는 당신의 참여에 감사드리며, 저희는 항상 문제발생을
          대비하여 당신을 모니터링 하고 있고 그에 대한 기록을 하고
          있습니다.
        </p>
        <p className="text">
          또한, 당신이 이 테스트에서 탈출하지 못한다고 해서 걱정하지
          마십시오.
          <br />
          이건 실험의 한 부분이며, 언제든지 현실로 돌아갈 수 있습니다.
        </p>
        <p className="text">
          당신은 안전하며, 이 실험은 아무런 문제가 없었음을 다시 한번
          알려드립니다.
          <br />
          우리는 당신을 통해 새로운 정보를 얻고 이로 더 나은 세계를
          만들려 합니다.
        </p>
        <p className="text">이 실험에 참여해 주셔서 감사합니다.</p>
        <p className="text hidden">
          이런 말씀을 드리게 되어 죄송합니다.
          <br />
          현재 이 공간은 당신의 뇌파를 이용해 만든 공간입니다.
          <br />
          저희 연구진은 당신을 현실로 돌려보내기 위해 최선을 다하고
          있습니다.
          <br />
          저희를 믿고 기다려 주세요.
        </p>
        <button className="button" onClick={buttonHandler}>
          {" "}
          다음&#8811;{" "}
        </button>
      </section>
      <p className="text2">
        자세히 보니 편지에 연필로 꾹꾹 눌러 쓴 자국이 보인다.
      </p>
      <p className="color">*편지를 드레그 해주세요* </p>
      <Inventory />
    </div>
  );
};
