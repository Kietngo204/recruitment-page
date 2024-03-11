import { useLocation, useSearchParams } from "react-router-dom";
import Account from "./Account";
import LearnProcess from "./LearnProcess";
import Quiz from "./Quiz";

const Study = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex items-center justify-center">
      <Quiz currentPath={currentPath} />
      <LearnProcess currentPath={currentPath} />
      <Account />
    </div>
  );
};

export default Study;
