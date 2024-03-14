import { Button, Form, Input, Select } from "antd";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "../../Examination/examStyle.module.css";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import { getJobs } from "../../../core/redux/actions/jobsActionThunk";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchJob = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { jobs } = useAppSelector((state) => state.jobs);
  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(getJobs());
  };

  useEffect(() => {
    if (jobs) {
      navigate("/job-list");
    } else {
      navigate("/");
    }
  }, [jobs]);
  type FieldType = {
    search?: string;
    specialize?: string;
    company?: string;
  };
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
      layout="inline"
      className="mt-4 h-[60px] w-[1290px] items-center rounded-xl bg-white p-[6px]"
    >
      <div className=" grid w-[1135px] grid-cols-3">
        <Form.Item<FieldType>
          name="search"
          noStyle={true}
          className="flex items-center justify-center font-semibold"
        >
          <Input
            className="h-full w-full text-[16px]"
            placeholder="Nhập vị trí muốn ứng tuyển"
            prefix={
              <SearchOutlined className=" pr-1 text-xl text-orange-alta" />
            }
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="specialize"
          noStyle={true}
          className="flex items-center justify-center font-semibold"
        >
          <Select
            suffixIcon={
              <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta " />
            }
            placeholder="Chọn lĩnh vực chuyên môn"
            className="!h-full w-full border-x-[1px] text-xl font-normal"
            size="large"
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
          name="company"
          noStyle={true}
          className="flex items-center justify-center font-semibold"
        >
          <Select
            suffixIcon={
              <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
            }
            placeholder="Chọn công ty"
            size="large"
            className="!h-full w-full font-normal"
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
      </div>
      <div className="h-full w-[143px]">
        <Form.Item noStyle={true}>
          <Button
            htmlType="submit"
            type="primary"
            className="flex h-full w-full items-center justify-center bg-orange-alta text-base font-bold text-white"
          >
            <SearchOutlined className="!flex text-xl" /> Tìm việc
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchJob;
