import style from './Card.module.css';
import Button from '../Button/Button';

const Card = ({ img, title, desc, price }) => {
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
            <Button value={`ADD TO BAG $${price}`} />
        </div>
    )
}

export default Card;