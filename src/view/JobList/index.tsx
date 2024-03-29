import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { JopItemType } from "./interface";
import JobItem from "./JobItem";
import { useAppSelector } from "../../core/redux/hooks";
import Loading from "../../shared/components/Loading";

const JobList = () => {
  const { jobs, isLoading } = useAppSelector((state) => state.jobs);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobsPerPage, setJobsPerPage] = useState<number>(9);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs?.slice(indexOfFirstJob, indexOfLastJob);

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setJobsPerPage(5);
      } else if (window.innerWidth <= 768) {
        setJobsPerPage(6);
      } else if (window.innerWidth <= 992) {
        setJobsPerPage(6);
      } else {
        setJobsPerPage(9);
      }
    };

    handleResize(); // Gọi hàm một lần để xác định giá trị ban đầu
    window.addEventListener("resize", handleResize); // Lắng nghe sự kiện resize của cửa sổ
    return () => {
      window.removeEventListener("resize", handleResize); // Hủy lắng nghe khi component bị unmount
    };
  }, [setJobsPerPage, jobsPerPage]);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="xxl:w-[1290px] mx-auto  mt-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentJobs?.map((job: JopItemType, index: number) => (
            <JobItem key={index} company={job.company} img={job.img} />
          ))}
        </div>
        <Pagination
          current={currentPage}
          total={jobs?.length}
          pageSize={jobsPerPage}
          onChange={handlePaginationChange}
          className="mt-6 flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default JobList;
