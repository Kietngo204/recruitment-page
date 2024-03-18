import { useNavigate } from "react-router-dom";
import { CurrentPathProps } from "../Study/StudyTypes";

const OnlineRegistration: React.FC<CurrentPathProps> = ({ currentPath }) => {
  const navigate = useNavigate();
  const isOnRegisActive = currentPath?.startsWith("/info-register/student");
  return (
    <div
      className="flex h-[40px] cursor-pointer  items-center justify-between"
      onClick={() => {
        navigate("/info-register/student");
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
          d="M10.5 19.8333H13.4166M10.5 15.1667H16.3333M10.5 10.5H11.6666M15.1666 3.5H9.56665C8.25986 3.5 7.60646 3.5 7.10734 3.75432C6.66829 3.97802 6.31134 4.33498 6.08763 4.77402C5.83331 5.27315 5.83331 5.92654 5.83331 7.23333V20.7667C5.83331 22.0735 5.83331 22.7269 6.08763 23.226C6.31134 23.665 6.66829 24.022 7.10734 24.2457C7.60646 24.5 8.25986 24.5 9.56665 24.5H11.6666M15.1666 3.5L22.1666 10.5M15.1666 3.5V6.76667C15.1666 8.07346 15.1666 8.72685 15.421 9.22598C15.6447 9.66502 16.0016 10.022 16.4407 10.2457C16.9398 10.5 17.5932 10.5 18.9 10.5H22.1666M22.1666 10.5V11.6667M16.3333 24.5L18.6958 24.0275C18.9018 23.9863 19.0048 23.9657 19.1008 23.928C19.1861 23.8946 19.2671 23.8512 19.3422 23.7989C19.4268 23.7398 19.5011 23.6656 19.6496 23.517L24.5 18.6667C25.1443 18.0223 25.1443 16.9777 24.5 16.3333C23.8556 15.689 22.811 15.689 22.1666 16.3333L17.3163 21.1837C17.1677 21.3322 17.0935 21.4065 17.0345 21.4911C16.9821 21.5662 16.9387 21.6473 16.9053 21.7325C16.8676 21.8285 16.847 21.9315 16.8058 22.1375L16.3333 24.5Z"
          stroke={isOnRegisActive ? "#f26d21" : "#6d6d6d"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p
        className={`pl-2 text-xl font-medium ${
          isOnRegisActive ? "text-orange-alta" : "text-[#6D6D6D]"
        }`}
      >
        Đăng ký trực tuyến
      </p>
    </div>
  );
};

export default OnlineRegistration;
