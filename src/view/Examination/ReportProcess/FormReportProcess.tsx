import {
  CaretDownOutlined,
  CaretUpOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useState } from "react";
import styles from "../examStyle.module.css";
import TextArea from "antd/es/input/TextArea";
import ButtonSend from "../../../shared/components/ButtonSend";
import { useAppDispatch } from "../../../core/redux/hooks";
import { setOpenModalApply } from "../../../core/redux/features/modalApply/modalApplySlice";

const FormReportProcess = () => {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    dispatch(setOpenModalApply());
  };
  type FieldType = {
    select?: string;
    school?: string;
    content?: string;
  };
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      className="mt-4 w-[524px] justify-between rounded-xl p-1"
      style={{ color: "red" }}
    >
      <Form.Item<FieldType>
        name="select"
        rules={[{ required: true, message: "" }]}
        className="font-semibold"
        label="Chọn lớp / Chọn nhóm thực tập"
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
          className="h-[48px] w-full pr-1 text-[14px] font-normal "
          onDropdownVisibleChange={() => setIsSelectOpen(true)}
          onBlur={() => setIsSelectOpen(false)}
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
            value="UI/UX Design"
            className={`${styles.selectOption}`}
          >
            UI/UX Design
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label="Link file"
        name="school"
        rules={[{ required: true, message: "Điền trường đang học" }]}
        className="= mt-6 font-semibold"
      >
        <Input
          className="h-[48px] font-normal"
          placeholder="Nhập trường đang học"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Nội dung báo cáo"
        name="content"
        rules={[{ required: true, message: "Nhập nội dung báo cáo" }]}
        className="= mt-6 font-semibold"
        initialValue={
          "Hội An luôn được xếp vào danh sách những địa điểm hấp dẫn của Việt Nam. Không chỉ là khách du lịch trong nước mà khách quốc tế đều rất ấn tượng với vẻ đẹp bình yên cùng với nền văn hóa giao thoa Đông – Tây của phố cổ."
        }
      >
        <TextArea
          rows={4}
          placeholder="Nhập nội dung báo cáo"
          className="font-normal"
        />
      </Form.Item>
      <Form.Item className=" mt-6">
        <ButtonSend />
      </Form.Item>
    </Form>
  );
};

export default FormReportProcess;
