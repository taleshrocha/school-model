import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />

      <div className={styles.imageContainer}>
        <div className={styles.gradient} />

        <div className={styles.textDiv}>
          <h1>Escola Freinet</h1>
          <h2>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </h2>
        </div>

        <Image
          src="/front-image.jpg"
          alt=""
          fill
          className={styles.imageContainerImage}
        />
      </div>

      <Section 
        title={"Blah"}
        content={"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."}
      />

      <Footer />
    </main>
  );
}
