import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getDataReducer from "../Redux/Reducers/MovieNowPlaying.reducers";

const store = createStore(getDataReducer, applyMiddleware(thunk));

export default store;
