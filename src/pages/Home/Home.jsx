import style from './Home.module.css'
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import axios from 'axios';
import { useEffect } from 'react';
import myData from './../../data.json';
import snap from './../../snap.PNG'

const Home = () => {

    return (
        <>
            <div className={style.main}>
                <h2>{myData[0].main_title}</h2>
                <p>{myData[0].info}</p>
                <div className={style.card_container}>
                    {myData[0].data.map((e, i) => {
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


            <div className={style.poster}>
                <div>
                    <div><img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/twintout-l-s.jpg" alt="" /></div>
                    <div>
                        <h3>The Scent That Started It All</h3>
                        <p>A cult-fave fragrance for more than two decades!</p>
                    </div>
                    <div><Button value={'SHOP LEMON & SAGE'} /></div>
                </div>
                <div>
                    <div><img src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/twintout-blackhead-v2-1-.jpg" alt="" /></div>
                    <div>
                        <h3>Pore Perfection</h3>
                        <p>3x THE BENEFITS - LET’S BREAK IT DOWN!</p>
                    </div>
                    <div><Button value={'SHOP BLACKHEAD BREAKDOWN'} /></div>
                </div>
            </div>

            <div className={style.main}>
                <h2>{myData[1].main_title}</h2>
                <p>{myData[1].info}</p>
                <div className={style.card_container}>
                    {myData[1].data.map((e, i) => {
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

            <div className={style.main}>
                <h2>@bliss</h2>
                <p>Your daily dose of happiness, unfiltered.</p>
                <div className={style.mul_img_atch}><img src={snap} alt="snap" /></div>
            </div>

        </>
    )

}

export default Home;
