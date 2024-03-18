import { CaretDownOutlined } from "@ant-design/icons";
import { Button, Form, Select } from "antd";

import styles from "./examStyle.module.css";
import { useAppDispatch } from "../../core/redux/hooks";
import { onSetSubject } from "../../core/redux/features/exam/examSlice";
import { useNavigate } from "react-router-dom";
import Hello from "../../shared/components/Hello";

const Examination = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("Success:", values);

    dispatch(onSetSubject(values.select));
    navigate(`/test/${values.select}`);
  };

  type FieldType = {
    select?: string;
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-0">
      <Hello />

      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="inline"
        className="mt-4 w-full justify-between rounded-xl bg-white p-1 md:w-[600px] lg:w-[852px]"
      >
        <Form.Item<FieldType>
          name="select"
          rules={[{ required: true, message: "" }]}
          className="!flex-1 font-semibold"
        >
          <Select
            suffixIcon={
              <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
            }
            placeholder="Chọn môn thi"
            className="h-[48px] w-full pr-1 text-[14px] font-normal "
            dropdownStyle={{ padding: "10px, 16px, 10px, 16px" }}
          >
            <Select.Option
              value="Lập trình Front-end (React, Typescript)"
              className={`${styles.selectOption}`}
            >
              Lập trình Front-end
            </Select.Option>
            <Select.Option
              value="Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)"
              className={`${styles.selectOption}`}
            >
              Lập trình Back end
            </Select.Option>
            <Select.Option
              value="VFX Artist"
              className={`${styles.selectOption}`}
            >
              VFX Artist
            </Select.Option>
            <Select.Option
              value="UI|UX Design"
              className={`${styles.selectOption}`}
            >
              UI/UX Design
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="">
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
