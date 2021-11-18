const selectedReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ITEM':
            return action.payload;
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};

export default selectedReducer;