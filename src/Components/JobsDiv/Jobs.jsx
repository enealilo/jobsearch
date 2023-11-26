// Imported the incons
// Import teh logos
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.webp";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import { useLoaderData } from "react-router-dom";

const Data = [
  {
    id: 1,
    image: logo1,
    title: "Web Developer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 2,
    image: logo2,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 3,
    image: logo3,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 4,
    image: logo2,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 5,
    image: logo3,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 6,
    image: logo4,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 7,
    image: logo2,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 8,
    image: logo2,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 9,
    image: logo3,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
  {
    id: 10,
    image: logo3,
    title: "Softwere Engeneer",
    time: "Now",
    location: "Albania",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae neque ad velit laudantium quidem eos autem accusamus ullam voluptatem. Itaque id natus doloremque eos officiis iste! Pariatur, provident sit",
    company: "Novac Linus Co.",
  },
];

const Jobs = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {jobs.map(({ _id, image, title, time, location, description, company }) => {
          return (
            <div
              key={_id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-[#2a68ff] shadow-lg shadow-[#f1f4f8 400/700] hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-[#252b36] group-hover:text-white">
                  {title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  {/* <BiTime />
                  {time} */}
                </span>
              </span>
              {/* <h6 className="text-[#ccc]">{location}</h6> */}

              <p className="text-[13px] text-[#959595] border-t-[2px] mt-[20px] group-hover:text-white">
                {description}
              </p>

              <div className="company flex items-center gap-2">
                <img src={company.logo} alt="company logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block  group-hover:text-white">
                  {company.name}
                </span>
              </div>
              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-[#252b36] hover:bg-white  group-hover:text-[#252b36]">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
