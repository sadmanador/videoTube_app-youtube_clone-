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
  const { setSidebar,setLightMode, lightMode } = useInfo();

  return (
    <nav className={`flex-div ${lightMode?"":"dark-mode"}`}>
      <div className="nav-left flex-div">
        <Image
          src={menu_icon}
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          className="menu-icon "
          alt=""
        />
        <Link href="/">
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
        <div className="darkmode-btn">
          <div>
            <input type="checkbox" id="darkmode-toggle" onChange={() => setLightMode((prev) => (prev === false ? true : false))}/>
            <label htmlFor="darkmode-toggle" className="darkmode-label">
              <svg
                className="sun"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <path
                    d="M12 2V4"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M12 20V22"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4 12L2 12"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M22 12L20 12"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M19.7778 4.22266L17.5558 6.25424"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M4.22217 4.22266L6.44418 6.25424"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M6.44434 17.5557L4.22211 19.7779"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M19.7778 19.7773L17.5558 17.5551"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                className="moon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
