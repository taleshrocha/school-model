import styles from "../styles/components/Banner.module.css";
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.border}>
        <div className={styles.imageDiv}>
          <Image
            src="/escola.jpeg"
            alt=""
            fill
            unoptimized={true}
            className={`${styles.image}`}
          />
        </div>
      </div>
    </div>
  );
}
