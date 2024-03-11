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
  const { user } = useAppSelector((state) => state.user);

  console.log(user);

  console.log(auth.currentUser);

  const dispatch = useAppDispatch();

  const { images } = useAppSelector((state) => state.images);

  console.log("images:", images);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  if (!images) {
    return <Loading />;
  }

  if (location.pathname == "/auth") {
    return <Navigate to={"/"} replace />;
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
