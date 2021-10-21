const redux = require("redux");
const reduxThunk = require("redux-thunk").default;
const reduxLogger = require("redux-logger");
const axios = require("axios");
const logger = reduxLogger.createLogger();
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_FALIURE = "FETCH_USER_FALIURE";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

function fetchUserRequest() {
  return { type: FETCH_USER_REQUEST };
}
function fetchUserFaliure(err) {
  return { type: FETCH_USER_FALIURE, payload: err };
}
function fetchUserSuccess(users) {
  return { type: FETCH_USER_SUCCESS, payload: users };
}

const initialState = {
  loading: false,
  error: "",
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_USER_FALIURE: {
      return { loading: false, error: action.payload, data: [] };
    }
    case FETCH_USER_SUCCESS: {
      return { loading: false, error: "", data: action.payload };
    }
    default: 
    return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({data}) => {
          const usersId = data.map(user => user.id)
          dispatch(fetchUserSuccess(usersId))
        })
      .catch((error) => dispatch(fetchUserFaliure(error)));
  };
};

const store = createStore(reducer, applyMiddleware(reduxThunk, logger));

store.dispatch(fetchUsers());