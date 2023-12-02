import { useLoaderData } from "react-router-dom";
import { DateTime } from "luxon";

export default function JobDesc() {
  const job = useLoaderData();
  console.log(job);

  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="flex flex-row">
          <div className="flex flex-col pt-10 ml-40">
            <div className="flex flex-row">
              <img
                className="w-14 h-14 rounded-[100px] mt-2"
                src={job.company.logo}
              />
              <div className=" flex-col justify-start items-start  inline-flex">
                <div className="justify-start items-center inline-flex ">
                  <div className="text-zinc-900 text-xl ml-5 font-medium font-['Inter'] leading-loose">
                    {job.title}
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-neutral-600 text-lg ml-5 font-normal font-['Inter'] leading-7">
                    {job.company.name}
                  </div>
                  <div className=" ml-3 px-5 py-1 bg-green-600 rounded-[3px] justify-start items-start gap-2.5 flex">
                    <div className="text-white text-sm font-semibold font-['Inter'] leading-tight">
                      {job.expLevel.toUpperCase()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[760px] h-[1268px] flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[760px] text-zinc-900 text-lg font-medium font-['Inter'] leading-7 pt-10">
                Job Description
              </div>
              <div className="w-[734px] text-gray-500 text-base font-normal font-['Inter'] leading-normal">
                {job.description}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="pb-16">
              <div className="w-22 h-10 h-14 px-8 mt-12 bg-blue-700 rounded justify-center items-center gap-3 inline-flex">
                <div className="text-white text-base font-medium font-['Inter'] capitalize leading-normal">
                  Apply now
                </div>
                <img
                  className="w-6 h-6 relative"
                  src="/src\assets\fi_arrow-right.svg"
                />
              </div>
            </div>
            <div className="pb-16">
              <div className="w-96 h-40 p-8 bg-white rounded-lg border-2 border-sky-100 shadow-lg justify-center items-center gap-8 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-center items-center gap-3 inline-flex">
                  <div className="self-stretch text-center text-zinc-900 text-base font-medium font-['Inter'] leading-normal">
                    Salary (USD)
                  </div>
                  <div className="self-stretch h-12 flex-col justify-center items-center gap-1 flex">
                    <div className="text-center text-green-600 text-xl font-bold font-['Inter'] leading-normal">
                      {job.salary.min}$ - {job.salary.max}$
                    </div>
                    <div className="self-stretch text-center text-gray-500 text-sm font-normal font-['Inter'] leading-tight">
                      Monthly salary
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-56  bg-white rounded-lg border-2 border-sky-100 shadow-lg flex-col justify-start inline-flex">
              <div className=" text-zinc-900 text-lg font-medium font-['Inter'] leading-7 ml-6 pt-6 pb-6">
                Job Overview
              </div>
              <div className=" justify-start items-start inline-flex pl-6">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="w-8 h-8 justify-center items-center inline-flex">
                    <img
                      src="/src\assets\CalendarBlank.svg"
                      className="w-8 h-8 relative"
                    />
                  </div>
                  <div className="self-stretch  flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Inter'] uppercase leading-[18px]">
                      Job Posted:
                    </div>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Inter'] leading-tight">
                      {DateTime.fromISO(job.createdAt).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="w-8 h-8 justify-center items-center inline-flex">
                    <img
                      src="/src\assets\Stack.svg"
                      className="w-8 h-8 relative"
                    />
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Inter'] uppercase leading-[18px]">
                      Job Level:
                    </div>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Inter'] leading-tight">
                      Junior
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                  <div className="w-8 h-8 justify-center items-center inline-flex">
                    <img
                      src="/src\assets\Wallet.svg"
                      className="w-8 h-8 relative"
                    />
                  </div>
                  <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-gray-500 text-xs font-normal font-['Inter'] uppercase leading-[18px]">
                      Salary:
                    </div>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Inter'] leading-tight">
                    {job.salary.min}$ - {job.salary.max}$/monthly
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
