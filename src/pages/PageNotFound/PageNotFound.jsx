import style from './PageNotFound.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {

    let navigate = useNavigate();

    const myFun = () => {
        navigate('/');
    }

    return (
        <div className={style.main}>
            <div></div>
            <div></div>
            <div></div>
            <div className={style.pos}>
                <div className={style.inside_pos}>
                    <h2>Uh Oh!</h2>
                    <p>This Page Does Not Exist!</p>
                    <Button value={"GO TO HOMEPAGE"} click={myFun} />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;