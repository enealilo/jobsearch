const Navbar =()=> {
  return (
    <div className="navBar flex justify-between items-center p-[48pm]">
      <div className="logoDiv">
        <h1 className="logo text-[50px] text-[#2a68ff] pl-[10px] italic">
          <strong>INTERHIRE.</strong>
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[black] font-bold hover:text-[#2a68ff] ">
          Jobs
        </li>
        <li className="menuList text-[black] font-bold hover:text-[#2a68ff] ">
          Companies
        </li>
        <li className="menuList text-[black] font-bold hover:text-[#2a68ff] ">
          About
        </li>
        <li className="menuList text-[black] font-bold hover:text-[#2a68ff]">
          Contact
        </li>
      </div>
    </div>
  );
}

export default Navbar;
