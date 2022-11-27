const amountReducer = (state = 0, action) => {
    if (action.type === 'DEPOSIT') {
        return state + action.payload;
    }
    else if (action.type === 'WITHDRAW') {
        return state - action.payload;
    }
    else if (action.type==='REMALL') {
        return state * action.payload;
    }
    
    else {
        return state;
    }
}
export default amountReducer
