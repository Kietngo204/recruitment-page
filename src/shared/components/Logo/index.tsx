interface LogoProps {
  absolute?: boolean;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { absolute = false, bottom, left, right, top } = props;

  const tailwindClasses = [
    "h-[52px]",
    "w-[373px]",
    "bg-logo-alta",
    "bg-cover",
    absolute ? "absolute" : "",
    left ? `left-[${left}]` : "",
    top ? `top-[${top}]` : "",
    right ? `right-[${right}]` : "",
    bottom ? `bottom-[${bottom}]` : "",
  ].join(" ");

  return <div className={tailwindClasses}></div>;
};

export default Logo;
