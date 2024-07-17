import ProjectForm from "../../Project/ProjectForm";
import styles from "./NewProject.module.css"

export default function NewProject(){
    return(
        <div className={styles.meuFormulario}>
            <h1>Novo projeto</h1>
            <p>Crie aqui o seu novo projeto</p>
            <ProjectForm />
        </div>
    )
}
