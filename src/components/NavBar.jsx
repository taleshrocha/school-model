"use client";
import styles from "../styles/components/NavBar.module.css";
import {
  AiOutlineMenu as MenuIcon,
AiFillCloseCircle as CloseIcon
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <nav className={`${styles.navBar} ${isMenuClicked && styles.clicked}`}>
      <div>
        <Image 
          src="/logo.png"
          alt=""
          height={50}
          width={50}
          quality={100}
          unoptimized = {true}
        />
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
