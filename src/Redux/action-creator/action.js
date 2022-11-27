export const depMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'DEPOSIT',
            payload: amount
        })
    }
}
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'WITHDRAW',
            payload: amount
        })
    }
}
export const remAll = () => {
    return {
        type: 'REMALL',
        payload: 0
    }
}
export const addList = (data) => {
    return {
        type: "ADD_LIST",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const delList = (id) => {
    return {
        type: "DELETE_LIST",
        payload: {
            id: id
        }
    }
}
export const remAllLIST = () => {
    return {
        type: "REMOVE_ALL_LIST"
    }
}
