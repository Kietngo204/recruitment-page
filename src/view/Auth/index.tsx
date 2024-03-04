import { Navigate, Outlet, useLocation } from "react-router-dom";
import Logo from "../../shared/components/Logo";
import TitleAuth from "./components/BgAuth/TitleAuth";
import JoinUs from "./components/BgAuth/JoinUs";
import ModalSuccess from "./components/ModalSuccess";
import { auth } from "../../firebase/firebase";

import { useAppSelector } from "../../core/redux/hooks";

const AuthLayout = () => {
  const location = useLocation();
  console.log(location);

  const { user } = useAppSelector((state) => state.user);

  console.log(user);

  console.log(auth.currentUser);

  if (location.pathname == "/auth") {
    return <Navigate to={"/"} replace />;
  }
  return (
    <div className="relative h-[100dvh] bg-[#F1F3F5]">
      <Logo absolute={true} left="315px" top="54px" />

      <Outlet />

      <TitleAuth />

      <JoinUs />

      <ModalSuccess />
    </div>
  );
};

export default AuthLayout;
