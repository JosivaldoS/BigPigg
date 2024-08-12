import styles from "./Select.module.css"

export default function Select({label, name, options, handleOnChange, value}){
    return(
        <div className={styles.form}>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}
