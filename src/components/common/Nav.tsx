import { ReactElement } from "react"
import { logo } from "../../constant"

const Nav = (): ReactElement => {
  return (
    //These styles are available in the index.css file
    <nav className="max-container flexStart padding-container relative 
    z-30 py-5 bg-white-10 shadow-md h-[70px]">

      <img
        src={logo}
        alt="tramona-logo"
      />
      <h1 className="text-[20px] font-bold pl-3">Home</h1>
    </nav>
  )
}

export default Nav