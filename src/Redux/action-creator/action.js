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
        type:'REMALL',
        payload:0
    }
}
