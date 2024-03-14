import { Navigate, Outlet, useLocation } from "react-router-dom";
import Logo from "../../shared/components/Logo";
import TitleAuth from "./components/BgAuth/TitleAuth";
import JoinUs from "./components/BgAuth/JoinUs";
import ModalSuccess from "./components/ModalSuccess";
import { auth } from "../../firebase/firebase";

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
    <div className="relative h-[100dvh] bg-[#F1F3F5]">
      <Logo absolute="absolute" left="left-[315px]" top="top-[54px]" />

      <Outlet />

      <TitleAuth />

      <JoinUs />

      <ModalSuccess />
    </div>
  );
};

export default AuthLayout;
