import { Outlet } from "react-router-dom";
import Logo from "./components/Logo";
import TitleAuth from "./components/BgAuth/TitleAuth";
import JoinUs from "./components/BgAuth/JoinUs";
import ModalSuccessPassword from "./components/ModalSuccessPassword";

const LoginLayout = () => {
  return (
    <div className="relative h-[100dvh] bg-[#F1F3F5]">
      <Logo />

      <Outlet />

      <TitleAuth />

      <JoinUs />

      <ModalSuccessPassword />
    </div>
  );
};

export default LoginLayout;
