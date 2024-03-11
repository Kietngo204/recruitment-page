import { Image } from "antd";
import { useAppSelector } from "../../../../core/redux/hooks";

const JoinUs = () => {
  const { images } = useAppSelector((state) => state.images);

  return (
    <div className="absolute left-[1025px] top-[332px] z-20 h-[341px] w-[580px]">
      <Image src={images?.joinUs} alt="joinUs" preview={false} />
    </div>
  );
};

export default JoinUs;
