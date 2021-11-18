const editReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEM_DETAIL':
            return action.payload;
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
};

export default editReducer;