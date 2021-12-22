import { Select } from "antd";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import useAxios from "../../hooks/useAxios";
const { Option } = Select;
const FilterComponent = () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }
  const { setUsers, setUserId, users } = useContext(Context);
  useAxios("users", "", null, setUsers);

  const changehandler = (value) => {
    setUserId(value);
  };

  return (
    <Select
      size={"large"}
      onChange={onChange}
      onChange={changehandler}
      allowClear
    >
      {users?.map((user) => (
        <Option key={user.id}>{user.name}</Option>
      ))}
    </Select>
  );
};
export default FilterComponent;
