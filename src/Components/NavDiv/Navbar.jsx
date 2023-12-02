import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[48pm]">
      <Link to="/">
        <div className="logoDiv flex flex-row">
          <img className="mt-4 w-11 h-11" src="/byte-noword.png" />
          <h1 className="logo text-[45px] text-[#2a68ff] pl-[10px] italic">
            <strong>ByteCareer</strong>
          </h1>
        </div>
      </Link>

      <div className="menu flex gap-8">
        <li className="menuList text-gray-600 font-bold hover:text-[#2a68ff] ">
          <Link to="/">Home</Link>
        </li>
        <li className="menuList text-gray-600 font-bold hover:text-[#2a68ff] ">
          <Link to="/postjob"> Post Job </Link>
        </li>
        <li className="menuList text-gray-600 font-bold hover:text-[#2a68ff]">
          <Link to="/aboutus"> About Us</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
