import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { JopItemType } from "./interface";
import { useAppSelector } from "../../core/redux/hooks";
import { Image } from "antd";
import { useState } from "react";

const JobItem: React.FC<JopItemType> = ({ company, img }) => {
  const { images } = useAppSelector((state) => state.images);
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative rounded-xl bg-white p-3">
      <div className="absolute right-[12px] top-[12px] h-9 w-9">
        <Image
          preview={false}
          src="https://i.postimg.cc/RZDnzWTg/download.png"
          alt="download"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div
          className="flex cursor-pointer items-center"
          onClick={() => setVisible(true)}
        >
          <div className="h-[35px] w-[33.61px]">
            <Image
              preview={{
                visible,
                src: images?.recruitment,
                onVisibleChange: (value) => {
                  setVisible(value);
                },
                mask: false,
              }}
              src={img}
              alt="img"
            />
          </div>
          <div className="flex flex-col justify-between pl-3">
            <h3 className="font-medium leading-[18.75px]">
              Thiết kế UI/UX (Figma)
            </h3>
            <p className="text-[13px] leading-[15.23px] text-[#929292]">
              {company}
            </p>
          </div>
        </div>
        <h4 className="py-3 text-[14px] leading-[18.2px]">
          Yêu cầu: Có tối thiểu 1 năm kinh
          <br />
          nghiệm ReactJS, Typescript
        </h4>
        <div className="flex items-center justify-around border-t border-dashed border-[#B6B6B6] pt-3 text-center text-[14px] text-[#6D6D6D]">
          <p className="flex w-full items-center justify-center border-r border-[#B6B6B6] pr-3 sm:pr-0">
            <MailOutlined /> tuyendung@alta.com.vn
          </p>
          <p className="w-full pl-3 sm:pl-0">
            <PhoneOutlined rotate={90} /> 0282 240 9960
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
