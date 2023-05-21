import styles from "../styles/components/Section.module.css"

export default function Section({children, style}) {
  return (
    <section 
      className={styles.section}
      style={style}
    >
      {children}
    </section>
  )
}
