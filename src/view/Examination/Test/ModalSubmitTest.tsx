import { Button, Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import { onCloseModalSubmitTest } from "../../../core/redux/features/exam/examSlice";
import { useNavigate } from "react-router-dom";

const ModalSubmitTest = () => {
  const { openSubmitTest } = useAppSelector((state) => state.exam);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCancel = () => {
    dispatch(onCloseModalSubmitTest());
  };
  return (
    <Modal open={openSubmitTest} onCancel={handleCancel} footer={false}>
      <div className="font-roboto flex flex-col items-center justify-center gap-6 py-[26px]">
        <h3 className="text-[26px] font-bold leading-[30px] text-orange-alta">
          Nộp Bài thi
        </h3>
        <p className="text-base text-[#666666]">
          Bạn có chắc muốn nộp bài thi hay không?
        </p>
        <div className="flex gap-3">
          <Button
            className="h-full w-[115px] border-[#F0F0F0] bg-[#F0F0F0] px-6 py-[10px] text-base font-medium hover:border-orange-alta"
            onClick={handleCancel}
          >
            Đóng
          </Button>
          <Button
            className="h-full w-[115px] bg-orange-alta px-6 py-[10px] text-base font-medium text-white"
            type="primary"
            onClick={() => {
              navigate("/test");
              handleCancel();
            }}
          >
            Xác nhận
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSubmitTest;
