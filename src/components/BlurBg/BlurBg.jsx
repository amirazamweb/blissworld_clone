import { useSelector } from "react-redux";

const BlurBg = ({ bgHeight }) => {

    let zIndex = useSelector((data) => data.showOrderPopUp);

    let compStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: bgHeight,
        backgroundColor: 'black',
        opacity: 0.5,
        display: 'block',
        zIndex: zIndex && 2
    }

    return (
        <div style={compStyle} className='amir'></div>
    )
}

export default BlurBg;