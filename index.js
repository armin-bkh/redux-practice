const BUY_CAKE = "BUY_CAKE";

//action creator
const buyCake = () => {
  return { type: BUY_CAKE };
};
//action creator

const initialState = {
  numOfCake: 10,
  shampoo: 15,
};

//reducer
const reducer = (state = initialState, action) => {
  switch (key) {
    case BUY_CAKE: {
      return { ...state, numOfCake: state.numOfCake - 1 };
    }
    default:
      return state;
  }
};
//reducer
