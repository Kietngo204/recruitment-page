import { useLocation } from "react-router-dom";

import LearnProcess from "./LearnProcess";
import Quiz from "./Quiz";
import Account from "./Account";

const Study = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col items-center justify-center gap-8 xl:flex-row xl:items-center">
      <Quiz currentPath={currentPath} />
      <LearnProcess currentPath={currentPath} />
      <Account />
    </div>
  );
};

export default Study;
