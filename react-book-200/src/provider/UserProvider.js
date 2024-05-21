import { createContext, useState } from "react";

/*
ContextProvider
React 의 Driling Props 를 회피하기 위한 Global State 를 관리하는 도구

*/
// Context 생성하기
const UserContext = createContext();

// Provider 생성하기
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
