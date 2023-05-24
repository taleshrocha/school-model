"use client";
import styles from "../styles/components/NavBar.module.css";
import {
  AiOutlineMenu as MenuIcon,
  AiFillCloseCircle as CloseIcon
} from "react-icons/ai";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsScrollDown(true);
      } 
      else setIsScrollDown(false)

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollDown]);

  return (
    <nav className={`${styles.navBar} ${isMenuClicked && styles.clicked} ${isScrollDown && styles.scrollDown}`}>
      <div>
        <Image
          src="/logo.png"
          alt=""
          height={50}
          width={50}
          quality={100}
          unoptimized={true}
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
