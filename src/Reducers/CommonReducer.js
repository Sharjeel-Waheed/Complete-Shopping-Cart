const initialState = {
    breeds: [],
};

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_BREEDS": {
            return { ...state, breeds: action.payload }
        }
        default:
            return state;
    }
};
export default CommonReducer;