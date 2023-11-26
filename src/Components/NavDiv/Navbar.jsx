const Navbar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[48pm]">
      <div className="logoDiv flex flex-row">
        <img className="mt-4 w-11 h-11" src="byte-noword.png " />
        <h1 className="logo text-[45px] text-[#2a68ff] pl-[10px] italic">
          <strong>ByteCareer</strong>
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-gray-600 font-bold hover:text-[#2a68ff] ">
          Home
        </li>
        <li className="menuList text-gray-600 font-bold hover:text-[#2a68ff] ">
          Find Job
        </li>
        <li className="menuList text-gray-600 font-bold hover:text-[#2a68ff] ">
          Post Job
        </li>
        <li className="menuList text-gray-600 font-bold hover:text-[#2a68ff]">
        About Us
        </li>
      </div>
    </div>
  );
};

export default Navbar;
