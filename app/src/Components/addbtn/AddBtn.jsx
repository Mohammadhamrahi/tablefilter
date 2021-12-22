import { Button, Modal, Input, Select } from "antd";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
const { Option } = Select;
const AddBtn = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userId, setUserId] = useState();
  const { users, setUsers } = useContext(Context);
  const [task, setTask] = useState();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios
      .post(` http://localhost:4000/todos`, {
        userId,
        title: task,
        completed: false,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
      .finally(() => setIsModalVisible(false));
  };
  const { TextArea } = Input;

  return (
    <div>
      <Button onClick={showModal}>add</Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk}>
        <Select
          size={"large"}
          onChange={(value) => setUserId(value)}
          allowClear
        >
          {users?.map((user) => (
            <Option>{user.name}</Option>
          ))}
        </Select>
        <TextArea
          showCount
          maxLength={20}
          onChange={(e) => setTask(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default AddBtn;
