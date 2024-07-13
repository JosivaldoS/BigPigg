import styles from "./Footer.module.css"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Footer(){
    return(
        <footer>
            <p>Site desenvolvido por Junior</p>
            <nav className={styles.navigationSocial}>
                <a 
                    href="https://www.linkedin.com/in/josivaldo-junior/" 
                    target="__blank"
                >
                    <AiFillLinkedin /> 
                </a>
                <a
                    href="https://github.com/JosivaldoS"
                    target="__blank"
                >
                    <AiFillGithub />
                </a>
                <a
                    href="https://www.instagram.com/devjunin/"
                    target="__blank"
                >
                    <AiFillInstagram />
                </a>
            </nav>
        </footer>
    )
}
