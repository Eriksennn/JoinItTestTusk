import style from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { Path } from "@/navigation/Path";

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to={Path.CALENDAR}>CALENDAR</NavLink>
        </li>
        <li>
          <NavLink to={Path.CALENDAR}>CALENDAR</NavLink>
        </li>
        <li>
          <NavLink to={Path.CALENDAR}>CALENDAR</NavLink>
        </li>
        <li>
          <NavLink to={Path.CALENDAR}>CALENDAR</NavLink>
        </li>
      </ul>
    </nav>
  );
};
