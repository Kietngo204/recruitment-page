import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const FormForgotPassword = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    // Nếu người dùng đã đăng nhập, gửi email xác thực
    sendPasswordResetEmail(auth, values.email)
      .then(() => {
        console.log("Email reset password sent!");
        navigate("/auth/reset-password");
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("Error sending email  reset password:", error);
      });
  };
  // Confirm the link is a sign-in with email link.

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    email?: string;
  };
  return (
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
            navigate("/auth/login");
          }}
          className="cursor-pointer text-right leading-[18.75px] text-orange-alta underline "
        >
          Quay lại đăng nhập
        </Typography.Text>
      </div>
    </Form>
  );
};

export default FormForgotPassword;
