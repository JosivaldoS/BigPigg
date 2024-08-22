import { useState } from "react";
import Input from "../Form/Input/Input";
import Select from "../Form/Select/Select";
import SubmitButton from "../Form/SubmitButton/SubmitButton";

export default function ProjectForm({btnTxt}){
    const [categories, setCategories] = useState([])

    fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))

    return (
        <form>
            <Input label={"Nome do projeto"} placeholder={"Nome do projeto"} type={"text"}/>
            <Input label={"Orçamento do projeto"} placeholder={"Valor do projeto"} type={"number"}/>
            <Select label={"Categoria do projeto"} name={"Categoria"} />
            <SubmitButton text={btnTxt}/>
        </form>
    )
}
