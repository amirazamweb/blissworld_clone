import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

let initialVal = {
    showBg: false,
    showOrderList: false,
    showOrderPopUp: false,
}

export let myStore = createStore(reducer, initialVal);