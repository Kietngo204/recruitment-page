import { Pagination } from "antd";
import { useState } from "react";
import { JopItemType } from "./interface";
import JobItem from "./JobItem";
import { useAppSelector } from "../../core/redux/hooks";
import Loading from "../../shared/components/Loading";

const JobList = () => {
  const { jobs } = useAppSelector((state) => state.jobs);
  console.log(jobs);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const jobsPerPage = 9;

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs?.slice(indexOfFirstJob, indexOfLastJob);

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!jobs) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-12 w-[1290px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
