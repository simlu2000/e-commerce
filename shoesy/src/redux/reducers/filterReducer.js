const initialState = {
    brandFilter: '',
    colorFilter: '',
    sizeFilter: '',
};

export default function filterReducer(state = initialState, action){
    switch (action.type) {
        case 'SET_BRAND_FILTER':
            return { ...state, brandFilter: action.payload };
        case 'SET_COLOR_FILTER':
            return { ...state, colorFilter: action.payload };
        case 'SET_SIZE_FILTER':
            return { ...state, sizeFilter: action.payload };
        default:
            return state;
    }
};