import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interesse!</h3>
      <p>Tine Blog  &copy; 2022 <a href="https://github.com/TawanAlves" >Tawan Alves</a></p>
    </footer>
  )
}

export default Footer