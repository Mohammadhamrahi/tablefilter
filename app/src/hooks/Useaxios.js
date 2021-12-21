import { useEffect } from "react";
import axios from "react";
const Useaxios = (endpoint, option, dependency, setData) => {
  useEffect(() => {
    axios
      .get("http://localhost:4000/${endpoint}${option}")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, [dependency]);
  return <div></div>;
};
export default Useaxios;
