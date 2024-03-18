import FormResetPassword from "./FormResetPassword";

const ResetPassword = () => {
  return (
    <div className="xxl:top-[357px] pt-16 lg:absolute lg:left-[315px] lg:top-[200px] lg:h-[316px] lg:w-[524px] lg:pt-0">
      <div className="relative h-full w-full">
        <h2 className="text-[36px] font-bold leading-[42.19px] text-orange-alta">
          Tạo lại mật khẩu
        </h2>

        <FormResetPassword />
      </div>
    </div>
  );
};

export default ResetPassword;
