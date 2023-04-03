import { Route, Routes } from "react-router-dom";
import Accessibility from "./Accessibility/Accessibility";
import Button from "../../components/Button/Button";

const FooterPages = () => {
    return (
        <>
            <h2>Footer Pages</h2>
            <Routes>
                <Route path='/amir' element={<Button />} />
            </Routes>
        </>
    )
}

export default FooterPages