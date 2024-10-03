import { FC } from "react";
import style from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";
import { Path } from "@/navigation/Path";

interface NavBarProps {
  isMinimized: boolean;
  isHidden: boolean;
}

export const NavBar: FC<NavBarProps> = () => {
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
