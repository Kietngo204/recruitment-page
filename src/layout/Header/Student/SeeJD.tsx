import { useNavigate } from "react-router-dom";
import { CurrentPathProps } from "../Study/StudyTypes";
import { useAppDispatch } from "../../../core/redux/hooks";
import { getJobs } from "../../../core/redux/actions/jobsActionThunk";

const SeeJD: React.FC<CurrentPathProps> = ({ currentPath }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isSeeJDActive = currentPath?.startsWith("/job-list");

  return (
    <div
      className="flex h-[40px]  cursor-pointer items-center justify-between"
      onClick={() => {
        dispatch(getJobs());
        navigate("/job-list");
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.75 22.75L24.5 24.5M3.5 24.5C3.5 19.9897 7.15634 16.3333 11.6667 16.3333C12.2674 16.3333 12.8529 16.3982 13.4167 16.5213M23.3333 20.4167C23.3333 22.0275 22.0275 23.3333 20.4167 23.3333C18.8058 23.3333 17.5 22.0275 17.5 20.4167C17.5 18.8058 18.8058 17.5 20.4167 17.5C22.0275 17.5 23.3333 18.8058 23.3333 20.4167ZM16.3333 8.16667C16.3333 10.744 14.244 12.8333 11.6667 12.8333C9.08934 12.8333 7 10.744 7 8.16667C7 5.58934 9.08934 3.5 11.6667 3.5C14.244 3.5 16.3333 5.58934 16.3333 8.16667Z"
          stroke={isSeeJDActive ? "#F26D21" : "#6D6D6D"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p
        className={`pl-2 text-xl font-medium ${
          isSeeJDActive ? "text-orange-alta" : "text-[#6D6D6D]"
        }`}
      >
        Xem JD yêu cầu tuyền dụng
      </p>
    </div>
  );
};

export default SeeJD;
