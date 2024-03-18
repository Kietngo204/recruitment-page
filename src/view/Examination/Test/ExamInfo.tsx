import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ExamInfo = () => {
  return (
    <div className="mt-6 grid  grid-cols-2 items-center justify-between rounded-xl bg-white px-6 sm:flex sm:h-[72px]">
      <p className="item-center flex flex-col text-base md:flex-row md:gap-2 md:text-xl">
        Tổng câu hỏi: <span className="font-semibold text-orange-alta">20</span>
      </p>
      <p className="item-center flex flex-col text-base md:flex-row md:gap-2 md:text-xl">
        Hoàn thành: <span className="font-semibold text-orange-alta">2/20</span>
      </p>
      <p className="item-center flex gap-2 text-xl font-semibold text-orange-alta">
        <ClockCircleOutlined /> 00:05:00
      </p>
      <Button
        type="primary"
        className="mb-1 bg-orange-alta px-2 font-bold sm:mb-0 sm:h-[48px] sm:px-7"
      >
        Nộp bài
      </Button>
    </div>
  );
};

export default ExamInfo;
