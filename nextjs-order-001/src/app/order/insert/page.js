const OrderInsert = () => {
  return (
    <>
      <h1>주문서 입력</h1>
      <form>
        <div>
          <input placeholder="고객코드" />
        </div>
        <div>
          <input placeholder="상품코드" />
          <input placeholder="주문수량" />
          <button>추가</button>
        </div>
      </form>
      <div>
        <h3>상품리스트</h3>
        <ul>
          <li>P00010</li>
          <li>P00010</li>
          <li>P00010</li>
        </ul>
      </div>
    </>
  );
};
export default OrderInsert;
