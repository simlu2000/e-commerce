export const SET_BRAND_FILTER = 'SET_BRAND_FILTER';
export const SET_COLOR_FILTER = 'SET_COLOR_FILTER';
export const SET_SIZE_FILTER = 'SET_SIZE_FILTER';

export function setBrandFilter(payload){
    return { type: SET_BRAND_FILTER, payload};
}
export function setColorFilter(payload){
    return { type: SET_COLOR_FILTER, payload};
}
export function setSizeFilter(payload){
    return { type: SET_SIZE_FILTER, payload};
}