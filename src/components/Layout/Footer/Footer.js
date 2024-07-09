import styles from "./Footer.module.css"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Footer(){
    return(
        <footer>
            <p>Site desenvolvido por Junior</p>
            <nav className={styles.navigationSocial}>
                <AiFillLinkedin />
                <AiFillGithub />
                <AiFillInstagram />
            </nav>
        </footer>
    )
}
