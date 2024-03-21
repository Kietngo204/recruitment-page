import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ReCAPTCHA from "react-google-recaptcha";
import { registerUser } from "../../../core/redux/actions/userActionThunk";
import { showModal } from "../../../core/redux/features/modalSuccess/modalSuccessSlice";

const FormRegister = () => {
  interface FormValuesType {
    email: string;
    password: string;
    photoURL: string;
    displayName: string;
  }

  const [isRecaptcha, setIsRecaptcha] = useState<boolean>(false);

  const { user, errorRegister } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onFinish = (values: FormValuesType) => {
    console.log("Success:", values);
    const { email, password, displayName, photoURL } = values;
    dispatch(registerUser({ email, password, displayName, photoURL }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (user) {
      dispatch(
        showModal({
          title: "Đăng kí thành công",
          button: "Quay về trang chủ",
          titleSecond:
            "Bạn đã đăng kí thành công, hệ thống sẽ chuyển bạn đến trang chủ",
          navigate: "/",
        }),
      );
    }
  }, [user, dispatch]);

  type FieldType = {
    email: string;
    password: string;
    photoURL: string | undefined;
    displayName: string | undefined;
  };
  return (
    <div className="pt-4 lg:h-[452px] lg:w-[524px]">
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email", type: "email" },
          ]}
          className="= font-semibold"
        >
          <Input
            className="h-[48px]"
            autoComplete="username"
            placeholder="Tên đăng nhập"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu", min: 6 },
          ]}
          className="= font-semibold"
        >
          <Input.Password
            className="h-[48px]"
            autoComplete="current-password"
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Họ và tên"
          name="displayName"
          className="= font-semibold"
        >
          <Input
            className="h-[48px]"
            autoComplete="username"
            placeholder="Nhập họ tên"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Link ảnh"
          name="photoURL"
          className="= font-semibold"
        >
          <Input
            className="h-[48px]"
            autoComplete="username"
            placeholder="Nhập địa chỉ hình ảnh"
          />
        </Form.Item>

        {!!errorRegister && (
          <p className="h-[22px] w-[254px] font-body text-[16px] leading-[21.79px] text-red-warning">
            <ExclamationCircleOutlined className="h-[4px]" /> Đăng kí thất bại,
            vui lòng thử lại.
          </p>
        )}

        <div className="flex items-center justify-end">
          <Typography.Text
            className="cursor-pointer text-orange-alta underline"
            onClick={() => {
              navigate("/auth/login");
            }}
          >
            Đã có tài khoản!
          </Typography.Text>
        </div>

        <ReCAPTCHA
          sitekey="6LendIApAAAAABR__fNUkdfATTtarV9jxyqrAmoM"
          onChange={(val) => {
            if (val) {
              setIsRecaptcha(true);
            } else {
              setIsRecaptcha(false);
            }
          }}
          onTouchStart={(e) => {
            e.preventDefault(); // Ngăn chặn hành vi mặc định của sự kiện touchstart
          }}
        />

        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="mt-3 h-[48px] bg-orange-alta text-white"
            block
            disabled={!isRecaptcha}
          >
            Đăng kí
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormRegister;
