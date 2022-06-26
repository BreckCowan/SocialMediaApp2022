import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });

  return (
    <UserContext.Provider value={[state, useState]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
