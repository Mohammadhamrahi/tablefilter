import { Table } from "antd";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import {
  DeleteOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
const TableComponent = () => {
  const { userId, setTodos, todos } = useContext(Context);
  const option = userId ? `?userId=${userId}` : "";
  useAxios("todos", option, userId, setTodos);

  const deletechange = (userId) => {
    console.log(userId);
    axios
      .delete(`http://localhost:4000/todos/${userId}`)
      .then((res) => console.log(res));
  };
  const columns = [
    {
      id: 1,
      title: "id",
      dataIndex: "id",
    },
    {
      userId: 1,
      title: "userId",
      dataIndex: "userId",
    },
    {
      title: "title",
      completed: false,
      dataIndex: "title",
    },
    {
      title: "completed",
      dataIndex: "completed",
      render: (text) => (
        <span>
          {!text ? (
            <CheckOutlined style={{ color: "green" }} />
          ) : (
            <CloseOutlined style={{ color: "red" }} />
          )}
        </span>
      ),
    },
    {
      title: "Delete",
      dataIndex: "userId",
      render: (userId) => (
        <div>
          {
            <DeleteOutlined
              onClick={() => deletechange(userId)}
              style={{ color: "red" }}
            />
          }
        </div>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={todos} />
    </div>
  );
};
export default TableComponent;
