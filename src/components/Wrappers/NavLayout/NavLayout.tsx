import { FC } from "react";
import styles from "./NavLayout.module.scss";
import { NavBar } from "@/components";

interface NavLayoutProps {
  children: React.ReactNode;
}

export const NavLayout: FC<NavLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.nav}>
        <div className={styles.wrapNavBar}>
          <NavBar isMinimized={false} isHidden={false} />
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
