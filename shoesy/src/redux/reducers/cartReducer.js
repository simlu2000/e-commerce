const initialState={ //stato iniziale, nessun prodotto
    products:[],
};

export default function cartReducer(state=initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':
            return{...state, products:[...state.products, action.payload]};
        default:
            return state;
    }
};
