//CSS
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Tine <span>Blog</span></h2>
      <p>Este Projeto é um blog feito com Firebase no back-end e React no front-end</p>
      <Link to="/posts/create" className="btn">Criar Post</Link>
    </div>
  )
}

export default About