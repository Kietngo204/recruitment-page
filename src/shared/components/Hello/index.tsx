import { useAppSelector } from "../../../core/redux/hooks";

const Hello = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <h2 className="text-[24px] font-bold text-[#494949] md:text-[32px]">
      Xin chào{" "}
      <span className="uppercase text-orange-alta">
        {user?.displayName ? user.displayName : "thái trung kiên"}
      </span>
    </h2>
  );
};

export default Hello;
