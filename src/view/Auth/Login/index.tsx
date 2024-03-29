import FormLogin from "./FormLogin";
import "../auth.css";
import { useAppSelector } from "../../../core/redux/hooks";
import { Navigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const { user } = useAppSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  if (user) {
    const redirectTo = searchParams.get("redirectTo");
    return <Navigate to={redirectTo || "/"} replace />;
  }
  return (
    <div className="pt-16 lg:absolute  lg:left-[315px] lg:top-[202px] lg:pt-0">
      <h2 className="text-[36px] font-bold leading-[42.19px] text-orange-alta">
        Đăng nhập
      </h2>
      <FormLogin />
    </div>
  );
};

export default Login;
