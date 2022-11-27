const initialState = {
    list: []
}

const todoList = (state = initialState, action) => {


    if (action.type === 'ADD_LIST') {
        const { id, data } = action.payload;
        return {
            ...state,
            list: [
                ...state.list,
                {
                    id: id,
                    data: data
                }
            ]
        }
    }
    else if (action.type === 'DELETE_LIST') {
        const newList = state.list.filter((ele) => { return ele.id !== action.payload.id })
        return {
            ...state,
            list: [
                ...newList
            ]
        };
    }
    else if (action.type === 'REMOVE_ALL_LIST') {
        return {
            ...state,
            list: []
        }
    }
    else {
        return state;
    }

}
export default todoList