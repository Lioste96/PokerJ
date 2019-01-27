import React from 'react';
import { connect } from 'react-redux'
import { changeCards } from '../models';
import { hide } from '../libs';

const ChangeButton = ({onClick, selected}) => (
  <button
  id="changeButton"
  className="changeButton"
  onClick={() => onClick(selected)}>
    {"Change Cards"}
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  onClick:(selected) => {
    dispatch(changeCards(selected));
    hide();
  }
})

const mapStateToProps = ({ selected }) => ({
  selected
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeButton);
