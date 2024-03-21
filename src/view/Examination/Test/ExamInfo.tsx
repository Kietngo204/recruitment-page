import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../core/redux/hooks";
import { onOpenModalSubmitTest } from "../../../core/redux/features/exam/examSlice";

const ExamInfo: React.FC<any> = ({ questions }) => {
  const dispatch = useAppDispatch();
  const [timeLeft, setTimeLeft] = useState(300);
  // Cập nhật thời gian mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear interval khi component unmount
    return () => clearInterval(timer);
  }, []);
  // Hàm để format thời gian dưới dạng HH:mm:ss
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="mt-6 grid  grid-cols-2 items-center justify-between rounded-xl bg-white px-6 sm:flex sm:h-[72px]">
      <p className="item-center flex flex-col text-base md:flex-row md:gap-2 md:text-xl">
        Tổng câu hỏi:{" "}
        <span className="font-semibold text-orange-alta">
          {questions.length}
        </span>
      </p>
      <p className="item-center flex flex-col text-base md:flex-row md:gap-2 md:text-xl">
        Hoàn thành:{" "}
        <span className="font-semibold text-orange-alta">
          {questions.length}/{questions.length}
        </span>
      </p>
      <p className="item-center flex gap-2 text-xl font-semibold text-orange-alta">
        <ClockCircleOutlined />
        {formatTime(timeLeft)}
      </p>
      <Button
        type="primary"
        className="mb-1 bg-orange-alta px-2 font-bold sm:mb-0 sm:h-[48px] sm:px-7"
        onClick={() => {
          dispatch(onOpenModalSubmitTest());
        }}
      >
        Nộp bài
      </Button>
    </div>
  );
};

export default ExamInfo;
