import { useLocation } from "react-router-dom";
import SeeJD from "./SeeJD";
import OnlineRegistration from "./OnlineRegistration";
import Option from "../../../shared/components/Option";

const Requirement = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex items-center justify-center gap-8">
      <SeeJD currentPath={currentPath} />
      <OnlineRegistration currentPath={currentPath} />
      <Option />
    </div>
  );
};

export default Requirement;
