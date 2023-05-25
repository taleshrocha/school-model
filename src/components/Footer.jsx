import styles from "../styles/components/Footer.module.css";
import {
  FaFacebookF as FacebookLogoIcon,
  FaInstagram as InstagramLogoIcon,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div className={styles.verticalLine} />

        <div className={styles.links}>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
          <p>Blah</p>
        </div>

        <p>Siga nossas redes</p>
        <div className={styles.buttonDiv}>
          <LinkButton Icon={FacebookLogoIcon} href={"https://www.google.com"} />

          <LinkButton
            Icon={InstagramLogoIcon}
            href={"https://www.google.com"}
          />
        </div>

        <Image
          src="/logo.png"
          alt=""
          height={50}
          width={50}
          quality={100}
          unoptimized={true}
        />


      </div>
    </footer>
  );
}

function LinkButton({ Icon, href }) {
  return (
    <Link className={styles.linkButton} href={href}>
      <Icon size={30} />
    </Link>
  );
}
