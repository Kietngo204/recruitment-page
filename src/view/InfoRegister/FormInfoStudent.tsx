import { CaretDownOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { Form, Upload, Input, FormProps, Select } from "antd";
import ButtonSend from "../../shared/components/ButtonSend";
import CustomDatePicker from "../../shared/components/CustomDatePicker";
import dayjs from "dayjs";
import { useAppDispatch } from "../../core/redux/hooks";
import { setOpenModalApply } from "../../core/redux/features/modalApply/modalApplySlice";

const FormInfoStudent = () => {
  const dispatch = useAppDispatch();
  type FieldType = {
    file?: any;
    username?: string;
    school?: string;
    dateOfBirth?: string;
    specialized?: string;
    position?: string;
    regisForm?: string;
    email?: string;
    implement?: string;
    phone?: string;
    youKnow?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    console.log("File:", values?.file?.fileList);
    console.log("Date:", dayjs(values.dateOfBirth).format("DD-MM-YYYY"));
    dispatch(setOpenModalApply());
  };

  const normFile = (e: any) => {
    console.log(e.fileList);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      className="mt-4 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-3"
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Chọn file"
        name="file"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn file",
          },
        ]}
        valuePropName="fileList"
        getValueFromEvent={normFile}
        className="text-base  font-semibold lg:col-span-2"
      >
        <Upload
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="text"
          accept="image/*,.pdf,.docx"
          multiple={false}
        >
          <button className="rounded-2xl bg-white px-8 py-3" type="button">
            <CloudUploadOutlined className="text-[40px] text-[#F58A4D]" />
            <div className="my-3 rounded-lg bg-[#F58A4D] px-6 py-[10px] font-bold text-white">
              Chọn file
            </div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item<FieldType>
        label="Họ và tên"
        name="username"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập họ tên",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập họ và tên" className="px-4 py-[10px]" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Trường đang học"
        name="school"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập trường đang học",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập trường đang học" className="px-4 py-[10px]" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Ngày sinh"
        name="dateOfBirth"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập trường đang học",
            type: "date",
          },
        ]}
        className=" text-base font-semibold"
      >
        <CustomDatePicker
          placeholder="Chọn ngày sinh"
          className="w-full px-4 py-[10px]"
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Chuyên ngành"
        name="specialized"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập chuyên ngành",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập chuyên ngành" className="px-4 py-[10px]" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Chọn vị trí ứng tuyển"
        name="position"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn vị trí ứng tuyển",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Select
          suffixIcon={
            <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
          }
          placeholder="Option 1"
          className="h-[48px] text-[14px] font-normal"
        >
          <Select.Option value="Hồ Chí Minh">Hồ Chí Minh</Select.Option>
          <Select.Option value="Hà Nội">Hà Nội</Select.Option>
          <Select.Option value="Đà Nẵng">Đà Nẵng</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label="Hình thức đăng kí"
        name="regisForm"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn hình thức đăng kí",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Select
          suffixIcon={
            <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
          }
          placeholder="Option 1"
          className="h-[48px] text-[14px] font-normal"
        >
          <Select.Option value="Hồ Chí Minh">Hồ Chí Minh</Select.Option>
          <Select.Option value="Hà Nội">Hà Nội</Select.Option>
          <Select.Option value="Đà Nẵng">Đà Nẵng</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label="Địa chỉ email"
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email",
            type: "email",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập email" className="px-4 py-[10px]" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Hình thức thực hiện"
        name="implement"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn hình thức thực hiện",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Select
          suffixIcon={
            <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
          }
          placeholder="Option 1"
          className="h-[48px] text-[14px] font-normal"
        >
          <Select.Option value="Hồ Chí Minh">Hồ Chí Minh</Select.Option>
          <Select.Option value="Hà Nội">Hà Nội</Select.Option>
          <Select.Option value="Đà Nẵng">Đà Nẵng</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item<FieldType>
        label="Điện thoại"
        name="phone"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số điện thoại",
            type: "string",
            max: 10,
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập số điện thoại" className="px-4 py-[10px]" />
      </Form.Item>
      <Form.Item<FieldType>
        label="Bạn biết đến Alta Group từ đâu"
        name="youKnow"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn nơi bạn biết đến",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Select
          suffixIcon={
            <CaretDownOutlined className="rotate-down-animation text-[16px] text-orange-alta" />
          }
          placeholder="Option 1"
          className="h-[48px] text-[14px] font-normal"
        >
          <Select.Option value="Hồ Chí Minh">Hồ Chí Minh</Select.Option>
          <Select.Option value="Hà Nội">Hà Nội</Select.Option>
          <Select.Option value="Đà Nẵng">Đà Nẵng</Select.Option>
        </Select>
      </Form.Item>
      <p className="mb-3 flex items-center before:me-[4px] before:inline-block before:font-['SimSun'] before:font-semibold before:text-[#ff4d4f] before:content-['*'] lg:col-span-2 lg:mt-[-12px]">
        là những trường hợp bắt buộc
      </p>
      <Form.Item>
        <ButtonSend />
      </Form.Item>
    </Form>
  );
};

export default FormInfoStudent;
