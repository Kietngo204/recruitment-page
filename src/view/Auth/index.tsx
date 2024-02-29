import { Outlet } from "react-router-dom";
import Logo from "./components/Logo";
import TitleAuth from "./components/BgAuth/TitleAuth";
import JoinUs from "./components/BgAuth/JoinUs";
import ModalSuccess from "./components/ModalSuccess";
import { auth } from "../../firebase/firebase";

import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { logout } from "../../core/redux/actions/userActionThunk";

const LoginLayout = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);

  const handleSignOut = () => {
    dispatch(logout());
  };

  console.log(user);

  console.log(auth.currentUser);
  return (
    <div className="relative h-[100dvh] bg-[#F1F3F5]">
      <Logo />

      <Outlet />

      <TitleAuth />

      <JoinUs />

      <ModalSuccess />

      <button
        className="absolute top-1 z-50 block"
        onClick={() => {
          handleSignOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default LoginLayout;
