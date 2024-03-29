import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const { jobs } = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <label className="font-medium text-gray-600 m-6 italic ">
        Results : {jobs.length} jobs
      </label>

      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {jobs.map(
          ({ _id, image, title, time, location, description, company }) => {
            return (
              <div
                key={_id}
                className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#2a68ff] shadow-lg shadow-[#f1f4f8 400/700] hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[16px] font-semibold text-[#252b36] group-hover:text-white">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1"></span>
                </span>

                <p
                  id="descRow"
                  className="text-[13px] text-[#959595] border-t-[2px] mt-[20px] group-hover:text-white max-length  truncate ..."
                >
                  {description}
                </p>

                <div className="company flex items-center gap-2">
                  <img
                    src={company.logo}
                    alt="company logo"
                    className="w-[10%]"
                  />
                  <span className="text-[14px] py-[1rem] block  group-hover:text-white">
                    {company.name}
                  </span>
                </div>
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-[#252b36] hover:bg-white  group-hover:text-[#252b36]">
                  <Link to={`/job/${_id}`}>Read more</Link>
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
