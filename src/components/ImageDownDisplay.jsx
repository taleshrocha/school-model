"use client";
import styles from "../styles/components/ImageDownDisplay.module.css";
import Image from "next/image";
import { forwardRef } from "react";

const ImageDownDisplay = forwardRef(({ isAnimating }, ref) => {
  return (
    <div
      className={styles.div}
      ref={ref}
    >
      <div className={styles.verticalLine} />

      <Image
        src="/escola.jpeg"
        alt=""
        height={100}
        width={100}
        unoptimized={true}
        className={`${styles.imageTopLeft} ${isAnimating && styles.slideBack}`}
      />

      <Image
        src="/escola.jpeg"
        alt=""
        height={100}
        width={100}
        unoptimized={true}
        className={`${styles.imageCenterRight} ${isAnimating && styles.slideBack
          }`}
      />
    </div>
  );
});

export default ImageDownDisplay;
