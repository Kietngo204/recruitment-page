import Account from "../Account";
import LearnProcess from "../LearnProcess";
import Quiz from "../Quiz";

const Study = () => {
  return (
    <div className="flex items-center justify-center">
      <Quiz />
      <LearnProcess />
      <Account />
    </div>
  );
};

export default Study;
