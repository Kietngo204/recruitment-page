import { Button, Modal } from "antd";
import { useState } from "react";

const ModalSuccessPassword = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      maskClosable={false}
      className="absolute left-[50%] top-[50%] h-[270px] w-[470px] translate-x-[-50%] translate-y-[-50%]"
    >
      <div className="flex flex-col items-center justify-center gap-6 px-16 py-10">
        <h3 className="text-[24px] font-bold leading-[28.13px] text-orange-alta">
          Tạo mật khẩu thành công
        </h3>
        <p className="h-[42px] w-[289px] text-center text-base">
          Đăng nhập ngay để bắt đầu <br /> nhận được các cơ hội sự nghiệp lý
          tưởng
        </p>
        <Button className="h-full bg-orange-alta px-6 py-[10px]" type="primary">
          Đăng nhập ngay
        </Button>
      </div>
    </Modal>
  );
};

export default ModalSuccessPassword;
