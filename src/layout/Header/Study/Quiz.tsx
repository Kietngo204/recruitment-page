import { useNavigate } from "react-router-dom";
import { QuizProps } from "./StudyTypes";

const Quiz: React.FC<QuizProps> = ({ currentPath }) => {
  const navigate = useNavigate();

  const isQuizActive = currentPath.startsWith("/test");

  return (
    <div
      className="flex h-[40px] w-[174px] cursor-pointer items-center justify-between"
      onClick={() => {
        navigate("test");
      }}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.75 20.75L22.5 22.5M1.5 22.5C1.5 17.9897 5.15634 14.3333 9.66667 14.3333C10.2674 14.3333 10.8529 14.3982 11.4167 14.5213M21.3333 18.4167C21.3333 20.0275 20.0275 21.3333 18.4167 21.3333C16.8058 21.3333 15.5 20.0275 15.5 18.4167C15.5 16.8058 16.8058 15.5 18.4167 15.5C20.0275 15.5 21.3333 16.8058 21.3333 18.4167ZM14.3333 6.16667C14.3333 8.744 12.244 10.8333 9.66667 10.8333C7.08934 10.8333 5 8.744 5 6.16667C5 3.58934 7.08934 1.5 9.66667 1.5C12.244 1.5 14.3333 3.58934 14.3333 6.16667Z"
          stroke={isQuizActive ? "#F26D21" : "#6D6D6D"}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p
        className={`text-xl font-medium ${
          isQuizActive ? "text-orange-alta" : "text-[#6D6D6D]"
        }`}
      >
        Thi trắc nghiệm
      </p>
    </div>
  );
};

export default Quiz;
