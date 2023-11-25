import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchDive grid gap-10 bg-[#f1f4f8] rounded-[10px] p-[48px] ">
      <p className=" text-gray-500 text-[56px] font-medium font-['Inter'] leading-[64px] ">
        Find a job that suits <br></br>your interest & skills.
      </p>
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-[#f1f4f8 700]">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              value={search}
              onChange={changeHandler}
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here...."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon" />
          </div>
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Company...."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon" />
          </div>
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Location ...."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon" />
          </div>

          <button
            onClick={async (event) => {
              event.preventDefault();
              console.log(search);
              //Make request to search
              const response = await fetch(`http://localhost:8000/api/jobs?query=${search}`, {
                method: 'GET',
              });
              const jobs = await response.json();
              console.log(jobs);
            }}
            className="bg-[#2a68ff] h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300"
          >
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>

          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Containes</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>

          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full- Time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part- Time</option>
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
            <option value="">Advance</option>
            <option value="">Intermediate</option>
            <option value="">Begginer</option>
          </select>
        </div>
        <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
