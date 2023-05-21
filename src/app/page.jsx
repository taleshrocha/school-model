"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/page.module.css";

export default function Home() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-100px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

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
          src="/front.jpeg"
          alt=""
          fill
          className={styles.imageContainerImage}
        />
      </div>

      <Section>
        <h1>Lorem ipsum</h1>
        <Image
          src="/escola.jpeg"
          alt=""
          height={200}
          width={200}
          unoptimized={true}
          ref={ref}
          className={`${styles.image} ${isIntersecting && styles.slideIn}`}
        />
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </Section>

      <Footer />
    </main>
  );
}
