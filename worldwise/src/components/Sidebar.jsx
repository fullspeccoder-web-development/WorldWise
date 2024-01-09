import { Outlet } from "react-router-dom";

import styles from "./Sidebar.module.css";
import Logo from "./Logo.jsx";
import AppNav from "./AppNav.jsx";
import Footer from "./Footer.jsx";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}
