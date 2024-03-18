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
      className={` xxl:h-[52px] xxl:w-[373px] h-[30px] w-[221px] sm:h-[41px] sm:w-[300px] ${absolute} ${top} ${left} ${right} ${bottom}`}
    >
      <Link to={"/"}>
        <Image src={images?.logo} alt="logo" preview={false} />
      </Link>
    </div>
  );
};

export default Logo;
