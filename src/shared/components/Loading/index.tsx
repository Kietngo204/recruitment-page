import { Spin } from "antd";

interface LoadingState {
  fullscreen?: boolean;
}

const Loading: React.FC<LoadingState> = ({ fullscreen = false }) => {
  return (
    <Spin
      tip="Loading"
      size="large"
      fullscreen={fullscreen}
      className="flex items-center justify-center"
    >
      <div className="content" />
    </Spin>
  );
};

export default Loading;
