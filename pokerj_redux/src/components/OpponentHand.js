import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const OpponentHand = ({ playersAndDeck }) => (
  <div className="opponent_hand">
    <ul className="table">
    {playersAndDeck.opponent.cards.map(
      (card, i) => (
        <li key = {i}>
        <Card card={card} type="opponent" />
        </li>
      )
    )}
  </ul>
  </div>
);

const mapStateToProps = ({ playersAndDeck }) => ({ playersAndDeck })

export default connect(mapStateToProps, null)(OpponentHand);
