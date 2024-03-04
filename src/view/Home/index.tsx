import { ConfigProvider } from "antd";
import Examination from "./Examination";

const Home = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            colorBorder: "#fff",
            colorPrimaryHover: "#fff",
            colorPrimary: "#fff",
            optionPadding: "10px 16px",
            optionSelectedColor: "#f26d21",
            optionSelectedFontWeight: 500,
          },
          Form: {
            margin: 0,
          },
        },
      }}
    >
      <div className="h-[100dvh] pt-[52px]">
        <div className="container mx-auto">
          <Examination />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Home;
