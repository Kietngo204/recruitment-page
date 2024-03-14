import { Image } from "antd";
import { useAppSelector } from "../../core/redux/hooks";
import SearchJob from "./SearchJob";
import JobList from "../JobList";
import { Outlet } from "react-router-dom";

const Home = () => {
  const { images } = useAppSelector((state) => state.images);
  const { jobs } = useAppSelector((state) => state.jobs);

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchJob />
      <div className="mt-12">
        <h1 className="text-center text-[32px] font-bold uppercase leading-10">
          Tìm <span className="text-orange-alta">công việc mơ ước của bạn</span>
          <br />
          tại ngôi nhà mới
        </h1>
      </div>
      {/* {!jobs && (
        <p className="mt-2 text-center leading-[22.4px] text-[#6D6D6D]">
          Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm
          <br />
          để tận dụng tối đa tìm kiếm của bạn
        </p>
      )}

      {jobs ? (
        <JobList />
      ) : (
        <div className="mt-12 h-[400px] w-[639px]">
          <Image src={images?.background} alt="background" preview={false} />
        </div>
      )} */}
      <Outlet />
    </div>
  );
};

export default Home;
