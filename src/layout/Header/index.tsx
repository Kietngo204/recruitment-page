import { MenuOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import Logo from "../../shared/components/Logo";
import Enterprise from "./Enterprise";
import Student from "./Student";
import Study from "./Study";
import { setMenuOpen } from "../../core/redux/features/menu/menuSlice";

const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const { option } = useAppSelector((state) => state.option);

  const dispatch = useAppDispatch();

  return (
    <header className=" bg-white">
      <div className="container mx-auto px-4 py-[15px] lg:px-24 lg:py-[25px]">
        <div className="flex items-center justify-between">
          <Logo />

          <div
            className="xl:hidden"
            onClick={() => {
              dispatch(setMenuOpen());
            }}
          >
            <MenuOutlined className="text-[24px] text-orange-alta" />
          </div>
          <div className="hidden xl:block">
            {!user && (
              <>
                {option === "student" && <Student />}
                {option === "enterprise" && <Enterprise />}
              </>
            )}

            {user && <Study />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
