import { NavLink } from "react-router-dom";

const Nav = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold text-sm text-my-gold" : "text-white";
  };
  const navLinkHoverStyles = "hover:bg-rose-50 p-2 rounded";
  return (
    <nav className ="bg-white font-permanent-marker font-bold z-10 p-4 md:p-8" >
      <div className="flex justify-between items-center mb-5">
          <a href="/">
              <img className="w-[30%]" src="../src/assets/logo-sample.png"/>
          </a>
          <p className="text-my-gold flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-my-gold" width="24" height="24">
      <path d="M20 15.5a15.374 15.374 0 01-3.927-.511 1.494 1.494 0 00-1.349.23l-2.2 1.65a15.034 15.034 0 01-5.608-5.607l1.65-2.2a1.494 1.494 0 00.23-1.349A15.374 15.374 0 018.5 4 1.5 1.5 0 007 2.5H4A1.5 1.5 0 002.5 4 17.506 17.506 0 0020 21.5a1.5 1.5 0 001.5-1.5v-3A1.5 1.5 0 0020 15.5z"/>
    </svg>
    +49-111-1111-1111
          </p>
          
        </div>
        <ul
          className="border-my-gold md:flex md:space-x-4 mt-4 md:mt-0"
        >
          <li>
            <NavLink
              className={
                navLinkStyles({ isActive: true }) + " " + navLinkHoverStyles
              }
              to="laptop"
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