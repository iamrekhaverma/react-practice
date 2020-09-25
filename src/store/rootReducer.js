import { combineReducers } from 'redux';
import { shop, brandFilter } from "pages/products/reducers";

const reducer = combineReducers({shop, brandFilter})
export default reducer;