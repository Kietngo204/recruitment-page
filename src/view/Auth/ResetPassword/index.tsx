import FormResetPassword from "./FormResetPassword";

const ResetPassword = () => {
  return (
    <div className="absolute left-[315px] top-[357px] h-[316px] w-[524px]">
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
