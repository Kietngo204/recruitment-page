import { useAppSelector } from "../../core/redux/hooks";
import Logo from "../../shared/components/Logo";
import Requirement from "./Requirement";
import Study from "./Study";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-24 py-[25px]">
        <div className="flex items-center justify-between">
          <Logo />

          {user && <Study />}
          {!user && <Requirement />}
        </div>
      </div>
    </div>
  );
};

export default Header;
