import styles from "../styles/components/Section.module.css"

export default function Section({title, content}) {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <p>{content}</p>
    </section>
  )
}
