import Logo from "../../shared/components/Logo";
import Study from "./Study";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-24 py-[25px]">
        <div className="flex items-center justify-between">
          <Logo />

          <Study />
        </div>
      </div>
    </div>
  );
};

export default Header;
