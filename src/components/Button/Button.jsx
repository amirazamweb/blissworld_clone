import style from './Button.module.css'

const Button = ({ value, click }) => {
    return (
        <button className={style.btn} onClick={click}>{value}</button>
    )
}

export default Button;