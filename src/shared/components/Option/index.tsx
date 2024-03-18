import { Button, Dropdown, MenuProps, Space } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../../core/redux/hooks";
import { setOption } from "../../../core/redux/features/option/optionSlice";

const Option = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const url = `/auth/login?redirectTo=${location.pathname}`;
  const items: MenuProps["items"] = [
    {
      label: (
        <div
          onClick={() => {
            dispatch(setOption("student"));
          }}
        >
          Sinh viên
        </div>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          onClick={() => {
            dispatch(setOption("enterprise"));
          }}
        >
          Doanh nghiệp
        </div>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <Link to={url || "/"}>Đăng nhập</Link>,
      key: "3",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button
        type="primary"
        className="bg-orange-alta px-6 text-base font-semibold lg:h-full lg:py-2"
        onClick={(e) => e.preventDefault()}
      >
        <Space>Tùy chọn</Space>
      </Button>
    </Dropdown>
  );
};

export default Option;
