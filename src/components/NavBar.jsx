"use client";
import styles from "../styles/components/NavBar.module.css";
import {
  AiOutlineMenu as MenuIcon,
AiFillCloseCircle as CloseIcon
} from "react-icons/ai";
import { useState } from "react";

export default function NavBar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <nav className={`${styles.navBar} ${isMenuClicked && styles.clicked}`}>
      <div>
        <p>Hello</p>
        <button onClick={() => setIsMenuClicked(!isMenuClicked)}>
          {isMenuClicked ? (
            <CloseIcon size={30} />
          ) : (
            <MenuIcon size={30} />
          )}
        </button>
      </div>
    </nav>
  );
}
