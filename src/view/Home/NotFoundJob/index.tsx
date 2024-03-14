import { Image } from "antd";
import { useAppSelector } from "../../../core/redux/hooks";

const NotFoundJob = () => {
  const { images } = useAppSelector((state) => state.images);
  return (
    <div>
      <p className="mt-2 text-center leading-[22.4px] text-[#6D6D6D]">
        Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm
        <br />
        để tận dụng tối đa tìm kiếm của bạn
      </p>
      <div className="mt-12 h-[400px] w-[639px]">
        <Image src={images?.background} alt="background" preview={false} />
      </div>
    </div>
  );
};

export default NotFoundJob;
