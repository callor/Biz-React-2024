import css from "@/css/order.module.css";
import Link from "next/link";

const OrderPage = () => {
  return (
    <section className={css.main}>
      <h1>주문서 시작화면</h1>
      <div>
        <Link href="/order/insert">주문서 추가</Link>
      </div>
    </section>
  );
};
export default OrderPage;
