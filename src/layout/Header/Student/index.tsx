import { useLocation } from "react-router-dom";
import SeeJD from "./SeeJD";
import OnlineRegistration from "./OnlineRegistration";
import Option from "../../../shared/components/Option";

const Student = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex flex-col items-start justify-center gap-8 xl:flex-row xl:items-center">
      <SeeJD currentPath={currentPath} />
      <OnlineRegistration currentPath={currentPath} />
      <Option />
    </div>
  );
};

export default Student;
