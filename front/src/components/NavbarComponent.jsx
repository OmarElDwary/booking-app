import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { IoSearchSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

const style = {
    header: "bg-[#ffffff] p-4 flex justify-between items-center shadow-lg shadow-[#dfe4ea]",
    logo: "text-2xl font-bold text-[#2f3542] flex items-center cursor-pointer",
    divs: "flex items-center gap-2 p-2 text-[#2f3542] border-2 border-[#2f3542] rounded-full shadow-lg shadow-[#dfe4ea] cursor-pointer",
    sec: "hover:text-white hover:bg-[#2f3542] p-2 rounded-full",
    border: "border-l-2 border-[#2f3542] h-6 mx-4",
    seacrh: "bg-[#1e90ff] rounded-full p-2 text-white hover:bg-[#70a1ff]",
    user: "flex items-center gap-4 text-[#2f3542] font-bold border-2 border-[#2f3542] rounded-full shadow-lg shadow-[#dfe4ea] p-2 hover:bg-[#2f3542] hover:text-white cursor-pointer",
}
function NavbarComponent() {
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
            <Link to="/login">
                <div className={style.user}>
                    <GiHamburgerMenu />
                    <FaUserCircle />
                    <span>Login</span>
                </div>
            </Link>
        </header>
    </div>
  )
}

export default NavbarComponent