import style from './CardTarefa.module.css'
import Botao from '../botao/Botao'
import { useState } from 'react'

function CardTarefa({text, id, aoClicar}){
    const [texto,setTexto] = useState(text)
    
    const editarNome = () => {
        let valor = window.prompt("Digite o novo nome: ")
        if (valor !== null) {
            setTexto(valor)
          }
    }

    return(
        <div id={style.principal}>
            <p>{texto}</p>
            <Botao text='Editar' onClick={editarNome} colorbackground='rgb(197, 224, 73)'></Botao>
            <Botao text='Remover' onClick={() => {aoClicar(id)}} colorbackground='red'></Botao>
        </div>
    )
}

export default CardTarefa