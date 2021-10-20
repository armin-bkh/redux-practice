const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//action creator
const buyCake = () => {
  return { type: BUY_CAKE };
};
const buyIcecream = () => {
  return { type: BUY_ICECREAM };
};
//action creator

const initialCakeState = {
  numOfCake: 10,
};
const initialIcecreamState = {
  numOfIcecream: 30,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return { ...state, numOfCake: state.numOfCake - 1 };
    }
    default:
      return state;
  }
};
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return { ...state, numOfIcecream: state.numOfIcecream - 1 };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
})

const store = createStore(rootReducer);

console.log("initial states: ", store.getState());
store.subscribe(()=> console.log("updated states: ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());


//reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE: {
//       return { ...state, numOfCake: state.numOfCake - 1 };
//     }
//     case BUY_ICECREAM: {
//         return { ...state, numOFIcecream: state.numOFIcecream - 1 }
//     }
//     default:
//       return state;
//   }
// };
//reducer

// const store = createStore(reducer);
// console.log("initial state: ", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("updated state: ", store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// store.dispatch(buyIcecream());
// unsubscribe();
