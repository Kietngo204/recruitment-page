import { Form, FormProps, Input } from "antd";
import ButtonSend from "../../shared/components/ButtonSend";
import { useAppDispatch } from "../../core/redux/hooks";
import { setOpenModalApply } from "../../core/redux/features/modalApply/modalApplySlice";

const FormInfoBusiness = () => {
  const dispatch = useAppDispatch();
  type FieldType = {
    email?: string;
    address?: string;
    name?: string;
    manager?: string;
    phone?: string;
    phoneManager?: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    dispatch(setOpenModalApply());
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      className="mt-4 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-3"
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Email liên hệ"
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
        label="Địa chỉ công ty"
        name="address"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập địa chỉ công ty",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập địa chỉ công ty" className="px-4 py-[10px]" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Tên doanh nghiệp"
        name="name"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập tên doanh nghiệp",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập tên doanh nghiệp" className="px-4 py-[10px]" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Người quản lý"
        name="manager"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập người quản lý",
            type: "string",
          },
        ]}
        className=" text-base font-semibold"
      >
        <Input placeholder="Nhập người quản lý" className="px-4 py-[10px]" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Điện thoại công ty"
        name="phone"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số điện thoại",
            type: "string",
            max: 10,
          },
        ]}
        className="text-base font-semibold"
      >
        <Input placeholder="Nhập số điện thoại" className="px-4 py-[10px]" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Điện thoại người quản lý"
        name="phoneManager"
        className="text-base font-semibold"
      >
        <Input
          placeholder="Nhập số điện thoại người quản lí"
          className="px-4 py-[10px]"
        />
      </Form.Item>

      <p className="col-span-2 mb-3 flex items-center before:me-[4px] before:inline-block before:font-['SimSun'] before:font-semibold before:text-[#ff4d4f] before:content-['*'] lg:mt-[-12px]">
        là những trường hợp bắt buộc
      </p>
      <Form.Item>
        <ButtonSend />
      </Form.Item>
    </Form>
  );
};

export default FormInfoBusiness;
