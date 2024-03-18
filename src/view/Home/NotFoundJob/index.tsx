import { Image } from "antd";
import { useAppSelector } from "../../../core/redux/hooks";

const NotFoundJob = () => {
  const { images } = useAppSelector((state) => state.images);
  return (
    <div className="flex flex-col items-center">
      <p className="mt-2 w-[255px] text-center text-sm text-[#6D6D6D] lg:w-[490px] lg:text-base">
        Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm để
        tận dụng tối đa tìm kiếm của bạn
      </p>
      <div className="mx-auto mt-12 h-[214.71px] w-[343px] sm:h-[307px] sm:w-[491px] lg:h-[400px] lg:w-[639px]">
        <Image src={images?.background} alt="background" preview={false} />
      </div>
    </div>
  );
};

export default NotFoundJob;
