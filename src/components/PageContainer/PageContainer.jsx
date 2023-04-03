import style from './PageContainer.module.css';
import Card from '../Card/Card';

const PageContainer = ({ data }) => {
    return (
        <div className={style.main}>
            <h2>{data.main_title}</h2>
            <p>{data.info}</p>
            <div className={style.card_container}>
                {data.data.map((e, i) => {
                    return <Card
                        key={i}
                        img={e.img}
                        title={e.title}
                        desc={e.desc}
                        price={e.price}
                    />
                })}
            </div>
        </div>
    )
}

export default PageContainer