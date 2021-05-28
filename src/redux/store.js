import { createStore , combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./reducer/cart"
import { productDetailReducer, productListReducer } from "./reducer/product"

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') 
    ? JSON.parse(localStorage.getItem('cartItems')) 
    :  []

const initialState = {
    cart: { cartItems: cartItemsFromLocalStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState , applyMiddleware(...middleware))

export default store