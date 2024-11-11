import style from './Main.module.css'
import CardLista from '../cardLista/CardLista'

function Main(){
    return(
        <div id={style.principal}>
            <CardLista></CardLista>
        </div>
    )
}

export default Main