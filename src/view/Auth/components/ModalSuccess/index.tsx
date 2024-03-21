import { Button, Modal } from "antd";

import { useAppDispatch, useAppSelector } from "../../../../core/redux/hooks";
import { handleCancel } from "../../../../core/redux/features/modalSuccess/modalSuccessSlice";
import { useNavigate } from "react-router-dom";

const ModalSuccess = () => {
  const {
    open,
    title,
    button,
    navigate: link,
    titleSecond,
  } = useAppSelector((state) => state.modalSuccess);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCancelModal = () => {
    dispatch(handleCancel());
    navigate(link);
  };

  const renderTitleSecond = () => {
    return { __html: titleSecond };
  };

  return (
    <Modal
      open={open}
      onCancel={handleCancelModal}
      footer={null}
      maskClosable={false}
      centered
    >
      <div className="flex flex-col items-center justify-center gap-6 px-16 py-10">
        <h3 className="text-center text-[24px] font-bold leading-[28.13px] text-orange-alta">
          {title}
        </h3>
        <p
          className="h-[42px] w-[289px] text-center text-base"
          dangerouslySetInnerHTML={renderTitleSecond()}
        />
        <Button
          className="h-full bg-orange-alta px-6 py-[10px]"
          type="primary"
          onClick={() => {
            navigate(link);
            handleCancelModal();
          }}
        >
          {button}
        </Button>
      </div>
    </Modal>
  );
};

export default ModalSuccess;
