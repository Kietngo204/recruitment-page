import { useNavigate } from "react-router-dom";
import { CurrentPathProps } from "../Study/StudyTypes";

const FindJob: React.FC<CurrentPathProps> = ({ currentPath }) => {
  const navigate = useNavigate();
  const isFindJobActive = currentPath?.startsWith("/job");
  return (
    <div
      className="flex h-[40px] cursor-pointer  items-center justify-between"
      onClick={() => {
        navigate("/job-list");
      }}
    >
      <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.1666 10.5L15.1666 3.5M22.1666 10.5H18.9C17.5932 10.5 16.9398 10.5 16.4407 10.2457C16.0016 10.022 15.6447 9.66502 15.421 9.22598C15.1666 8.72685 15.1666 8.07346 15.1666 6.76667V3.5M22.1666 10.5V12.8333M15.1666 3.5H9.56665C8.25986 3.5 7.60646 3.5 7.10734 3.75432C6.66829 3.97802 6.31134 4.33498 6.08763 4.77402C5.83331 5.27315 5.83331 5.92654 5.83331 7.23333V20.7667C5.83331 22.0735 5.83331 22.7269 6.08763 23.226C6.31134 23.665 6.66829 24.022 7.10734 24.2457C7.60646 24.5 8.25986 24.5 9.56665 24.5H14M10.5 19.8333H12.8333M10.5 15.1667H15.1666M10.5 10.5H11.6666M22.48 22.48L24.5 24.5M23.3333 20.4167C23.3333 22.0275 22.0275 23.3333 20.4166 23.3333C18.8058 23.3333 17.5 22.0275 17.5 20.4167C17.5 18.8058 18.8058 17.5 20.4166 17.5C22.0275 17.5 23.3333 18.8058 23.3333 20.4167Z"
          stroke={isFindJobActive ? "#f26d21" : "#6d6d6d"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p
        className={`pl-2 text-xl font-medium ${
          isFindJobActive ? "text-orange-alta" : "text-[#6D6D6D]"
        }`}
      >
        Tìm kiếm việc làm
      </p>
    </div>
  );
};

export default FindJob;
