import { Button, Dropdown, MenuProps, Space } from "antd";
import { Link, useLocation } from "react-router-dom";

const Option = () => {
  const location = useLocation();
  const url = `/auth/login?redirectTo=${location.pathname}`;
  const items: MenuProps["items"] = [
    {
      label: <div>Sinh viên</div>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <div>Doanh nghiệp</div>,
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
        className="h-full bg-orange-alta px-6 py-2 text-base font-semibold"
        onClick={(e) => e.preventDefault()}
      >
        <Space>Tùy chọn</Space>
      </Button>
    </Dropdown>
  );
};

export default Option;
