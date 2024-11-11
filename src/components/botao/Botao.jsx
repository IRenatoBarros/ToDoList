import style from "./Botao.module.css"

function Botao({text,colorbackground,onClick}){
    return(
        <div id={style.principal} style={{backgroundColor:colorbackground}} onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}

export default Botao