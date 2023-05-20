//"use client";
import styles from "../styles/components/NavBar.module.css";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <p>Hello</p>
      <button>
        <MenuIcon size={30} />
      </button>
    </nav>
  );
}
