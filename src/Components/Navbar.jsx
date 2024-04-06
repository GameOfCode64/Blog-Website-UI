import { Menu } from "lucide-react";
const Navbar = () => {
  return (
    <div className="w-full md:h-[90px] h-[70px] bg-[#f5f7f7] shadow-sm">
      <div className="flex items-center justify-between md:px-6 md:py-6 px-4 py-4">
        <div className="">
          <a href="/">
            <p className="font-bold text-[28px] text-[#896efd]">Logo</p>
          </a>
        </div>
        <div>
          <Menu className="md:hidden block" />
          <ul className="md:flex items-center justify-center gap-5 list-none font-semibold hidden ">
            <a href="#">
              <li className="text-[#896efd]">Technology</li>
            </a>
            <a href="#">
              <li className="text-[#896efd]">Gameing</li>
            </a>
            <a href="#">
              <li className="text-[#896efd]">News</li>
            </a>
            <a href="#">
              <li className="text-[#896efd]">Al&ML</li>
            </a>
            <a href="#">
              <li className="text-[#896efd]">Other</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
