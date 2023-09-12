import { createContext, useContext, useState, useEffect } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [userId, setUserId] = useState();

  useEffect(() => {
    const userIdd = localStorage.getItem("userId");
    setUserId(userIdd);
  }, []);

  return (
    <TokenContext.Provider value={{ userId, setUserId }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useUserId = () => {
  return useContext(TokenContext);
};
