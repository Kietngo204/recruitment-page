import { SendOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ButtonSend = () => {
  return (
    <Button
      htmlType="submit"
      type="primary"
      className=" flex h-[48px] w-[140px] items-center justify-center bg-orange-alta text-base font-bold text-white"
    >
      Gửi <SendOutlined />
    </Button>
  );
};

export default ButtonSend;
