import React from 'react';
import { connect } from 'react-redux'
import { resetGame } from '../models';
import { show } from '../libs';

const Reset = ({onClick}) => (
  <button
  className="resetButton"
  onClick={() => onClick()}>
    {"Reset Game"}
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  onClick:() => {
    dispatch(resetGame());
    show();
  }
})

export default connect(null, mapDispatchToProps)(Reset);
