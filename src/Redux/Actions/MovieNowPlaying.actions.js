import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

export function getDatasRequest() {
  return {
    type: GET_DATA_REQUEST,
  };
}

export function getDatasSuccess(result) {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
}

export function getDatasFailed(error) {
  return {
    type: GET_DATA_FAILED,
    error,
  };
}

export function getData() {
  return function (dispatch) {
    // console.log("Masuk Action");
    dispatch(getDatasRequest());

    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=f4e4d787de0453662d39438d984652e4"
      )
      .then((result) => dispatch(getDatasSuccess(result.data)))
      .catch((error) => dispatch(getDatasFailed(error)));
  };
}
