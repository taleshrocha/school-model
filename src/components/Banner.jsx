import styles from "../styles/components/Banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.imageDiv}>
        <span>Fundamental I</span>
        <Image
          src="/escola.jpeg"
          alt=""
          fill
          unoptimized={true}
          className={`${styles.banner.image}`}
        />
      </div>
    </div>
  );
}
