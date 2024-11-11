import style from "./CardLista.module.css"
import Botao from "../botao/Botao"
import { useState, useRef } from "react"
import CardTarefa from "../cardTarefa/CardTarefa"

function CardLista(){

    const inputRef = useRef(null)

    const [tarefas,setTarefas] = useState([])

    const addTarefa = () => {
        setTarefas([...tarefas,<CardTarefa text={inputRef.current.value} aoClicar={removerTarefa}></CardTarefa>])
    }   

    const removerTarefa = (index) => {
        setTarefas(prevTarefas => prevTarefas.filter((_,i) => i !== index))
    }

    return(
        <div id={style.principal}>
            <h1>Lista de Tarefas</h1>
            <div id={style.inputgroup}>
                <input ref={inputRef} type="text" placeholder="Nova tarefa"></input>
                <Botao onClick={addTarefa} text='Adicionar' colorbackground='rgb(60, 74, 105'></Botao>
            </div>
            <div id={style.filtros}>
                <Botao text='Todas'></Botao>
                <Botao text='Completas'></Botao>
                <Botao text='Incompletas'></Botao>
            </div>
            <div id={style.lista}>
                <ul id={style.listaul}>
                    {tarefas.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardLista