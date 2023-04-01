import { useState } from 'react';
import style from './OrderListCard.module.css';
import { removeItem } from '../../redux/action';
import { useDispatch } from 'react-redux';

export let setOrderCountIntoLocalStorage = (n, ind) => {
    let data = JSON.parse(localStorage.getItem('cardKey')) || [];
    let filteredData = data.map((elm, i) => {
        if (ind == i) {
            elm.itemCount = n;
            return elm;
        }
        return elm;
    })

    localStorage.setItem('cardKey', JSON.stringify(filteredData));
}

const OrderListCard = ({ img, price, title, desc, itemCount, index }) => {

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
        <div className={style.order_details}>
            <div><img src={img} alt="card-image" /></div>
            <div>
                <p>{title}</p>
                <p>{desc}</p>
                <div>
                    <div>
                        <i class="fa-solid fa-minus" onClick={decHandler}></i>
                        <span>{count}</span>
                        <i class="fa-solid fa-plus" onClick={incHandler}></i>
                    </div>
                    <div onClick={removeItemHandler}><small>Remove</small></div>
                    <div>${price}</div>
                </div>
            </div>
        </div>
    )
}

export default OrderListCard;