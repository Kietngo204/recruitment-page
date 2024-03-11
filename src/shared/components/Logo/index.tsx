import { Image } from "antd";
import { useAppSelector } from "../../../core/redux/hooks";
import { Link } from "react-router-dom";

interface LogoProps {
  absolute?: string;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { absolute = "", bottom = "", left = "", right = "", top = "" } = props;

  const { images } = useAppSelector((state) => state.images);

  return (
    <div
      className={`h-[52px] w-[373px] ${absolute} ${top} ${left} ${right} ${bottom}`}
    >
      <Link to={"/"}>
        <Image src={images?.logo} alt="logo" preview={false} />
      </Link>
    </div>
  );
};

export default Logo;
