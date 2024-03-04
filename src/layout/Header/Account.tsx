import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { logout } from "../../core/redux/actions/userActionThunk";
import { auth } from "../../firebase/firebase";

const Account: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  console.log(auth.currentUser);
  const currentUser = auth.currentUser;
  const displayName = currentUser?.displayName;
  const photoURL = currentUser?.photoURL;
  const dispatch = useAppDispatch();

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
        <Link
          to=""
          onClick={() => {
            dispatch(logout());
          }}
        >
          Đăng xuất
        </Link>
      ),
      key: "1",
    },
  ];
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <Button
        type="primary"
        className="  h-full bg-orange-alta px-8 py-2"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          <Avatar
            src={
              !!photoURL
                ? photoURL
                : "https://s3-alpha-sig.figma.com/img/8db6/4dfb/0f4c9030e92a943d2df0e63726f913f9?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZQ-XCyYR0MsZ9peIJXVQaTJYwOH8ftykVThGcccYgj6e5ZG1-l6itF4DTg3wVGvKMp7jbrNud87Yq7on9BMceivqGc3kfJ5F~iw98y2m~tK9rJCWsBxH6AdlVt18y75stq-PiQvNhVwEJESZGX8tJXWVGVoYx-4YJ-EQniWJgCH9AjQPGUtcuYWS32TnGTSFPXNclNKavZzk9FFMsHmpQAgNbnJGsLPDclkm~JepbPnD0CvYOUkPmoUKVY6uG944uo5crbZDgO1uu2A40BOTHtIi8KxLaSfwqmSFbFCN0Vk0CzTESxYwha84XSgzIYD~ZzSvaIzhA81dRhvlC-aIQ__"
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
