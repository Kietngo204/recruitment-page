import { Outlet } from "react-router-dom";
import Logo from "../../shared/components/Logo";
import TitleAuth from "./components/BgAuth/TitleAuth";
import JoinUs from "./components/BgAuth/JoinUs";
import ModalSuccess from "./components/ModalSuccess";

import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { useEffect } from "react";
import { getImages } from "../../core/redux/actions/imagesActionThunk";
import Loading from "../../shared/components/Loading";

const AuthLayout = () => {
  const dispatch = useAppDispatch();

  const { images } = useAppSelector((state) => state.images);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  if (!images) {
    return <Loading fullscreen={true} />;
  }

  return (
    <div className="h-[100dvh] bg-[#F1F3F5] px-4 py-[15px] lg:relative lg:px-0 lg:py-0">
      <Logo absolute="lg:absolute" left="lg:left-[315px]" top="lg:top-[54px]" />

      <Outlet />

      <TitleAuth />

      <JoinUs />

      <ModalSuccess />
    </div>
  );
};

export default AuthLayout;
