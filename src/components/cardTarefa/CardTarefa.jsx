import style from './CardTarefa.module.css'
import Botao from '../botao/Botao'
import { useState } from 'react'

function CardTarefa({text, onClickExcluir, todo, onClickCompletar}){
    const [texto,setTexto] = useState(text)
    
    const editarNome = () => {
        let valor = window.prompt("Digite o novo nome: ")
        if (valor !== null) {
            setTexto(valor)
          }
    }



    return(
        <div id={style.principal}>
            <p style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>{todo.texto}</p>
            <Botao text='Editar' onClick={editarNome} colorbackground='rgb(197, 224, 73)'></Botao>
            <Botao text='Remover' onClick={() => onClickExcluir(todo.id)} colorbackground='red'></Botao>
            <Botao text='Completar' onClick={() => onClickCompletar(todo.id)} colorbackground='rgb(600, 224, 732)'></Botao>
        </div>
    )
}

export default CardTarefa