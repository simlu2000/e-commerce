export const SET_SEARCHED_PRODUCT = 'SET_SEARCHED_PRODUCT';
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const SET_FILTERED_PRODUCTS = 'SET_FILTERED_PRODUCTS';
export const CLOSE_DETAILS_BOX = 'CLOSE_DETAILS_BOX';

export function setSearchedProduct(payload) {
    return { type: SET_SEARCHED_PRODUCT, payload };
}
export function setSelectedProduct(payload) {
    return { type: SET_SELECTED_PRODUCT, payload };
}
export function setFilteredProducts(payload) {
    return { type: SET_FILTERED_PRODUCTS, payload };
}
export function closeDetailsBox() {
    return { type: CLOSE_DETAILS_BOX };
}
