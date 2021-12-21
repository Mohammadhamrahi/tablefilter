import { Table } from "antd";
import { useContext } from "react";
import { Context } from "../../Context/Context";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const TableComponent = () => {
  const { userId, setTasks, tasks } = useContext(Context);
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
  ];
  return (
    <div>
      <Table columns={columns} dataSource={tasks} />
      <span>sdfasd</span>
    </div>
  );
};
export default TableComponent;
