import styles from "../styles/components/Footer.module.css";
import { 
  FaFacebookF as FacebookLogoIcon ,
  FaInstagram as InstagramLogoIcon
} from 'react-icons/fa'
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LinkButton
        Icon={FacebookLogoIcon}
        href={"https://www.google.com"}
      />

      <LinkButton
        Icon={InstagramLogoIcon}
        href={"https://www.google.com"}
      />
    </footer>
  );
}

function LinkButton({ Icon, href }) {
  return (
    <Link
      className={styles.linkButton}
      href={href}
    >
      <Icon 
        size={30}
      />
    </Link>
  );
}
