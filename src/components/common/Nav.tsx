import { FC } from "react";
import { logo } from "../../constant";

const Nav: FC = () => {
  return (
    //These styles are available in index.css
    <nav className="max-container flexStart padding-container px-6 
    relative z-30 py-5 bg-white-10 shadow-md h-[70px]">
      <a href="/">
        <img src={logo} alt="tramona-logo" />
      </a>
      <h1 className="text-[20px] font-bold pl-3">Home</h1>
    </nav>
  );
};

export default Nav;