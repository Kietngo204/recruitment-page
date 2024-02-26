import FormLogin from "./FormLogin";
import "../auth.css";
const Login = () => {
  return (
    <div className="absolute left-[315px] top-[202px]">
      <h2 className="text-[36px] font-bold leading-[42.19px] text-orange-alta">
        Đăng nhập
      </h2>
      <FormLogin />
    </div>
  );
};

export default Login;
