import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <p>Escola blah</p>
        <div className={styles.gradient}/>
        <Image
          src="/front-image.jpg"
          alt=""
          fill
          className={styles.imageContainerImage}
        />
      </div>
    </main>
  )
}
