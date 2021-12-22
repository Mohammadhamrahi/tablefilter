import { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  return (
    <Context.Provider
      value={{ userId, setUserId, users, setUsers, todos, setTodos }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
