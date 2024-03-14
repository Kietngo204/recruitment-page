import { Spin } from "antd";

interface LoadingState {
  fullscreen?: boolean;
  isLoading?: boolean;
}

const Loading: React.FC<LoadingState> = ({ fullscreen = false, isLoading }) => {
  return (
    <div className="flex h-[50dvh] flex-col items-center justify-center">
      <Spin
        spinning={isLoading}
        size="large"
        fullscreen={fullscreen}
        className="flex  items-center justify-center"
      >
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Loading;
