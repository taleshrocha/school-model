import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <div className={styles.gradient} />
        <h1>Escola blah</h1>
        <h2>O seu futuro bem blah</h2>

        <Image
          src="/front-image.jpg"
          alt=""
          fill
          className={styles.imageContainerImage}
        />
      </div>

      <div className={styles.div}>
      </div>

    </main>
  )
}
