import styles from "./Home.module.css"
import Piggy from "./Piggy.png"
import ButtonLink from "../ButtonLink"

export default function Home(){
    return(
        <main>
            <h1>Bem-vindo ao <span>BigPiggs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <ButtonLink to={"/newproject"} text={"Novo projeto"} />
            <img 
                src={Piggy} 
                alt="Mulher encostada em um porco de guardar dinheiro"
            />
        </main>
    )
}
