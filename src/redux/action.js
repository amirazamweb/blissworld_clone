
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