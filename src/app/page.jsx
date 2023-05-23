"use client";
import Footer from "@/components/Footer";
import ImageDownDisplay from "@/components/ImageDownDisplay";
import ImageTopDisplay from "@/components/ImageTopDisplay";
import NavBar from "@/components/NavBar";
import Section from "@/components/Section";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/page.module.css";

export default function Home() {
  const [slideUpAni, setSlideUpAni] = useState(false);
  const [slideCenterAni, setSlideCenterAni] = useState(false);
  const [imageDownDisplayAni, setImageDownDisplayAni] = useState(false);
  const [fadeOutAni, setFadeOutAni] = useState(false);

  const slideUpRef = useRef(null);
  const slideCenterRef = useRef(null);
  const imageDownDisplayRef = useRef(null);
  const fadeOutRef = useRef(null);

  // Manage observers for the slide animations
  useEffect(() => {
    const slideUpAniObserver = new IntersectionObserver(
      ([entry]) => {
        if (!slideUpAni) setSlideUpAni(entry.isIntersecting);
      },
      { rootMargin: "0% 0% -40% 0%" }
    );

    const slideCenterAniObserver = new IntersectionObserver(
      ([entry]) => {
        if (!slideCenterAni) {
          setSlideCenterAni(entry.isIntersecting);
          console.log(slideCenterAni)
        }
      },
      { rootMargin: "0% 0% -40% 0%" }
    );

    const imageDownDisplayAniObserver = new IntersectionObserver(
      ([entry]) => {
        if (!imageDownDisplayAni) setImageDownDisplayAni(entry.isIntersecting);
      },
      { rootMargin: "0% 0% -40% 0%" }
    );

    const fadeOutAniObserver = new IntersectionObserver(
      ([entry]) => {
        if (!fadeOutAni) setFadeOutAni(entry.isIntersecting);
      },
      { rootMargin: "0% 0% -30% 0%" }
    );

    slideUpAniObserver.observe(slideUpRef.current);
    slideCenterAniObserver.observe(slideCenterRef.current);
    imageDownDisplayAniObserver.observe(imageDownDisplayRef.current);
    fadeOutAniObserver.observe(fadeOutRef.current);

    return () => {
      slideUpAniObserver.disconnect();
      slideCenterAniObserver.disconnect();
      imageDownDisplayAniObserver.observe(imageDownDisplayRef.current);
      fadeOutAniObserver.observe(fadeOutRef.current);
    };
  }, [slideUpAni, slideCenterAni, imageDownDisplayAni, fadeOutAni]);

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

      <section className={styles.section}>
        <ImageTopDisplay isAnimating={slideCenterAni} ref={slideCenterRef} />
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <ImageDownDisplay
          isAnimating={imageDownDisplayAni}
          ref={imageDownDisplayRef}
        />
      </section>

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
