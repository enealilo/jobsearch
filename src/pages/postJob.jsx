import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas, faTwitter, faFontAwesome);
import { useState } from "react";

export default function PostJob() {
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [level, setLevel] = useState("senior");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(undefined);
  const [email, setEmail] = useState ("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setLogo(base64);
  };

  const submitJob = (e) => {
    e.preventDefault();
    console.log({
      company,
      job,
      minSalary,
      maxSalary,
      level,
      description,
      email,
      phone,
      address,
    });

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      title: job,
      expLevel: level,
      description: description,
      contactInfo: {
        cell: phone,
        email,
        address,
      },
      company: {
        name: company,
        logo,
      },
      salary: {
        min: minSalary,
        max: maxSalary,
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8000/api/jobs", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        window.location.href = `/job/${result._id}`;
      })
      .catch((error) => console.log("error", error));

  };

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
      <div className="flex justify-center pb-20">
        <div className="  bg-[#f1f4f8] rounded-[10px] shadow-lg p-10 mt-12 w-[654px] ">
          <h3 className="font-medium text-gray-600">COMPANY DETAILS</h3>
          <div className="flex flex-row  gap-x-16">
            <div className="rounded w-[250px] h-[146px] mt-7 border border-gray-400 focus:ring-blue-500 focus:border-blue-500 ">
              <input
                type="file"
                className="flex justify-center pt-28"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
              <FontAwesomeIcon icon="fa-solid fa-upload" />
            </div>

            <div className=" flex flex-col  w-1/2">
              <label className="font-medium text-gray-600 pt-5">
                Company Name
              </label>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className=" focus:outline-none mt-2 rounded p-1 rounded box-border border-2"
                type="text"
              ></input>
              <label className="font-medium text-gray-600 pt-5 ">
                Job Title
              </label>
              <input
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className=" focus:outline-none mt-2 rounded p-1 rounded box-border border-2"
                type="text"
              ></input>
            </div>
          </div>
          <div>
          <h3 className="font-medium text-gray-600 pb-5 pt-12">
              JOB DETAILS
            </h3>
            <div className="flex flex-row gap-4">
              <div className="singleSearch flex items-center gap-2">
                <label className="text-[#808080] font-semibold">Salary</label>
                <input
                  value={minSalary}
                  onChange={(e) => setMinSalary(e.target.value)}
                  className=" focus:outline-none  rounded box-border h-8 w-28 p-4 border-2 "
                  type="number"
                  placeholder="Min range"
                ></input>
                <input
                  value={maxSalary}
                  onChange={(e) => setMaxSalary(e.target.value)}
                  className=" focus:outline-none  rounded  box-border h-8 w-28 p-4 border-2 "
                  type="number"
                  placeholder="Max range"
                ></input>
              </div>
              <div className="singleSearch flex items-center gap-2">
                <label htmlFor="level" className="text-[#808080] font-semibold">
                  Level:
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  name=""
                  id="level"
                  className="bg-white rounded-[3px] px-4 py-1 rounded box-border border-2"
                >
                  <option value="senior">Senior</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="junior">Junior</option>
                </select>
              </div>
            </div>
            </div>
            <div>
          <h3 className="font-medium text-gray-600 pb-5 pt-12">
              CONTACT INFORMATION
            </h3>
            <div className="flex flex-row gap-4">
              <div className="singleSearch flex items-center gap-2">
                <label className="text-[#808080] font-semibold">Cellular</label>
                <input
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)}
                  placeholder="(+355)"
                  className=" focus:outline-none  rounded box-border h-8 w-28 p-4 border-2 "
                ></input>
                  <label className="text-[#808080] font-semibold">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" focus:outline-none  rounded box-border h-8 w-28 p-4 border-2 "
                ></input>
                  <label className="text-[#808080] font-semibold">Address</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className=" focus:outline-none  rounded box-border h-8 w-28 p-4 border-2 "
                ></input>
            </div>
            </div>
          

          
            </div>
            <div className="pb-5 pt-5">
              <label
                htmlFor="message"
                className="font-medium text-gray-600 pt-5 block mb-2 text-sm font-medium"
              >
                JOB DESCRIPTION
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="message"
                rows="4"
                className="block p-2.5 focus:outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Describe your job here..."
              ></textarea>
            </div>
            

            <div className="flex justify-end">
              <button
                onClick={submitJob}
                className="bg-[#2a68ff] h-full p-3 px-6 rounded-[10px] text-white cursor-pointer hover:bg-blue-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
     
    </>
  );
}
