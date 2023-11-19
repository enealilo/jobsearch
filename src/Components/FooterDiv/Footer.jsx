import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer p-[80px] mb-4 bg-[#2a68ff] rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div className="pr-[24px]">
        <div className="logoDiv">
          <h1 className="logo text-[40px] text-white pl-[10px] italic pb-[24px] pr-24[px]">
            <strong>ByteCareer</strong>
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employes find the best candidates.
        </p>
      </div>

      <div className="grid pl-[30px]">
        <span className="divTitele text-[18px] font-semibold pb-[24px] text-white">
          Conmpany
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            About Us
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Features
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">News</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitele text-[18px] font-semibold pb-[24px] text-white">
          Resourses
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Account
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Support Center
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Feedback
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Conract Us
          </li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitele text-[18px] font-semibold pb-[24px] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Events
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">Promo</li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Req Demo
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-[1] ">
            Careers
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitele text-[18px] font-semibold pb-[24px] text-white">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white">bytecareer@gmail.com</small>
          <div className="icons flex gap-4 py-[16px]">
            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#2a68ff]" />
            <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#2a68ff]" />
            <FaTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#2a68ff] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
