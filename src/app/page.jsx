"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/page.module.css";

export default function Home() {
  const [slideUpAni, setSlideUpAni] = useState(false);
  const [slideCenterAni, setSlideCenterAni] = useState(false);
  const [fadeOutAni, setFadeOutAni] = useState(false)

  const slideUpRef = useRef(null);
  const slideCenterRef = useRef(null);
  const fadeOutRef = useRef(null);

  // Manage observers for the slide animations
  useEffect(() => {
    const slideUpAniObserver = new IntersectionObserver(
      ([entry]) => {
        setSlideUpAni(entry.isIntersecting);
      },
      { rootMargin: "0% 0% -40% 0%" }
    );

    const slideCenterAniObserver = new IntersectionObserver(
      ([entry]) => {
        setSlideCenterAni(entry.isIntersecting);
      },
      { rootMargin: "0% 0% -20% 0%" }
    );

    const fadeOutAniObserver = new IntersectionObserver(
      ([entry]) => {
        setFadeOutAni(entry.isIntersecting);
      },
      { rootMargin: "0% 0% -30% 0%" }
    );

    slideUpAniObserver.observe(slideUpRef.current);
    slideCenterAniObserver.observe(slideCenterRef.current);
    fadeOutAniObserver.observe(fadeOutRef.current);

    return () => {
      slideUpAniObserver.disconnect();
      slideCenterAniObserver.disconnect();
    };
  }, [slideUpAni, slideCenterAni]);

  return (
    <main className={styles.main}>
      <NavBar />

      <div className={styles.container}>
        <div className={styles.gradientOverlay} />

        <div className={styles.textContainer}>
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
          className={styles.imageContainer}
        />
      </div>

      <Section>
        <div
          ref={slideUpRef}
          className={`${styles.slideUp} ${slideUpAni && styles.slideBack}`}
        >
          <h1>Fundamental I</h1>
          <Image
            src="/escola.jpeg"
            alt=""
            height={200}
            width={200}
            unoptimized={true}
            className={`${styles.roundedImage}`}
          />
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </Section>

      <Section>
        <div>
          <h1>BLAH</h1>
          <Image
            src="/escola.jpeg"
            alt=""
            height={50}
            width={50}
            unoptimized={true}
            ref={slideCenterRef}
            className={`${styles.slideLeft} ${
              slideCenterAni && styles.slideBack
            }`}
          />

          <h1>BLAH2</h1>
          <Image
            src="/escola.jpeg"
            alt=""
            height={50}
            width={50}
            unoptimized={true}
            ref={slideCenterRef}
            className={`${styles.slideRight} ${
              slideCenterAni && styles.slideBack
            }`}
          />
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </Section>

      <Section>
        <div 
          className={`${styles.fadeOut} ${fadeOutAni && styles.fadeIn}`}
          ref={fadeOutRef}
        >
          <h1>BLAH</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
