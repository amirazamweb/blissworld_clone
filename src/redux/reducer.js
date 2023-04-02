
export let reducer = (val, action) => {
    if (action.type == 'on') {
        return { ...val, showBg: true, showOrderList: true }
    }

    if (action.type == 'off') {
        return { ...val, showBg: false, showOrderList: false }
    }

    if (action.type == 'add_to_bag') {
        return { ...val, showOrderPopUp: true, showBg: true }
    }

    if (action.type == 'close_popup') {
        return { ...val, showOrderPopUp: false, showBg: false }
    }

    if (action.type == 'item_remove') {
        return { ...val, detect_remove_click_count: ++val.detect_remove_click_count };
    }

    if (action.type == 'popup_active') {
        return { ...val, popupData: action.payLoad };
    }

    if (action.type == 'order_placed') {
        return ({ ...val, showBg: true, checkoutPopup: true });
    }

    if (action.type == 'close_checkout_poup') {
        return ({ ...val, showBg: false, checkoutPopup: false })
    }
    return val;
}  