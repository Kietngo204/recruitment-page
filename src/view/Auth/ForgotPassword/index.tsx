import FormForgotPassword from "./FormForgotPassword";

const ForgotPassword = () => {
  return (
    <div className="xxl:top-[380px] pt-16 lg:absolute lg:left-[315px] lg:top-[200px] lg:h-[316px] lg:w-[524px] lg:pt-0">
      <div className="relative h-full w-full">
        <h2 className="text-[36px] font-bold leading-[42.19px] text-orange-alta">
          Quên mật khẩu
        </h2>
        <p className="absolute top-[48px] h-[42px] w-[359px] leading-[20.8px]">
          Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật
          khâu
        </p>

        <FormForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPassword;
