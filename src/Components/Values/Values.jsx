import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.jpg";

const Values = () => {
  return (
    <div className="mb-[64px] mt-[100px]">
      <h1 className="text-[#252b36] text-[25px] py-[32px] pb[48px] font-bold w-[400px block]">
        The values that hold us true and to account
      </h1>

      <div className="grid gap-[160px] grid-cols-3 items-center">

        <div className="singleGrid rounded-[10px] p-[24px] hover:bg-[#eeedf7]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[13px] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo5} alt="" className="w-[80%]" />
            </div>

            <span className="font-semibold text-[252b36] text-[18px]">
            Empower and Delegate
            </span>
          </div>
          <p className="text-[13px] text-[252b36] opacity-[0.7] py-[16px] font-semibold">
          Inspirational leaders understand that they set the tone for the entire organization. They lead by example, embodying the values and behaviors they expect from their teams. When leaders exhibit integrity, dedication, and a strong work ethic, it becomes contagious, inspiring employees to follow suit.
          </p>
        </div>
        
        <div className="singleGrid rounded-[10px] p-[24px] hover:bg-[#eeedf7]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[13px] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo6} alt="" className="w-[80%]" />
            </div>

            <span className="font-semibold text-[252b36] text-[18px]">
              Lead by Example
            </span>
          </div>
          <p className="text-[13px] text-[252b36] opacity-[0.7] py-[16px] font-semibold">
          Inspirational leaders recognize the importance of giving their employees autonomy and trusting them to make decisions. When employees feel empowered and trusted, they are more likely to take ownership of their work, innovate, and contribute positively to the company culture.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] p-[24px] hover:bg-[#eeedf7]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[13px] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={logo7} alt=""/>
            </div>

            <span className="font-semibold text-[252b36] text-[18px]">
            Celebrate Diversity and Inclusion:
            </span>
          </div>
          <p className="text-[13px] text-[252b36] opacity-[0.7] py-[16px] font-semibold">
          Inclusive leaders understand that diversity in thought, background, and experience can lead to innovation and creativity. They actively promote diversity and inclusion within their organizations, fostering a culture where every employee feels valued and respected.
          </p>
        </div>

      </div>
      <div className="card mt-[32px] flex justify-between bg-[#2a68ff] p-[80px] rounded-[10px]">
        <div>
          <h1 className="text-[#2a68ff] text-[30px] font-bold">Ready to switch a career</h1>
          <h2 className="text-[#252b36] text-[25px] font-bold">Begin!</h2>
        </div>

        <button className="border-[2px] rounded-[10px] py-px] px-[50px] text-[18px] font-semibold text-white hover:bg-black border-[#2a68ff]"> Get Startes</button>

      </div>
    </div>
  );
};

export default Values;
