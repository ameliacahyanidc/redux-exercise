import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducers";
import IceCreamReducer from "./iceCream/iceCreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
})

export default rootReducer