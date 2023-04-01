
export const bag = (data) => {
    return {
        type: data
    }
}

export const addToBag = () => {
    return {
        type: 'add_to_bag'
    }
}

export const closePopUp = () => {
    return {
        type: 'close_popup'
    }
}

export const removeItem = () => {
    return {
        type: 'item_remove'
    }
}

export const popUpOrder = (data) => {
    return {
        type: 'popup_active',
        payLoad: data
    }
}