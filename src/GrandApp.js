import App from "./App";
import { myStore } from './redux/appRedux'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const GrandApp = () => {
    return (
        <Provider store={myStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )
}

export default GrandApp;