import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { ConfigProvider } from "antd";
import { homeTheme } from "../../shared/antd/homeTheme";

const MainLayout = () => {
  return (
    <div>
      <Header />

      <ConfigProvider theme={homeTheme}>
        <div className="h-[100dvh] pt-[52px]">
          <div className="container mx-auto flex justify-center">
            <Outlet />
          </div>
        </div>
      </ConfigProvider>

      <Footer />
    </div>
  );
};

export default MainLayout;
