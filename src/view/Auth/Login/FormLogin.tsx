import {
  CaretDownOutlined,
  CaretUpOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, Typography } from "antd";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [isRecaptcha, setIsRecaptcha] = useState(false);

  const navigate = useNavigate();
  const { Option } = Select;
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    email?: string;
    password?: string;
    remember?: boolean;
  };
  return (
    <div className="h-[452px] w-[524px] pt-4">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
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
          rules={[{ required: true, message: "Vui lòng nhập email" }]}
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
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          className="= font-semibold"
        >
          <Input.Password
            className="h-[48px]"
            autoComplete="current-password"
            placeholder="Nhập mật khẩu"
          />
        </Form.Item>

        <p className="text-red-warning font-body h-[22px] w-[254px] text-[16px] leading-[21.79px]">
          <ExclamationCircleOutlined className="h-[4px]" /> Sai tên đăng nhập
          hoặc mật khẩu.
        </p>

        <div className="flex items-center justify-between">
          <Form.Item<FieldType> name="remember">
            <Checkbox checked>Ghi nhớ mật khẩu</Checkbox>
          </Form.Item>

          <Typography.Text
            className="cursor-pointer text-orange-alta underline"
            onClick={() => {
              navigate("/login/forgot-password");
            }}
          >
            Quên mật khẩu?
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
