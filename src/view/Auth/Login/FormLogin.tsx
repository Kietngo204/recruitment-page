import {
  CaretDownOutlined,
  CaretUpOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Typography } from "antd";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { login } from "../../../core/redux/actions/userActionThunk";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";

const FormLogin = () => {
  interface FormValuesType {
    email: string;
    password: string;
    remember: boolean;
    select: string;
  }

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const [isRecaptcha, setIsRecaptcha] = useState<boolean>(false);
  const [saveEmail, setSaveEmail] = useState<string | null>(null);
  const [savePassword, setSavePassword] = useState<string | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  const { error } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { Option } = Select;
  const onFinish = (values: FormValuesType) => {
    console.log("Success:", values);
    const { email, password, remember } = values;
    dispatch(login({ email, password }));

    if (remember) {
      // Hash mật khẩu trước khi lưu vào localStorage
      localStorage.setItem("savedEmail", email);
      localStorage.setItem("savedPassword", password);
    } else {
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("savedPassword");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    const getSaveEmail = localStorage.getItem("savedEmail");
    const getSavePassword = localStorage.getItem("savedPassword");

    // Kiếm tra trạng thái của email và password trên storage nếu tồn tại thì lưu vào state
    if (getSaveEmail) {
      setSaveEmail(getSaveEmail);
    } else {
      setSaveEmail(null);
    }

    if (getSavePassword) {
      setSavePassword(getSavePassword);
    } else {
      setSavePassword(null);
    }
    setIsDataLoaded(true);
  }, [saveEmail, savePassword, setSaveEmail, setSavePassword]);

  if (!isDataLoaded) {
    return null;
  }

  type FieldType = {
    select?: string;
    email?: string;
    password?: string;
    remember?: boolean | undefined;
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
          name="select"
          label="Vai trò"
          rules={[{ required: true, message: "Vui lòng chọn vai trò" }]}
          className="font-semibold"
        >
          <Select
            suffixIcon={
              isSelectOpen ? (
                <CaretUpOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
              ) : (
                <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
              )
            }
            placeholder="Option 1"
            className="h-[48px] text-[14px] font-normal"
            onDropdownVisibleChange={() => setIsSelectOpen(true)}
            onBlur={() => setIsSelectOpen(false)}
          >
            <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
            <Option value="Hà Nội">Hà Nội</Option>
            <Option value="Đà Nẵng">Đà Nẵng</Option>
          </Select>
        </Form.Item>
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Vui lòng nhập email", type: "email" },
          ]}
          className="= font-semibold"
          initialValue={!!saveEmail ? saveEmail : ""}
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
          initialValue={savePassword}
        >
          <Input.Password
            className="h-[48px]"
            autoComplete="current-password"
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        {!!error && (
          <p className="h-[22px] w-[254px] font-body text-[16px] leading-[21.79px] text-red-warning">
            <ExclamationCircleOutlined className="h-[4px]" /> Sai tên đăng nhập
            hoặc mật khẩu.
          </p>
        )}

        <div className="flex items-center justify-between">
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            initialValue={true}
          >
            <Checkbox>Ghi nhớ mật khẩu</Checkbox>
          </Form.Item>

          <div className="flex gap-3">
            <Typography.Text
              className="cursor-pointer text-orange-alta underline"
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Chưa có tài khoản?
            </Typography.Text>
            <span className="text-orange-alta">|</span>
            <Typography.Text
              className="cursor-pointer text-orange-alta underline"
              onClick={() => {
                navigate("/auth/forgot-password");
              }}
            >
              Quên mật khẩu?
            </Typography.Text>
          </div>
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
          size="normal"
        />

        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="mt-3 h-[48px] bg-orange-alta text-white"
            block
            disabled={!isRecaptcha}
          >
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
