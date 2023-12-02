import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { Form } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Search = () => {
  const { query } = useLoaderData();
  const [search, setSearch] = useState(query);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchDive grid gap-10 bg-[#f1f4f8] rounded-[10px] p-[48px] ">
      <div className="flex pl-10">
        <p className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-600 text-[56px] font-['Inter'] leading-[64px] mt-28">
          Find a job that suits <br></br>your interest & skills.
        </p>
        <img className="w-96 h-45 ml-16 " src="src\assets\globee.png"></img>
      </div>

      <Form className="pt-0" action="/">
        <div className="firstDiv flex justify-between items-center rounded-[8px] bg-white p-5  shadow-lg shadow-[#f1f4f8 700]">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              value={search}
              onChange={changeHandler}
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job Here...."
              name="query"
            />
          </div>
          <div className="flex gap-2 items-center"></div>

          <button
            type="submit"
            onClick={async (event) => {
              event.preventDefault();
              console.log(search);
              //Make request to search
              const response = await fetch(
                `http://localhost:8000/api/jobs?query=${search}`,
                {
                  method: "GET",
                }
              );
              const jobs = await response.json();
              console.log(jobs);
            }}
            className="bg-[#2a68ff] h-full p-4 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300"
          >
            Search
          </button>
        </div>
      </Form>

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
        <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
