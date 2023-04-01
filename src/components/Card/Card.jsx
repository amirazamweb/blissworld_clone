import style from './Card.module.css';
import Button from '../Button/Button';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBag } from '../../redux/action';
import { popUpOrder } from '../../redux/action';

const storeOrderInStorage = (card) => {
    let data = JSON.parse(localStorage.getItem('cardKey')) || [];
    let duplicateOrder = data.find((e) => {
        return e.title == card.title;
    })

    if (!duplicateOrder) {
        data.push(card);
        localStorage.setItem('cardKey', JSON.stringify(data));
    }
}
const Card = ({ img, title, desc, price }) => {

    let dispatch1 = useDispatch();
    let dispatch2 = useDispatch();

    let btnRef = useRef();

    const btnClickHandler = () => {
        let cardDetails = { img: '', title: '', desc: '', price: '', itemCount: 1 };
        cardDetails.img = btnRef.current.parentElement.firstElementChild.firstElementChild.src;
        cardDetails.title = btnRef.current.parentElement.firstElementChild.nextElementSibling.nextElementSibling.innerText;
        cardDetails.desc = btnRef.current.parentElement.lastElementChild.previousElementSibling.innerText;
        let temp = btnRef.current.parentElement.lastElementChild.innerText;
        cardDetails.price = temp.slice(temp.indexOf('$') + 1);

        storeOrderInStorage(cardDetails);
        dispatch1(addToBag());
        dispatch2(popUpOrder({ img: cardDetails.img, title: cardDetails.title, desc: cardDetails.desc }));
    }

    return (
        <div className={style.card}>
            <div><img src={img} alt="" /></div>
            <p>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
            </p>
            <p className={style.title}>{title}</p>
            <p className={style.desc}>{desc}</p>
            <Button value={`ADD TO BAG $${price}`} ref={btnRef} click={btnClickHandler} />

        </div>
    )
}

export default Card;