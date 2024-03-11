import { ClockCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ExamInfo = () => {
  return (
    <div className="mt-6 flex h-[72px] items-center justify-between rounded-xl bg-white px-6">
      <p className="text-xl">
        Tổng câu hỏi: <span className="font-semibold text-orange-alta">20</span>
      </p>
      <p className="text-xl">
        Hoàn thành: <span className="font-semibold text-orange-alta">2/20</span>
      </p>
      <p className="text-xl font-semibold text-orange-alta">
        <ClockCircleOutlined /> 00:05:00
      </p>
      <Button type="primary" className="h-[48px] bg-orange-alta px-7 font-bold">
        Nộp bài
      </Button>
    </div>
  );
};

export default ExamInfo;
