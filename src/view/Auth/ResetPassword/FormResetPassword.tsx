import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import { showModal } from "../../../core/redux/features/modalSuccess/modalSuccessSlice";
import { confirmThePasswordReset } from "../../../core/redux/actions/userActionThunk";

const FormResetPassword = () => {
  const { error } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const [notConfirm, setNotConfirm] = useState<boolean>(false);
  let oobCode: string | null = searchParams.get("oobCode");
  const onFinish = (values: any) => {
    const { password, confirmPassword } = values;
    if (password !== confirmPassword) {
      setNotConfirm(true);
      return; // Không tiếp tục nếu mật khẩu không trùng khớp
    }

    setNotConfirm(false);

    if (oobCode) {
      // Dispatch the action with oobCode and confirmPassword
      dispatch(
        confirmThePasswordReset({ oobCode, newPassword: confirmPassword }),
      );
      dispatch(
        showModal({
          title: "Tạo mật khẩu thành công",
          button: "Đăng nhập ngay",
          titleSecond:
            "Đăng nhập ngay để bắt đầu<br/> nhận được các cơ hội sự nghiệp lý tưởng",
          navigate: "/auth/login",
        }),
      );
    } else {
      // Handle the case where oobCode is null
      console.error("oobCode is null");
      // You might want to show an error message to the user or take other actions.
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    password?: string;
    confirmPassword?: string;
  };
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      className="absolute top-[100px] w-full"
    >
      <Form.Item<FieldType>
        label="Mậu khẩu"
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
            min: 6,
          },
        ]}
        className="= font-semibold"
      >
        <Input.Password
          className="px-4 py-[10px]"
          autoComplete="current-password"
          placeholder="Nhập mật khẩu"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Mậu khẩu"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập lại mật khẩu",
            min: 6,
          },
        ]}
        className="= font-semibold"
      >
        <Input.Password
          className="px-4 py-[10px]"
          autoComplete="current-password"
          placeholder="Nhập lại mật khẩu"
        />
      </Form.Item>
      {!!notConfirm && (
        <p className="h-[22px] w-[254px] font-body text-[16px] leading-[21.79px] text-red-warning">
          <ExclamationCircleOutlined className="h-[4px]" /> Mật khẩu không trùng
          khớp.
        </p>
      )}
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
      {!!error && (
        <p className="font-medium text-red-alta">
          Đã xảy ra lỗi vui lòng thử lại!
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

export default FormResetPassword;
