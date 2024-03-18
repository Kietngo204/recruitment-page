import { useLocation } from "react-router-dom";
import Option from "../../../shared/components/Option";
import FindJob from "./FindJob";
import Business from "./Business";

const Enterprise = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="flex flex-col items-start justify-center gap-8 xl:flex-row xl:items-center">
      <FindJob currentPath={currentPath} />
      <Business currentPath={currentPath} />
      <Option />
    </div>
  );
};

export default Enterprise;
