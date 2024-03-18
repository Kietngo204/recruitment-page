import { Drawer } from "antd";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { setMenuClose } from "../../core/redux/features/menu/menuSlice";
import Student from "../Header/Student";
import Enterprise from "../Header/Enterprise";
import Study from "../Header/Study";

const RightMenu = () => {
  const { open } = useAppSelector((state) => state.menu);
  const { user } = useAppSelector((state) => state.user);
  const { option } = useAppSelector((state) => state.option);

  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(setMenuClose());
  };
  return (
    <Drawer title="Trang tuyển dụng" onClose={onClose} open={open}>
      <div className="flex h-full flex-col items-start justify-start gap-4">
        {!user && (
          <>
            {option === "student" && <Student />}
            {option === "enterprise" && <Enterprise />}
          </>
        )}

        {user && <Study />}
      </div>
    </Drawer>
  );
};

export default RightMenu;
