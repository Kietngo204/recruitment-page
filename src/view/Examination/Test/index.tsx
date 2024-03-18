import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import ExamInfo from "./ExamInfo";
import Question from "./Question";
import { useEffect } from "react";
import { getQuestion } from "../../../core/redux/actions/examActionThunk";
import Loading from "../../../shared/components/Loading";

const Test = () => {
  const { subj } = useParams();
  const dispatch = useAppDispatch();
  const { questions, isLoading, error } = useAppSelector((state) => state.exam);
  console.log("questions:", questions);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

  useEffect(() => {
    dispatch(getQuestion());
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex justify-center px-4 lg:px-0">
      <div className="flex flex-col justify-center lg:w-[1290px]">
        <div>
          <h4 className="text-xl font-semibold">Đề thi môn</h4>
          <h2 className="text-[24px] font-bold md:text-[32px]">{subj}</h2>
        </div>
        <ExamInfo />

        <Question questions={questions} />
      </div>
    </div>
  );
};

export default Test;
