"use client";
import styles from "../styles/components/ImageTopDisplay.module.css";
import { forwardRef } from "react";
import Img from "./Img";

const ImageDownDisplay = forwardRef(({ isAnimating }, ref) => {
  return (
    <div className={styles.div} ref={ref}>
      <div className={styles.verticalLine} />

      <Img
        src={"/sala1.jpg"}
        className={`${styles.imageTopLeft} ${isAnimating && styles.slideBack}`}
      />
      
      <Img
        src={"/indio.jpg"}
        className={`${styles.imageBottomLeft} ${isAnimating && styles.slideBack}`}
      />
      
      <Img
        src={"/selfie.jpg"}
        className={`${styles.imageCenterLeft} ${isAnimating && styles.slideBack}`}
      />

      <Img
        src={"/sala2.jpg"}
        className={`${styles.imageBottomRight} ${isAnimating && styles.slideBack}`}
      />

      <Img
        src={"/mask.jpg"}
        className={`${styles.imageCenterRight} ${isAnimating && styles.slideBack}`}
      />

    </div>
  );
});

export default ImageDownDisplay;
