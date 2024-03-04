/**
 * nextJS 는 SSR, CSR 을 모두 지원한다.
 * 기본적으로 모든 컴포넌트는 SSR 이다.
 * React 의 기본 hook 함수들은 모두 CSR 컴포넌트에서 작동한다
 * useState(), useEffect() 와 같은 함수들이 CSR 컴포넌트이므로
 * 이 컴포넌트를 Client Component 로 변환하여 함수를 사용할수 있도록
 * 하는 키워드
 */

export default ({ search, setSearch }) => {
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  return (
    <div className="search_box">
      <input
        placeholder="검색어"
        name="search"
        value={search}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
};
