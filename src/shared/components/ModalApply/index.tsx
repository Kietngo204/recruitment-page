import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import { setCloseModalApply } from "../../../core/redux/features/modalApply/modalApplySlice";

const ModalApply = () => {
  const { images } = useAppSelector((state) => state.images);
  const { openApply } = useAppSelector((state) => state.modalApply);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(setCloseModalApply());
  };
  return (
    <Modal
      centered
      open={openApply}
      destroyOnClose={true}
      footer={null}
      closeIcon={null}
      maskClosable={false}
      className="relative max-w-[466px]"
    >
      <img
        src={images?.decorate}
        alt="decorate"
        className="absolute left-[0px] top-[0px] h-[103.16px] w-[354.93px]"
      />
      <img
        src={images?.loudspeaker}
        alt="loudspeaker"
        className="w- 147.93px] absolute bottom-[0px] right-[0px]
        h-[146.14px]"
      />
      <div className="mx-auto flex h-[227px] w-[418px] flex-col items-center justify-center">
        <h3 className="text-[32px] font-bold leading-9 text-orange-alta">
          Thông báo
        </h3>
        <p className="pt-3 text-center text-[16px] leading-6">
          Bạn đã nộp đơn ứng tuyển thành công.
          <br /> Vui lòng đợi phản hồi từ công ty qua mail của bạn!
        </p>
        <button
          className="mt-4 rounded-lg bg-[#EDEDED] px-8 py-[11px] text-[16px] font-semibold leading-6"
          onClick={handleCancel}
        >
          Đóng
        </button>
      </div>
    </Modal>
  );
};

export default ModalApply;
