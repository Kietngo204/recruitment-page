import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../core/redux/hooks";
import { logout } from "../../../core/redux/actions/userActionThunk";
import { auth } from "../../../firebase/firebase";

const Account: React.FC = () => {
  const location = useLocation();
  const currentUser = auth.currentUser;
  const displayName = currentUser?.displayName;
  const photoURL = currentUser?.photoURL;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      label: <Link to="profile">Profile</Link>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          onClick={() => {
            navigate("/info-register/student");
          }}
        >
          Đăng kí trực tuyến
        </div>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          onClick={() => {
            navigate("/info-register/enterprise");
          }}
        >
          Doanh nghiệp đăng kí
        </div>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link
          to={location.pathname}
          onClick={() => {
            dispatch(logout());
          }}
        >
          Đăng xuất
        </Link>
      ),
      key: "3",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button
        type="primary"
        className="h-full bg-orange-alta xl:px-8 xl:py-2"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          <Avatar
            src={
              !!photoURL
                ? photoURL
                : "https://s3-alpha-sig.figma.com/img/8db6/4dfb/0f4c9030e92a943d2df0e63726f913f9?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IJ2Wcdz3ALHMrhfdZMjtB6yTCineq-eLPeJ2k3o6LkJjrMkLkrkrvwc~vliK-eNhHG6XEb91IFK9QU6vcJp3gCu8-bdrlvdgwkYx~WuUq4souLAJ-5XhSmRCFKOmO3xZ2hD8Igjv6~vNVlmjouVtdP692GHX4un~d-G9Z0EoZXlPHqauF8trv9ckXyieKj0RSYD305ljp8RZcASAPmYNYqWosUcNNoco1sm0Q2G0fpDsCkSBgUfjf5MlHcDi3xFYtYkmS9Z8PCB2ROyynqhELQ2R9oOd3JIoMG4Xn4QAF9q3bW3h027BbkR6QhiDz~3-kk7~8uwmui~i0T0jIPNQlQ__"
            }
            size={34}
          />
          <p className="text-xl font-semibold ">
            {!!displayName ? displayName : "Trung Kiên"}
          </p>
        </Space>
      </Button>
    </Dropdown>
  );
};

export default Account;
