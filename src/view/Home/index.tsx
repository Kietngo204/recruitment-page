import SearchJob from "./SearchJob";

import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <SearchJob />
      <div className="mt-12 w-[340px] lg:w-[507px]">
        <h1 className="text-center text-2xl font-bold uppercase lg:text-[32px] lg:leading-10">
          Tìm <span className="text-orange-alta">công việc mơ ước</span> của bạn
          tại ngôi nhà mới
        </h1>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
