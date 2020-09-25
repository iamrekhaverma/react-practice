import {ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER} from "./action-types";


const initialState = {
    products: [],
};


// Shop filter
export const shop = (state = initialState, action ) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {...state, products: action.payload};
        default:
            return state;

    }
};

// Brands filter
export const  brandFilter = (state = {}, action) => {
    switch (action.type) {
        case ADD_BRAND_TO_FILTER:
            return {...state, [action.brand]: true};
        case REMOVE_BRAND_FROM_FILTER:
            console.log("state.brands",state)
            delete state[action.brand];
            return {...state };
        default:
            return state;
    }
};