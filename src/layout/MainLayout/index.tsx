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
import RightMenu from "../RightMenu";

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const { images } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  if (!images) {
    return <Loading fullscreen={true} />;
  }
  return (
    <>
      <Header />

      <main className="pt-[52px]">
        <ConfigProvider theme={homeTheme}>
          <div className="container mx-auto">
            <Outlet />
          </div>
        </ConfigProvider>
      </main>
      <ModalApply />
      <RightMenu />
      <Footer />
    </>
  );
};

export default MainLayout;
