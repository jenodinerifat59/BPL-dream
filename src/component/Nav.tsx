
import Logo from "../assets/logo.png";
import { AiOutlineDollar } from "react-icons/ai";

const Nav = ({coin}:{coin:number}) => {
 
  return (
    <nav className=" bg-amber-100">
      <div className="flex justify-between items-center container  mx-auto px-5">
       <img src={Logo} alt="" />
      <div className="flex justify-between gap-4 items-center">
         <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
       </ul>
       <p className=" flex items-center gap-1.5 border-5 rounded-2xl text-xl font-bold border-green-200 py-2 px-5 ">{coin} Coin <AiOutlineDollar className="text-yellow-300 font-bold text-xl" />
</p>
      </div>
      </div>
    </nav> 
  )
}

export default Nav
