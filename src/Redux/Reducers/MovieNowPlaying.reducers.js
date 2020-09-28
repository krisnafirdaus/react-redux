import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
} from "../Actions/MovieNowPlaying.actions";

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export function getDataReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_REQUEST:
      // console.log("request", action);
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.result,
      };
    case GET_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default getDataReducer;
