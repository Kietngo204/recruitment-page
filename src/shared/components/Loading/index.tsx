import { Spin } from "antd";

const Loading = () => {
  return (
    <Spin
      tip="Loading"
      size="large"
      fullscreen={true}
      className="flex items-center justify-center"
    >
      <div className="content" />
    </Spin>
  );
};

export default Loading;
