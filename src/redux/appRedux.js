import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

let initialVal = {
    showBg: false,
    showOrderList: false,
    showOrderPopUp: false,
    detect_remove_click_count: 0,
    checkoutPopup: false
}

export let myStore = createStore(reducer, initialVal);