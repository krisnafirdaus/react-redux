import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../Redux/Actions/MovieNowPlaying.actions";

export function MovieNowPlaying(props) {
  const getData = props.getData;

  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div>
      <h1>Data Movie Now Playing</h1>
    </div>
  );
}

const mapStateToProps = (props) => {
  console.log("props", props);
  return {
    movienowplaying: props.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieNowPlaying);
