import {createStore, combineReducers} from 'redux';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
    products:productReducer,
    cart:cartReducer,
    filters:filterReducer,
});

const store = createStore(rootReducer);

export default store;