import { useSelector } from "react-redux";

const BlurBg = ({ bgHeight }) => {

    let { showOrderPopUp, checkoutPopup } = useSelector((data) => {
        return {
            showOrderPopUp: data.showOrderPopUp,
            checkoutPopup: data.checkoutPopup
        }
    })

    let compStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: bgHeight,
        backgroundColor: 'black',
        opacity: 0.6,
        display: 'block',
        zIndex: (showOrderPopUp || checkoutPopup) && 2
    }

    return (
        <div style={compStyle} className='amir'></div>
    )
}

export default BlurBg;