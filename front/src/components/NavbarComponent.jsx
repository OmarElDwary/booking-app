import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsDoorOpenFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useState } from "react";
import axios from "axios";
const style = {
  header: "bg-[#ffffff] p-4 flex justify-between items-center shadow-lg shadow-[#dfe4ea]",
  logo: "text-2xl font-bold text-[#1e90ff] flex items-center cursor-pointer",
  divs: "flex items-center gap-2 p-2 text-[#2f3542] border-2 border-[#2f3542] rounded-full shadow-lg shadow-[#dfe4ea] cursor-pointer",
  sec: "hover:text-white hover:bg-[#2f3542] p-2 rounded-full",
  border: "border-l-2 border-[#2f3542] h-6 mx-4",
  seacrh: "bg-[#1e90ff] rounded-full p-2 text-white hover:bg-[#70a1ff]",
  user: "flex items-center gap-4 text-[#1e90ff] font-bold border-2 border-[#1e90ff] rounded-full shadow-lg shadow-[#dfe4ea] p-2 hover:bg-[#1e90ff] hover:text-white cursor-pointer",
  details: "absolute top-16 right-0 bg-[#ffffff] p-10 rounded-lg shadow-lg shadow-[#dfe4ea] hidden",
  acc: "flex justify-center items-center border-b-2 border-[#2f3542] pb-2 mb-2",
  logout: "flex justify-center items-center",
  destroy: "bg-[#e84118] text-white p-2 rounded-lg hover:bg-[#c23616] hover:text-white cursor-pointer",
};
function NavbarComponent() {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  async function handleLogout() {
    axios.post("/logout")
      setUser(null);
    setRedirect('/');
  }
  if(redirect){
    return <Navigate to={redirect} />
  }



  function accountSlider() {
    document.getElementById("details").classList.toggle("hidden");
  }

  return (
    <div>
      <header className={style.header}>
        <Link to="/">
          <a className={style.logo}>
            <SiYourtraveldottv />
            <span>Trivago</span>
          </a>
        </Link>
        <div className={style.divs}>
          <div className={style.sec}>Place</div>
          <div className={style.border}></div>
          <div className={style.sec}>Time</div>
          <div className={style.border}></div>
          <div className={style.sec}>Guests</div>
          <button className={style.seacrh}>
            <IoSearchSharp />
          </button>
        </div>
        <Link onMouseEnter={accountSlider} to={user ? "/account" : "/login"}>
          <div className={style.user}>
            <GiHamburgerMenu />
            <FaUserCircle />
            {!!user && <span>{user.username}</span>}
          </div>
        </Link>
        {!!user && (
          <div id="details" className={style.details}>
            <Link to="/account">
              <div className={style.acc}>
                <FaUserCircle />
                <span>Account</span>
              </div>
            </Link>
            <div className={`${style.logout} ${style.destroy}`} onClick={handleLogout}>
              <BsDoorOpenFill />
              <span>Logout</span>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default NavbarComponent;
