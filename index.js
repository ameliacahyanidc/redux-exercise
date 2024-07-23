const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// Define action, must have property
function buyCake() {
    return {
        // Action
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM, // Object 
    }
}


// Reducer
// (previosState, action) => newState 

// const initialState = {
//     numOfCakes: 10,
//     numofIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numofIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state, // Make copy object 
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_CAKE: return {
//             ...state, // Make copy object 
//             numOfCakes: state.numOfCakes - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, // Make copy object 
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}


const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {

        case BUY_ICECREAM: return {
            ...state, // Make copy object 
            numofIceCreams: state.numofIceCreams - 1
        }

        default: return state
    }
}


// Redux Store
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger)) // Redux store holding application state
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

