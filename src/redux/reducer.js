
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

    if (action.type = 'close_popup') {
        return { ...val, showOrderPopUp: false, showBg: false }
    }
    return val;
}  