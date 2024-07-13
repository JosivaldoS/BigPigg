import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.css"

export default function ButtonLink({to, text}) {

    return <Link to={to} className={styles.botao}>{text}</Link>

}
