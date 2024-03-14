import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { ConfigProvider } from "antd";
import { homeTheme } from "../../shared/antd/homeTheme";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { getImages } from "../../core/redux/actions/imagesActionThunk";
import ModalApply from "../../shared/components/ModalApply";
import Loading from "../../shared/components/Loading";

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const { images } = useAppSelector((state) => state.images);

  console.log("images:", images);
  useEffect(() => {
    dispatch(getImages());
  }, []);

  if (!images) {
    return <Loading fullscreen={true} />;
  }
  return (
    <div>
      <Header />

      <ConfigProvider theme={homeTheme}>
        <div className="h-[100dvh] pt-[52px]">
          <div className="container mx-auto">
            <Outlet />
          </div>
        </div>
      </ConfigProvider>

      <ModalApply />
      <Footer />
    </div>
  );
};

export default MainLayout;
