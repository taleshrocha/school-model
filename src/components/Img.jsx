import styles from "../styles/components/Img.module.css";
import Image from "next/image";

export default function Img({src, className}) {
  return (
    <div className={`${styles.imageDiv} ${className}`}>
      <Image
        src={src}
        alt=""
        fill
        unoptimized={true}
        className={styles.image}
      />
    </div>
  );
}
