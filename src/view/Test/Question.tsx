import React, { useState } from "react";
import { useAppSelector } from "../../core/redux/hooks";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Question {
  question: string;
  options: string[];
}
const Question: React.FC<any> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const totalQuestions = 5; // Số câu hỏi trong bài trắc nghiệm

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isLastQuestion = currentQuestion === totalQuestions;
  const isFirstQuestion = currentQuestion === 1;

  // Định nghĩa các câu hỏi và các đáp án ở đây
  //   const questions: any = [
  //     {
  //       question: "What is the capital of France?",
  //       options: ["Paris", "London", "Rome", "Berlin"],
  //     },
  //     {
  //       question: "What is the largest planet in our solar system?",
  //       options: ["Jupiter", "Saturn", "Mars", "Earth"],
  //     },
  //     {
  //       question: "How are you?",
  //       options: ["Jupiter", "Saturn", "Mars", "Earth"],
  //     },
  //     {
  //       question: "Where are you from?",
  //       options: ["Jupiter", "Saturn", "Mars", "Earth"],
  //     },
  //     {
  //       question: "Where are you going?",
  //       options: ["Jupiter", "Saturn", "Mars", "Earth"],
  //     },
  //     // Thêm câu hỏi tiếp theo tương tự
  //   ];
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  const renderOptions = (options: string[]): JSX.Element[] => {
    return options?.map((option, index) => (
      <div
        key={index}
        className="my-3 flex items-center rounded-xl bg-white px-4 py-[10px]"
      >
        <input
          type="radio"
          id={`option${index}`}
          name={`question${currentQuestion}`}
          value={option}
          className="mr-2 h-5 w-5 cursor-pointer accent-orange-alta transition-all duration-300"
        />
        <label htmlFor={`option${index}`}>{option}</label>
      </div>
    ));
  };

  return (
    <>
      <div className="w-[633px] pt-6">
        {/* Hiển thị nội dung của câu hỏi dựa trên currentQuestion */}
        <div>
          <div className="w-[241px]">
            <h3 className="text-[24px] font-semibold">
              Câu hỏi {currentQuestion}
            </h3>
            <p className="text-[18px]">
              {questions[currentQuestion - 1]?.question}
            </p>
          </div>
          {renderOptions(questions[currentQuestion - 1]?.options)}
        </div>
        {/* Nút điều hướng */}
      </div>
      <div className="flex items-center justify-end">
        <Button
          className="flex items-center justify-center  hover:!bg-transparent"
          onClick={handlePrev}
          disabled={isFirstQuestion}
          type="text"
        >
          <span className="flex items-center justify-center">
            <ArrowLeftOutlined
              className="text-2xl"
              style={{
                fontSize: "24px",
                color: "#f26d21",
                strokeWidth: "35",
                stroke: "#f26d21",
              }}
            />
          </span>
        </Button>
        <Button
          className="flex items-center justify-center  hover:!bg-transparent"
          onClick={handleNext}
          disabled={isLastQuestion}
          type="text"
        >
          <span className="flex items-center justify-center">
            <ArrowRightOutlined
              className="text-2xl"
              style={{
                fontSize: "24px",
                color: "#f26d21",
                strokeWidth: "35",
                stroke: "#f26d21",
              }}
            />
          </span>
        </Button>
      </div>
    </>
  );
};

export default Question;
