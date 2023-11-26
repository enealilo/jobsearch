export default function PostJob() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-600 text-[40px] font-['Inter'] leading-[64px]">
          Post a Job
        </h1>
        <p className="font-medium text-cyan-700 text-[25px] ">
          Get your job posting seen by thousands of technology passionants!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="  bg-[#f1f4f8] rounded-[10px] shadow-lg p-10 mt-12 w-[654px] ">
          <h3 className="font-medium text-gray-600">COMPANY DETAILS</h3>
          <div className="flex flex-row  gap-x-16">
            <div className=" border border-gray-600 rounded w-[267px] h-[146px] mt-5 ">
              <p className="flex justify-center pt-28"> Upload Image</p>
            </div>
            <div className=" flex flex-col pt-4">
              <label className="font-medium text-gray-600 pt-5 ">
                Company Name
              </label>
              <input className=" focus:outline-none mt-2" type="text"></input>
              <label className="font-medium text-gray-600 pt-5 ">
                Company Website
              </label>
              <input className=" focus:outline-none mt-2" type="text"></input>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-600 pb-5 pt-12">
              JOB DETAILS
            </h3>
            <div className="flex flex-row justify-center gap-20">
              <div className="singleSearch flex items-center gap-2">
                <label
                  htmlFor="relevance"
                  className="text-[#808080] font-semibold"
                >
                  Sort by:
                </label>

                <select
                  name=""
                  id="relevance"
                  className="bg-white rounded-[3px] px-4 py-1"
                >
                  <option value="">Salary</option>
                  <option value="">Time</option>
                </select>
              </div>
              <div className="singleSearch flex items-center gap-2">
                <label htmlFor="level" className="text-[#808080] font-semibold">
                  Level:
                </label>

                <select
                  name=""
                  id="level"
                  className="bg-white rounded-[3px] px-4 py-1"
                >
                  <option value="">Senior</option>
                  <option value="">Intermediate</option>
                  <option value="">Begginer</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col pb-5 pt-5">
                <label className="font-medium text-gray-600 pt-5">Job Description</label>
                <textarea className="mt-5" placeholder=""></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
