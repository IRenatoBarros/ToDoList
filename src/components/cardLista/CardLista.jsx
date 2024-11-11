import style from "./CardLista.module.css"
import Botao from "../botao/Botao"
import { useState, useRef } from "react"
import CardTarefa from "../cardTarefa/CardTarefa"

function CardLista(){

    const inputRef = useRef(null)

    const [tarefas,setTarefas] = useState([])

    const addTarefa = () => {
        const newTarefas= [
            ...tarefas,
            {
                id: Math.floor(Math.random() * 1000),
                texto: inputRef.current.value,
                isCompleted: false,
            }
        ]
        setTarefas(newTarefas)
    }   

    const removerTarefa = (id) => {
        const novasTarefas = [...tarefas]
        const filtrarTarefas = novasTarefas.filter((tarefa) => 
        tarefa.id !== id ? tarefa : null)

        setTarefas(filtrarTarefas)
    }

    const completarTarefa = (id) => {
        const novasTarefas = [...tarefas]
        novasTarefas.map((tarefa) => tarefa.id === id ? tarefa.isCompleted = !tarefa.isCompleted : tarefa)
        setTarefas(novasTarefas)
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
                    {tarefas.map((todo) => (
                        <li><CardTarefa key={todo.id} todo={todo} onClickExcluir={removerTarefa} onClickCompletar={completarTarefa}></CardTarefa></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardLista