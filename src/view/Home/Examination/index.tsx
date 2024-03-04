import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Button, Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useState } from "react";
import styles from "./examStyle.module.css";

const Examination = () => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const onFinish = async (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    select?: string;
    email?: string;
    password?: string;
    remember?: boolean | undefined;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-center text-[32px] font-bold text-[#494949]">
        Xin chào{" "}
        <span className="uppercase text-orange-alta">thái trung kiên</span>
      </h2>

      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="inline"
        className="mt-4 w-[852px] justify-between rounded-xl bg-white p-1"
      >
        <Form.Item<FieldType>
          name="select"
          rules={[{ required: true, message: "" }]}
          className={`w-[85%]   font-semibold `}
        >
          <Select
            suffixIcon={
              isSelectOpen ? (
                <CaretUpOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
              ) : (
                <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
              )
            }
            placeholder="Chọn môn thi"
            className={`h-[48px] w-full pr-1 text-[14px] font-normal`}
            onDropdownVisibleChange={() => setIsSelectOpen(true)}
            onBlur={() => setIsSelectOpen(false)}
            dropdownStyle={{ padding: "10px, 16px, 10px, 16px" }}
          >
            <Option
              value="Lập trình Front-end"
              className={`${styles.selectOption}`}
            >
              Lập trình Front-end
            </Option>
            <Option
              value="Lập trình Back end"
              className={`${styles.selectOption}`}
            >
              Lập trình Back end
            </Option>
            <Option value="VFX Artist" className={`${styles.selectOption}`}>
              VFX Artist
            </Option>
            <Option value="UI/UX Design" className={`${styles.selectOption}`}>
              UI/UX Design
            </Option>
          </Select>
        </Form.Item>
        <Form.Item className="w-[15%]">
          <Button
            htmlType="submit"
            type="primary"
            className="h-[48px] w-auto bg-orange-alta text-base font-bold text-white"
          >
            + Tạo đề thi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Examination;
