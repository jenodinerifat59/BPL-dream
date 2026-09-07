import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className=" bg-amber-100">
      <div className="flex justify-between items-center container  mx-auto px-5">
       <img src={Logo} alt="" />
      <div className="flex justify-between gap-4">
         <ul className="flex justify-between gap-4">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
       </ul>
       <button>0 Coin</button>
      </div>
      </div>
    </nav>
  )
}

export default Nav
