import { useState } from 'react';
import style from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { setOrderCountIntoLocalStorage } from '../OrderListCard/OrderListCard';
import { removeItem } from '../../redux/action';

const CartItem = ({ img, title, desc, price, itemCount, index }) => {
    let [count, setCount] = useState(itemCount);
    let dispatch = useDispatch();

    const decHandler = () => {
        if (count > 1) {
            setCount(count - 1);
            setOrderCountIntoLocalStorage(count - 1, index);
            dispatch(removeItem());
        }
    }

    const incHandler = () => {
        setCount(count + 1);
        setOrderCountIntoLocalStorage(count + 1, index);
        dispatch(removeItem());
    }

    const removeItemHandler = () => {
        let data = JSON.parse(localStorage.getItem('cardKey'));
        data.splice(index, 1);
        localStorage.setItem('cardKey', JSON.stringify(data));
        dispatch(removeItem());
    }
    return (
        <div className={style.item}>
            <div className={style.child1}>
                <img src={img} alt="image" />
            </div>
            <div className={style.child2}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <p>${price}</p>
            </div>
            <div className={style.child3}>
                <div>
                    <i class="fa-solid fa-minus" onClick={decHandler}></i>
                    <span>{count}</span>
                    <i class="fa-solid fa-plus" onClick={incHandler}></i>
                </div>
                <div>
                    <small onClick={removeItemHandler}>remove</small>
                </div>
            </div>
            <div className={style.child4}>${count * price}</div>
        </div>
    )
}

export default CartItem;