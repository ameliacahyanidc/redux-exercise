import { BUY_ICECREAM } from "./iceCreamTypes"; //import

// Declare initial state
const initialState = {
    nnumberOfIceCream: 20
}

const IceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            nnumberOfIceCream: state.nnumberOfIceCream -1 
        }

        default: return state
    }
}
export default IceCreamReducer