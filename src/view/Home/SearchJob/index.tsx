import { Button, Form, Input, Select } from "antd";
import {
  CaretDownOutlined,
  SearchOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
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
    <>
      <div className="flex w-full items-center justify-center gap-2 px-4 sm:w-[550px] sm:gap-4 sm:px-0 lg:w-full">
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="inline"
          className="h-[44px] w-full items-center  rounded-lg bg-white p-[6px] lg:mt-4 lg:h-[60px] lg:w-[900px] xl:w-[1290px]"
        >
          <div className=" xxl:w-[1135px] flex-1 lg:grid lg:grid-cols-3">
            <Form.Item<FieldType>
              name="search"
              noStyle={true}
              className="flex items-center justify-center font-semibold"
            >
              <Input
                className="h-full w-full text-[16px]"
                placeholder="Nhập vị trí muốn ứng tuyển"
                prefix={
                  <SearchOutlined className=" pr-1 text-[20px] text-orange-alta" />
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
                className="hidden !h-full w-full border-x-[1px] text-xl font-normal lg:block"
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
                className="hidden !h-full w-full font-normal lg:block"
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
          <div className="hidden h-full lg:block lg:w-[143px]">
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
        <div className="h-[44px] lg:hidden">
          <Button
            type="primary"
            className="flex h-full w-full items-center bg-orange-alta font-semibold text-white"
            onClick={() => {
              dispatch(getJobs());
            }}
          >
            Lọc <SlidersOutlined className="text-[20px]" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default SearchJob;
