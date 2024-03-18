import { useNavigate } from "react-router-dom";
import { CurrentPathProps } from "../Study/StudyTypes";

const Business: React.FC<CurrentPathProps> = ({ currentPath }) => {
  const navigate = useNavigate();
  const isBusinessActive = currentPath?.startsWith("/info-register/enterprise");
  return (
    <div
      className="flex h-[40px] cursor-pointer  items-center justify-between"
      onClick={() => {
        navigate("/info-register/enterprise");
      }}
    >
      <svg
        width={25}
        height={24}
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 6.16667H6.16667M5 9.66667H6.16667M10.8333 9.66667H12M10.8333 13.1667H12M5 13.1667H6.16667M10.8333 6.16667H12M6.16667 22.5V19C6.16667 17.7113 7.21134 16.6667 8.5 16.6667C9.78866 16.6667 10.8333 17.7113 10.8333 19V22.5H6.16667ZM6.16667 22.5H1.5V3.36667C1.5 2.71327 1.5 2.38657 1.62716 2.13701C1.73901 1.91749 1.91749 1.73901 2.13701 1.62716C2.38657 1.5 2.71327 1.5 3.36667 1.5H13.6333C14.2867 1.5 14.6134 1.5 14.863 1.62716C15.0825 1.73901 15.261 1.91749 15.3728 2.13701C15.5 2.38657 15.5 2.71327 15.5 3.36667V8.5M20.9833 13.75C20.9833 14.7165 20.1998 15.5 19.2333 15.5C18.2668 15.5 17.4833 14.7165 17.4833 13.75C17.4833 12.7835 18.2668 12 19.2333 12C20.1998 12 20.9833 12.7835 20.9833 13.75ZM23.0833 22.5V21.9167C23.0833 20.3058 21.7775 19 20.1667 19H18.4167C16.8058 19 15.5 20.3058 15.5 21.9167V22.5H23.0833Z"
          stroke={isBusinessActive ? "#f26d21" : "#6d6d6d"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p
        className={`pl-2 text-xl font-medium ${
          isBusinessActive ? "text-orange-alta" : "text-[#6D6D6D]"
        }`}
      >
        Doanh nghiệp đăng kí
      </p>
    </div>
  );
};

export default Business;
