import style from './Button.module.css';
import { forwardRef } from 'react';

const Button = ({ value, click }, btnRef) => {
    return (
        <button className={style.btn} onClick={click} ref={btnRef}> {value} </button>
    )
}

export default forwardRef(Button);