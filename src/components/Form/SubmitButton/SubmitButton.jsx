import styles from "./SubmitButton.module.css"

export default function SubmitButton({text}){

    function criarProjeto(e){
        e.preventDefault()
        console.log("Projeto criado com sucesso!")
    }

    return(
        <div className={styles.div} onSubmit={criarProjeto}>
            <button className={styles.btn} type="submit">{text}</button>
        </div>
    )
}
