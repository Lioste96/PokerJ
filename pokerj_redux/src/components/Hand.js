import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Hand = ({ playersAndDeck }) => (
  <div className="handPos">
    <ul className="table">
    {playersAndDeck.player.cards.map(
      (card, i) => (
        <li className="cardPos" key = {i}>
          <Card
          card={card}
          type="player"
          />
        </li>
      )
    )}
  </ul>
  </div>
);

const mapStateToProps = ({ playersAndDeck }) => ({
  playersAndDeck
 })

export default connect(mapStateToProps, null)(Hand);
