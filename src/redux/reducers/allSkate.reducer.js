const allSkateReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USER_ITEMS':
            return action.payload;
        case 'LOGOUT':
            return [];
        default:
            return state;
    }
};

export default allSkateReducer;