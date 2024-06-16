import { NavLink } from "react-router-dom";
import logo from "../assets/logo-sample.png";

const Nav = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-sm text-my-gold" : "text-white";
  };
  const navLinkHoverStyles = "hover:bg-rose-50 p-2 rounded";
  return (
    <nav className ="bg-white font-permanent-marker font-bold z-10 p-4 md:p-8" >
      <div className="flex justify-between items-center mb-5">
          <a href="/">
              <img className="w-[30%]" src={logo} />
          </a>
          <div>
          
          <p className="text-stone-700 flex font-thin">
          <i className="fa-solid fa-phone-volume mt-1.5 mr-1" />
          +49 176-1212-3445
          </p>
          <p className="text-stone-700 flex font-thin">
          <i className="fa-regular fa-envelope mt-1.5 mr-1" />
          owner@gmail.com
          </p>
          <p className="text-stone-700 flex font-thin ml-0.5">
          <i className="fa-solid fa-location-dot mt-1 mr-1.5" />
          Graefestraße 93
          </p>
          
        
          </div>
          
          
          
        </div>
        <ul
          className="border-my-gold md:flex md:space-x-4 mt-4 md:mt-0"
        >
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="/"
            >
              HOME
            </NavLink>
            
          </li>
        
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="laptop"
            >
              MENU
            </NavLink>
            
          </li>
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="game"
            >
              CONTRACT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="sale"
            >
              ADD
            </NavLink>
          </li>
          </ul>
    </nav>
  )
}

export default Nav