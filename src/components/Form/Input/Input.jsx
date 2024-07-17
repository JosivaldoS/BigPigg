import styles from "./Input.module.css"

export default function Input({label, placeholder, type, handleOnChange, value}){

    return(
        <div className={styles.form}>
            <label htmlFor="">{label}</label>
            <input placeholder={placeholder} type={type} onChange={handleOnChange} value={value}/>
        </div>
    )

}
