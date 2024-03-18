import { Navigate, useParams } from "react-router-dom";
import FormInfoStudent from "./FormInfoStudent";
import FormInfoBusiness from "./FormInfoBusiness";

const InfoRegister = () => {
  const { role } = useParams();
  console.log(role);

  if (role !== "student" && role !== "enterprise") {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="xxl:ml-[153px] px-4 lg:px-0 xl:w-[1108px]">
      <h1 className="text-[24px] font-bold uppercase leading-[28.13px] text-orange-alta lg:text-[32px] lg:leading-[37.5px]">
        Điền thông tin đăng ký
      </h1>
      {role === "student" && <FormInfoStudent />}
      {role === "enterprise" && <FormInfoBusiness />}
    </div>
  );
};

export default InfoRegister;
