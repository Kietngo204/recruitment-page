import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import { passwordReset } from "../../../core/redux/actions/userActionThunk";

const FormForgotPassword = () => {
  const { error, emailMessage } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const onFinish = (values: any) => {
    // Nếu người dùng đã đăng nhập, gửi email xác thực
    dispatch(passwordReset(values.email));
  };
  // Confirm the link is a sign-in with email link.
  console.log(error);
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
      {!!emailMessage && (
        <p className="font-medium text-red-alta">
          Đã gửi một email xác thực. Vui lòng kiểm tra hòm thư đến của bạn.
        </p>
      )}

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
