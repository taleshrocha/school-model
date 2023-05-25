"use client";
import styles from "../../styles/components/sections/LevelSection.module.css";
import { forwardRef } from "react";
import Banner from "../Banner";

const LevelSection = forwardRef(({ isAnimating }, ref) => {
  return (
    <section
      ref={ref}
      className={`${styles.section} ${isAnimating && styles.slideBack}`}
    >
      <Banner />
      <div className={styles.innerDiv}>

        <span>FUNDAMENTAL I</span>
        <h1>Carinho e afeto</h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>
    </section>
  );
});

export default LevelSection;
