import React from 'react';
import { connect } from 'react-redux'
import {dealCards} from '../models';

const Deck = ({onClick, playersAndDeck}) => (
  <div className="deckPos">
      <ul className="deck">
        <li className="card back">*</li>
        <li className="card back">*</li>
        <li className="card back">*</li>
        <li className="card back">*</li>
        <li
        className="card back"
        onClick={()=>onClick(playersAndDeck)}>
        *
        </li>
      </ul>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  onClick:(playersAndDeck) => {
    if (playersAndDeck.round === 0){
      dispatch(dealCards());
    }
  }
})

const mapStateToProps = ({ playersAndDeck }) => ({
  playersAndDeck
})

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
