import { Children, createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ Children }) => {
  const [userId, setUserId] = useState();
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  <Context.Provider
    value={{ userId, setUserId, users, setUsers, tasks, setTasks }}
  >
    {Children}
  </Context.Provider>;
};
export default ContextProvider;
