import allproducts from '../../utils/products';
import { TOGGLE_DISCOVER } from '../actions/productActions'; 

const initialState = { //stati iniziali
    allProducts: allproducts,
    filteredProducts: allproducts,
    searchedProduct: '',
    selectedProduct: null,
    openDetailsBox: false,
    discover: true,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SEARCHED_PRODUCT':
            return { ...state, searchedProduct: action.payload };
        case 'SET_FILTERED_PRODUCTS':
            return { ...state, filteredProducts: action.payload };
        case 'SET_SELECTED_PRODUCT':
            return { ...state, selectedProduct: action.payload, openDetailsBox: true };
        case 'CLOSE_DETAILS_BOX':
            return { ...state, openDetailsBox: false };
        case 'SET_DISCOVER':
            return { ...state, discover: true };
        case 'TOGGLE_DISCOVER':
            return { ...state, discover: !state.discover };
        default:
            return state;
    }
}