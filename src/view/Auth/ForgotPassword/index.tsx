import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { User, sendEmailVerification } from "firebase/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);

    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const user: User | null = auth.currentUser;
    if (user) {
      // Nếu người dùng đã đăng nhập, gửi email xác thực
      sendEmailVerification(user)
        .then(() => {
          // Email verification sent!
          // ...
          console.log("Email verification sent!");
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("Error sending email verification:", error);
        });
    } else {
      // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang đăng nhập
      navigate("/login");
    }
  };
  // Confirm the link is a sign-in with email link.

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    email?: string;
  };
  return (
    <div className="absolute left-[315px] top-[380px] h-[316px] w-[524px]">
      <div className="relative h-full w-full">
        <h2 className="text-[36px] font-bold leading-[42.19px] text-orange-alta">
          Quên mật khẩu
        </h2>
        <p className="absolute top-[48px] h-[42px] w-[359px] leading-[20.8px]">
          Vui lòng nhập địa chỉ email đã đăng kí để yêu cầu khôi phục lại mật
          khâu
        </p>

        <div>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="absolute top-[138px] w-full"
          >
            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email",
                  type: "email",
                },
              ]}
              className="= font-semibold"
            >
              <Input
                className="px-4 py-[10px]"
                autoComplete="username"
                placeholder="Nhập email của bạn"
              />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="mt-3 h-[48px] bg-orange-alta text-[18px] font-bold text-white"
                block
              >
                Xác nhận
              </Button>
            </Form.Item>
            <div className="flex justify-end pt-3">
              <Typography.Text
                onClick={() => {
                  navigate("/login");
                }}
                className="cursor-pointer text-right leading-[18.75px] text-orange-alta underline "
              >
                Quay lại đăng nhập
              </Typography.Text>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
