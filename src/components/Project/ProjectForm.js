import Input from "../Form/Input/Input";

export default function ProjectForm(){
    return (
        <form>
            <Input label={"Nome do projeto"} placeholder={"Nome do projeto"} type={"text"}/>
            <Input label={"Orçamento do projeto"} placeholder={"Valor do projeto"} type={"number"}/>
            <div>
                <select>
                    <option disabled selected>
                        Selecione a categoria
                    </option>
                </select>
            </div>
            <button>Criar projeto</button>
        </form>
    )
}
