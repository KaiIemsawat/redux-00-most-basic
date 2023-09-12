// const redux = require("redux");
// const createStore = redux.createStore; // 'createStore' is deprecated.ts(6385)
const { configureStore } = require("@reduxjs/toolkit");

const BUY_CAKE = "BUY_CAKE";

// Define an action.
// Action is and object with 'type' property
// Have 'type' property that indicates the type of action being performed
// The 'type' property is typically defined as String constats
// {
//     type: BUY_CAKE,
//     info: "First redux action"
// }

// Action creater
function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First redux action",
    };
}

const initalState = {
    numberOfCake: 10,
};

// (previousState, action) => newState
const cakeReducer = (state = initalState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1,
            };
        default:
            return state;
    }
};

// store is holding application state
// const store = createStore(reducer); // deprecated

// Create the store using configureStore.
// This store holds the application's state.
const store = configureStore({
    reducer: {
        cakes: cakeReducer, // < -- slice
    },
});
// Allows access to state via .getState()
console.log("Initial state :", store.getState());
// Registers listener via .subscribe(listener)
const unsubcribe = store.subscribe(() => {
    console.log("Update state :", store.getState());
    console.log(store.getState().cakes);
});
// In this example, the subscribe method listens for changes in the state of the cakes "slice" of the store.
// When actions are dispatched, the subscriber callback logs the updated state to the console.

// In the context of Redux and configureStore, a "slice" refers to a specific part of the application's state.
// Redux allows you to divide the application's state into smaller, more manageable pieces, called "slices."
// Each slice typically corresponds to a specific feature or area of the application.

// In the example provided, we have a slice named "cakes." This slice represents the state related to
// cakes in the application. It might include information like the number of cakes available or other cake-related data.

// Allows state to be updated via .dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubcribe();
