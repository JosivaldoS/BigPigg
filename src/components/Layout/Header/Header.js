import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import minhaLogo from "./logo.png"

export default function Header(){
    return(
        <>
            <div className={styles.barraDeNavegacao}>
                <div>
                    <img src={minhaLogo} alt="Logo com nome BigPiggs" className={styles.Logo}/> 
                </div>

                <nav className={styles.barraDeLinks}>
                    <li>
                        <Link to="/" className={styles.Links}>Home</Link>
                    </li>
                    <li>
                        <Link to="/empresa" className={styles.Links}>Company</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={styles.Links}>Contact</Link>
                    </li>    
                </nav>
                
            </div>
        </>
    )
}
