const redux = require('redux')
const createStore = redux.createStore

const BUT_CAKE = 'BUY_CAKE'

// Define action, must have property
function buyCake() {
    return {
        // Action
        type: BUT_CAKE,
        info: 'First redux action'
    }
}

// Reducer
// (previosState, action) => newState 

const initialState = {
    numOfCakes: 10
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case BUT_CAKE: return {
            ...state, // Make copy object 
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// Redux Store
const store = createStore(reducer) // Redux store holding application state
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
