const redux = require("redux");

const createStore = redux.createStore;

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

const initialState = {
  numOfCake: 10,
  numOFIcecream: 30,
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return { ...state, numOfCake: state.numOfCake - 1 };
    }
    case BUY_ICECREAM: {
        return { ...state, numOFIcecream: state.numOFIcecream - 1 }
    }
    default:
      return state;
  }
};
//reducer

const store = createStore(reducer);
console.log("initial state: ", store.getState());
const unsubscribe = store.subscribe(() => console.log("updated state: ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();