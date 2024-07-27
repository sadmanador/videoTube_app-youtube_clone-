"use client";
import logo from "@/assets/logo.png";
import menu_icon from "@/assets/menu.png";
import more_icon from "@/assets/more.png";
import notification_icon from "@/assets/notification.png";
import search_icon from "@/assets/search.png";
import upload_icon from "@/assets/upload.png";
import profile_icon from "@/assets/user_profile.jpg";
import useInfo from "@/hooks/useInfo";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  const { setSidebar } = useInfo();

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <Image
          src={menu_icon}
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          className="menu-icon "
          alt=""
        />
        <Link href='/'>
          <Image src={logo} className="logo " alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <Image src={search_icon} className="search-icon " alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <Image src={upload_icon} alt="" />
        <Image src={more_icon} alt="" />
        <Image src={notification_icon} alt="" />
        <Image src={profile_icon} alt="" className="user-icon " />
      </div>
    </nav>
  );
};

export default Navbar;
