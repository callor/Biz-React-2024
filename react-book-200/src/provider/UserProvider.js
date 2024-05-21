import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

/*
ContextProvider
React 의 Driling Props 를 회피하기 위한 Global State 를 관리하는 도구

*/
// Context 생성하기
const UserContext = createContext();

/*
react 의 useContext() Hook 함수를 사용자정의(커스텀)하여
UsreContext 에 저장된 state 을 사용할수 있도록 도와주는 함수
함수이름이 반드시 use**() 으로 시작해야 한다
*/
const useUserContext = () => {
  return useContext(UserContext);
};

// Provider 생성하기
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const onFechUser = useCallback(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user");
      const json = await res.json();
      setUser(json.username);
    };
    fetchUser();
  }, []);

  useEffect(onFechUser, [onFechUser]);

  return (
    <UserContext.Provider value={{ user, setUser, onFechUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider, useUserContext };
